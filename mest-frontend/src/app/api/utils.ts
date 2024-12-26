import axios from "axios";
import { getSession, updateSession } from "@auth0/nextjs-auth0";

const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID;
const AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET;
const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
const AUTH0_SCOPE = "update:users";

export async function getManagementApiToken() {
  const response = await axios.post(`${AUTH0_DOMAIN}/oauth/token`, {
    grant_type: "client_credentials",
    client_id: AUTH0_CLIENT_ID,
    client_secret: AUTH0_CLIENT_SECRET,
    audience: AUTH0_AUDIENCE,
    scope: AUTH0_SCOPE,
  });
  return response.data.access_token;
}
