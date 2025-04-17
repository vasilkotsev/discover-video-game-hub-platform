import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <form>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          value={searchText || ""}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
