import React from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { increaseBlogViewCounter } from "../../redux/actions/blog";

import "./index.scss";
const Blog = ({ item }) => {
  const dispatch = useDispatch();
  const increaseCounter = () => dispatch(increaseBlogViewCounter(item.id));

  const { blogClicks } = useSelector((item) => item.blog);

  return (
    <div className=" col-sm-3 card-custom" onClick={increaseCounter}>
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img variant="top" src={item.Image} />
        <Card.Body>
          <div className="header">
            <Card.Text>{"Posted on October 6th 2021"}</Card.Text>
            <Card.Text>{`${
              blogClicks[item.id] ? blogClicks[item.id] : 0
            } views`}</Card.Text>
          </div>
          <Card.Title className="subtitle">{item.Title}</Card.Title>
          <Card.Text className="number-line">{item.Subtitle}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
