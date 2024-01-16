import { Button, Form } from "antd";
import styles from "./ConnectGamePage.module.scss";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { AddUserInGameSessionRequest } from "../../types/gameSession";
import apiService from "../../services/apiService";
import { useMutation } from "react-query";
import { AxiosError } from 'axios';
type ConnectGamePageFormValues = {
  name: string;
};

const ConnectGamePage = () => {
  const { t } = useTranslation();
  const params = useParams();
  const addUserInGameSessionMutation = useMutation(
    (data: AddUserInGameSessionRequest) => apiService.addUserInGameSession(data)
  );

  const onFinish = async (values: ConnectGamePageFormValues) => {
    try {
      const { name } = values;
      const data: AddUserInGameSessionRequest = {
        roomId: params.id as string,
        name,
      };
      await addUserInGameSessionMutation.mutateAsync(data);
    } catch (e) {
      const error = e as Error | AxiosError;
      console.log("error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>{t("translate.connectGameForm.title")}</h1>
      <div className={styles.formContainer}>
        <Form
          className={styles.form}
          onFinish={onFinish}
          layout="vertical"
          validateTrigger="onSubmit"
        >
          <Form.Item<ConnectGamePageFormValues>
            className={styles.formItem}
            name="name"
            label={t("translate.connectGameForm.nameLabel")}
            rules={[{ required: true, message: t("translate.requiredField") }]}
          >
            <input />
          </Form.Item>
          <Form.Item className={styles.formItem}>
            <Button htmlType="submit">
              {t("translate.connectGameForm.joinGameButton")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ConnectGamePage;
