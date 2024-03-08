
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDuwlQXn3-WF6FpFSjFYoEFQ-7aTIpL-RQ",
  authDomain: "vapestore-55102.firebaseapp.com",
  projectId: "vapestore-55102",
  storageBucket: "vapestore-55102.appspot.com",
  messagingSenderId: "464867267243",
  appId: "1:464867267243:web:0e12f7571db528bf795dee",
  measurementId: "G-EMCN5ZZ05D"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);