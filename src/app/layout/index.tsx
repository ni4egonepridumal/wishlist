import { Box, Container, Flex, Icon, Text } from "@chakra-ui/react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { SlPresent } from "react-icons/sl";
import "../styles/index.css";
import { Drawer } from "@/features/drawer/ui";

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box>
      <Box
        textAlign={"center"}
        paddingTop={"10px"}
        paddingBottom={"10px"}
        borderBottom={"1px solid white"}
        position={"fixed"}
        zIndex="2"
        backgroundColor="gray"
        width="100%"
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
        {location.pathname === "/choicePresents" && <Drawer />}
      </Box>

      <Container px="1" paddingTop="50px">
        <Outlet />
      </Container>
    </Box>
  );
}
