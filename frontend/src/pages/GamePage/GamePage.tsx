import { useTranslation } from "react-i18next";
import styles from "./GamePage.module.scss";
import { usePainter } from '../../hooks/usePainter';
const GamePage = () => {
    const { t } = useTranslation();
    const { canvasRef, startDrawing, endDrawing, draw } = usePainter();
  return (
    <div className={styles.container}>
      <div className={styles.gameContainer}>
        <h1>{`${t("translate.gamePage.title")} ${1}`}</h1>
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
        />
      </div>
    </div>
  );
};

export default GamePage;
