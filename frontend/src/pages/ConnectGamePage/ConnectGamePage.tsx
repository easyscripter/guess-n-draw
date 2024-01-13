import { Button, Form } from "antd";
import styles from "./ConnectGamePage.module.scss";
import { useTranslation } from "react-i18next";
type ConnectGamePageFormValues = {
  name: string;
};

const ConnectGamePage = () => {
  const { t } = useTranslation();

  const onFinish = (values: ConnectGamePageFormValues) => {
    console.log("Success:", values);
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
