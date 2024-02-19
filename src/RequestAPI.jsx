// import React, { useEffect, useState } from "react";

// function Render() {
//   const [datos, setDatos] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setDatos(data));
//   }, []);

//   return (
//     <div>
//       {datos &&
//         datos.map((dato) => {
//           return (
//             <div key={dato.id}>
//               <p>{dato.name}</p>
//               <p>{dato.username}</p>
//               <p>{dato.email}</p>
//             </div>
//           );
//         })}
//     </div>
//   );
// }

// export default Render;
