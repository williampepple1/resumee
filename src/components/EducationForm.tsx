// src/components/EducationForm.tsx
import React from 'react';
import TextField from './TextField';
import { Education } from '../typings';


interface EducationFormProps {
  education: Education;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ education, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event, education.id);
  };

  return (
    <div>
      <TextField label="Institution" name="institution" value={education.institution} onChange={handleInputChange} />
      
      {/* Repeat this for each field */}
    </div>
  );
};

export default EducationForm;
