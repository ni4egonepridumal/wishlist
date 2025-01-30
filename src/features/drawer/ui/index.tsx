import { Button, Icon } from "@chakra-ui/react";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/components/ui/drawer";
import { TbFilterFilled } from "react-icons/tb";

export const Drawer = () => {
  return (
    <DrawerRoot>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Icon
          position="absolute"
          top="13px"
          right="10px"
          color="pink.700"
        >
          <TbFilterFilled />
        </Icon>
      </DrawerTrigger>
      <DrawerContent backgroundColor="pink.700">
        <DrawerHeader>
          <DrawerTitle>Выбор фильтров</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <p>
            В разработке
          </p>
        </DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger asChild>
            <Button variant="outline">Сбросить</Button>
          </DrawerActionTrigger>
          <Button>Сохранить</Button>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};
