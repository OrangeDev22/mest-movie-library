import { UserProfile } from "@auth0/nextjs-auth0/client";
import { User } from "./__generated__/graphql";

export const checkUserIsSync = (dbUser: User, auth0User: UserProfile) => {
  // Mapping of Auth0 fields to database fields
  const fieldMapping: { [key in keyof UserProfile]?: keyof User } = {
    email: "email",
    nickname: "nickName",
    name: "name",
  };

  return Object.entries(fieldMapping).every(([auth0Field, dbField]) => {
    return !(
      auth0Field in auth0User &&
      dbField &&
      dbUser[dbField] !== auth0User[auth0Field as keyof UserProfile]
    );
  });
};
