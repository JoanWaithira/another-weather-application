import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1> Hello World</h1>
//       </header>

//       <Search />
//     </div>
//   );
// }

// export default App;

export default function App() {
  return (
    <div className="App">
      <h1> Weather Application </h1>
      <Search />
    </div>
  );
}
