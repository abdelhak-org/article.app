import React, { useState } from "react";
//import { db, auth } from "../../../firebase.config";
//import { addDoc, collection } from "firebase/firestore";
//import { signOut } from "firebase/auth";
const AddPost = () => {
  const [state, setState] = useState({ title: "", post: "" });
  const changeHandle = (e) => {
    const {name , value} = e.target;
    console.log(e.target)
  };
  return (
    <div>
      <form>
        <h3>create a new post</h3>
        <label>post Title</label>
        <input
          type="text"
          placeholder="enter the title"
          onChange={changeHandle}
        />
        <textarea
          onChange={changeHandle}
          placeholder="write your  text here ... "
        />
        <button>Add Post </button>
      </form>
    </div>
  );
};

export default AddPost;

/*
  const [PostTitle, setPostTitle] = useState("");
  const [author, setAuthor] = useState({});
  const [post, setPost] = useState({});
  const [currentUser, setCurrentUser] = useState("");

  const pushPost = async (e) => {
    e.preventDefault();
    const collectionRef = collection(db, "articles");
    await addDoc(collectionRef, {
      title: PostTitle,
      author: { name: author, id: currentUser.uid },
      body: post,
    });
    setPostTitle("");
    setAuthor("");
    setPost("");
  };

  const logOut = async () => {
    await signOut(auth);
  };
*/
