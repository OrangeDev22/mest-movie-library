const UserCardSkeleton = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-800 text-white rounded-lg shadow-md">
      <div className="flex items-center gap-6 animate-pulse">
        {/* Skeleton for user profile picture */}
        <div className="w-20 h-20 rounded-full bg-gray-700"></div>

        {/* Skeleton for user information */}
        <div className="flex-1">
          <div className="mb-4">
            <div className="h-6 bg-gray-700 rounded w-32"></div>
          </div>
          <div className="mb-4">
            <div className="h-4 bg-gray-700 rounded w-48"></div>
          </div>
          <div className="mb-4">
            <div className="h-4 bg-gray-700 rounded w-40"></div>
          </div>
        </div>
      </div>

      {/* Skeleton for the Edit Profile button */}
      <div className="mt-6 text-center">
        <div className="inline-block h-10 w-32 bg-gray-700 rounded-lg"></div>
      </div>
    </div>
  );
};

export default UserCardSkeleton;
