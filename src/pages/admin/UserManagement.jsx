import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table'
import { Avatar } from '@mui/material'
import { DashBoardData } from '../../constants/sampledata'
import {transformImage} from "../../lib/features"

const columns = [
    {
        field: "id",
        headerName: "ID",
        headerClassname: "table-header",
        width: 200,
    },
    {
        field: "Avatar",
        headerName: "Avatar",
        headerClassname: "table-header",
        width: 150,
        renderCell: (params) => <Avatar
            alt={params.row.name}
            src={params.row.avatar}
        />
    },
    {
        field: "name", // Change 'Name' to 'name'
        headerName: "Name",
        headerClassname: "table-header",
        width: 200,
    },
    {
        field: "username",
        headerName: "Username",
        headerClassname: "table-header",
        width: 200,
    },
    {
        field: "groups",
        headerName: "Groups",
        headerClassname: "table-header",
        width: 200,
    },
]


const UserManagement = () => {
    const [rows, setrows] = useState([])

    useEffect(() => {
        setrows(DashBoardData.users.map(i => ({
            ...i,
            id: i._id,
            avatar : transformImage(i.avatar,50)
        })))
    }, [])


    return (
        <AdminLayout>
            <Table
                heading={"All users "}
                columns={columns}
                rows={rows}
                cellBgColor="#e0e0e0" // Change this value to your desired color
            />
        </AdminLayout>
    )
}

export default UserManagement