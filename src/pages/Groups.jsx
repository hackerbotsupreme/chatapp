import { Backdrop, Box, Button, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { Suspense, lazy, memo, useEffect, useState } from 'react'
import { Add as AddIcon, Delete as DeleteIcon, Done as DoneIcon, Edit as EditIcon, KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from "@mui/icons-material"
import { BgGradient, MatBlack } from '../constants/color'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Link } from "../components/styles/StyledComponents"
import { SampleChats, SampleUsers } from "../constants/sampledata"
import Avatarcard from '../components/shared/Avatarcard'
import UserItem from '../components/shared/UserItem'

const ConfirmDeleteDialog = lazy(() => import("../components/dialogs/ConfirmDeleteDialog"))
const AddmemberDialog = lazy(() => import("../components/dialogs/AddmemberDialog"))

const isAddmember = false

const Groups = () => {
    const chatId = useSearchParams()[0].get("group")
    const navigate = useNavigate()
    const [isMobile, setisMobile] = useState(false)
    const [isEdit, setisEdit] = useState(false)
    const [confirmDeleteDialog, setconfirmDeleteDialog] = useState(false)
    const [groupName, setgroupName] = useState("Group Name")
    const [groupNameUpdatedValue, setgroupNameUpdatedValue] = useState("")

    const navigateBlack = () => {
        navigate("/")
    }
    console.log(chatId)
    const handleMobile = () => {
        setisMobile((prev) => !prev)
    }
    const handleMobileClose = () => {
        setisMobile(false)
    }
    const updateGroupName = () => {
        setisEdit(false)
        console.log(groupNameUpdatedValue)
    }
    const openAddMember = () => {

    }
    const openConfirmDeleteHandler = () => {
        setconfirmDeleteDialog(true)
    }
    const closeConfirmDeleteHandler = () => {
        setconfirmDeleteDialog(false)
    }
    const deleteHandler = () => {
        closeConfirmDeleteHandler()
    }
    const removeMemberHandler = (id) => {}

    const ButtonGroup = (
        <Stack
            direction={{
                sm: "row",
                xs: "column-reverse",
            }}
            spacing={"1rem"}
            p={{
                sm: "1rem",
                xs: "0",
                md: "1rem 4rem"
            }}
        >
            <Button size='large' variant="contained" onClick={openAddMember} startIcon={<AddIcon />} >
                Add Member
            </Button>
            <Button
                size='large'
                color='error'
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={openConfirmDeleteHandler}
            >
                Delete Group
            </Button>
        </Stack>
    )

    useEffect(() => {
        if (chatId) {
            setgroupName(`Group Name ${chatId}`)
            setgroupNameUpdatedValue(`Group Name  ${chatId}`)
        }
        return () => {
            setgroupName("")
            setgroupNameUpdatedValue("")
            setisEdit(false)
        }
    }, [chatId])


    const IconBtns = (
        <>
            <Box
                sx={{
                    display: {
                        xs: "block", // Display on extra-small screens
                        sm: "block", // Display on small screens and above
                        position: "fixed",
                        right: "1rem",
                        top: "1rem"
                    }
                }}
            >
                <Tooltip title="Menu" >
                    <IconButton onClick={handleMobile} >
                        <MenuIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <Tooltip title={"back"} >
                <IconButton
                    sx={{
                        position: "absolute",
                        top: "2rem",
                        left: "2rem",
                        backgroundColor: MatBlack,
                        color: "white",
                        ":hover": {
                            backgroundColor: "white",
                            color: MatBlack,
                        }
                    }}
                    onClick={navigateBlack}
                >
                    <KeyboardBackspaceIcon />
                </IconButton>

            </Tooltip>
        </>
    )

    const GroupName = (
        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={"1rem"} padding={"3rem"} >
            {
                isEdit ? (<>
                    <TextField
                        value={groupNameUpdatedValue}
                        onChange={e => setgroupNameUpdatedValue(e.target.value)}
                    />
                    <IconButton onClick={updateGroupName} >
                        <DoneIcon />
                    </IconButton>

                </>) : (<>
                    <Typography variant="h4" >
                        {groupName}
                    </Typography>
                    <IconButton onClick={() => { setisEdit(true) }} >
                        <EditIcon />
                    </IconButton>
                </>)
            }
        </Stack>
    )

    return (
        <Grid container height={"100vh"} >
            <Grid
                item
                sm={4}
                sx={{
                    display: {
                        xs: "none",
                        sm: "block"
                    }
                }}
            >
                <GroupsList myGroups={SampleChats} chatId={chatId} />
            </Grid>
            <Grid item xs={12} sm={8} sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                padding: "1rem 3rem",
            }} >
                {
                    IconBtns
                }
                {
                    groupName && (
                        <>
                            {GroupName}
                            <Typography
                                margin={"2rem"}
                                alignSelf={"flex-start"}
                                variant="body1"
                            >
                                Members
                            </Typography>
                            <Stack
                                maxWidth={"45rem"}
                                width={"100%"}
                                boxSizing={"border-box"}
                                padding={{
                                    sm: "1rem",
                                    xs: "0",
                                    md: "1rem 4rem",
                                }}
                                spacing={"2rem"}
                                height={"50vh"}
                                overflow={"auto"}
                            >
                                {
                                    SampleUsers.map((i) => (
                                        <UserItem user={i} isAdded
                                            key={i._id}
                                            styling={{
                                                boxShadow: "0 0 0.5rem 0.4rem rgba(0,0,0,0.2)",
                                                padding: "1rem 2rem",
                                                borderRadius: "0.5rem"
                                            }}
                                            handler={removeMemberHandler}
                                        />
                                    ))
                                }
                            </Stack>
                            {
                                ButtonGroup
                            }
                        </>
                    )
                }

                {
                    isAddmember && <Suspense fallback={<Backdrop open />} >
                        <AddmemberDialog />
                    </Suspense>
                }
                {
                    confirmDeleteDialog && (
                        <>
                            <Suspense fallback={<Backdrop open />} >
                                <ConfirmDeleteDialog
                                    open={ConfirmDeleteDialog}
                                    handleClose={closeConfirmDeleteHandler}
                                    deleteHandler={deleteHandler}
                                />
                            </Suspense>
                        </>
                    )
                }
                <Grid>
                    <Drawer
                        sx={{
                            display: {
                                xs: "block",
                                sm: "none"
                            }

                        }}
                        open={isMobile} onClose={handleMobileClose}
                    >
                        <GroupsList width={"50vw"} myGroups={SampleChats} chatId={chatId} />
                    </Drawer>
                </Grid>
            </Grid>
        </Grid>
    )
}

const GroupsList = ({ width = "100%", myGroups = [], chatId }) => (
    <Stack
        width={width}
        sx={{
            backgroundImage: BgGradient,
            height: "100vh",
            overflow: "auto",
        }}
    >
        <Stack
            spacing={2}
            py={2}
            sx={{
                height: "100%", // Set height to fill the remaining space
                overflow: "auto",
            }}
        >
            {myGroups.length > 0 ? (
                myGroups.map((group) => (
                    <GroupListItem
                        group={group}
                        chatId={chatId}
                        key={group._id}
                    />
                ))
            ) : (
                <Typography textAlign="center" padding="1rem">
                    No Group
                </Typography>
            )}
        </Stack>
    </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
    const {
        name, avatar, _id, chatid
    } = group;
    return (
        <Link to={`?group=${_id}`} onClick={
            e => {
                if (chatId === _id)
                    e.preventDefault()
            }
        } >
            <Stack direction={"row"}
                spacing={"1rem"}
                alignItems={"center"}
            >
                <Avatarcard avatar={avatar} />
                <Typography>{name}</Typography>
            </Stack>
        </Link>
    )
})

export default Groups