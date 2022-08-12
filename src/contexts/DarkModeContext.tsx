import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

export interface DarkModeContext {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DARK_MODE_KEY = 'KyeSmith.me-darkModeEnabled';
const DARK_MODE_CLASS = 'dark';

const defaultDarkModeContext: DarkModeContext = {
  isDarkMode: false,
  toggleDarkMode: () => {},
};

export const darkModeContext = React.createContext<DarkModeContext>(
  defaultDarkModeContext
);

function applyDarkModeState(isDarkMode: boolean) {
  if (!document || !window) return;

  if (isDarkMode) {
    document.body.classList.add(DARK_MODE_CLASS);
  } else {
    document.body.classList.remove(DARK_MODE_CLASS);
  }

  window.localStorage.setItem(DARK_MODE_KEY, JSON.stringify(isDarkMode));
}

export const DarkModeContextProvider: React.FC<{}> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((currentValue) => {
      const valueToSet = !currentValue;
      applyDarkModeState(valueToSet);
      return valueToSet;
    });
  }, []);
  const getContextValue = useCallback<() => DarkModeContext>(
    () => ({ isDarkMode, toggleDarkMode }),
    [isDarkMode, toggleDarkMode]
  );

  useEffect(() => {
    const storedDarkModeState = window.localStorage.getItem(DARK_MODE_KEY);
    const initialDarkModeState: boolean =
      storedDarkModeState && JSON.parse(storedDarkModeState);
    applyDarkModeState(initialDarkModeState);
    setIsDarkMode(initialDarkModeState);
  }, []);

  return (
    <darkModeContext.Provider value={getContextValue()}>
      {children}
    </darkModeContext.Provider>
  );
};

export const useDarkModeContext = () => useContext(darkModeContext);
