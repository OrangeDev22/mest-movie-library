"use client";

import UserCard from "@/app/components/UserCard";
import UserFormSettings from "@/app/components/UserFormSettings";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";

const UserSettingsPage = () => {
  const { user, isLoading, checkSession } = useUser();
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="my-6">
      {openForm ? (
        <UserFormSettings
          onFormSubmitCompleted={async () => {
            await checkSession();
            setOpenForm(false);
          }}
        />
      ) : (
        <UserCard
          user={user}
          isLoading={isLoading}
          onButtonClick={() => setOpenForm(true)}
        />
      )}
    </div>
  );
};

export default UserSettingsPage;
