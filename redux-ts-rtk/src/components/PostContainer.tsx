import React, { useState, useEffect } from "react";
import { postAPI } from "../Store/services/PostService";

import PostItem from "./PostItem";

const PostContainer = () => {
  const [limit, setLimit] = useState(5);
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchAllPostsQuery(limit);

  useEffect(() => {}, []);

  return (
    <div>
      <div className="post__list">
        <button onClick={() => refetch()}>Refetch</button>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Something went wrong...</h1>}
        {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default PostContainer;
