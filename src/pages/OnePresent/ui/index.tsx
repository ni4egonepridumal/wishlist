import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyGetOnePresentQuery } from "../model";
import { Box, Heading, Text, Link, Textarea, Stack, Input, Button } from "@chakra-ui/react";
import { SimpleSlider } from "@/features/carousel/ui";
import { Blockquote } from "@/shared/components/ui/blockquote";
import { useForm } from "react-hook-form"
import { Field } from "@/shared/components/ui/field";

export const OnePresent = () => {
  const params = useParams();
  const { id } = params;
  const [getOneProduct, { data }] = useLazyGetOnePresentQuery();
  console.log("data", data);
  useEffect(() => {
    const fetchData = () => {
      if (id) {
        getOneProduct(id);
      }
    };
    fetchData();
  }, [getOneProduct, id, data]);

  interface FormValues {
    username: string
    bio: string
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => console.log(data))
  return (
    <Box>
      <Heading>{data?.name}</Heading>

      <Box
        border="2px solid #a41752"
        width="100%"
        padding="4"
        color="white"
        borderRadius="10px"
      >
        {data?.description}
      </Box>
      <SimpleSlider images={data?.references_img || []} />
      <Text>Примеры ссылок:</Text>
      {data?.links.map((item, key) => (
        <Box>
          <Link href={item} target="_blank">
            Пример {key + 1}
          </Link>
        </Box>
      ))}
      <Text>Тут можно оставить свой комментарий:</Text>
      {data?.comments.map((item, key) => (
        <Box key={key}>
          <Text>{item.name} пишет:</Text>
          <Blockquote>{item.comment}</Blockquote>
        </Box>
      ))}
      <form onSubmit={onSubmit}>
      <Stack gap="4" align="flex-start" maxW="sm">
        <Field
          label="Username"
          invalid={!!errors.username}
          errorText={errors.username?.message}
        >
          <Input
            placeholder="@username"
            {...register("username", { required: "Username is required" })}
          />
        </Field>
        <Field
          label="Profile bio"
          invalid={!!errors.bio}
          helperText="A short description of yourself"
          errorText={errors.bio?.message}
        >
          <Textarea
            placeholder="I am ..."
            {...register("bio", { required: "Bio is required" })}
          />
        </Field>
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
    </Box>
  );
};
