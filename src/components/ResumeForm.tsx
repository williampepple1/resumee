/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/ResumeForm.tsx
import React from 'react';
import TextField from './TextField';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import { Resume, createEmptyEducation, createEmptyExperience } from '../typings';

interface ResumeFormProps {
  resume: Resume;
  setResume: (resume: Resume) => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ resume, setResume }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setResume({
      ...resume,
      [event.target.name]: event.target.value,
    });
  };

  const handleExperienceChange = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const newExperiences = resume.experiences.map((experience) =>
      experience.id === id
        ? { ...experience, [event.target.name]: event.target.value }
        : experience
    );
    setResume({ ...resume, experiences: newExperiences });
  };

  const handleEducationChange = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const newEducations = resume.educations.map((education) =>
      education.id === id
        ? { ...education, [event.target.name]: event.target.value }
        : education
    );
    setResume({ ...resume, educations: newEducations });
  };

  const handleAddExperience = () => {
    setResume((prevResume: { experiences: any; }) => ({
      ...prevResume,
      experiences: [...prevResume.experiences, createEmptyExperience()],
    }));
  };

  const handleAddEducation = () => {
    setResume((prevResume: { educations: any; }) => ({
      ...prevResume,
      educations: [...prevResume.educations, createEmptyEducation()],
    }));
  };

  return (
    <form>
      <TextField label="First Name" name="firstName" value={resume.firstName} onChange={handleInputChange} />
      {/* Repeat this for each field */}
      {resume.experiences.map((experience) => (
        <ExperienceForm key={experience.id} experience={experience} onChange={handleExperienceChange} />
      ))}
      <button type="button" onClick={handleAddExperience}>
        Add Experience
      </button>
      {resume.educations.map((education) => (
        <EducationForm key={education.id} education={education} onChange={handleEducationChange} />
      ))}
      <button type="button" onClick={handleAddEducation}>
        Add Education
      </button>
    </form>
  );
};

export default ResumeForm;
