// src/global.d.ts

interface GoogleTranslateElement {
    new(options: { pageLanguage: string; includedLanguages: string; layout: number }, elementId: string): void;
    InlineLayout: {
        SIMPLE: number;
        HORIZONTAL: number;
        VERTICAL: number;
    };
}

interface GoogleTranslate {
    TranslateElement: GoogleTranslateElement;
    // Explicitly typing the translate object methods and properties
    translate: {
        // Typing the method that is expected to be present in google.translate
        translateElement: (elementId: string, languageCode: string) => void;
    };
}

interface Window {
    google: GoogleTranslate;
    googleTranslateElementInit: () => void;
}
