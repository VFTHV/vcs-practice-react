import { Stack, Badge, Box, Button } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';

export default function MuiBadge() {
  const [invisible, setInvisible] = useState(false);

  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="primary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="secondary" max={999}>
        <MailIcon />
      </Badge>
      <Button onClick={() => setInvisible(!invisible)}>
        <Badge variant="dot" color="secondary" invisible={invisible}>
          <MailIcon />
        </Badge>
      </Button>
    </Stack>
  );
}
