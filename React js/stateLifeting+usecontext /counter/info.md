useEffect -> ek state variable ccreate kar raah h
-> Extra rendering kra raha
  useEffect(()=>{
setResult(Fibbonnaci(number))

  },[number])




useMemo-> isme nhai kar raha ha
isme nahi lagega 
rendring cycile ko bachata ha

  // useMemo 
  // const result = useMemo(()=>{
  //   Fibbonnaci(number);
  // },[number])


useRef -> function no redering-> value hold kar ke rakhat hai




/* The Timer Text */
h1 {
  font-size: 3rem;
  color: #333;
  margin-bottom: 30px;
  font-variant-numeric: tabular-nums; /* Keeps numbers from jumping */
}

/* Button Styles */
button {
  padding: 10px 20px;
  font-size: 16px;
  margin: 0 5px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007bff; /* Blue */
  color: white;
  transition: background 0.2s;
}

button:hover {
  background-color: #0056b3; /* Darker Blue on hover */
}

button:active {
  transform: scale(0.98); /* Slight click effect */
}