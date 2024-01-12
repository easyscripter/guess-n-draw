import { useTranslation } from "react-i18next";
import Button from "../Button";
import styles from "./Header.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../enums/routesEnums";
import { PROJECT_NAME } from '../../constants';
const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <Link className={styles.logo} to={ROUTES.HOME}>
          <h1>{PROJECT_NAME}</h1>
        </Link>
      </div>
      <div className={styles.buttonsContainer}>
        {(pathname !== ROUTES.CREATE_SESSION && pathname !== ROUTES.GAME) && (
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
