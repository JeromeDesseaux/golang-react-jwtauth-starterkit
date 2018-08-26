import decode from 'jwt-decode';
const ACCESS_TOKEN_KEY = 'access_token';

export function setToken(token) {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  }

function getTokenExpirationDate(encodedToken) {
    const token = decode(encodedToken);
    if (!token.exp) { return null; }
  
    const date = new Date(0);
    date.setUTCSeconds(token.exp);
  
    return date;
}

function isTokenExpired(token) {
    const expirationDate = getTokenExpirationDate(token);
    return expirationDate < new Date();
}

export function isLoggedIn() {
    const idToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    var res = !!idToken && !isTokenExpired(idToken);
    console.log(res);
    return res;
}



