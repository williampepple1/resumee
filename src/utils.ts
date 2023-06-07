// src/utils/localStorage.ts
export const saveToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
// src/utils/localStorage.ts

export const loadFromLocalStorage = (key: string) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(`Error loading data from LocalStorage: ${error}`);
      return null;
    }
  };
  
  export const deleteFromLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };
  