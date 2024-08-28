import { useTranslation } from "react-i18next";
import ReactFlagsSelect from "react-flags-select";
import "./LanguageSelector.css";
import { Dock, DockIcon } from "../dock/Dock";
//import { LanguageDetectorModule } from "i18next";

const LanguageSelector = () => {
  //const [lang, setLang] = useState<string>('en')
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language.toUpperCase();
  console.log(currentLanguage)

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code.toLowerCase());
    // setLang(code.toLowerCase())
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
            selected={currentLanguage ? currentLanguage : 'en'}
          />
        </DockIcon>
      </Dock>
    </div>
  );
};

export default LanguageSelector;
