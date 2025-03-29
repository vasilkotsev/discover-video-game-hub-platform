import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const { data: genres } = useGenres();
  const selectedgenre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const { data: platforms } = usePlatforms();
  const selectedPlatform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  return (
    <Heading marginY={5} as="h1" fontSize={["3xl", "3xl", "4xl", "5xl"]}>
      {selectedPlatform?.name} {selectedgenre?.name} Games
    </Heading>
  );
};

export default GameHeading;
