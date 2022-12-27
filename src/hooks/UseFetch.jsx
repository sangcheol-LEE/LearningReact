import {useState, useEffect,useCallback} from 'react'
import Axios from 'axios';

const UseFetch = (uri) => {
   const [status , setStatus] = useState({
      data: "",
      error : "",
      loading : true
   })

   const getData = useCallback(async () => {
      try {
         const res = await Axios.get(uri)
         const ret = await res.data

         setStatus({
            ...status,
            data : ret,
            loading : false
         })
      }catch(e) {
         setStatus({
            ...status,
            error : e
         })
      }
   },[uri,status])

   useEffect(() => {
      getData()
   },[uri])
   console.log(status)

   // const {data, error , loading} = status
   return status

}

export default UseFetch
