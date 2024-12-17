import { useState } from "react";
import Button from "../Button"; // Assuming Button is a custom component

interface ChangePasswordCardProps {
  isLoading: boolean;
  onButtonClick: () => void;
}

const ChangePasswordCard = ({
  isLoading,
  onButtonClick,
}: ChangePasswordCardProps) => {
  if (isLoading) {
    return (
      <div className="space-y-5 bg-base-100 p-4 rounded-lg shadow-md animate-pulse">
        <div className="h-6 bg-gray-700 rounded w-2/5"></div>{" "}
        <div className="h-10 bg-gray-700 rounded w-40"></div>{" "}
      </div>
    );
  }

  return (
    <div className="space-y-5 bg-base-100 p-4 rounded-lg shadow-md">
      <div className="text-lg font-bold">Change Password</div>
      <Button
        onClick={() => {
          onButtonClick();
        }}
      >
        Change password
      </Button>
    </div>
  );
};

export default ChangePasswordCard;
