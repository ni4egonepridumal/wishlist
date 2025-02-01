import { useForm } from "react-hook-form";
import { Field } from "@/shared/components/ui/field";
import {
  Box,
  Textarea,
  Stack,
  Input,
  Button,
  Text,
  Separator,
} from "@chakra-ui/react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useSentNewCommentMutation } from "../model";
import { IComments } from "@/shared/types/appTypes";
import { useEffect } from "react";

interface IProps {
  comments: IComments[];
  id: string;
  setAddComment: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormForComment = ({ comments, id, setAddComment }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IComments>();

  const [addNewComment, { isSuccess }] = useSentNewCommentMutation();
  const onSubmit = handleSubmit((formData) => {
    addNewComment({ comments, formData, id });
    reset();
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      setAddComment(true);
    }
  }, [isSuccess, setAddComment]);
  return (
    <Box className={styles.formInner}>
      <Text className={styles.text}>Тут можешь оставить свой:</Text>
      <Separator
        margin="5px 0px 10px 0px"
        colorPalette="pink.700"
        border="1px solid #a41752"
      />
      <form onSubmit={onSubmit}>
        <Stack gap="4" align="flex-start" maxW="sm">
          <Field
            label="Имя"
            invalid={!!errors.name}
            errorText={errors.name?.message}
          >
            <Input
              placeholder="Василий"
              border="2px solid #a41752"
              {...register("name", { required: "Имя обязательно" })}
            />
          </Field>
          <Field
            label="Комментарий"
            invalid={!!errors.comment}
            helperText="Можете оставить тут свои контакты или что хотите..."
            errorText={errors.comment?.message}
          >
            <Textarea
              placeholder="А ты скажи, вот тут ..."
              border="2px solid #a41752"
              {...register("comment", { required: "Напишите хоть что то" })}
            />
          </Field>
          <Box className={styles.buttonBlock}>
            <Button type="submit">Отправить</Button>
            <Button onClick={() => navigate("/choicePresents")}>Назад</Button>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};
