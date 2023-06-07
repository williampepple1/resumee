// src/App.tsx
import React, { useState, useEffect } from 'react';
import { Resume as ResumeType, createEmptyResume } from './typings';
import ResumeForm from './components/ResumeForm';
import Resume from './components/Resume';
import { saveToLocalStorage, loadFromLocalStorage, deleteFromLocalStorage } from './utils';

const App: React.FC = () => {
  const [resume, setResume] = useState<ResumeType>(createEmptyResume());
  const [resumeId, setResumeId] = useState<string | null>(null);

  useEffect(() => {
    if (resumeId) {
      const loadedResume = loadFromLocalStorage(resumeId);
      if (loadedResume) {
        setResume(loadedResume);
      }
    }
  }, [resumeId]);

  const handleSave = () => {
    saveToLocalStorage(resume.id, resume);
  };

  const handleLoad = (id: string) => {
    setResumeId(id);
  };

  const handleDelete = () => {
    if (resumeId) {
      deleteFromLocalStorage(resumeId);
    }
  };

  return (
    <div>
      <ResumeForm resume={resume} setResume={setResume} />
      <Resume resume={resume} />
      <button onClick={handleSave}>Save</button>
      <button onClick={() => handleLoad('some-id')}>Load</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default App;
