import React, {useState, useEffect} from 'react'

const giftArrayStyles = {
  border: "1px solid black",
  // width: "500px",
  padding: "25px",
  margin: "30px",
};

const GIFT_API = "http://localhost:3000/gifts"

function Gifts() {
  const [gifts, setGifts] = useState([])

  useEffect(()=>{
    const giftData = async ()=> {
        const response = await fetch(GIFT_API);
        const giftList = await response.json()
        setGifts(giftList)
    }
giftData()
  }, [])

  return (
    <div style={giftArrayStyles}>
      <h1>gifts component</h1>
      <div>{console.log(gifts)}</div>
    </div>
  );
}

export default Gifts;
