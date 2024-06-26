import { Box, Stack, Divider } from '@mui/material';

export default function MuiLayout() {
  return (
    <Stack
      sx={{ border: '1px solid' }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          height: '100px',
          width: '100px',
          padding: '16px',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
        }}
      >
        I am the best and highest paid developer
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      ></Box>
    </Stack>
  );
}
