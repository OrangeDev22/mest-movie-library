import { getAccessToken, getSession } from "@auth0/nextjs-auth0";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { getManagementApiToken } from "../../utils";
import { NextResponse } from "next/server";

const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;

export async function POST(req: NextApiRequest) {
  try {
    const data = await req.json();

    const { newPassword } = data;
    const session = await getSession();

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        {
          status: 401,
        }
      );
    }

    if (!newPassword) {
      return NextResponse.json(
        { error: "Missing required fields" },
        {
          status: 404,
        }
      );
    }

    const accessToken = await getManagementApiToken();

    const response = await axios.patch(
      `${AUTH0_DOMAIN}/api/v2/users/${session.user.sub}`,
      JSON.stringify({
        password: newPassword,
        connection: "Username-Password-Authentication",
      }),
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    return Response.json(response.data);
  } catch (error) {
    console.error("--error", error);
    return Response.json({ message: "Error updating user" });
  }
}
