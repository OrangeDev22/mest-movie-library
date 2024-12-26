import { Fragment, useState } from "react";
import Button from "../Button";
import { useMutation } from "@apollo/client";
import { DeleteUserDocument } from "@/__generated__/graphql";
import { useUser } from "@auth0/nextjs-auth0/client";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";

const DeleteUserModal = ({ onClose }: { onClose: () => void }) => {
  const { user } = useUser();
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const [deleteUser] = useMutation(DeleteUserDocument);

  const handleOnDeleteUser = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch("/api/user/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        await deleteUser();
      }

      onClose();
      router.push("/api/auth/logout");
    } catch (error) {
      console.error("--error", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Fragment>
      <div className="font-bold text-lg py-10">
        Are you sure you want to delete your password?
      </div>
      <div className="flex gap-4 justify-end w-full">
        <Button onClick={() => onClose()}>Cancel</Button>
        <Button
          color="danger"
          onClick={() => handleOnDeleteUser()}
          className={twMerge(
            "rounded-lg font-semibold",
            isDeleting ? "opacity-50 cursor-not-allowed" : ""
          )}
          disabled={isDeleting}
        >
          Confirm
        </Button>
      </div>
    </Fragment>
  );
};

export default DeleteUserModal;
