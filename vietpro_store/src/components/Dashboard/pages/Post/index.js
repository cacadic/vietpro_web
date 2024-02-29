import React, { useEffect, useState } from "react";
import { getPosts } from "../../services/Api";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(({ data }) => setPosts(data));
  }, []);

  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {posts?.map((post, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Post;
