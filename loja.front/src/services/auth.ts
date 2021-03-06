export const TOKEN_KEY = "user";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => JSON.parse(localStorage.getItem(TOKEN_KEY) as string) as TokenAcess;

export interface TokenAcess {
    acessToken: string,
    expireIn: number,
    usuarioToken: UserToken
};

interface UserToken {
    id: string,
    email: string,
    claims: ClaimsToken[]
}

interface ClaimsToken {
    value: string,
    type: string
}

export const login = function(token: TokenAcess){
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getEmail = () => {
  return (getToken())
          .usuarioToken.claims.find(x => x.type === "email")?.value || "";
};