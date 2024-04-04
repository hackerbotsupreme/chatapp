// Chat.jsx
import React, { Fragment, useRef } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material'
import { gray } from '../constants/color'
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material'
import { InputBox } from '../components/styles/StyledComponents'
import FileMenu from '../components/dialogs/FileMenu'
import { orange } from '@mui/material/colors'
import { SampleMessage } from '../constants/sampledata'
import MessageComponent from '../components/shared/MessageComponent'

const user = {
    _id : "asjdkans" ,
    name : "Aloke Pramanik"
}

const Chat = () => {
    const containerRef = useRef(null)

    return (
        <Fragment>
            <Stack
                ref={containerRef}
                boxSizing="border-box"
                height="90%"
                padding="1rem"
                spacing="1rem"
                bgcolor={gray}
                sx={{
                    overflowX: "hidden",
                    overflowY: "auto"
                }}
            > 
                {
                    SampleMessage.map((i)=>(
                        <MessageComponent key={i._id} message={i} user={user} /> 
                    ))
                }
            </Stack>
            <form style={{
                height: "10%"
            }} >
                <Stack
                    direction="row"
                    height={"100%"}
                    padding={"1rem"}
                    alignItems={"center"}
                    position={"relative"}
                    spacing={2}
                >
                    <Stack alignItems="center" position="relative">
                        <IconButton
                            sx={{
                                rotate: "30deg"
                            }}
                        >
                            <AttachFileIcon />
                        </IconButton>
                    </Stack>
                    <InputBox
                        placeholder='Type Message Here....'
                        sx={{
                            flexGrow: 1
                        }}
                    />
                    <IconButton
                        type='submit'
                        sx={{
                            rotate: "-30deg",
                            bgcolor: orange,
                            backgroundColor: "#008080",
                            color: "white",
                            padding: "0.5rem",
                            "&:hover": {
                                backgroundColor: "#FF6B6B"
                            }
                        }}
                    >
                        <SendIcon />
                    </IconButton>
                </Stack>
            </form>
            <FileMenu  />
        </Fragment>
    )
}
export default AppLayout()(Chat)