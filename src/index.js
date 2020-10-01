import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        comment="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 4:55PM"
        comment="Officia corrupti recusandae tenetur reprehenderit praesentium repellat quo."
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 5:00PM"
        comment="Autem eveniet doloremque eius facere quam amet facilis adipisci odio inventore."
        image={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
