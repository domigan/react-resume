import React from "react";
import { genres } from "../actions/utils";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel } from "@mui/material";
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
        <InputLabel id="genre-select-label">Chart</InputLabel>
        <Select
          variant="outlined"
          sx={{
            width: "100%",
            backgroundColor: "white",
          }}
          labelId="genre-select-label"
          id="genre-select"
          value={selected_genre}
          label="Genre"
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
