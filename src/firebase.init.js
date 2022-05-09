import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBFn1dM9CP9obvL2_28OLHNNyDAkJbYgYg",
    authDomain: "posterisks.firebaseapp.com",
    projectId: "posterisks",
    storageBucket: "posterisks.appspot.com",
    messagingSenderId: "684640806161",
    appId: "1:684640806161:web:4bb7d3dbb2c952b2c5d8b0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;