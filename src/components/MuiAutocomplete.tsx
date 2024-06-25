import { useState } from 'react';
import { Stack, Autocomplete, TextField } from '@mui/material';

type Skill = {
  id: number;
  label: string;
};

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];

const skillsOptions = skills.map(
  (skill, index): Skill => ({
    id: index + 1,
    label: skill,
  })
);

export default function MuiAutocomplete() {
  const [skill, setSkill] = useState<string | null>(null);
  const [skillsOption, setSkillsOption] = useState<Skill | null>(null);
  console.log({ skillsOption });
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        onChange={(e: any, newValue: string | null) => setSkill(newValue)}
        value={skill}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        onChange={(e: any, newValue: Skill | null) => setSkillsOption(newValue)}
        value={skillsOption}
        renderInput={(params) => <TextField {...params} label="Skills" />}
      />
    </Stack>
  );
}
