import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import { Message as MessageIcon, Group as GrouIcon, Person as PersonIcon, AdminPanelSettings as AdminPanelSettingsIcon, Notifications as NotificationsIcon } from '@mui/icons-material'
import moment from 'moment'
import { SearchField, CurveButton } from '../../components/styles/StyledComponents'
import { LineChart, DoughnutChart } from "../../components/specific/Charts" // Destructure LineChart and DoughnutChart

const DashBoard = () => {
    const Appbar = (
        <>
            <Paper
                elevation={3}
                sx={{
                    margin: "2rem 0 ",
                    padding: "2rem",
                    borderRadius: "1rem"
                }}
            >
                <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} >
                    <AdminPanelSettingsIcon
                        sx={{
                            fontSize: '3rem'
                        }}
                    />
                    <SearchField placeholder='Search...' />
                    <CurveButton >Search</CurveButton>
                    <Box flexGrow={1} ></Box>
                    <Typography
                        display={{
                            xs: "none",
                            lg: "block"
                        }}
                        color="rgba(0,0,0,0.7)"
                        textAlign={"center"}
                    >
                        {moment().format("MMMM Do YYYY, h:mm:ss a ")}
                    </Typography>
                    <NotificationsIcon></NotificationsIcon>
                </Stack>
            </Paper>
        </>
    )

    const Widgets = (
        <Stack direction={{
            xs: "column",
            sm: "row"
        }}
            spacing={"2rem"}
            justifyContent={"space-between"}
            alignitems="center"
            margin={"2rem 0"}
        >
            <Widget
                title={"Users"}
                value={34}
                icon={<PersonIcon />}
            />
            <Widget
                title={"Chats"}
                value={3}
                icon={<GrouIcon />}
            />
            <Widget
                title={"Messages"}
                value={453}
                icon={<MessageIcon />}
            />
        </Stack>
    )

    return (
        <AdminLayout>
            <Container
                component={"main"}
            >
                {Appbar}
                <Stack
                    direction={{ xs: "column", lg: "row" }}
                    spacing={2}
                    justifyContent="center"
                    alignItems="stretch"
                    sx={{
                        gap: "2rem"
                    }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            padding: "2rem 3.5rem",
                            borderRadius: "1rem",
                            width: { xs: "100%", lg: "45%" },
                            maxWidth: "45rem",
                        }}
                    >
                        <Typography
                            margin={"1rem 0"}
                            variant={'h5'} > {"  "} Last Messages </Typography>
                        <LineChart value={[10, 23, 43, 31, 40]} />
                    </Paper>

                    <Paper
                        elevation={3}
                        sx={{
                            padding: "1rem",
                            borderRadius: "1rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: { xs: "100%", lg: "45%" },
                            position: "relative",
                            height: "25rem"
                        }}
                    >
                        <DoughnutChart
                            labels={['Single Chats ', 'Group Chats ']}
                            value={[300, 90]}
                        />
                        <Stack
                            position={"absolute"}
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            spacing={"0.5rem"}
                            width={"100%"}
                            height={"100%"}
                        >
                            <GrouIcon />
                            <Typography>
                                Vs
                            </Typography>
                            <PersonIcon />
                        </Stack>
                    </Paper>
                </Stack>
                {Widgets}
            </Container>
        </AdminLayout>
    )
}

const Widget = ({ title, value, icon }) => {
    return (
        <Paper
            elevation={3}
            sx={{
                padding: "2rem",
                margin: "2rem 0",
                borderRadius: "2rem",
                width: "15rem"
            }}
        >
            <Stack alignItems={"center"} spacing={"1rem"}>
                <Typography
                    sx={{
                        color: "rgba(0,0,0,0.7)",
                        borderRadius: "50%",
                        border: `5px solid rgba(0,0,0,0.9)`,
                        width: "5rem",
                        height: "5rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    {value}
                </Typography>
                <Stack alignItems={"center"}
                    direction={"row"}
                    spacing={"1rem"}
                >
                    {icon}
                    <Typography>{title}</Typography>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default DashBoard