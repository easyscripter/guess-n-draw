import { Button, Form, Select } from "antd";
import styles from "./CreateSessionPage.module.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
type CreateSessionFormValues = {
  name: string;
  timePerWord: number;
  cardsListName: string;
  linkForFriend: string;
};

const { Option } = Select;

const CreateSessionPage = () => {
  const { t } = useTranslation();
  const [isShowFriendLink, setIsShowFriendLink] = useState<boolean>(false);
  const [form] = useForm();
  useEffect(() => {
    form.setFieldsValue({ timePerWord: 60, cardsListName: "Zhejang" });
  }, []);

  const generateFriendLink = () => {
    setIsShowFriendLink(true);
  };

  const onFinish = (values: CreateSessionFormValues) => {
    console.log("Success:", values);
  };
  return (
    <div className={styles.container}>
      <h1>{t("translate.createSession")}</h1>
      <div className={styles.formContainer}>
        <Form
          form={form}
          className={styles.form}
          onFinish={onFinish}
          layout="vertical"
          validateTrigger="onSubmit"
        >
          <Form.Item<CreateSessionFormValues>
            className={styles.formItem}
            name="name"
            label={t("translate.sessionForm.nameLabel")}
            rules={[{ required: true, message: t("translate.requiredField") }]}
          >
            <input />
          </Form.Item>
          <Form.Item<CreateSessionFormValues>
            className={styles.formItem}
            name="timePerWord"
            label={t("translate.sessionForm.timePerWordLabel")}
            rules={[{ required: true, message: t("translate.requiredField") }]}
          >
            <input type="number" />
          </Form.Item>
          <Form.Item<CreateSessionFormValues>
            className={styles.formItem}
            name="cardsListName"
            label={t("translate.sessionForm.cardsListNameLabel")}
          >
            <Select className={styles.cardsListNameSelect}>
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
          </Form.Item>
          {isShowFriendLink && (
            <Form.Item<CreateSessionFormValues>
              className={styles.formItem}
              name="linkForFriend"
              label={t("translate.sessionForm.linkForFriend")}
            >
              <input disabled />
            </Form.Item>
          )}
          <Form.Item className={styles.formItem}>
            <Button onClick={generateFriendLink}>
              {t("translate.sessionForm.generateLink")}
            </Button>
          </Form.Item>
          {isShowFriendLink && (
            <Form.Item className={styles.formItem}>
              <Button htmlType="submit">
                {t("translate.sessionForm.createSession")}
              </Button>
            </Form.Item>
          )}
        </Form>
      </div>
    </div>
  );
};

export default CreateSessionPage;
