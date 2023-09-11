import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import { enTranslation } from "./data/en";
import { svTranslation } from "./data/sv";
import { plTranslation } from "./data/pl";
import { LanguageProvider } from "./services/LanguageContext";

const resources = {
  en: {
    translation: enTranslation,
  },
  sv: {
    translation: svTranslation,
  },
  pl: {
    translation: plTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18n}>
    <ChakraProvider>
      <LanguageProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </LanguageProvider>
    </ChakraProvider>
  </I18nextProvider>
);

reportWebVitals();
