
exports.google = {
   client_id: process.env.GOOGLE_CLIENT_ID,
   project_id: "fir-auth-prac",
   auth_uri: "https://accounts.google.com/o/oauth2/auth",
   token_uri: "https://oauth2.googleapis.com/token",
   auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
   client_secret: process.env.GOOGLE_CLIENT_SECRET,
   redirect_uris: [
      "http://localhost:3000/auth/google/callback",
      "http://localhost:4040/auth/google/redirect",
      "http://localhost:3040/auth/google/callback",
      "http://localhost:3010/auth/google/callback",
      "http://localhost:3030/auth/google/callback"
   ],
   javascript_origins: [
      "http://localhost:4040"
   ],
   scopes: ['profile']
}