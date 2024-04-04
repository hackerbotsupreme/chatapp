import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import {
    Face as FaceIcon,
    AlternateEmail as UsernameIcon,
    CalendarMonth as CalenderIcon
} from "@mui/icons-material"
import moment from "moment"

const Profile = () => {
    return (
        <Stack spacing={"2rem"} direction={"column"} alignItems={"center"} >
            <Avatar
                sx={{
                    width: 200,
                    height: 200,
                    objectFit: "contain",
                    marginBottom: "1rem",
                    border: "5px solid white"
                }}
            />
            <ProfileCard heading={"Bio"} text={"I am a Web Devloper"} />
            <ProfileCard heading={"Username"} text={"alokeGeek"} icon={<UsernameIcon/>} />
            <ProfileCard heading={"Name"} text={"Aloke Pramanik"}   icon={<FaceIcon/>} />
            <ProfileCard heading={"Joined"} text={moment('2024-03-27T00:00:00.000Z').fromNow()}   icon={<CalenderIcon/>} />
        </Stack>
    )
}
const ProfileCard = ({
    text,
    icon, // Rename the prop to 'icon' and use a capital case to indicate it should be a component
    heading
}) => (
    <Stack
        direction="row"
        alignItems="center"
        spacing="1rem"
        color="white"
        textAlign="center"
    >
        {icon && icon} {/* Render the icon component if provided */}
        <Stack>
            <Typography variant="body1">{text}</Typography>
            <Typography variant="caption" color="black">
                {heading}
            </Typography>
        </Stack>
    </Stack>
);
export default Profile