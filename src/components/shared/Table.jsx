import { Container, Paper, Typography } from '@mui/material'
import React from 'react'
import { DataGrid } from "@mui/x-data-grid"

const Table = ({ rows, columns, heading, rowheight = 52, cellBgColor = '#f5f5f5' }) => {
    return (
        <Container
            sx={{
                height: "100vh"
            }}
        >
            <Paper
                sx={{
                    padding: "1rem 4rem",
                    borderRadius: "1rem",
                    margin: "auto",
                    width: "100%",
                    overflow: "hidden",
                    height: "100%",
                    boxShadow: "none"
                }}
            >
                <Typography
                    textAlign={"center"}
                    variant="h4"
                    sx={{
                        margin: "2rem",
                        textAlign: "uppercase"
                    }}
                >
                    {heading}
                </Typography>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    rowHeight={rowheight}
                    style={{
                        height: "80%",
                    }}
                    components={{
                        headerCell: {
                            renderHeader: (params) => (
                                <div style={{ backgroundColor: "black", color: 'white' }}>
                                    {params.children}
                                </div>
                            ),
                        },
                    }}
                    sx={{
                        '& .MuiDataGrid-cell': {
                            backgroundColor: cellBgColor,
                        },
                    }}
                ></DataGrid>
            </Paper>
        </Container>
    )
}

export default Table