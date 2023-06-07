// src/components/TextField.tsx
import React from 'react';

interface TextFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default TextField;
