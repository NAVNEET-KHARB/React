import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 h-60">
        <div className="justify-center w-full mb-4 overflow-hidden h-40">
          <img
            className="rounded-2xl"
            src={appwriteService.getPreview(featuredImage)}
            alt={title}
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
