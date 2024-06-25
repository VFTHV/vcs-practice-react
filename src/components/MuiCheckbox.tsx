import React, { useState } from 'react';
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from '@mui/material';
import { CheckBox } from '@mui/icons-material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function MuiCheckbox() {
  const [acceptTnC, setAcceptTnc] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.clear();
  console.log({ skills });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnc(event.target.checked);
  };
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const index = skills.indexOf(value);
    if (index === -1) {
      setSkills([...skills, value]);
    } else {
      const newSkills = skills.filter((skill) => skill !== value);
      setSkills(newSkills);
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={acceptTnC}
              onChange={handleChange}
            />
          }
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl error={skills.length === 0}>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value="HTML"
              control={
                <Checkbox
                  onChange={handleSkillChange}
                  checked={skills.includes('HTML')}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="CSS"
              control={
                <Checkbox
                  onChange={handleSkillChange}
                  checked={skills.includes('CSS')}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              value="JavaScript"
              control={
                <Checkbox
                  onChange={handleSkillChange}
                  checked={skills.includes('JavaScript')}
                />
              }
            />
          </FormGroup>
          <FormHelperText>
            {skills.length === 0 && 'Choose at least one'}
          </FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
}
