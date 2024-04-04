import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SampleUsers } from "../../constants/sampledata"
import UserItem from '../shared/UserItem'
import { useInputValidation } from "6pp"

const NewGroup = () => {
    const groupname = useInputValidation("")
    const [Selectedmembers, setSelectedmembers] = useState([])
    const [members, setmembers] = useState(SampleUsers) // Initialize members with SampleUsers

    const selectMemberHandler = (id) => {
        // setmembers(prev=> prev.map(user=>user._id === id ?{...user , isAdded : !user.isAdded} : user ))
        setSelectedmembers(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
    }

    const submitHandler = () => { }
    const closeHandler  = () => { }
    return (
        <Dialog open  onClose={closeHandler} >
            <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"} spacing={"2rem"} >
                <DialogTitle textAlign={"center"} varient="h4" >New Group</DialogTitle>
                <TextField label="Group Name" value={groupname.value} onChange={groupname.changeHandler} />
                <Typography varient="body1" >Members</Typography>
                <Stack>
                    {members.map((i) => (
                        <UserItem
                            user={i}
                            key={i._id}
                            handler={selectMemberHandler}
                            isAdded={Selectedmembers.includes(i._id)}
                        />
                    ))}
                </Stack>
                <Stack direction={"row"} justifyContent={"space-evenly"}  >
                    <Button variant="contained" size="large" onClick={submitHandler}  >Create</Button>
                    <Button variant="outlined" color='error' size="large" >Cancel</Button>
                </Stack>
            </Stack>
        </Dialog>
    )
}

export default NewGroup