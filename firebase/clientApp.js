import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
// 	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
// 	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
// 	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
// 	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
// 	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// 	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

// const firebaseConfig = {
// 	apiKey: "AIzaSyDlsuOBM7TKxG_rUNuJRNtE1Na6__CSn2Y",
// 	authDomain: "royal-drive-web.firebaseapp.com",
// 	projectId: "royal-drive-web",
// 	storageBucket: "royal-drive-web.appspot.com",
// 	messagingSenderId: "7477058159",
// 	appId: "1:7477058159:web:d132a380978817e08acb9a",
// 	measurementId: "G-QTBJFHJDBC",
// };

const firebaseConfig = {
    apiKey: "AIzaSyB5_nxSVC83kszaVIl3LkjOgJJ0oB0HJ0U",
    authDomain: "netflix-clone-midhun.firebaseapp.com",
    projectId: "netflix-clone-midhun",
    storageBucket: "netflix-clone-midhun.appspot.com",
    messagingSenderId: "37046363983",
    appId: "1:37046363983:web:a3781756a1726926d3873a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("app app", app);
// const analytics = getAnalytics(app);
export const authentication = getAuth(app);
