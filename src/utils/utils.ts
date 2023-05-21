export const extractTokenFromSetCookie = (
  setCookieHeader: string
): string | null => {
  const cookieParts = setCookieHeader.split(';');
  for (const part of cookieParts) {
    const [name, value] = part.trim().split('=');
    if (name === 'token') {
      return value;
    }
  }
  return null;
};
export const getCookieValue = (name: string): string | null => {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
};
