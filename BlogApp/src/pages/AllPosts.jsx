import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import Container from "../components/container/Container";
import PostCard from "../components/PostCard";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      setPosts(posts.documents);
      console.log(posts);
    });
  }, []);
  return !posts ? (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          <h1 className="text-xl text-white text-center">Nothing in the feed</h1>
        </div>
      </Container>
    </div>
  ) : (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
