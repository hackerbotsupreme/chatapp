// FileMenu.jsx
import { Menu } from '@mui/material'
import React from 'react'

const FileMenu = ({ anchorEl }) => {
    return (
        <Menu
            open={false}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <div width="10rem" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Non, soluta hic debitis repellendus tempora corporis dolor?
                Dolor esse dolore ea.
            </div>
        </Menu>
    )
}

export default FileMenu