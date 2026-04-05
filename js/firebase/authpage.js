import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
// ログイン状態の監視
onAuthStateChanged(auth, (user) => {
    if (!user) {
        location ='index.html'
    }
});