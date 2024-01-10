import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import styles from "./Home.module.scss";
import { PROJECT_NAME } from "../../constants";
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../enums/routesEnums';
const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{PROJECT_NAME}</h1>
        <p className={styles.description}>{t("translate.description")}</p>
        <Button
          className={styles.button}
          text={t("translate.createSession")}
          onClick={() => navigate(ROUTES.CREATE_SESSION)}
        />
      </div>
    </div>
  );
};

export default Home;
