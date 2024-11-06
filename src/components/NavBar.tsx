import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps {
  searchQuery: string;
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch, searchQuery }: NavBarProps) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} searchQuery={searchQuery} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
