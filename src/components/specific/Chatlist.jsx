/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Stack } from '@mui/material'
import React from 'react'
import ChatItem from '../shared/ChatItem'
import { BgGradient } from '../../constants/color';

const Chatlist = ({
    w = "100%",
    chats = [],
    chatId,
    onlineUsers = [],
    newMessageAlert,
    handleDeleteChat,
}) => {
    return (
        <Stack 
        w={w} 
        direction={"column"}
        overflow={"auto"}
        height={"100%"}
        sx={{
            backgroundImage : BgGradient
        }}
        >
            {chats?.map((data, index) => {
                const { avatar, _id, name, groupChat, members } = data;

                const newMessageAlertData = newMessageAlert?.find(
                    ({ chatId }) => chatId === _id
                ) || { chatId: "", count: 0 };
                const isOnline = members.some((member) => onlineUsers.includes(_id));

                return (
                    <ChatItem
                        index={index}
                        newMessageAlert={newMessageAlertData}
                        isOnline={isOnline}
                        avatar={avatar}
                        name={name}
                        _id={_id}
                        key={_id}
                        groupChat={groupChat}
                        sameSender={chatId === _id}
                        handleDeleteChat={handleDeleteChat}
                    />
                );
            })}
        </Stack>
    );
};

export default Chatlist