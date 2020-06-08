export const darkModeStorageToken = `Dude, where's my dark mode?`;

export function getDarkModeState() {
  const ls = window.localStorage;
  const storedValue = ls.getItem(darkModeStorageToken);

  if (storedValue === null) {
    ls.setItem(darkModeStorageToken, "false");
    return false;
  }

  return JSON.parse(storedValue);
}

export function toggleDarkMode() {
  const state = getDarkModeState();
  const newState = !state;

  !newState && document.body.classList.remove("dark-mode");
  newState && document.body.classList.add("dark-mode");

  const ls = window.localStorage;
  ls.setItem(darkModeStorageToken, `${newState}`);
}
