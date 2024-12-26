import { Fragment } from "react";
import Button from "../Button";

const DeleteUserModal = () => {
  return (
    <Fragment>
      <div className="font-bold text-lg py-10">
        Are you sure you want to delete your password?
      </div>
      <div className="flex gap-4 justify-end w-full">
        <Button>Cancel</Button>
        <Button color="danger">Confirm</Button>
      </div>
    </Fragment>
  );
};

export default DeleteUserModal;
