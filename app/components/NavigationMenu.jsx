import React from 'react'

export default function NavigationMenu({ session }) {
    return (
        session === null ? <h1>Null</h1> : <h1>User</h1>
    )
}

{/* <Box sx={{ flexGrow: 0 }}>
<Tooltip title="Open settings">
    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
    </IconButton>
</Tooltip>
<Menu
    sx={{ mt: '45px' }}
    id="menu-appbar"
    anchorEl={anchorElUser}
    anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
    }}
    keepMounted
    transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
    }}
    open={Boolean(anchorElUser)}
    onClose={handleCloseUserMenu}
>
    {settings.map((setting) => (
        <MenuItem key={setting.title} onClick={setting.clickHandler}>
            <Typography textAlign="center">{setting.title}</Typography>
        </MenuItem>
    ))}
</Menu>
</Box> */}