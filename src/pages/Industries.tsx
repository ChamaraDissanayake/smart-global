import RequestCallbackForm from "../components/Industries/RequestCallbackForm";

const Industries: React.FC = () => {
    return (
        <div
            className="container relative px-4 py-24 mx-auto bg-center bg-cover"
            style={{ backgroundImage: 'url(./images/industries.jpg)' }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative grid grid-cols-1 gap-8 mt-16 md:grid-cols-2">
                {/* Left Column - Description */}
                <div className="flex flex-col pt-8">
                    <h2 className="mb-6 text-4xl font-bold text-white">
                        Can't find your industry listed? No problem!
                    </h2>
                    <p className="mb-4 text-xl text-gray-200">
                        Whether you're starting a new project or need help with an existing one, our team is here to support you. We specialize in providing tailored solutions for unique and niche industries.
                    </p>
                    <p className="mb-4 text-xl text-gray-300">
                        Fill out the form below, and our experts will get back to you within <span className="font-semibold">30 minutes</span> to discuss how we can meet your specific needs.
                    </p>
                    <p className="text-xl text-gray-350">
                        Your challenges are unique, and so are our solutions. Let’s work together to achieve your goals!
                    </p>
                </div>

                {/* Right Column - RequestCallbackForm */}
                <div>
                    <RequestCallbackForm />
                </div>
            </div>
        </div>
    );
};

export default Industries;
