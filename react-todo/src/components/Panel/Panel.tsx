import React, { useEffect } from "react";
import SideBar from "./SideBar";
import { Box, CssBaseline } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ToDoContainer from "./ToDoContainer/ToDoContainer";
function Panel() {
  const navigate = useNavigate();
  useEffect(() => {
    let la = sessionStorage.getItem("auth");
    console.log(la);
    if (!la) {
      navigate("../login");
    }
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <SideBar />
      <ToDoContainer />
    </Box>
  );
}

export default Panel;
