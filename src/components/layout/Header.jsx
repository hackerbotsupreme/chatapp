import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import {
    Add as AddIcon,
    Menu as MenuuIcon,
    Group as GroupIcon,
    Search as SearchIcon,
    Logout as LogoutIcon,
    Notifications as NotificationsIcon
} from "@mui/icons-material"
import { orange } from '@mui/material/colors'
import { useNavigate } from "react-router-dom"
import React, { useState, Suspense } from 'react'


const SearchDialog = React.lazy(()=>import("../specific/Search") )
const NotificationsDialog = React.lazy(()=>import("../specific/Notifications") )
const NewGroupDialog = React.lazy(()=>import("../specific/NewGroup") )


const Header = () => {
    const navigate = useNavigate()

    const [ismobile, setisMobile] = useState(false)
    const [isSearch, setisSearch] = useState(false)
    const [isNewGroup, setisNewGroup] = useState(false)
    const [isNotification, setisNotification] = useState(false)

    const handleMobile = () => {
        console.log("mobile")
        setisMobile(prev => !prev)
    }
    const openSearch = () => {
        console.log("openSearchDialog")
        setisSearch(prev => !prev)
    }
    const opeNewgroup = () => {
        console.log("opeNewgroup")
        setisNewGroup(prev => !prev)
    }
    const LogoutHandler = () => {
        console.log("LogoutHandler")
        setisNotification(prev => !prev)
    }
    const openNotification = () => {
        console.log("LogoutHandler")
        setisNotification(prev => !prev)
    }
    const navigateGroup = () => navigate("/Groups")


    return (
        <>
            <Box sx={{ flexGrow: 1 }} height={"4rem"}>
                <AppBar position="static" sx={{ bgcolor: orange }}>
                    <Toolbar>
                        <Box sx={{
                            flexGrow: 1,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    display: { xs: "none", sm: "block" }
                                }}
                            >
                                ChatApp
                            </Typography>
                            <Box
                                sx={{
                                    display: { xs: "block", sm: "none" }
                                }}
                            >
                                <IconButton color="inherit" onClick={handleMobile}>
                                    <MenuuIcon />
                                </IconButton>
                            </Box>
                        </Box>
                        <Box sx={{
                            flexGrow: 1,
                        }} ></Box>
                        <Box>
                            <IconBtn
                                title={"Search"}
                                icon={<SearchIcon />}
                                onClick={openSearch}
                            ></IconBtn>
                            <IconBtn
                                title={"New Group"}
                                icon={<AddIcon />}
                                onClick={opeNewgroup}
                            ></IconBtn>
                            <IconBtn
                                title={"Manage Groups"}
                                icon={<GroupIcon />}
                                onClick={navigateGroup}
                            ></IconBtn>
                            <IconBtn
                                title={"Notifications"}
                                icon={<NotificationsIcon />}
                                onClick={openNotification}
                            ></IconBtn>
                            <IconBtn
                                title={"Logout"}
                                icon={<LogoutIcon />}
                                onClick={LogoutHandler}
                            ></IconBtn>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {isSearch && (
                <Suspense fallback={<Backdrop open />} >
                    <SearchDialog />
                </Suspense>
            )}
            {isNotification && (
                <Suspense fallback={<Backdrop open >Loading...</Backdrop>} >
                    <NotificationsDialog />
                </Suspense>
            )}
            {isNewGroup && (
                <Suspense fallback={<Backdrop open >Loading...</Backdrop>} >
                    <NewGroupDialog />
                </Suspense>
            )}
        </>
    )
}

const IconBtn = ({ title, icon, onClick }) => {
    return (
        <Tooltip title={title} >
            <IconButton color="inherit" size="large" onClick={onClick} >
                {icon}
            </IconButton>
        </Tooltip>
    )
}

export default Header