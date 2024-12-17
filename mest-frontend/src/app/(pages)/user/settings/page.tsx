"use client";

import Button from "@/app/components/Button";
import ChangePasswordCard from "@/app/components/ChangePasswordCard";
import ChangePasswordForm from "@/app/components/ChangePasswordForm";
import UserCard from "@/app/components/UserCard";
import UserFormSettings from "@/app/components/UserFormSettings";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import ReactModal from "react-modal";

const UserSettingsPage = () => {
  const { user, isLoading, checkSession } = useUser();
  const [openForm, setOpenForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="my-6 space-y-5 max-w-3xl mx-auto p-4 md:p-0">
      {openForm ? (
        <UserFormSettings
          onFormSubmitCompleted={async () => {
            await checkSession();
            setOpenForm(false);
          }}
          onCancel={() => setOpenForm(false)}
        />
      ) : (
        <UserCard
          user={user}
          isLoading={isLoading}
          onButtonClick={() => setOpenForm(true)}
        />
      )}
      <ReactModal
        isOpen={isModalOpen}
        className="  bg-base-100  text-white rounded-lg shadow-md outline-none p-4 md:min-w-xl w-4/5 md:w-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        onRequestClose={() => setIsModalOpen(false)}
      >
        <ChangePasswordForm onClose={() => setIsModalOpen(false)} />
      </ReactModal>
      <ChangePasswordCard
        onButtonClick={() => setIsModalOpen(true)}
        isLoading={isLoading}
      />
    </div>
  );
};

export default UserSettingsPage;
