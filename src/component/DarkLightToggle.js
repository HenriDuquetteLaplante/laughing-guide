import React from 'react';
import {Switch, useTheme} from '@mui/material';



const DarkLightToggle = () => {

    return (
        <Switch
            name="toggleDark"
            color="default"
        />
    );
};

export default DarkLightToggle;