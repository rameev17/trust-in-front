import React, { useState, useEffect } from "react";
import LocaleContext from "./LocaleContext";
import i18n from "./i18n";

const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState("kz");

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
