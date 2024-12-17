import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordSchema } from "./schema";
import Button from "../Button";
import { XMarkIcon } from "@heroicons/react/24/solid";

type ChangePasswordFormData = z.infer<typeof passwordSchema>;

const ChangePasswordForm = ({ onClose }: { onClose: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(passwordSchema),
  });

  const onFormSubmit = async (data: ChangePasswordFormData) => {
    // onSubmit(data.newPassword);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4 relative">
      <button
        onClick={onClose}
        className="absolute -top-5 right-0 text-gray-400 hover:text-gray-200"
        aria-label="Close"
        type="button"
      >
        <XMarkIcon className="w-6 h-6" />
      </button>
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold ">Update your password</h1>
        <h2 className="text-md text-gray-400">Enter your new password</h2>
      </div>
      <div>
        <label htmlFor="newPassword" className="text-sm text-gray-400">
          New Password
        </label>
        <input
          {...register("newPassword")}
          id="newPassword"
          type="password"
          className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white"
        />
        {errors.newPassword && (
          <span className="text-red-500 text-sm">
            {errors.newPassword.message}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="confirmPassword" className="text-sm text-gray-400">
          Confirm Password
        </label>
        <input
          {...register("confirmPassword")}
          id="confirmPassword"
          type="password"
          className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white"
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <div className="mt-6 text-center">
        <Button
          type="submit"
          className={`text-white py-2 px-6 rounded-lg font-semibold ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          Change Password
        </Button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
