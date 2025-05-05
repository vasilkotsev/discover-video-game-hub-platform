import { ReactNode } from "react";
import { Box, Heading } from "@chakra-ui/react";

interface DefinitionItemProps {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: DefinitionItemProps) => {
  return (
    <Box marginY={5}>
      <Heading
        as={"dt"}
        fontSize={"md"}
        fontWeight={"medium"}
        color={"gray.300"}
      >
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
