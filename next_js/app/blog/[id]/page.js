"use client";
import { use, useState, useEffect } from "react";
import "../../script_CSS/style.css";
import BlogDetails from "../../components/blogDetails";
import CommentList from "../../components/commentList";
import AddComment from "@/app/components/addComment";


export default function Blog({params}) {

    const p = use(params);
    const id  =  p.id;
    const [publicationId, setIdBlog] = useState(id);
    useEffect(() => {
        setIdBlog(id);
    })

  return<>
  <div className=" bg-secondary" id="page_principale">
    
    <BlogDetails id={publicationId} /> 
    <AddComment id={publicationId} />
    <CommentList id={publicationId} />
   
  </div>
</>
}