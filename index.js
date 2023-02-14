import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./style.css";

function Trains() {
  
  const [trainsList, setTrainsList] = useState([
    { name: "Thomas", destination: "Boston" },
    { name: "Duncan", destination: "New York" },
  ]);

//declared variable here because program didn't like it when I declared it in onClick
//function
let trainExists;


function removeTrain(train2delete){
console.log(train2delete)

for (let i = 0; i < trainsList.length; i++)
{
 if(trainsList[i].name == train2delete)
 {
 setTrainsList(trainsList.splice(i, 1));
 }

}

}

  return (
    <div>
      <table><th>name</th><th>destination</th>
        {
          trainsList.map((train) => (
          <tr key = {train.name}>
          <td>{train.name}</td>
          <td>{train.destination}</td>
          <td onClick = {() => removeTrain(train.name)}>X</td></tr>
        ))}
      </table>
      <br />
      Train Name: <input type="text" id="trainName" />
      <br />
      Destination: <input type="text" id="trainDest" />
      <br />
      <button
        onClick={() =>
        {
        trainExists = false;

         for(let i = 0; i < trainsList.length; i++)
         {
          if(trainsList[i].name == document.getElementById("trainName").value)
          {
            trainExists = true;
          }
         }
         if(trainExists == false){
          setTrainsList([
    ...trainsList, 
    { 
      name: document.getElementById("trainName").value, 
    destination: document.getElementById("trainDest").value 
    } // and one new item at the end
  ]
          )
      }

      else
      {

     alert("Train already exists!")   
      }
    }

    }
      >
        Submit
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Trains />);