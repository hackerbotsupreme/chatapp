import {
    Close as CloseIcon,
    Dashboard as DashboardIcon,
    ExitToApp as ExitToAppIcon,
    Group as GroupIcon,
    ManageAccounts as ManageAccountsIcon,
    Menu as MenuIcon,
    Message as MessageIcon
} from "@mui/icons-material"
import { Box, Drawer, Grid, IconButton, Stack, Typography, styled, useMediaQuery } from "@mui/material"
import React, { useState } from 'react'
import { useLocation, Link as LinkComponent, Navigate } from "react-router-dom"
import { MatBlack, gray } from '../../constants/color'

const Link = styled(LinkComponent)`
    text-decoration: none;
    border-radius: 2rem;
    padding: 1rem 2rem;
    color: black;
    &:hover {
        color: rgba(0, 0, 0, 0.54);
    }
`

const adminTabs = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: <DashboardIcon />,
    },
    {
        name: "Users ",
        path: "/admin/user-management",
        icon: <ManageAccountsIcon />,
    },
    {
        name: "Chat",
        path: "/admin/chat-management",
        icon: <DashboardIcon />,
    },
    {
        name: "Messages ",
        path: "/admin/messages",
        icon: <MessageIcon />,
    },
]

const Sidebar = ({ w = "100%" }) => {
    const location = useLocation()

    const logoutHandler = () => {
        console.log("logout")
    }


    return (
        <Stack
            width={w}
            direction={"column"}
            px="3rem"
            spacing={"3rem"}
        >
            <Typography 
            marginTop={1}
            textAlign={"center"} variant="h3" textTransform={"uppercase"}>
                Admin
            </Typography>
            <Stack spacing="1rem">
                {adminTabs.map((tab) => (
                    <Link key={tab.path} to={tab.path}
                        sx={
                            location.pathname === tab.path && {
                                bgcolor: MatBlack,
                                color: "white",
                                ":hover": {
                                    color: "white"
                                }
                            }
                        }
                    >
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={"1rem"}
                        >
                            {tab.icon}
                            <Typography fontSize={"1.2rem"} >
                                {tab.name}
                            </Typography>
                        </Stack>
                    </Link>
                ))}
                <Link
                    onClick={logoutHandler}
                >
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={"1rem"}
                    >
                        <ExitToAppIcon />
                        <Typography
                            fontSize={"1.2rem"}
                        >
                            LogOut
                        </Typography>
                    </Stack>
                </Link>
            </Stack>
        </Stack>
    )
}
const isAdmin = true

const AdminLayout = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false)
    const isMobileScreen = useMediaQuery('(max-width:900px)') // Check if the screen width is less than or equal to 900px

    const handleMobile = () => {
        setIsMobile(!isMobile)
    }

    const handleClose = () => {
        setIsMobile(false)
    }

    if (!isAdmin) return <Navigate to="/admin" ></Navigate>

    return (
        <Grid container minHeight={"100vh"}>
            {/* Conditionally render the Box component based on the screen size */}
            {isMobileScreen && (
                <Box
                    sx={{
                        display: "block",
                        position: "fixed",
                        right: "1rem",
                        top: "1rem"
                    }}
                >
                    <IconButton onClick={handleMobile}>
                        {isMobile ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </Box>
            )}
            <Grid
                item
                md={4}
                lg={3}
                sx={{
                    display: {
                        xs: "none",
                        md: "block"
                    }
                }}
            >
                <Sidebar />
            </Grid>

            <Grid
                item
                xs={12}
                md={8}
                lg={9}
                sx={{
                    bgcolor: gray
                }}
            >
                {children}
            </Grid>
            <Drawer open={isMobile} onClose={handleClose}>
                <Sidebar
                    w="50vw"
                />
            </Drawer>
        </Grid>
    )
}

export default AdminLayout