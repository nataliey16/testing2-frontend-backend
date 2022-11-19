import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  if (data.members) {
    return (
      <div className="App">
        <div>
          {data.members.map(function (member, index) {
            return (
              <ul>
                <li key={index}>{member}</li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div> Loading...</div>;
  }
}

export default App;
