import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const selectedGenre = useGenre(gameQuery.genreId);
  const selectedPlatform = usePlatform(gameQuery.platformId);

  return (
    <Heading marginY={5} as="h1" fontSize={["3xl", "3xl", "4xl", "5xl"]}>
      {selectedPlatform?.name} {selectedGenre?.name} Games
    </Heading>
  );
};

export default GameHeading;
