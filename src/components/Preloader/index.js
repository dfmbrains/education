import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Preloader = () => {
    return (
        <Box
            sx={{
                position: "fixed",
                left: "0",
                top: "0",
                zIndex: "1000000",
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#00000080 !important",
            }}
        >
            <CircularProgress style={{ color: "#00bb29" }} />
        </Box>
    );
};

export default Preloader;