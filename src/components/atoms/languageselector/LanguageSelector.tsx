import { useTranslation } from "react-i18next";
import ReactFlagsSelect from "react-flags-select";
import "./LanguageSelector.css";
import { Dock, DockIcon } from "../dock/Dock";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  let currentLanguage = i18n.language.toUpperCase().split("-")[0];

  if (!["US", "ES", "PT"].includes(currentLanguage)) {
    currentLanguage = "US";
  } else if (currentLanguage === "PT") {
    currentLanguage = "BR";
  }

  const handleSelect = (code: string) => {
    const languageCode = code === "BR" ? "PT" : code;
    i18n.changeLanguage(languageCode.toLowerCase());
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
