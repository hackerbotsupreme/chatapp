import React from 'react'
import Header from './Header'
import Title from '../shared/Title'
import { Grid } from '@mui/material'
import Chatlist from '../specific/Chatlist'
import { SampleChats } from '../../constants/sampledata'
import { useParams } from 'react-router-dom'
import Profile from '../specific/Profile'

const AppLayout = () => (WrappedComponent) => {
    return (props) => {
        const params = useParams()
        const chatId = params.chatId;

        const handleDeleteChat = (e, _id, groupChat) => {
            e.preventDefault()
            console.log("Delete Chat")
        }

        return (
            <>
                <Title ></Title>
                <Header />
                <Grid container 
                // margin={"0"} padding={"0"} overflow={"hidden"} 
                height={"calc(100vh - 4rem)"} >
                    <Grid
                        item
                        xs={4}
                        sm={4}
                        md={3}
                        sx={{
                            display: { xs: "none", sm: "block" }
                        }}
                        height={"100%"}
                    >
                        <Chatlist
                            chats={SampleChats}
                            chatId={chatId}
                            handleDeleteChat={handleDeleteChat}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        height={"100%"}
                        sm={8}
                        md={5}
                        lg={6}
                        sx={{
                            display: { xs: "none", sm: "block" }
                        }}
                    >
                        <WrappedComponent {...props} />
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        md={4}
                        lg={3}
                        sx={{
                            display: { xs: "none", md: "block" },
                            padding: "2rem",
                            bgcolor: "orange"
                        }}
                        height={"100%"}
                    >
                        <Profile />
                    </Grid>
                </Grid>

            </>
        )
    }
}

export default AppLayout