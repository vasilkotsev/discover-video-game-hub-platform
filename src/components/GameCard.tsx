import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../services/games-service";
import getCroppedImageUrl from "../utils/getCroppedImageUrl";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={
              game.parent_platforms?.map((platform) => platform.platform) ?? []
            }
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" fontWeight="semibold">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
