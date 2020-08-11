import React from "react";

const Body = (props) => {
  const { imgUrl } = props;
  return (
    <div>
      <img className="nasa-photo" alt="todays-image" src={imgUrl.url} />
    </div>
  );
};
export default Body;
