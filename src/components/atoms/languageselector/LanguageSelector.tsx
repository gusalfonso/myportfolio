import { useTranslation } from "react-i18next";
import ReactFlagsSelect from "react-flags-select";
import "./LanguageSelector.css";
import { Dock, DockIcon } from "../dock/Dock";
import { useState, useEffect } from "react";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  // Mapeo de idiomas a códigos de países.
  const languageMap: { [key: string]: string } = {
    en: "US",
    es: "ES",
    pt: "BR",
  };

  const [lang, setLang] = useState<string>("US");

  useEffect(() => {
    // Ajustar el estado inicial basado en el idioma actual de i18n
    const currentLanguageCode = i18n.language.split("-")[0]; // Obtén solo la parte "en" de "en-US", por ejemplo.
    setLang(languageMap[currentLanguageCode] || "US");
  }, [i18n.language]);

  const handleSelect = (code: string) => {
    i18n.changeLanguage(languageMap[code].toLowerCase());
    setLang(code);
  };

  return (
    <div className="language-selector">
      <Dock>
        <DockIcon>
          <ReactFlagsSelect
            countries={["US", "ES", "BR"]}
            customLabels={{}}
            onSelect={handleSelect}
            placeholder=""
            showSelectedLabel={false}
            showOptionLabel={false}
            selected={lang}
          />
        </DockIcon>
      </Dock>
    </div>
  );
};

export default LanguageSelector;
