import React from "react";
import "./homepage.css";
const HomePage = ({ searchValue, posts }) => {



  if (typeof searchValue) {
    return (
      <div className="home__container">
        {posts
          .filter((post) => post.title.includes(searchValue))
          .map((post) => (
            <div className="post" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body.slice(0,260)}</p>
              <button>Read More</button>
            </div>
          ))}
      </div>
    );
  }

  return (
    <div className="home__container">
      {posts?.map((post) => (
        <div className="post" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
