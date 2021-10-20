import { useState } from "react";
import FieldAnimal from "./Components/FieldAnimal";


function App() {
    const [SelectOne, setSelectOne] = useState([]);
    const [SelectSecond, setSelectSecond] = useState([]);
    const [change, setChange] = useState("one");


    const add = (what) => {
        const SelectOneCopy = SelectOne.slice();
        const SelectSecondCopy = SelectSecond.slice();

    
        if (change === "one") {
            SelectOneCopy.push({ animal: what });
         
            setSelectOne(SelectOneCopy);
        }
      
        else if (change === "second") {
            SelectSecondCopy.push({ animal: what });
         
            setSelectSecond(SelectSecondCopy);
        }
    };

    const changeField = event => {
        setChange(event.target.value);
    };

    return (
        <div className="field">
            <div>
                {SelectOne.map((fieldAnimal, i) => (
                    <FieldAnimal key={i} fieldAnimal={fieldAnimal}></FieldAnimal>
                ))}
            </div>
            <div>
                {SelectSecond.map((fieldAnimal, i) => (
                    <FieldAnimal key={i} fieldAnimal={fieldAnimal}></FieldAnimal>
                ))}
            </div>
            
            <button onClick={() => add("cow")}>Add cow</button>
            <button onClick={() => add("sheep")}>Add sheep</button>
            <button onClick={() => add("horse")}>Add horse</button>
         
            <select onChange={event => changeField(event)} value={SelectOne}>
                <option value={"one"}>One field</option>
                <option value={"second"}>Second field</option>
            </select>
        </div>
    );
}

export default App;