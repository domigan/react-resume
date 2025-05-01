import React from "react";
import { genres } from "../actions/utils";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl } from "@mui/material";
import "../../globals.css";

type SearchProps = {
  onChange: (genre: string) => void;
  selected_genre: string;
};

export function Search({ onChange, selected_genre }: SearchProps) {
  const onSelect = (genre: string) => {
    onChange(genre);
  };

  const genre_item = (genre: string, index: number) => {
    return (
      <MenuItem
        key={`${genre}-search-${index}`}
        value={genre}
        onClick={(e) => {
          e.stopPropagation();
          onChange(genre);
        }}
      >
        {genre}
      </MenuItem>
    );
  };

  return (
    <div className={"search-container"}>
      <FormControl fullWidth>
        <Select
          variant="outlined"
          sx={{
            width: "100%",
            borderColor: "white",
            backgroundColor: "white",
          }}
          id="genre-select"
          value={selected_genre}
          onChange={(e) => {
            e.stopPropagation();
            onSelect(e.target.value);
          }}
        >
          {genres.map(genre_item)}
        </Select>
      </FormControl>
    </div>
  );
}
