import { Stack, TextField, InputAdornment } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';

export const MuiTextField = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? 'Required' : 'Do not share your password with anyone'
          }
        />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
          disabled
        />
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>

      <Stack>
        <TextField
          label="Password"
          type={isPasswordVisible ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <div
                  onMouseDown={() => setIsPasswordVisible(true)}
                  onMouseUp={() => setIsPasswordVisible(false)}
                  style={{ cursor: 'pointer' }}
                >
                  {isPasswordVisible ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </div>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};
