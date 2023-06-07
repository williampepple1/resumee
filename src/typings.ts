// src/types.ts
import { v4 as uuidv4 } from 'uuid';

interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

interface Resume {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  educations: Education[];
  experiences: Experience[];
}

const createEmptyResume = () : Resume => ({
   id: uuidv4(),
   firstName: '',
   lastName: '',
   email: '',
   phoneNumber: '',
   educations: [],
   experiences: [],
})


const createEmptyEducation = (): Education => ({
  id: uuidv4(),
  institution: '',
  degree: '',
  startDate: '',
  endDate: '',
});

const createEmptyExperience = (): Experience => ({
  id: uuidv4(),
  company: '',
  position: '',
  startDate: '',
  endDate: '',
  responsibilities: [],
});

export type { Education, Experience, Resume };
export { createEmptyEducation, createEmptyExperience, createEmptyResume };
