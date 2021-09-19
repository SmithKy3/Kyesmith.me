import { useCallback, useEffect, useState } from 'react';

const DARK_MODE_KEY = 'KyeSmith.me-darkModeEnabled';
const DARK_MODE_CLASS = 'dark';

function getDarkModeState() {
  if (!window.localStorage) return false;

  const storedDarkModeState = window.localStorage.getItem(DARK_MODE_KEY);
  return storedDarkModeState ? JSON.parse(storedDarkModeState) : false;
}

function setDarkModeState(newDarkModeState: boolean): void {
  if (!window.localStorage) return;
  window.localStorage.setItem(DARK_MODE_KEY, JSON.stringify(newDarkModeState));
  applyDarkModeState(newDarkModeState);
}

function applyDarkModeState(darkModeState: boolean) {
  if (!document) return;

  const { body } = document;
  if (darkModeState) body.classList.add(DARK_MODE_CLASS);
  else body.classList.remove(DARK_MODE_CLASS);
}

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      const initialDarkModeState = getDarkModeState();
      setIsDarkMode(initialDarkModeState);
      applyDarkModeState(initialDarkModeState);
    }
  }, [setIsDarkMode]);

  const toggleDarkMode = useCallback(() => {
    const newDarkModeState = !isDarkMode;
    applyDarkModeState(newDarkModeState);
    setDarkModeState(newDarkModeState);
  }, [setIsDarkMode]);

  return {
    isDarkMode,
    toggleDarkMode,
  };
};
