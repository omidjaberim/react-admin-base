import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import  Badge  from '@mui/material/Badge';
import {AiOutlineMail} from 'react-icons/ai'
import {MdOutlineNotifications, MdOutlineAccountCircle} from 'react-icons/md'

interface IProp {
    mobileMoreAnchorEl : null | HTMLElement;
    isMobileMenuOpen : boolean;
    handleMobileMenuClose : ()=>void;
    handleProfileMenuOpen : (event: React.MouseEvent<HTMLElement>)=>void;
}

const MobileMenu = (props:IProp)=>{
    const {mobileMoreAnchorEl,isMobileMenuOpen,handleProfileMenuOpen,handleMobileMenuClose} = props;
    return(
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={"navbar-phone"}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                    <AiOutlineMail />
                </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                >
                <Badge badgeContent={17} color="error">
                    <MdOutlineNotifications />
                </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
                >
                <MdOutlineAccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    )
}
export default MobileMenu