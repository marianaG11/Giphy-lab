import React from "react";
function Giphy(props) {
  return (
    <div>
      <img src={props.gifUrl.image_url} alt="" />
    </div>
  );
}

export default Giphy;
