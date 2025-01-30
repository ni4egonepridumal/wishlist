import { Flex, Text, Button, Icon, Stack } from "@chakra-ui/react";
import { FiArrowRightCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Flex direction="column" minHeight="93vh">
      <Stack marginTop={"10%"} textAlign={"center"} fontSize={20}>
        <Text>Я считаю, что подарок должен быть полезен.</Text>
        <Text>И ставлю полезность подарка выше его "сюрпризности"</Text>
        <Text>
          Если ты находишься на этой странице, то скорее всего, мы с тобой
          знакомы и ты хочешь меня как то порадовать, а может быть за что то
          отблагодарить, или может просто сделать мне приятно.
        </Text>
        <Text>
          Если же ты тут случайно, то можешь конечно ознакомиться с содержимым
          или же также сделать мне приятно
        </Text>
      </Stack>
      <Button
        mt="auto"
        mx={4}
        mb={4}
        colorScheme="teal"
        onClick={() => navigate("/choicePresents")}
      >
        <Flex
          direction={"row"}
          align={"center"}
          justifyContent={"center"}
          gap={"10px"}
        >
          <Text>Ну что, поехали</Text>
          <Icon color="pink.700">
            <FiArrowRightCircle />
          </Icon>
        </Flex>
      </Button>
    </Flex>
  );
};
