import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table'
import { DashBoardData } from '../../constants/sampledata'
import { fileFormat, transformImage } from '../../lib/features'
import moment from 'moment'
import { Avatar, Box, Stack } from '@mui/material'
import RenderAttachMent from "../../components/shared/RenderAttachMent"

const columns = [
    {
        field: "id",
        headerName: "ID",
        headerClassname: "table-header",
        width: 200,
    },
    {
        field: "attachments",
        headerName: "Attachments",
        headerClassname: "table-header",
        width: 200,
        renderCell: (params) => {
            const { attachments } = params.row;
            return attachments?.length > 0 ?
                attachments.map(i => {
                    const url = i.url
                    const file = fileFormat(url)
                    return <Box>
                        <a href={
                            url
                        }
                            download
                            target='_Blank'
                            style={{
                                color: "black"
                            }}
                        >
                            {
                                RenderAttachMent(file, url)
                            }

                        </a>
                    </Box>
                }
                )
                : "No Attachments"


            //     return  <Avatar
            //     alt={params.row.name}
            //     src={params.row.avatar}
            // />
        }


    },
    {
        field: "content", // Change 'Name' to 'name'
        headerName: "Content",
        headerClassname: "table-header",
        width: 400,
    },
    {
        field: "sender",
        headerName: "Sent By",
        headerClassname: "table-header",
        width: 200,
        renderCell: (params) => (
            <Stack
                direction={"row"} spacing={"1rem"} alignItems={"center"}
            >
                <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} >
                    <span>{
                        params.row.sender.name
                    }</span>
                </Avatar>
            </Stack>
        )
    },
    {
        field: "chat",
        headerName: "Chat",
        headerClassname: "table-header",
        width: 220,
    },
    {
        field: "createdAt",
        headerName: "Time",
        headerClassname: "table-header",
        width: 250,
    },
    {
        field: "groupChat",
        headerName: "Group  Chat",
        headerClassname: "table-header",
        width: 100,
    },
]

const MessageManagement = () => {
    const [rows, setrows] = useState([])

    useEffect(() => {
        setrows(
            DashBoardData.messages.map(i => (
                {
                    ...i, id: i._id,
                    sender: {
                        name: i.sender.name,
                        avatar: transformImage(
                            i.sender.avatar, 50
                        )
                    },
                    createdAt: moment(i.createdAt).format("MMMM Do YYYY , h:mm:ss a")
                }
            ))
        )
    }, [])


    return (
        <AdminLayout>
            <Table
                heading={"All Messages "}
                columns={columns}
                rows={rows}
                rowheight={200}
            ></Table>
        </AdminLayout>
    )
}

export default MessageManagement