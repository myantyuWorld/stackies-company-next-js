import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function NotificationButton() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let open = Boolean(anchorEl);
  let id = open ? 'simple-popover' : undefined;

  return (
    <IconButton
      size="large"
      aria-label="show 17 new notifications"
      color="inherit"
      onClick={handleClick}
    >
      <Badge badgeContent={17} color="error" aria-describedby={id}>
        <NotificationsIcon />
      </Badge>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Stack sx={{ width: '100%' }} spacing={1}>
          <Alert severity="error">This is an error alert — check it out!</Alert>
          <Alert severity="warning">This is a warning alert — check it out!</Alert>
          <Alert severity="info">This is an info alert — check it out!</Alert>
          <Alert severity="success">This is a success alert — check it out!</Alert>
        </Stack>
      </Popover>
    </IconButton>
  )
}