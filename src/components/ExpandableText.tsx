import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface ExpandableTextProps {
  children: string;
  maxChars: number;
}

const ExpandableText = ({ children, maxChars }: ExpandableTextProps) => {
  const [isExpanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= maxChars) return <Text>{children}</Text>;

  const textSummary = isExpanded
    ? children
    : children.substring(0, maxChars) + "...";

  return (
    <Text>
      {textSummary}

      <Button
        marginLeft={1}
        onClick={() => setExpanded(!isExpanded)}
        size="xs"
        fontWeight={"bold"}
        colorScheme="yellow"
      >
        {isExpanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
