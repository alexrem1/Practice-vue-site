import { projectAuth } from "../firebase/config";
import { ref } from "vue";

const email = ref("");

const forgetPassword = async () => {
  try {
    await projectAuth.sendPasswordResetEmail(email.value);
    alert("Check your registered email to reset the password!");
    email.value = "";
  } catch (error) {
    alert(error);
  }
};

const getPassword = () => {
  return { forgetPassword, email };
};

export default getPassword;
