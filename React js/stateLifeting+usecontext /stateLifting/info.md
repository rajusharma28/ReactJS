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


