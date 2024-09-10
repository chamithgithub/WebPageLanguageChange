import React from "react";
const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "French" },
  { code: "hi", lang: "Hindi" },
];

handleLanguageChange = () => {

  
};
const languageSelector = () => {
  return (
    <div className="btn-container">
      {languages.map(({ lng }) => {
        return (
          <button
            className="btn"
            key={lng.code}
            onClick={() => handleLanguageChange(code)}
          >
            {lang}
          </button>
        );
      })}
    </div>
  );
};

export default languageSelector;
