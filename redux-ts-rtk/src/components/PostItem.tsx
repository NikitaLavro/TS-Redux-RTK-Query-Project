import React, { FC } from "react";
import { IPost } from "../Store/models/IPost";

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    remove(post);
  };

  return (
    <>
      <div
        className="post"
        onClick={(e: React.MouseEvent) => {
          const title = prompt() || "";
          update({ ...post, title });
        }}
      >
        {post.id}. {post.title}
      </div>
      <button onClick={() => handleRemove}>Delete</button>
    </>
  );
};

export default PostItem;
