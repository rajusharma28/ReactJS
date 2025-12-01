import { configureStore } from "@reduxjs/toolkit"
import sliceReduce from "./Slice"

const Stores = configureStore({
    reducer:{
        slice1:sliceReduce,
  

    }
})

export default Stores;