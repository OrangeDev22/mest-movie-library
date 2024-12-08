import UserCardSkeleton from "./UserCardSkeleton";
import UserPicture from "./UserPicture";
import { UserProfile } from "@auth0/nextjs-auth0/client";

interface UserCardProps {
  user: UserProfile | undefined;
  isLoading: boolean;
  onButtonClick: () => void;
}

const UserCard = ({ user, isLoading, onButtonClick }: UserCardProps) => {
  if (isLoading) return <UserCardSkeleton />;
  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-800 text-white rounded-lg shadow-md">
      <div className="flex items-center gap-6">
        {/* User profile picture */}
        <div className="rounded-full overflow-hidden border-2 border-gray-500">
          <UserPicture size="md" />
        </div>

        {/* User information */}
        <div className="flex-1">
          <div className="mb-4">
            <label className="text-sm text-gray-400 block">Username</label>
            <div className="text-2xl font-semibold">{user?.name}</div>
          </div>
          <div className="mb-4">
            <label className="text-sm text-gray-400 block">Email</label>
            <div className="text-gray-400 text-sm">{user?.email}</div>
          </div>
          <div className="mb-4">
            <label className="text-sm text-gray-400 block">Nickname</label>
            <div className="text-gray-400 text-sm">{user?.nickname}</div>
          </div>
        </div>
      </div>

      {/* Edit button */}
      <div className="mt-6 text-center">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg font-semibold"
          onClick={onButtonClick}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;
