import React, { useState } from "react";
import { Container, Paper, TextField, Typography, Button, Box, Stack, Avatar, IconButton } from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material"
import { VisuallyHidden } from "../components/styles/StyledComponents";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp"
import { usernameValidator } from "../utils/validator";

const Login = () => {
    const [isLogin, setisLogin] = useState(true);
    const toggleLogin = () => setisLogin(prev => !prev)
    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("", usernameValidator);
    const password = useStrongPassword("");

    const avatar = useFileHandler("single")

    const handleLogin = (e) => {
        e.preventDefault()
    }
    const handleSignup = (e) => {
        e.preventDefault()
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
                    {isLogin ? (
                        <>
                            <Typography varient="h1">Login </Typography>
                            <form style={{
                                width: "100%",
                                marginTop: "1rem"
                            }}
                                onSubmit={handleLogin}
                            >
                                <TextField
                                    required
                                    fullWidth
                                    label="Username"
                                    margin="normal"
                                    varient="outlined"
                                    value={username.value}
                                    onChange={username.changeHandler}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    margin="normal"
                                    varient="outlined"
                                    value={password.value}
                                    onChange={password.changeHandler}
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
                                <Box display="flex" justifyContent="center" mt={2}>
                                    <Typography>Or</Typography>
                                </Box>
                                <Button
                                    sx={{
                                        marginTop: "1rem",
                                        backgroundColor: "skyblue", // Set background color to skyblue
                                        color: "black"
                                    }}
                                    varient="text"
                                    onClick={toggleLogin}
                                    fullWidth
                                >
                                    Sign Up
                                </Button>
                            </form>
                        </>
                    ) : (
                        <>
                            <Typography varient="h2">Sign Up</Typography>
                            <form style={{
                                width: "100%",
                                marginTop: "1rem"
                            }}
                                onSubmit={handleSignup}
                            >
                                <Stack position={"relative"} width={"10rem"} margin={"auto"} >
                                    <Avatar sx={{
                                        width: "10rem",
                                        height: "10rem",
                                        objectFit: "contain"
                                    }}
                                        src={avatar.preview}
                                    />
                                    <IconButton
                                        sx={{
                                            position: "absolute",
                                            bottom: "0",
                                            right: "0",
                                            color: "white",
                                            bgcolor: "rgba(0,0,0,0.5)",
                                            ":hover": {
                                                bgcolor: "rgba(0,0,0,0.7)"
                                            }
                                        }}
                                        component="label"
                                    >
                                        <>
                                            <CameraAltIcon />
                                            <VisuallyHidden type="file" onChange={avatar.changeHandler} />
                                        </>
                                    </IconButton>
                                </Stack>
                                {
                                    avatar.error && (
                                        <Typography
                                            m={"1rem auto"}
                                            display={"block"}
                                            color="error"
                                            varient="caption" >
                                            {avatar.error}
                                        </Typography>
                                    )
                                }
                                <TextField
                                    required
                                    fullWidth
                                    label="Username"
                                    margin="normal"
                                    varient="outlined"
                                    value={name.value}
                                    onChange={name.changeHandler}
                                />
                                {
                                    username.error && (
                                        <Typography color="error" varient="caption" >
                                            {username.error}
                                        </Typography>
                                    )
                                }
                                <TextField
                                    required
                                    fullWidth
                                    label="Bio"
                                    margin="normal"
                                    varient="outlined"
                                    value={bio.name}
                                    onChange={bio.changeHandler}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    margin="normal"
                                    varient="outlined"
                                    value={password.name}
                                    onChange={password.changeHandler}
                                />
                                {
                                    password.error && (
                                        <Typography color="error" varient="caption" >
                                            {password.error}
                                        </Typography>
                                    )
                                }
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
                                    Sign Up
                                </Button>
                                <Box display="flex" justifyContent="center" mt={2}>
                                    <Typography>Or</Typography>
                                </Box>
                                <Button
                                    sx={{
                                        marginTop: "1rem",
                                        backgroundColor: "skyblue", // Set background color to skyblue
                                        color: "black"
                                    }}
                                    varient="text"
                                    onClick={toggleLogin}
                                    fullWidth
                                >
                                    LOGIN INSTEAD
                                </Button>

                            </form>
                        </>
                    )}
                </Paper>
            </Container>
        </div>
    );
};

export default Login;
