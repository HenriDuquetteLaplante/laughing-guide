import {tokens} from "../../theme";
import {Box, Link, Typography, useTheme} from "@mui/material";
import {useState} from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

/* Using react-pro-sidebar */
/* Documentation https://github.com/azouaoui-med/react-pro-sidebar */
const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    // const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            // style={{
            //     color: colors.grey[100],
            // }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const SideBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');

    const handleCollapse = () => {

    }

    return(
        // <Box
        //     sx={{
        //         '& .pro-sidebar-inner': {
        //             background: `${colors.primary[400]} !important`
        //         },
        //         '& .pro-icon-wrapper': {
        //             backgroundColor: "transparent !important"
        //         },
        //         "& .pro-inner-item": {
        //             padding: '5px 35px 5px 20px !important'
        //         },
        //         '& .pro-inner-item:hover': {
        //             color: '#868dfb !important'
        //         },
        //         '& .pro-menu-item.active': {
        //             color: '#6870fa !important'
        //         }
        //     }}
        // >
            <Sidebar
                collapsed={isCollapsed}
                 backgroundColor={colors.primary['200']}
            >
                <Menu>
                    <SubMenu label="Charts">
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        // </Box>
    )
}

export default SideBar;