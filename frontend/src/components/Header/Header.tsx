import { useTranslation } from "react-i18next";
import Button from "../Button";
import styles from "./Header.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../enums/routesEnums";
const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className={styles.header}>
      <div className={styles.buttonsContainer}>
        {pathname !== ROUTES.CREATE_SESSION && (
          <Button
            className={styles.sessionButton}
            text={t("translate.createSession")}
            onClick={() => navigate(ROUTES.CREATE_SESSION)}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
