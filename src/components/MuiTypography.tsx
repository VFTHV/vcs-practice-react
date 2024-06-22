import { Typography } from '@mui/material';

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component={'h1'} gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias
        possimus, ut fuga itaque est. Magni earum officia eius cupiditate beatae
        perferendis rem ipsa ex eveniet porro, praesentium, ut veniam.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        pariatur earum eligendi blanditiis nisi ducimus rerum nesciunt, ratione
        velit odio quae, voluptatibus repudiandae. Pariatur, ipsam ex accusamus
        alias facilis incidunt.
      </Typography>
    </div>
  );
};
