import React from 'react';

const SubmitButton: React.FC = () => (
    <button
        type="submit"
        className="w-full py-3 text-lg font-semibold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
    >
        Submit
    </button>
);

export default SubmitButton;
