// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAdHfy2lR-gSKNDY-PE6utV-jL57hPNDzM",
    authDomain: "hey-youth-cms.firebaseapp.com",
    projectId: "hey-youth-cms",
    storageBucket: "hey-youth-cms.firebasestorage.app",
    messagingSenderId: "872098145627",
    appId: "1:872098145627:web:a6ad4eac63561a19ea267e",
    measurementId: "G-HVB8Y69Q3Y"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Global utility to get data
window.getFirebaseData = async function(defaultData) {
    var fallback = null;
    try {
        var raw = localStorage.getItem('hey_youth_cms');
        if (raw) fallback = JSON.parse(raw);
    } catch(e) {}
    if (!fallback) fallback = JSON.parse(JSON.stringify(defaultData || {}));

    try {
        const docRef = db.collection('heyyouth').doc('cms_data');
        const getPromise = docRef.get().then(docSnap => {
            if (docSnap.exists) {
                var fetched = docSnap.data();
                try {
                    localStorage.setItem('hey_youth_cms', JSON.stringify(fetched));
                } catch(e) {}
                return fetched;
            } else {
                return JSON.parse(JSON.stringify(defaultData));
            }
        });
        const timeoutPromise = new Promise((resolve) => setTimeout(() => resolve(fallback), 1500));
        return await Promise.race([getPromise, timeoutPromise]);
    } catch (e) {
        console.error("Error reading from Firebase:", e);
        return fallback;
    }
};

// Global utility to save data
window.saveFirebaseData = async function(data) {
    try {
        const docRef = db.collection('heyyouth').doc('cms_data');
        await docRef.set(data);
        return true;
    } catch (e) {
        console.error("Error writing to Firebase:", e);
        throw e;
    }
};
