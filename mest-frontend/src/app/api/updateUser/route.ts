import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getSession, updateSession } from "@auth0/nextjs-auth0";

const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID;
const AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET;
const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
const AUTH0_SCOPE = "update:users";

async function getManagementApiToken() {
  const response = await axios.post(`${AUTH0_DOMAIN}/oauth/token`, {
    grant_type: "client_credentials",
    client_id: AUTH0_CLIENT_ID,
    client_secret: AUTH0_CLIENT_SECRET,
    audience: AUTH0_AUDIENCE,
    scope: AUTH0_SCOPE,
  });
  return response.data.access_token;
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const data = await req.json();

  const { name, email, nickname } = data;

  const session = await getSession();
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const accessToken = await getManagementApiToken();

    const response = await axios.patch(
      `${AUTH0_DOMAIN}/api/v2/users/${session.user.sub}`,
      JSON.stringify({
        name,
        user_metadata: {},
        email,
        nickname,
      }),
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    await updateSession({
      ...session,
      user: { ...session.user, name, email, nickname },
    });
    return Response.json(response.data);
  } catch (error) {
    console.error("--error", error);
    return Response.json({ message: "Error updating user" });
  }
}
