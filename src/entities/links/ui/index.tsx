import { Box, Text, Link, Separator } from "@chakra-ui/react";
import styles from "./styles.module.css";

export const Links = ({ linksList }: { linksList: string[] }) => {
  return (
    <Box>
      <Text className={styles.text}>Примеры ссылок:</Text>
      <Separator
        margin="5px 0px 10px 0px"
        colorPalette="pink.700"
        border="1px solid #a41752"
      />
      {linksList?.map((item, key) => (
        <Box key={key}>
          <Link href={item} target="_blank">
            Пример {key + 1}
          </Link>
        </Box>
      ))}
    </Box>
  );
};
