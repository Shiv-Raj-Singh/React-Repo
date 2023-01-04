// import React, { useState } from 'react';
// import "../Form.css"
// const ToUpperCase = ()=>{
//     const [text , setText] = useState('')

//     const onChangeData = ()=>{

//     }

//     const changeUpperCase = ()=>{
//         console.log('clicked Successfully');
//     }

//     return (
//         <div>
//             <h1>How are Doing</h1>
//             <form action="" className="userform">
//             {/* <label htmlFor="username">Enter your Name</label>
//             <input type="text" required /> <br />
//             <label htmlFor="phone">Enter your phone </label>
//             <input type="number" required /><br />
//             <label htmlFor="email">Enter your email</label>
//             <input type="email" required /><br />
//             <label htmlFor="profile-picture">Enter your  profile - picture </label>
//             <input type="file" required /><br /> */}
//             <textarea name="data" className='txtarea'onChange={onChangeData} id="" cols="30" rows="10"></textarea> <br />
//             <button type='submit' onClick={changeUpperCase}>Submit </button>
//             <p>{text}</p>
//         </form>
//         <h1>how Are you </h1>
//         </div>
//     )
// }


// import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// function ToUpperCase() {
//   const [text, setName] = useState("");

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     alert(`The name you entered was: ${name}`)
// //   }

//       const changeUpperCase = ()=>{
//         console.log('clicked Successfully');
//     }

//   return (
//     <form >
//       {/* <label>Enter your name:
//         <input 
//           type="text" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <input type="submit" /> */}
//             <textarea name="data" className='txtarea' id="" cols="30" rows="10"></textarea> <br />
//              <button type='submit' onClick={changeUpperCase}>Submit </button>
//             <p>{text}</p>
//       {/* <button type='submit' onClick={changeUpperCase}>Submit </button> */}
//     </form>
//   )
// }


// export default ToUpperCase