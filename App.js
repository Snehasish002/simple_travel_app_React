
import Header from "./Header.js"
import Middle from "./Middle.js"


import './App.css';
import Data from "./Data.js";

const App = function() {
  const middleData = Data.map( item => {
    return (
      <Middle 
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div className="Container">
      <div className="App">
        <Header />
        <div className="middle-container">
          {middleData}
        </div>
        
      </div>
    </div>
  );
}

export default App;
