import React, {useState, useEffect} from 'react'

const giftArrayStyles = {
  border: "1px solid black",
  // width: "500px",
  padding: "25px",
  margin: "30px",
};
function Gifts() {
  const [gifts, setGifts] = useState([])

  return (
    <div style={giftArrayStyles}>
      <h1>gifts component</h1>
      <p>put your array of gift objects here</p>
    </div>
  );
}

export default Gifts;
