import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../API";
import { setBlogs } from "../../redux/actions/blog";

import { Blog, Featured, Navbar, Footer } from "../../components";

import "./index.scss";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getBlogs().then((result) => dispatch(setBlogs(result)));
  }, []);

  const { blogs = [] } = useSelector((state) => state.blog);

  return (
    <React.Fragment>
      <Navbar />

      <div className="row home-blogs">
        <div className="col-sm-6 left-logo">
          <img
            className="image"
            src="https://play-lh.googleusercontent.com/Fto1xcq6wMHJ8RiXHFjsgwxMEoTVj4wpLQO1ucBL0VP7we7OsvS1FHxf2viW-lGzHA"
          />
          <h3 className="text">Our Blog</h3>
        </div>
        <div className="col-sm-6 right-content">
          <div className="text-container">
            <div className="t1">
              Diagnose Car Problems If You Don’t Know Much About Cars{" "}
            </div>
            <div className="t2">
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes, We
              provide a full range of front end mechanical.
            </div>
          </div>
        </div>
      </div>
      <Featured />
      <div className="row">
        {blogs.map((item, index) => (
          <Blog key={index} item={item}></Blog>
        ))}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
