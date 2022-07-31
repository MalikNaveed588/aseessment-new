import React, { useEffect, useState } from "react";
import { getBlogs } from "../../API";
import { useMatch, useNavigate } from "react-router-dom";

import "./index.scss";

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

  return <div>BlogDetail</div>;
};

export default BlogDetail;
