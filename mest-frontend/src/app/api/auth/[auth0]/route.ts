import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    authorizationParams: {
      scope:
        "openid profile email update:users read:current_user update:users_app_metadata update:current_user_metadata",
    },
  }),
});
