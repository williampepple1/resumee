// src/components/ExperienceForm.tsx
import React from 'react';
import TextField from './TextField';
import { Experience } from '../typings';


interface ExperienceFormProps {
  experience: Experience;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ experience, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event, experience.id);
  };

  return (
    <div>
      <TextField label="Company" name="company" value={experience.company} onChange={handleInputChange} />
      {/* Repeat this for each field */}
    </div>
  );
};

export default ExperienceForm;
