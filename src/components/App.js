import { useState } from "react";
import "../styles/App.css";

const relationsMap = {
  0: "Siblings",
  1: "Friends",
  2: "Love",
  3: "Affection",
  4: "Marriage",
  5: "Enemy",
};

const App = () => {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [relation, setRelation] = useState('')
  const [isError, setIsError] = useState(false);

  const handleOnChange1 = (e) => {
    setStr1(e.target.value);
  };

  const handleOnChange2 = (e) => {
    setStr2(e.target.value);
  };

  const handleCalculate = () => {
    if (!str1 || !str2) {
      setIsError(true);
    }
    else {
        for(let i = 0; i<str1.length; i++) {
            if(str2.includes(str1[i])) {
                return (str1.length + str2.length - 2)%6
            }
        }
        return (str1.length + str2.length)%6
    }
  };

  const handleClear = () => {
setStr1('')
setStr2('')
setRelation('')
  }

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <input
        type="text"
        value={str1}
        data-testid="input1"
        onChange={handleOnChange1}
        placeholder="Enter 1st string "
      />
      <input
        type="text"
        value={str2}
        data-testid="input2"
        onChange={handleOnChange2}
        placeholder="Enter 2nd string "
      />
      <button data-testid="calculate_relationship" onClick={handleCalculate}>
        Calculate
      </button>
      <button data-testid="clear" onClick={handleClear}>Clear</button>
      <h3 data-testid="answer">{isError ? "Please Enter valid input" : relation}</h3>

    </div>
  );
};

export default App;
