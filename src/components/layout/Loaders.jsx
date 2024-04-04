import React from 'react'
import { Grid, Skeleton, Stack } from '@mui/material'

const LayoutLoader = () => {
    return (
        <Grid container height="100vh" spacing="1rem">
            <Grid
                item
                xs={4}
                sm={4}
                md={3}
                sx={{
                    display: { xs: "none", sm: "block" },
                    height: "100%",
                    boxSizing: "border-box",
                }}
            >
                <Skeleton variant="rectangular" height="100%" />
            </Grid>
            <Grid
                item
                xs={12}
                height="100%"
                sm={8}
                md={5}
                lg={6}
                sx={{
                    display: { xs: "none", sm: "block" },
                }}
            >
                <Stack spacing="1rem">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <Skeleton  key={index} height="5rem" />
                    ))}
                </Stack>
            </Grid>
            <Grid
                item
                xs={4}
                md={4}
                lg={3}
                sx={{
                    display: { xs: "none", md: "block" },
                    height: "100%",
                    boxSizing: "border-box",
                }}
            >
                <Skeleton variant="rectangular" height="100%" />
            </Grid>
        </Grid>
    )

}

export default LayoutLoader