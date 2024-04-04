import { useInputValidation } from "6pp";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";

const isAdmin = false

const Adminlogin = () => {
    const secretkey = useInputValidation("")

    const submiteHandler = (e) => {
        e.preventDefault()
    }

    if (isAdmin) {
        return <Navigate to="/admin/dashboard" />
    }

    return (
        <div style={{
            backgroundImage:
                "linear-gradient(to right, #be93c5, #7bc6cc)"
        }} >
            <Container
                component={"main"}
                maxWidth="xs"
                sx={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }} >
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h5"> Admin Login </Typography>
                    <form style={{
                        width: "100%",
                        marginTop: "1rem"
                    }}
                        onSubmit={submiteHandler}
                    >
                        <TextField
                            required
                            fullWidth
                            label="Secret key"
                            type="password"
                            margin="normal"
                            varient="outlined"
                            value={secretkey.value}
                            onChange={secretkey.changeHandler}
                        />
                        <Button
                            sx={{
                                marginTop: "1rem",
                                backgroundColor: "blue", // Set the background color to blue
                                color: "white", // Set the text color to white
                            }}
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                        >
                            Login
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>
    )
}

export default Adminlogin