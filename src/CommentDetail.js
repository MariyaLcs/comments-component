import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00 PM</span>
        </div>
        <div className="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
          tempora.
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
