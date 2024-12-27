export const getUserDropdownItems = () => {
  return [
    {
      text: "Favorite Movies",
      url: "/favorites",
    },
    {
      text: "Settings",
      url: "/user/settings",
    },
    {
      text: "Logout",
      url: "/api/auth/logout",
      className: "text-red-500",
    },
  ];
};
