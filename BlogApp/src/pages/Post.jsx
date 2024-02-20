import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/container/Container";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;
  const deletePost = async () => {
    await appwriteService.deletePost(podt.$id).then(async (status) => {
      if (status) {
        await appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };
  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        setPost(post);
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img src={appwriteService.getPreview(post.$id)} alt={post.title} />
        </div>
      </Container>
    </div>
  ) : null;
}

export default Post;
