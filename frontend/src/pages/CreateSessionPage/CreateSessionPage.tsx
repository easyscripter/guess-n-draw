import { Button, Form, Select, Spin, message } from "antd";
import styles from "./CreateSessionPage.module.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../enums/routesEnums";
import { useMutation, useQuery } from "react-query";
import apiService from "../../services/apiService";
import { GameSessionRequest } from "../../types/gameSession";
import { AxiosError } from "axios";
import { GAME_SESSION_STATE } from "../../enums/gameSessionStateEnums";
import { WordsList } from "../../types/wordsList";
type CreateSessionFormValues = {
  name: string;
  timePerWord: number;
  cardsList: WordsList;
  linkForFriend: string;
};

const CreateSessionPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isShowFriendLink, setIsShowFriendLink] = useState<boolean>(false);
  const [roomId, setRoomId] = useState<string>("");
  const [form] = useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const createSessionMutation = useMutation((values: GameSessionRequest) =>
    apiService.createGameSession(values)
  );
  const { isLoading, data } = useQuery(["wordsLists"], () =>
    apiService.getWordsLists()
  );

  useEffect(() => {
    form.setFieldsValue({ timePerWord: 60, cardsList: data?.wordsLists[0] });
  }, [data?.wordsLists]);

  const generateFriendLink = () => {
    const _roomId = uuidv4();
    setRoomId(_roomId);
    const link = `${window.location.origin}/invite/${_roomId}`;
    form.setFieldsValue({ linkForFriend: link });
    navigator.clipboard.writeText(link);
    setIsShowFriendLink(true);
    messageApi.open({
      type: "success",
      content: t("translate.sessionForm.linkCopiedMessageText"),
    });
  };

  const onFinish = (values: CreateSessionFormValues) => {
    try {
      const { name, timePerWord, cardsList } = values;
      const data: GameSessionRequest = {
        wordsListId: cardsList.id,
        players: [name],
        timePerWord,
        roomId,
        state: GAME_SESSION_STATE.CREATED,
      };
      createSessionMutation.mutate(data);
      navigate(ROUTES.GAME);
    } catch (e) {
      const error = e as Error | AxiosError;
      console.log("error:", error);
    }
  };

  return (
    <div className={styles.container}>
      {contextHolder}
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
            {isLoading ? (
              <Spin />
            ) : data?.wordsLists?.length ? (
              <Select
                className={styles.cardsListNameSelect}
                options={data.wordsLists.map((list: WordsList) => ({
                  label: list.name,
                  value: list,
                }))}
              />
            ) : (
              <p>{t("translate.sessionForm.noWordsListsMessage")}:</p>
            )}
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
          {form.getFieldValue("wordsList") && (
            <Form.Item className={styles.formItem}>
              <Button onClick={generateFriendLink}>
                {t("translate.sessionForm.generateLink")}
              </Button>
            </Form.Item>
          )}
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
