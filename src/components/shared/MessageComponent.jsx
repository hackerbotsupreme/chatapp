import { Box, Typography } from '@mui/material';
import React, { memo } from 'react'
import { LightBlue } from '../../constants/color';
import moment from 'moment';
import { fileFormat } from '../../lib/features';
import RenderAttachMent from './RenderAttachMent';

const MessageComponent = ({ message, user }) => {
    const { sender, content, attachments = [], createdAt } = message;
    const samesender = sender?._id === user._id;
    const timeago = moment(createdAt).fromNow()
    return (
        <div
            style={{
                alignSelf: samesender ? "flex-end" : 'flex-start', backgroundColor: "white",
                color: "black",
                borderRadius: "5px",
                padding: "0.5rem",
                width: "fit-content",
            }}
        >
            {
                !samesender && <Typography color={LightBlue} fontFamily={"600"} varient="caption" >{sender.name}</Typography>
            }
            {
                content && <Typography>{content}</Typography>
            }
            {
                attachments.length > 0 && attachments.map((attachment , index)=>{
                    const url = attachment.url 
                    const file = fileFormat(url)
                    return (
                        <Box key={index} >
                            <a href={url} target='_blank' download style={{
                                color : "black"
                            }} >
                                {RenderAttachMent(file , url)}
                            </a>
                        </Box>
                    )
                })
                
            }

            <Typography    varient="caption" color={"text.secondary"} >{timeago}</Typography>
        </div>
    )
}

export default memo(MessageComponent)