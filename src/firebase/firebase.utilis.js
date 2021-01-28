import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD3q3ZnM6qejCc4NOoXjQ2xsVfVn24WdJc",
  authDomain: "quiz-54a90.firebaseapp.com",
  projectId: "quiz-54a90",
  storageBucket: "quiz-54a90.appspot.com",
  messagingSenderId: "915241107805",
  appId: "1:915241107805:web:91ca6d11bb535d313828b4",
  measurementId: "G-4HHYPEW7DM",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const getListOfData = async () => {
  const collectionRef = await firestore
    .collection("questions")
    .orderBy("grade")
    .get();

  let finalResult = collectionRef.docs.map((el) => {
    return {
      id: el.id,
      data: el.data(),
    };
  });
  return finalResult;
};

export const createQuestion = (path, data) => {
  const docRef = firestore.doc(`questions/${path}`);

  docRef.update({
    question: firebase.firestore.FieldValue.arrayUnion(data),
  });
};

export const getData = async () => {
  const docRef = firestore.doc("result/l1aU30VzftlGgYP4Y91W");
  return docRef.onSnapshot(async (el) => await el.get());
};

export const updateExam = async (path, questions, examName) => {
  console.log(questions);
  const docRef = firestore.doc(`questions/${path}`);

  docRef.update({
    question: questions,
    examName: examName,
    userEntry: [],
  });
};
