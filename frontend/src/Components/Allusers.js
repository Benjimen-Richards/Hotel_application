import React from "react";
import MediaCard from "./Homepage/Card";

const Allusers = () => {
  const renderusers = (data) => {
    if (data) {
      return data.map((user) => <MediaCard data={user} />);
    } else {
      return (
        <img
          style={{ height: "300px" }}
          src="https://flevix.com/wp-content/uploads/2019/07/Loading-Image-1-1.gif"
          alt="/"
        />
      );
    }
  };
  return <div>{this.renderusers(this.props.allusers)}</div>;
};

export default Allusers;
