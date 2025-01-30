import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyGetOnePresentQuery } from "../model";
import { Badge, Box, Heading } from "@chakra-ui/react";
import { SimpleSlider } from "@/features/carousel/ui";
import { Links } from "@/entities/links/ui";
import { Comment } from "@/entities/comments/ui";
import { FormForComment } from "@/features/formComment/ui";
import styles from "./styles.module.css";
import { CollapsibleBasic } from "@/features/collapse/ui";

export const OnePresent = () => {
  const params = useParams();
  const { id } = params;
  const [getOneProduct, { data }] = useLazyGetOnePresentQuery();
  useEffect(() => {
    const fetchData = () => {
      if (id) {
        getOneProduct(id);
      }
    };
    fetchData();
  }, [getOneProduct, id, data]);

  return (
    <Box>
      <Heading>{data?.name}</Heading>
      <Box className={styles.warning}>
        {data?.warning && (
          <Badge colorPalette="pink">
            ВАЖНО !!! СОГЛАСУЙ СО МНОЙ ЭТОТ ПОДАРОК!!!
          </Badge>
        )}
      </Box>
      <Box className={styles.headerText}>{data?.description}</Box>
      <CollapsibleBasic />
      <SimpleSlider images={data?.references_img || []} />
      <Links linksList={data?.links} />
      <Comment comments={data?.comments} />
      <FormForComment />
    </Box>
  );
};
