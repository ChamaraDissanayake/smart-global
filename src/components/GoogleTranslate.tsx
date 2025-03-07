import { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    if (window.google && window.google.TranslateElement) {
      new window.google.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,ar,hi",
          layout: window.google.TranslateElement.InlineLayout.SIMPLE
        },
        "google_translate_element"
      );
    }
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
