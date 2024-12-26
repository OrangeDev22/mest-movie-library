"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import UserPicture from "@/app/components/UserPicture";
import { twMerge } from "tailwind-merge";
import Button from "../Button";

const userSettingsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  nickname: z.string().min(1, "Username required"),
});

type UserSettingsFormData = z.infer<typeof userSettingsSchema>;

const UserSettingsPage = ({
  onFormSubmitCompleted,
  onCancel,
}: {
  onFormSubmitCompleted: () => void;
  onCancel: () => void;
}) => {
  const { user } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<UserSettingsFormData>({
    resolver: zodResolver(userSettingsSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      nickname: user?.nickname || "",
    },
  });

  const onSubmit = async (data: UserSettingsFormData) => {
    try {
      const response = await fetch("/api/user/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
        }),
      });

      if (response.ok) {
        onFormSubmitCompleted();
      } else {
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-800 text-white rounded-lg shadow-md">
      <div className="flex items-center gap-6">
        <div className="rounded-full overflow-hidden border-2 border-gray-500">
          <UserPicture size="md" />
        </div>

        <form
          className="flex-1 flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label className="text-sm text-gray-400 block" htmlFor="name">
              Username
            </label>
            <input
              {...register("name")}
              className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white"
              id="name"
              type="text"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-400 block" htmlFor="email">
              Email
            </label>
            <input
              {...register("email")}
              className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white"
              id="email"
              type="email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-400 block" htmlFor="nickname">
              Nickname (optional)
            </label>
            <input
              {...register("nickname")}
              className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white"
              id="nickname"
              type="text"
            />
            {errors.nickname && (
              <span className="text-red-500 text-sm">
                {errors.nickname.message}
              </span>
            )}
          </div>

          <div className="mt-6 text-center flex gap-2 self-end">
            <Button type="button" onClick={() => onCancel()}>
              Cancel
            </Button>
            <Button
              type="submit"
              className={twMerge(
                "rounded-lg font-semibold",
                isSubmitting || !isDirty ? "opacity-50 cursor-not-allowed" : ""
              )}
              disabled={isSubmitting || !isDirty}
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSettingsPage;
