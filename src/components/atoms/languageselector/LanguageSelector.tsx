import { useTranslation } from "react-i18next";
import ReactFlagsSelect from "react-flags-select";
import "./LanguageSelector.css";
import { Dock, DockIcon } from "../dock/Dock";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language.toUpperCase();

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code.toLowerCase());
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
            selected={currentLanguage}
          />
        </DockIcon>
      </Dock>
    </div>
  );
};

export default LanguageSelector;
