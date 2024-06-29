import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/material';

export type DisplayNavProps = {
  page: number;
};

export default function DisplayNav({ page }: DisplayNavProps) {
  const style = {
    width: '100%',
    height: '100%',
  };
  const renderPage = () => {
    if (page === 0) {
      return <HomeIcon sx={style} />;
    } else if (page === 1) {
      return <FavoriteIcon sx={style} />;
    } else {
      return <PersonIcon sx={style} />;
    }
  };

  return (
    <Box
      sx={{
        border: '1px solid red',
      }}
    >
      {renderPage()}
    </Box>
  );
}
