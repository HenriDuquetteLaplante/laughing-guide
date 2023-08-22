import {Box, CssBaseline, IconButton, useTheme} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import React, {useContext} from "react";
import {ColorModeContext} from "../../theme";

const TopBar = () => {
    const theme = useTheme();
    // const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext)

    return(
        <Box>
            <CssBaseline />
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
            </IconButton>
        </Box>
    );
}

export default TopBar;