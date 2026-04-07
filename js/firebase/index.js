import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./firebase-config.js";

// ログイン状態の監視
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('auth-section').classList.add('hidden');
        document.getElementById('content-section').classList.remove('hidden');
    } else {
        document.getElementById('auth-section').classList.remove('hidden');
        document.getElementById('content-section').classList.add('hidden');
    }
});

// ログイン処理
document.getElementById('login-btn').addEventListener('click', async () => {
    const email = document.getElementById('id').value + '@example.com';
    const password = document.getElementById('password').value;
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        document.getElementById('error-msg').innerText = "ログイン失敗: " + error.message;
    }
});

// ログアウト処理
document.getElementById('logout-btn').addEventListener('click', () => {
    signOut(auth);
});