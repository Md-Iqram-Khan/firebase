import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaase.config";

const initializeAuth = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuth;
