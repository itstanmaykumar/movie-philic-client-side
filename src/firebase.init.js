import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBFn1dM9CP9obvL2_28OLHNNyDAkJbYgYg",
    authDomain: "posterisks.firebaseapp.com",
    projectId: "posterisks",
    storageBucket: "posterisks.appspot.com",
    messagingSenderId: "684640806161",
    appId: "1:684640806161:web:4bb7d3dbb2c952b2c5d8b0"

    /*apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID*/
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;