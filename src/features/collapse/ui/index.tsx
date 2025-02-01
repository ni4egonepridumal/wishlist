import { Box, Collapsible, Link } from "@chakra-ui/react";

export const CollapsibleBasic = () => (
  <Collapsible.Root>
    <Collapsible.Trigger paddingY="3">Хочешь обсудить (жми)</Collapsible.Trigger>
    <Collapsible.Content>
      <Box
        padding="4"
        border="2px solid #a41752"
        borderRadius="12px"
        marginBottom="10px"
      >
        tg: <Link href="https://t.me/ni4egonepridumal" target="_blank">Ссылка;</Link> почта: apc-mv@yandex.ru
      </Box>
    </Collapsible.Content>
  </Collapsible.Root>
);
