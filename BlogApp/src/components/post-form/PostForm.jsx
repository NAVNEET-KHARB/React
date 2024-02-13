import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import Input from "../Input";
import RTE from "../RTE";
import Select from "../Select";
import appwriteService from "../../appwrite/config";
import { UseSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function PostForm({post}) {
    const {} = useForm({
        title : post?.title||""
    })
  return (
    <div>
      
    </div>
  )
}

export default PostForm
