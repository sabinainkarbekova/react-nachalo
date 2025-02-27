import React from 'react';

function Posts() {
  return (
    <div className="featuredPosts">
      <div className="container">
        <div className="featuredHeader">
          <h2>Featured Post</h2>
          <div className="allPosts">
            <h2>All Posts</h2>
            <a href='/list' className="viewAll">View All&gt;</a>
          </div>
        </div>
        <div className="postsWrapper">
          <div className="featuredPost">
            <img src="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Featured post" />
            <div className="postContent">
              <div className="postMeta">By John Doe | May 23, 2022</div>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <button className="readMore">Read More {">"}</button>
            </div>
          </div>
          <div className="allPostsList">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={item}
                className="postItem"
                style={{ backgroundColor: index === 1 ? "#FBF6EA" : "transparent" }}
              >
                <div className="postItemContent">
                  <div className="postItemMeta">By John Doe | Aug 23, 2021</div>
                  <h4>8 Figma design systems that you can download for free today.</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;