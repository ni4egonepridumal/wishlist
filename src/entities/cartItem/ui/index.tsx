import { Button, Card } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface ICartItem {
  data: IWishList;
}

interface IWishList {
  id: number;
  name: string;
  description: string;
  isReserved: boolean;
  price: string;
  comments: string[];
  references_img: string[];
  links: string[];
  warning?: boolean;
}

export const CartItem = ({ data }: ICartItem) => {
  const navigate = useNavigate();
  return (
    <Card.Root
      width="320px"
      margin="0 auto"
      backgroundColor="pink.700"
      className="cartRoot"
    >
      <Card.Body gap="2">
        <Card.Title mt="2">{data.name}</Card.Title>
        <Card.Description>{data.description}</Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button
          cursor="pointer"
          onClick={() => navigate(`/present/${data.id}`)}
          disabled={data.isReserved}
        >
          {data.isReserved ? "Резерв" : "Подробнее"}
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
