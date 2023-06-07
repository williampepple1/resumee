// src/components/Resume.tsx
import React from 'react';
import { Resume } from '../typings';


interface ResumeProps {
  resume: Resume;
}

const Resume: React.FC<ResumeProps> = ({ resume }) => {
  return (
    <div>
      <h1>
        {resume.firstName} {resume.lastName}
      </h1>
      {/* Display the rest of the resume data */}
    </div>
  );
};

export default Resume;
