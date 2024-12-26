"use client";

import Button from "@/app/components/Button";
import ChangePasswordCard from "@/app/components/ChangePasswordCard";
import ChangePasswordForm from "@/app/components/ChangePasswordForm";
import DeleteUserCard from "@/app/components/DeleteUserCard";
import DeleteUserModal from "@/app/components/DeleteUserModal";
import UserCard from "@/app/components/UserCard";
import UserFormSettings from "@/app/components/UserFormSettings";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import ReactModal from "react-modal";

const UserSettingsPage = () => {
  const { user, isLoading, checkSession } = useUser();
  const [openForm, setOpenForm] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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

      <ChangePasswordCard
        onButtonClick={() => setIsPasswordModalOpen(true)}
        isLoading={isLoading}
      />

      <DeleteUserCard
        onDeleteClick={() => {
          setIsDeleteModalOpen(true);
        }}
        isLoading={isLoading}
      />

      {/* MODALS */}

      <ReactModal
        isOpen={isPasswordModalOpen}
        className="bg-base-100  text-white rounded-lg shadow-md outline-none p-4 md:min-w-xl w-4/5 md:w-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        onRequestClose={() => setIsPasswordModalOpen(false)}
      >
        <ChangePasswordForm onClose={() => setIsPasswordModalOpen(false)} />
      </ReactModal>

      <ReactModal
        isOpen={isDeleteModalOpen}
        className="bg-base-100 p-4 text-white rounded-lg shadow-md outline-none md:min-w-xl w-4/5 md:w-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        onRequestClose={() => setIsDeleteModalOpen(false)}
      >
        <DeleteUserModal onClose={() => setIsDeleteModalOpen(false)} />
      </ReactModal>
    </div>
  );
};

export default UserSettingsPage;
