import { Avatar, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Avatarcard from '../../components/shared/Avatarcard'
import Table from '../../components/shared/Table'
import { DashBoardData } from '../../constants/sampledata'
import { transformImage } from "../../lib/features"


const columns = [
    {
        field: "id",
        headerName: "ID",
        headerClassname: "table-header",
        width: 200,
    },
    {
        field: "name",
        headerName: "avatar",
        headerClassname: "table-header",
        width: 200,
        renderCell: (params) => <Avatar
            alt={params.row.name}
            src={params.row.avatar}
        />
    },
    {
        field: "totalMembers",
        headerName: "Total Members ",
        headerClassname: "table-header",
        width: 200,
    },
    {
        field: "totalMessages",
        headerName: "Total Messages  ",
        headerClassname: "table-header",
        width: 200,
    },
    {
        field: "avatar",
        headerName: "Avatar",
        headerClassname: "table-header",
        width: 200,
        renderCell: (params) => <Avatarcard avatar={params.row.avatar} />
    },
    {
        field: "creator",
        headerName: "Created By ",
        headerClassname: "table-header",
        width: 220,
        renderCell: (params) => (
            <Stack direction={"row"}
                alignItems={"center"}
                spacing={"1rem"}
            >
                <Avatarcard src={params.row.creator.avatar}   >
                    <span>{params.row.creator.name}</span>
                </Avatarcard>
            </Stack>
        )
    },
    {
        field: "members",
        headerName: "Members ",
        headerClassname: "table-header",
        width: 200,
        renderCell: (params) => <Avatarcard
            max={100}
            avatar={params.row.members}
        />
    },
]



const ChatManagement = () => {
    const [rows, setrows] = useState([])

    useEffect(() => {
        setrows(
            DashBoardData.chats.map(i => ({
                ...i,
                id: i._id,
                avatar: i.avatar.map(i => transformImage(i, 50)),
                members: i.members.map((i) => transformImage(i.avatar, 50)) ,
                creator : {
                    name : i.creator.name ,
                    avatar : transformImage(i.creator.avatar , 50 )
                }
            }))
        )
    }, [])


    return (
        <AdminLayout>
            <Table
                heading={"All Chats  "}
                columns={columns}
                rows={rows}
                cellBgColor="#e0e0e0" // Change this value to your desired color
            />
        </AdminLayout>
    )
}


export default ChatManagement