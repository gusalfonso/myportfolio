import { useTranslation } from "react-i18next";
import ReactFlagsSelect from "react-flags-select";
import "./LanguageSelector.css";
import { Dock, DockIcon } from "../dock/Dock";
import { useState } from "react";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  console.log(i18n);
  console.log(currentLanguage);
  const [lang, setLang] = useState<string>(
    currentLanguage.toUpperCase().split("-")[0]
  );
  console.log(lang);
  const handleSelect = (code: string) => {
    i18n.changeLanguage(code.toLowerCase());
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
