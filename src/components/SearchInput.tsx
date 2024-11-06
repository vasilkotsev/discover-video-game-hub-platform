import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  searchQuery: string;
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch, searchQuery }: SearchInputProps) => {
  return (
    <form>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          value={searchQuery || ""}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          onChange={(e) => {
            onSearch(e.target.value);
          }}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
