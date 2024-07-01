import { Tooltip, IconButton, TooltipProps } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MuiTooltip() {
  return (
    <Tooltip
      title="Delete"
      placement="right-start"
      arrow
      enterDelay={500}
      leaveDelay={200}
    >
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}
