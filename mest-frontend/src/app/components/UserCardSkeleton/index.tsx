const UserCardSkeleton = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto bg-gray-800 text-white rounded-lg shadow-md flex flex-col gap-4 animate-pulse">
      {/* Top Section */}
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-gray-700"></div>{" "}
        {/* Profile picture */}
        <div className="flex-1">
          <div className="h-6 bg-gray-700 rounded w-2/5 mb-2"></div>{" "}
          {/* Name */}
        </div>
        <div className="h-10 w-28 bg-gray-700 rounded-lg"></div>{" "}
        {/* Edit Profile button */}
      </div>

      {/* User Information Section */}
      <div className="flex-1 bg-gray-700 p-4 rounded-lg space-y-4">
        <div>
          <div className="h-4 bg-gray-600 rounded w-1/4 mb-1"></div>{" "}
          {/* Label */}
          <div className="h-4 bg-gray-700 rounded w-2/3"></div> {/* Value */}
        </div>
        <div>
          <div className="h-4 bg-gray-600 rounded w-1/4 mb-1"></div>{" "}
          {/* Label */}
          <div className="h-4 bg-gray-700 rounded w-2/3"></div> {/* Value */}
        </div>
        <div>
          <div className="h-4 bg-gray-600 rounded w-1/4 mb-1"></div>{" "}
          {/* Label */}
          <div className="h-4 bg-gray-700 rounded w-2/3"></div> {/* Value */}
        </div>
      </div>
    </div>
  );
};

export default UserCardSkeleton;
