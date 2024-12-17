export const getUserDropdownItems = () => {
  return [
    {
      text: "Settings",
      url: "/user/settings",
    },
    {
      text: "Favorite Movies",
      url: "/favorites",
    },
    {
      text: "Logout",
      url: "/api/auth/logout",
      className: "text-red-500",
    },
  ];
};
