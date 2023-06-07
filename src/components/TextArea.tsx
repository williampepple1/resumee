// src/components/TextArea.tsx
import React from 'react';

interface TextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default TextArea;
