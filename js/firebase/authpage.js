import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { auth } from "./common.js";
// ログイン状態の監視
onAuthStateChanged(auth, (user) => {
    if (!user) {
        location ='index.html'
    }
});