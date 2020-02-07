
exports.google = {
   client_id: process.env.GOOGLE_CLIENT_ID,
   project_id: "fir-auth-prac",
   auth_uri: "https://accounts.google.com/o/oauth2/auth",
   token_uri: "https://oauth2.googleapis.com/token",
   auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
   client_secret: process.env.GOOGLE_CLIENT_SECRET,
   redirect_uris: [
      "http://localhost:3875/auth/google/callback",
   ],
   javascript_origins: [
      "http://localhost:3875"
   ],
   scopes: ['profile', "email"]
}

exports.facebook = {
   client_id: process.env.FB_CLIENT_ID,
   project_id: process.env.FB_CLIENT_ID,
   auth_uri: "https://facebook.com/v6.0/dialog/oauth",
   client_secret: process.env.FB_CLIENT_SECRET,
   redirect_uris: [
      "https://localhost:3876/auth/facebook/callback",
   ],
   javascript_origins: [
      "https://localhost:3876"
   ],
   scopes: ["email"]
}

exports.github = {
   client_id: process.env.GIT_CLIENT_ID,
   client_secret: process.env.GIT_CLIENT_SECRET,
   auth_uri: "https://github.com/login/oauth/authorize",
   redirect_uris: [
      "http://localhost:3875/auth/github/callback",
      "https://localhost:3876/auth/github/callback"
   ],
   scopes: ["user:email"]
}

exports.linkedin = {
   clientID: process.env.LINKEDIN_CLIENT_ID,
   clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
   callbackURL: "https://localhost:3876/auth/linkedin/callback",
   scope: ['r_emailaddress', 'r_liteprofile', "w_member_social"]
}