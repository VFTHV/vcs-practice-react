import { Stack, Chip, Avatar } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import { useState } from 'react';

export default function MuiChip() {
  const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3']);

  const handleDelete = (chipToDelete: string) => {
    const newChips = chips.filter((chip) => chip !== chipToDelete);
    setChips(newChips);
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="chip" color="primary" size="small" icon={<FaceIcon />} />
      <Chip
        label="chip outlined"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip
        label="Click"
        color="success"
        onClick={() => console.log('clicked')}
      />
      <Chip
        label="Delete"
        color="error"
        onClick={() => console.log('clicked delete')}
        onDelete={() => console.log('delete handler called')}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
}
