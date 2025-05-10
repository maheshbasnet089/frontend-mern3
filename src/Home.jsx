import { useState } from "react"

// problem k xa tyo herum suru ma , kina useStateuse garne tw ? 
function Home(){
    let pi = 3.14
    // let meroNumber = 0 
    // function increaseMeroNumber(){
    //     meroNumber = meroNumber + 1 // meroNumber++
    //     console.log(meroNumber)
    // }
    // function decreaseMeroNumber(){
    //     meroNumber = meroNumber - 1 // meroNumber--
    // }
    // let something = useState(0) // [0,f]
    // let myValue = something[0]
    // let myFunction = something[1]
    const [pi,setPi] = useState(3.14) // [0,f]


  const increaseMyValue = ()=>{
    setNumber(number + 1)
   }
   function decreaseMyValue(){
    setNumber(number -1)
   }
    return (
        <div>
        <h1>{number}</h1>
        <button onClick={increaseMyValue}>+</button>
        <button onClick={decreaseMyValue}>-</button>
    
        </div>
    )
}

export default Home



