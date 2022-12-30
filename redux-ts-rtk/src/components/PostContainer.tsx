import React, { useState, useEffect } from "react";
import { IPost } from "../Store/models/IPost";
import { postAPI } from "../Store/services/PostService";

import PostItem from "./PostItem";

const PostContainer = () => {
  const [limit, setLimit] = useState(10);
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchAllPostsQuery(limit);
  const [createPost, {}] = postAPI.useCreatePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  return (
    <div>
      <div className="post__list">
        <button onClick={() => handleCreate()}>Add new post</button>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Something went wrong...</h1>}
        {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default PostContainer;
