import { Box, Container, Flex, Icon, Text } from "@chakra-ui/react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { SlPresent } from "react-icons/sl";
import { TbFilterFilled } from "react-icons/tb";
import "../styles/index.css";

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
        {location.pathname === "/choisePresents" && (
          <Icon
            position={"absolute"}
            top={"13px"}
            right={"10px"}
            color="pink.700"
          >
            <TbFilterFilled />
          </Icon>
        )}
      </Box>

      <Container px="1" paddingTop="50px">
        <Outlet />
      </Container>
    </Box>
  );
}
