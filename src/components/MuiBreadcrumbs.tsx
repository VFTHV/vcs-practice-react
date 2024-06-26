import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function MuiBreadcrumbs() {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrump"
        separator={<NavigateNextIcon fontSize="small" />}
        maxItems={2}
        itemsBeforeCollapse={2}
        // itemsAfterCollapse={2}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
}
