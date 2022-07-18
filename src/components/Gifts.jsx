import React, {useState, useEffect} from 'react'
import { Wrapper } from './Gifts-Style';

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
      try{ 
        const response = await fetch(GIFT_API);
        const giftList = await response.json()
        setGifts(giftList)
      } catch(err){
        console.error(err)
      }
    }
giftData()
  }, [])

  return (
    <div style={giftArrayStyles}>
      <h1>gifts component</h1>
      <Wrapper>{gifts.map(gift =>(
        <div key={gift.id}>{gift.name}</div>
      ))}</Wrapper>
    </div>
  );
}

export default Gifts;
