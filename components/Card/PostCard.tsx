// src/components/PostCard.tsx
import React from "react";

interface PostCardProps {
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-2xl transition">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{body}</p>
    </div>
  );
};

export default PostCard;
