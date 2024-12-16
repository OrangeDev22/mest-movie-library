"use client";
import { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  CreateUserDocument,
  GetOneByAuth0IdUserDocument,
  UpdateUserDocument,
} from "@/__generated__/graphql";
import { checkUserIsSync } from "@/utils";

const UserAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useUser();

  const { data, loading, error, refetch } = useQuery(
    GetOneByAuth0IdUserDocument,
    {
      variables: { authId: user?.sub ?? "auth0|67560bd505921aeb3737847e" },
      skip: !user?.sub,
    }
  );

  const [createUser] = useMutation(CreateUserDocument);
  const [updateUser] = useMutation(UpdateUserDocument);

  useEffect(() => {
    if (isLoading || !user || data?.getOneByAuth0IdUser) return;

    if (!data?.getOneByAuth0IdUser && !loading && user.sub) {
      createUser({
        variables: {
          createUserInput: {
            auth0Id: user.sub,
            email: user.email || "",
            name: user.name || "",
            nickName: user.nickname || "",
          },
        },
      })
        .then(() => {
          console.log("User created successfully.");
          refetch();
        })
        .catch((err) => console.error("Error creating user:", err));
    }
  }, [user, data, loading, isLoading, refetch]);

  useEffect(() => {
    if (!data?.getOneByAuth0IdUser || !user) return;

    const isUserSyncUp = checkUserIsSync(data.getOneByAuth0IdUser, user);

    if (!isUserSyncUp) {
      updateUser({
        variables: {
          updateUserInput: {
            id: data.getOneByAuth0IdUser.id,
            email: user.email,
            name: user.name,
            nickName: user.nickname,
          },
        },
      })
        .then(() => {
          console.log("updating user completed");
          refetch();
        })
        .catch((err) => console.error("Error creating user:", err));
    }
  }, [user, data]);

  if (isLoading || loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("GraphQL Error:", error);
    return <div>Error loading user data.</div>;
  }

  return <>{children}</>;
};

export default UserAuthProvider;
