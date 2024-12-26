import { useState } from "react";
import Button from "../Button"; // Assuming Button is a custom component

interface DeleteUserCardProps {
  isLoading: boolean;
  onDeleteClick: () => void;
}

const DeleteUserCard = ({ isLoading, onDeleteClick }: DeleteUserCardProps) => {
  if (isLoading) {
    return (
      <div className="space-y-5 bg-base-100 p-4 rounded-lg shadow-md animate-pulse">
        <div className="h-6 bg-gray-700 rounded w-2/5"></div>
        <div className="h-10 bg-gray-700 rounded w-40"></div>
      </div>
    );
  }

  return (
    <div className="space-y-5 bg-base-100 p-4 rounded-lg shadow-md">
      <div className="text-lg font-bold">Delete Your User Account</div>
      <Button
        onClick={() => {
          onDeleteClick();
        }}
        color="danger"
      >
        Delete User
      </Button>
    </div>
  );
};

export default DeleteUserCard;
