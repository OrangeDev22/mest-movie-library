import Button from "../Button";
import UserCardSkeleton from "../UserCardSkeleton";
import UserPicture from "../UserPicture";
import { UserProfile } from "@auth0/nextjs-auth0/client";

interface UserCardProps {
  user: UserProfile | undefined;
  isLoading: boolean;
  onButtonClick: () => void;
}

const UserCard = ({ user, isLoading, onButtonClick }: UserCardProps) => {
  if (isLoading) return <UserCardSkeleton />;
  return (
    <div className="p-4 max-w-3xl mx-auto bg-base-100  text-white rounded-lg shadow-md flex flex-col gap-4">
      <div className="flex items-center gap-6">
        {/* User profile picture */}
        <div className="flex gap-3 flex-col sm:flex-row items-start sm:items-center w-full">
          <div className="flex gap-3 items-center">
            <div className="rounded-full overflow-hidden border-2 border-gray-500">
              <UserPicture
                size="md"
                className="w-16 h-16 sm:w-24 sm:h-24"
                containerClassName="w-16 h-16 sm:w-24 sm:h-24"
              />
            </div>
            <div className="">
              <div className="md:text-2xl font-semibold">{user?.name}</div>
            </div>
          </div>
          <div className="text-center ml-auto w-full sm:w-auto">
            <Button
              className="text-white rounded-lg font-semibold w-full sm:w-90"
              onClick={onButtonClick}
            >
              Edit Profile
            </Button>
          </div>
        </div>
      </div>

      {/* User information */}
      <div className="flex-1 bg-gray-800 p-4 rounded-lg">
        <div className="mb-4">
          <label className="text-sm text-gray-400 block font-bold">
            Username
          </label>
          <div className="text-gray-400 text-sm">{user?.email}</div>
        </div>
        <div className="mb-4">
          <label className="text-sm text-gray-400 block font-bold">Email</label>
          <div className="text-gray-400 text-sm">{user?.email}</div>
        </div>
        <div className="">
          <label className="text-sm text-gray-400 block font-bold">
            Nickname
          </label>
          <div className="text-gray-400 text-sm">{user?.nickname}</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
