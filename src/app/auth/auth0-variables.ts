interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'Y13Hc9Y7yTw9Px5QpiWd650YzpHyOBr2',
  domain: 'tttest.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
