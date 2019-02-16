export interface IAccessToken {
  accessToken: string;
  appState: string;
  expiresIn: number;
  idToken: string;
  idTokenPayload: IIdTokenPayload;
  refreshToken: string;
  scope: string;
  state: string;
  tokenType: string;
}

export interface IIdTokenPayload {
  at_hash: string;
  aud: string;
  exp: number;
  iat: number;
  iss: string;
  nonce: string;
  sub: string;
}
