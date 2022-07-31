import React, { useEffect, useState } from "react";
import { getBlogs } from "../../API";
import { useMatch, useNavigate } from "react-router-dom";

import "./index.scss";
import { Footer, Navbar } from "../../components";

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
            display: "flex",
            width: "600px",
            marginTop: "50px",
            fontSize: "20px",
            fontWeight: "700",
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

        <img src={blogData.Image} width="1000px" height="400px" />
      </div>
      <div className="default-dataa">
        <h1 style={{ marginBottom: "20px" }}>This is a blog post headline</h1>
        <div
          style={{
            fontSize: "14px",
            display: "flex",
            marginBottom: "20px",
            textAlign: "left",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
          auctor dictum eget a elit. Pellentesque varius diam risus, ut
          condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
          cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
          interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
          Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam
          ornare nibh vel dui egestas, eu posuere metus convallis. Ut non urna a
          odio condimentum dictum. Proin egestas erat a orci ultrices, vitae
          bibendum libero posuere. Quisque laoreet tincidunt justo. Vestibulum
          congue dictum libero finibus vehicula. Aliquam nisi velit, ultricies
          eget enim vel, venenatis mollis ante. Maecenas sodales tristique quam.
          Suspendisse fringilla massa vel dolor ornare rhoncus. Nullam ut orci
          mattis leo varius laoreet sed mollis dui. Aenean placerat nec enim ut
          finibus. Maecenas suscipit nibh eu neque egestas, non condimentum mi
          bibendum. Sed est eros, molestie consectetur auctor non, lobortis quis
          tortor. Nam cursus imperdiet massa volutpat hendrerit. Sed suscipit
          ligula iaculis lorem sagittis tincidunt. Etiam pellentesque metus vel
          enim iaculis aliquam. Mauris at nisi sed elit gravida malesuada.
        </div>
        <img src={blogData.Image} width="600px" height="400px" />
        <h1 style={{ marginTop: "20px" }}>
          This is a small blog post headline
        </h1>
        <div
          style={{
            fontSize: "14px",
            display: "flex",

            textAlign: "left",
            marginTop: "20px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
          auctor dictum eget a elit. Pellentesque varius diam risus, ut
          condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
          cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
          interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
          Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam
          ornare nibh vel dui egestas, eu posuere metus convallis.
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
