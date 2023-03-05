import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import "./App.css";
import styled from '@emotion/styled'

function Searchbar() {
  
  return (
    <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
    </div>
  );
}

export default Searchbar;