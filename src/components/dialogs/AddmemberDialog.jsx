import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SampleUsers } from "../../constants/sampledata"
import UserItem from '../shared/UserItem'


const AddmemberDialog = ({ addmember, isloadingAddMember, chatId }) => {
    const [Selectedmembers, setSelectedmembers] = useState([])
    const [members, setmembers] = useState(SampleUsers) // Initialize members with SampleUsers

    const selectMemberHandler = (id) => {
        setSelectedmembers((prev) =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
    }

    const Closehandler = () => {
        setSelectedmembers([])
        setmembers([])
    }
    const addMemberSubmitHandler = () => {
        Closehandler()
    }


    return (
        <Dialog open onClose={Closehandler} >
            <Stack
                p={"2rem"}
                width={"20rem"}
                spacing={"2rem"} >
                <DialogTitle textAlign={"center"} >
                    Add Member
                </DialogTitle>
                <Stack spacing={"1rem"} >
                    {members.length > 0 ? (members.map(i => (
                        <UserItem
                            key={i._id}
                            user={i}
                            handler={selectMemberHandler}
                            isAdded={Selectedmembers.includes(i._id)}
                        />
                    ))) : <Typography textAlign={"center"} >No Friends </Typography>
                    }
                </Stack>
                <Stack
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                    direction={"row"} >
                    <Button
                        onClick={addMemberSubmitHandler}
                        variant='contained'
                        disabled={isloadingAddMember}
                    >
                        Add
                    </Button>
                    <Button
                        color='error'
                        onClick={Closehandler}
                    >
                        Cancel
                    </Button>
                </Stack>
            </Stack>
        </Dialog>)
}

export default AddmemberDialog