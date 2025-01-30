import { Blockquote } from "@/shared/components/ui/blockquote";
import { Box, Separator, Text } from "@chakra-ui/react";
import styles from "./styles.module.css";

interface IComments {
  name: string;
  comment: string;
}

export const Comment = ({
  comments,
}: {
  comments: IComments[] | undefined;
}) => {
  return (
    <Box>
      <Text className={styles.text}>Комментарии:</Text>
      <Separator
        margin="5px 0px 10px 0px"
        colorPalette="pink.700"
        border="1px solid #a41752"
      />
      {comments && comments?.length > 0 ? (
        <>
          {comments?.map((item, key) => (
            <Box key={key}>
              <Text>{item.name} пишет:</Text>
              <Blockquote colorPalette="pink">{item.comment}</Blockquote>
            </Box>
          ))}
        </>
      ) : (
        <Text>Пока комментариев нет...</Text>
      )}
    </Box>
  );
};
