import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import React, { useState, SetStateAction } from 'react';

type Props = {
  setValue: React.Dispatch<SetStateAction<number>>;
};

export default function MuiBottonNavigation({ setValue }: Props) {
  const [number, setNumber] = useState(0);

  return (
    <BottomNavigation
      sx={{ width: '100%', position: 'absolute', bottom: 0 }}
      value={number}
      onChange={(_, newValue) => {
        setValue(newValue);
        setNumber(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
    </BottomNavigation>
  );
}
