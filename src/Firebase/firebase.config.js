// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId ,
  storageBucket:import.meta.env.VITE_storageBucket ,
  messagingSenderId:import.meta.env.VITE_messagingSenderId ,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;











// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration


// const firebaseConfig = {
//   apiKey: "AIzaSyDv1GrLfpf7GpH-cVJgiHtOD28JQich-kY",
//   authDomain: "chef-recipe-client-7da5e.firebaseapp.com",
//   projectId: "chef-recipe-client-7da5e",
//   storageBucket: "chef-recipe-client-7da5e.appspot.com",
//   messagingSenderId: "221410811695",
//   appId: "1:221410811695:web:498698ef4acbc78c2a8bda"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;





