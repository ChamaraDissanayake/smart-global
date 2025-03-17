import React, { useState, useEffect } from 'react';
import TextInput from '../reusableForms/TextInput';
import DropdownInput from '../reusableForms/DropdownInput';
import TextAreaComponent from '../reusableForms/TextAreaComponent';
import SubmitButton from '../reusableForms/SubmitButton';

// Define the structure of the country data from the API
interface CountryApiResponse {
    cca2: string;
    idd: {
        root: string;
        suffixes: string[];
    };
    flags: {
        png: string;
    };
}

// Define the structure of the country data we use in the app
interface Country {
    code: string; // Country code (e.g., "GS")
    callingCode: string; // Full calling code (e.g., "+500")
    flag: string; // URL to the flag image
}

// Define the shape of the form data
interface FormData {
    name: string;
    email: string;
    phone: string;
    budget: string;
    message: string;
    countryCode: string; // Selected country calling code
}

const RequestCallbackForm: React.FC = () => {
    // State for form data
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        budget: '',
        message: '',
        countryCode: '+971', // Default country code
    });

    // State for country data
    const [countries, setCountries] = useState<Country[]>([]);

    // Fetch country data from the REST Countries API
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data: CountryApiResponse[] = await response.json();

                // Transform and sort data
                const countryData: Country[] = data
                    .filter((country) => country.idd?.root && country.idd.suffixes?.length > 0)
                    .map((country) => ({
                        code: country.cca2,
                        callingCode: `${country.idd.root}${country.idd.suffixes[0]}`,
                        flag: country.flags.png,
                    }))
                    .sort((a, b) => parseInt(a.callingCode.replace('+', '')) - parseInt(b.callingCode.replace('+', '')));

                setCountries(countryData);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    // Handle changes in form inputs
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle changes in the country code dropdown
    const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({ ...formData, countryCode: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone) {
            alert('Please fill out all required fields!');
            return;
        }
        console.log('Form Data:', formData);
        // Add your form submission logic here
    };

    // Budget options for the dropdown
    const budgetOptions: string[] = [
        'Less than $5000',
        '$5,000-$10,000',
        '$10,000-$20,000',
        '$20,000-$35,000',
        '$35,000-$50,000',
        '$50,000-$1,00,000',
        'Above $1,00,000+',
    ];

    return (
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg bg-opacity-80">
            <h3 className="mb-6 text-2xl font-semibold text-white">Request a Callback</h3>
            <div className="mb-4 text-lg text-white">
                We respond promptly, typically within{' '}
                <span className="font-semibold">30 minutes</span>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="text-lg text-white">
                        Name
                    </label>
                    <div className="mt-2">
                        <TextInput
                            id="name"
                            placeholder="Enter your full name *"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 text-lg text-white">
                        Email
                    </label>
                    <div className="mt-2">
                        <TextInput
                            id="email"
                            placeholder="Enter your email *"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            type="email"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="phone" className="text-lg text-white">Phone Number</label>
                    <div className="flex items-center p-2 mt-2 bg-gray-700 rounded-lg">
                        {/* Country Code Section */}
                        <div className="flex items-center px-2 py-1 space-x-2 bg-gray-800 rounded-lg">
                            {formData.countryCode && (
                                <img
                                    src={countries.find(c => c.callingCode === formData.countryCode)?.flag}
                                    alt="Selected country flag"
                                    className="w-6 h-4"
                                />
                            )}
                            <select
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleCountryCodeChange}
                                className="text-white bg-gray-800 border-none focus:outline-none cursor-pointer w-auto min-w-[70px]"
                            >
                                {countries.map((country) => (
                                    <option key={country.code} value={country.callingCode}>
                                        {country.callingCode}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Phone Input */}
                        <TextInput
                            id="phone"
                            placeholder="Phone Number *"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            type="tel"
                        />
                    </div>
                </div>


                <div className="mb-4">
                    <DropdownInput
                        id="budget"
                        label="Budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        options={budgetOptions}
                    />
                </div>

                <div className="mb-4">
                    <TextAreaComponent
                        id="message"
                        label="Message"
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <SubmitButton />
            </form>
        </div>
    );
};

export default RequestCallbackForm;