import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyB5_nxSVC83kszaVIl3LkjOgJJ0oB0HJ0U",
//     authDomain: "netflix-clone-midhun.firebaseapp.com",
//     projectId: "netflix-clone-midhun",
//     storageBucket: "netflix-clone-midhun.appspot.com",
//     messagingSenderId: "37046363983",
//     appId: "1:37046363983:web:83a1c622ef9d66fed3873a",
// };

const firebaseConfig = {
    apiKey: "AIzaSyDnF45kRf5Tnjgo8xrmPJ5T4OY80JBLC4g",
    authDomain: "tg-e-com-app.firebaseapp.com",
    projectId: "tg-e-com-app",
    storageBucket: "tg-e-com-app.appspot.com",
    messagingSenderId: "70374996980",
    appId: "1:70374996980:web:37e96283f945ebb434d7a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
