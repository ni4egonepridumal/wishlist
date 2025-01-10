import { CartItem } from "@/entities";
import { useGetWishListQuery } from "../model";
import { Flex, Text } from "@chakra-ui/react";
import {
  ProgressCircleRing,
  ProgressCircleRoot,
} from "@/components/ui/progress-circle";

export const Cart = () => {
  const { data = [], isError, isSuccess, isLoading } = useGetWishListQuery();

  return (
    <Flex justifyContent="center" gap="4" flexDirection="column">
      {isLoading && (
        <ProgressCircleRoot value={null} size="xl" margin="30% auto">
          <ProgressCircleRing cap="round" />
        </ProgressCircleRoot>
      )}
      {isError && (
        <Text
          textAlign="center"
          color="pink.700"
          textStyle="4xl"
          marginTop="30%"
        >
          Произошла ошибка, попробуйте обновить страницу, или зайдите позже
        </Text>
      )}
      {data.map((item) => (
        <CartItem key={item.id} data={item} />
      ))}
    </Flex>
  );
};
