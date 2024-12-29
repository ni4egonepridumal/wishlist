import { Box, Container, Flex, Icon, Text } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import { SlPresent } from "react-icons/sl";

export function Layout() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        textAlign={"center"}
        paddingTop={"10px"}
        paddingBottom={"10px"}
        borderBottom={"1px solid white"}
      >
        <Flex
          direction={"row"}
          align={"center"}
          justifyContent={"center"}
          gap={"10px"}
        >
          <Text onClick={() => navigate("/")}>Лист желаний</Text>
          <Icon color="pink.700">
            <SlPresent />
          </Icon>
        </Flex>
      </Box>
      <Container px="1">
        <Outlet />
      </Container>
    </Box>
  );
}
