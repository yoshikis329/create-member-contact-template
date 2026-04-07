import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./firebase-config.js";
// ログイン状態の監視
onAuthStateChanged(auth, (user) => {
    if (!user) {
        location ='index.html'
    }
});