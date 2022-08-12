import React, { useState } from 'react';
import { AppBar, Box, Toolbar, styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import { Pets, Mail, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const IconContainer = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>LAMA DEV</Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder="search..." /></Search>
                <IconContainer>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        onClick={e => setOpen(true)}
                        sx={{ widht: 30, height: 30 }} src="/assets/img/avataaars.svg"
                    />
                </IconContainer>
                <UserBox onClick={e => setOpen(true)}>
                    <Avatar sx={{ widht: 30, height: 30 }} src="/assets/img/avataaars.svg" />
                    <Typography variant="span">Haja</Typography>
                </UserBox>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={e => setOpen(false)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem> Profile </MenuItem>
                    <MenuItem> My account </MenuItem>
                    <MenuItem> Logout </MenuItem>
                </Menu>
            </StyledToolbar>
        </AppBar >
    )
}

export default Navbar