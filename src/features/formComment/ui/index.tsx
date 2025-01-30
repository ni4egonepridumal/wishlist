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

interface FormValues {
  username: string;
  bio: string;
}

export const FormForComment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));
  const navigate = useNavigate();
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
            invalid={!!errors.username}
            errorText={errors.username?.message}
          >
            <Input
              placeholder="Василий"
              border="2px solid #a41752"
              {...register("username", { required: "Имя обязательно" })}
            />
          </Field>
          <Field
            label="Комментарий"
            invalid={!!errors.bio}
            helperText="Можете оставить тут свои контакты или что хотите..."
            errorText={errors.bio?.message}
          >
            <Textarea
              placeholder="А ты скажи, вот тут ..."
              border="2px solid #a41752"
              {...register("bio", { required: "Напишите хоть что то" })}
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
