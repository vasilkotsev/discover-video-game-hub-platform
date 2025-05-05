import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error.message;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText maxChars={300}>{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
