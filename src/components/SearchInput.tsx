import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

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
            navigate("/");
          }}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
