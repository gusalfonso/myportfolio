import { useTranslation } from "react-i18next";
import ReactFlagsSelect from "react-flags-select";
import "./LanguageSelector.css";
import { Dock, DockIcon } from "../dock/Dock";
import { useState } from "react";
//import { LanguageDetectorModule } from "i18next";

const LanguageSelector = () => {
  const [lang, setLang] = useState<string>("EN");
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language.toUpperCase();
  console.log(currentLanguage);
  console.log(lang);

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code.toLowerCase());
    setLang(code);
  };

  // console.log(i18n);

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
