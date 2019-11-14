import { Auth } from "aws-amplify";

export const handleLogout = async () => {
  try {
    await Auth.signOut();
    console.log("signing out!");
  } catch (error) {
    console.error("error during logout", error);
  }
};
