import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, Typography } from '@mui/material'

import React, { memo } from 'react'
import { SampleNotifications } from '../../constants/sampledata'

const Notifications = () => {
    const friendRequestHandler = ({ _id, accept }) => {

    }

    return (
        <Dialog open  >
            <Stack p={{ xs: "1rem", sm: "2rem" }} >
                <DialogTitle>Notifications</DialogTitle>
                {
                    SampleNotifications.length > 0 ? (
                        SampleNotifications.map((i) => (
                            <NotificationItems
                                sender={i.sender}
                                _id={i._id} // Enclose _id with quotes
                                handler={friendRequestHandler}
                                key={`${i._id}`} // Enclose _id with quotes when used as a key
                            />
                        ))
                    ) : (
                        <Typography textAlign={"center"}>No Notifications</Typography>
                    )
                }
            </Stack>
        </Dialog>
    )
}
const NotificationItems = memo(({ sender, _id, handler }) => {
    const { name, avatar } = sender;

    return (
        <ListItem   >
            <Stack
                direction={"row"}
                alignItems={'center'}
                spacing={"1rem"}
                width={"100%"}
            >
                <Avatar 
                src={avatar}
                
                />
                <Typography
                    varient="body1"
                    sx={{
                        flexGlow: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%"
                    }}
                >
                    {`${name} sent you a friend request `}
                </Typography>
                <Stack
                    direction={{
                        xs: "column",
                        sm: "row"
                    }}
                >
                    <Button
                        onClick={() => handler({ _id, accept: true })}
                    >Accept </Button>
                    <Button
                        color='error'
                        onClick={() => handler({ _id, accept: false })}
                    >Request</Button>
                </Stack>
            </Stack>
        </ListItem>
    )
})

export default Notifications