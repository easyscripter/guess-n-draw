import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translateRU from "./translate/ru/translate.json";

i18next.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        translate: translateRU,
      },
    },
  },
  fallbackLng: "ru",
});
