import { useState, useEffect, JSX } from "react";
import { useLocation } from "react-router-dom";
import IntroNotListed from "../components/industries/introductions/IntroNotListed";
import IntroRealState from "../components/industries/introductions/IntroRealState";
import IntroTravel from "../components/industries/introductions/IntroTravel";
import IntroHotels from "../components/industries/introductions/IntroHotels";
import IntroHealthcare from "../components/industries/introductions/IntroHealthcare";
import IntroInsurance from "../components/industries/introductions/IntroInsurance";
import IntroEducation from "../components/industries/introductions/IntroEducation";
import IntroTelecom from "../components/industries/introductions/IntroTelecom";
import IntroBanking from "../components/industries/introductions/IntroBanking";
import IntroAutomotive from "../components/industries/introductions/IntroAutomotive";
import RequestCallbackForm from "../components/industries/RequestCallbackForm";

// Map industry IDs to their respective introduction components
const industryComponents: Record<string, JSX.Element> = {
    "real-estate": <IntroRealState />,
    "travel": <IntroTravel />,
    "hotels": <IntroHotels />,
    "healthcare": <IntroHealthcare />,
    "insurance": <IntroInsurance />,
    "education": <IntroEducation />,
    "telecom": <IntroTelecom />,
    "banking": <IntroBanking />,
    "automotive": <IntroAutomotive />,
};

const backgroundImages: Record<string, string> = {
    "real-estate": "industries-real-estate.jpg",
    "travel": "industries-travel.jpg",
    "hotels": "industries-hotels.jpg",
    "healthcare": "industries-healthcare.jpg",
    "insurance": "industries-insurance.jpg",
    "education": "industries-education.jpg",
    "telecom": "industries-telecom.jpg",
    "banking": "industries-banking.jpg",
    "automotive": "industries-automotive.jpg",
};

// Default industry if no hash is found
const DEFAULT_INDUSTRY = "not-listed";

const Industries: React.FC = () => {
    const location = useLocation();
    const [selectedIndustry, setSelectedIndustry] = useState(DEFAULT_INDUSTRY);

    useEffect(() => {
        // Extract hash and remove '#' symbol
        const industryId = location.hash.replace("#", "") || DEFAULT_INDUSTRY;
        setSelectedIndustry(industryId);
    }, [location]);

    return (
        <>
            <div
                className="relative w-screen min-h-screen px-8 py-24 bg-center bg-cover"
                style={{
                    backgroundImage: `url(./images/industries/${backgroundImages[selectedIndustry] || "industries-not-listed.jpg"})`
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative grid grid-cols-1 gap-8 mt-16 md:grid-cols-2">
                    {/* Left Column - Dynamic Industry Content */}
                    <div>
                        {industryComponents[selectedIndustry] || <IntroNotListed />}
                    </div>

                    {/* Right Column - Request Callback Form */}
                    <div>
                        <RequestCallbackForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Industries;
