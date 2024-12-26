import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getSession, updateSession } from "@auth0/nextjs-auth0";
import { getManagementApiToken } from "../../utils";
import { NextResponse } from "next/server";

const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;

export async function POST(req: NextApiRequest) {
  const data = await req.json();

  const { name, email, nickname } = data;

  const session = await getSession();

  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized" },
      {
        status: 401,
      }
    );
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
