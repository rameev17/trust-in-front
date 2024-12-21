import { createContext } from "react";

const LocaleContext = createContext({
  locale: "kz",
  setLocale: () => {},
});

export default LocaleContext;
