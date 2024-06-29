import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import CopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';

export default function MuiSpeedDial() {
  return (
    <SpeedDial
      ariaLabel="naviigation speed dial"
      sx={{
        position: 'absolute',
        bottom: '16px',
        right: '16px',
      }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction
        onClick={() => console.log('clicked')}
        icon={<CopyIcon />}
        tooltipTitle="Copy"
        tooltipOpen
      />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" tooltipOpen />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" tooltipOpen />
    </SpeedDial>
  );
}
