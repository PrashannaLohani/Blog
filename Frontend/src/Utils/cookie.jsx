export function setCookie(name, value, days = 72000) {
  const date = new Date();
  date.setTime(date.getTime() + days * 1000);
  const expires = `; expires=${date.toUTCString()}`;

  document.cookie = `${name}=${value}${expires}; path=/`;
}

export function getCookie(name) {
  if (typeof document !== "undefined") {
    const cookies = document?.cookie.split(";");
    for (let cookie of cookies) {
      while (cookie.charAt(0) === " ")
        cookie = cookie.substring(1, cookie.length);
      if (cookie.indexOf(`${name}=`) === 0)
        return cookie.substring(name.length + 1, cookie.length);
    }
  }

  return null; // Add a return statement to handle the case when the cookie is not found.
}

export function deleteCookie(name) {
  setCookie(name, "", -1);
}
