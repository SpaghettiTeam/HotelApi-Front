interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: "50Kb7NK2OEFJPTcjSZMgx1evRBUWa-6p",
  domain: "tttest.eu.auth0.com",
  callbackURL: "http://localhost:4200/callback"
};
