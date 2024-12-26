"use client";
import { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  CreateUserDocument,
  GetOneUserDocument,
  UpdateUserDocument,
} from "@/__generated__/graphql";
import { checkUserIsSync } from "@/utils";

const UserAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useUser();

  const { data, loading, error, refetch } = useQuery(GetOneUserDocument, {
    skip: !user?.sub,
  });

  const [createUser] = useMutation(CreateUserDocument);
  const [updateUser] = useMutation(UpdateUserDocument);

  useEffect(() => {
    if (isLoading || !user || data?.getOneUser) return;

    if (!data?.getOneUser && !loading && user.sub) {
      createUser({
        variables: {
          createUserInput: {
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
    if (!data?.getOneUser || !user) return;

    const isUserSyncUp = checkUserIsSync(data?.getOneUser, user);

    if (!isUserSyncUp) {
      updateUser({
        variables: {
          updateUserInput: {
            id: data?.getOneUser.id,
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

  if (error) {
    console.error("GraphQL Error:", error);
    return <div>Error loading user data.</div>;
  }

  return <>{children}</>;
};

export default UserAuthProvider;
