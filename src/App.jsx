// import React, { use, useState } from "react";
// import "./App.css";

// const App = () => {
//   const [Age, setAge] = useState(0);
//   const [title, setTitle] = useState("");

//   let plusOne = () => {
//     setAge((Age) => Age + 1);

//     if (Age === 0 && Age < 18) {
//       setTitle((title) => (title = "You are to little"));
//     }

//     if (Age > 16 && Age < 60) {
//       setTitle((title) => (title = "You are Big now!"));
//     }

//     if (Age > 58 && Age < 100) {
//       setTitle((title) => (title = "How you are alive?"));
//     }

//     if (Age > 98 && Age < 110) {
//       setTitle((title) => (title = "You are imortal!"));
//     }

//     if (Age > 108 && Age < 111) {
//       setTitle((title) => (title = "You are Death☠️"));
//     }
//   };

//   let UNO = () => {
//     setAge((Age) => Age + 4);
    
//   };

//   let Regen = () => {
//     setAge((Age) => Age - 1);
//   };

//   let Buff = () => {
//     setAge((Age) => Age - 4);
//   };
//   return (
//     <div className="conteiner">
//       <p className="title">{title}</p>
//       <h1 className="Age">You are: {Age}</h1>

//       <div className="Age-conteiner">
//         <button onClick={plusOne} className="Age-btn">
//           +1
//         </button>
//         <button onClick={UNO} className="Age-btn">
//           UNO!
//         </button>
//         <button onClick={Regen} className="Age-btn">Regeneration</button>
//         <button onClick={Buff} className="Age-btn">BUFF!</button>
//       </div>
//     </div>
//   );
// };

// export default App;

import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json().then((data) => setData(data)));
  }, []);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="Box">
      {data.length ? (
        data.map(({title, id, userID}) => (
          <div className="Conteiner">
            <h1>{title}</h1>
            <p>{id}</p>
            <p>{userID}</p>

            <div className="btn-box">
              <button className="btn">Delate</button>
              <button className="btn">Edit</button>
            </div>
          </div>
      ))

    ) : (
      <h1>Loading...</h1>
    )}
    </div>
  );
}

export default App;
