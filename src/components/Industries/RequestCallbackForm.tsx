import React, { useState } from 'react';
import TextInput from '../Forms/TextInput';
import DropdownInput from '../Forms/DropdownInput';
import TextAreaComponent from '../Forms/TextAreaComponent';
import SubmitButton from '../Forms/SubmitButton';


const RequestCallbackForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        budget: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add form validation and submit logic
        if (!formData.name || !formData.email || !formData.phone) {
            alert("Please fill out all required fields!");
            return;
        }
        console.log('Form Data:', formData);
        // Add your form submission logic here
    };

    const budgetOptions = [
        "Less than $5000",
        "$5,000-$10,000",
        "$10,000-$20,000",
        "$20,000-$35,000",
        "$35,000-$50,000",
        "$50,000-$1,00,000",
        "Above $1,00,000+"
    ];

    return (
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="mb-6 text-2xl font-semibold text-white">Request a Callback</h3>
            <div className="mb-4 text-lg text-white">
                We respond promptly, typically within <span className="font-semibold">30 minutes</span>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor="phone" className="text-lg text-white">
                        Name
                    </label>
                    <div className='mt-2'>
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

                <div className='mb-4'>
                    <label htmlFor="phone" className="mb-2 text-lg text-white">
                        Email
                    </label>
                    <div className='mt-2'>
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

                <div className='mb-4'>
                    <label htmlFor="phone" className="text-lg text-white">
                        Phone Number
                    </label>
                    <div className="flex items-center mt-2 bg-gray-700 rounded-lg">
                        <div className="px-4 py-2 text-white border-r border-gray-600">
                            +971
                        </div>
                        <TextInput
                            id="phone"
                            placeholder="Phone Number *"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            type="tel" />
                    </div>
                </div>

                <div className='mb-4'>
                    <DropdownInput
                        id="budget"
                        label="Budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        options={budgetOptions}
                    />
                </div>

                <div className='mb-4'>
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
