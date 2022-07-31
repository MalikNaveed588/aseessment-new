import React, { useEffect, useState } from "react";
import { getBlogs } from "../../API";
import { useMatch, useNavigate } from "react-router-dom";

import "./index.scss";
import { Navbar } from "../../components";

const BlogDetail = () => {
  const [blogData, setBlogData] = useState({});
  const match = useMatch("/blog-detail/:id");

  useEffect(() => {
    getBlogs(match.params.id)
      .then((result) => {
        setBlogData(result);
      })
      .catch((e) => {
        console.log(e);
        useNavigate("/");
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-container">
        <div
          style={{
            width: "600px",
            marginTop: "50px",
            fontSize: "20",
            fontWeight: "700",
            display: "flex",
            textAlign: "center",
          }}
        >
          {blogData.Subtitle}
        </div>
        <div
          style={{
            width: "600px",
            marginTop: "20px",
            fontSize: "10px",

            display: "flex",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          {blogData.Article}
        </div>

        <img src={blogData.Image} width="800px" height="240px" />
      </div>
    </>
  );
};

export default BlogDetail;
