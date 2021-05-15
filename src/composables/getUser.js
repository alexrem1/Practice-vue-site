import { ref } from "vue"; // creating a user value that'll be a ref value
import { projectAuth } from "../firebase/config";

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((_user) => {
  // console.log("user state changed. current user is:", _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
