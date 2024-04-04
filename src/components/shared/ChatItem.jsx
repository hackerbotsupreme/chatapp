import React, { memo } from 'react'
import { Link } from '../styles/StyledComponents'
import { Box, Stack, Typography } from '@mui/material'
import Avatarcard from './Avatarcard'

const ChatItem = ({
    avatar = [],
    name,
    _id,
    groupChat = false,
    newMessageAlert,
    sameSender,
    isOnline,
    handleDeleteChat
}) => {
    return (
        <Link
            sx={{
                padding: "0"
            }}
            to={`/chat/${_id}`} onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)} >
            <div style={{
                display: "flex",
                alignItems: "center",
                padding: "1rem",
                backgroundColor: sameSender ? "darkblue" : "unset",
                color: sameSender ? "white" : "unset",
                gap: "1rem",
                position: "relative"
            }} >
                <Avatarcard avatar={avatar} ></Avatarcard>
                <Stack>
                    <Typography>{name}</Typography>
                    {
                        sameSender && newMessageAlert && (
                            <Typography>{newMessageAlert.count} New Message</Typography>
                        )
                    }
                </Stack>
                {
                    isOnline && <Box
                        sx={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: "yellow",
                            position: "absolute",
                            top: "50%",
                            right: "1rem",
                            transform: "translateY(-50%)"
                        }}
                    ></Box>
                }

            </div>
        </Link>
    )
}

export default memo(ChatItem)