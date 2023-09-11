import './main.scss'
import RouteSetup from '@routes/RouteSetup'
import './i18n/config';
import { useEffect, useState } from 'react';
// import { googleLogin } from './firebase';
//import axios from 'axios';
import api from './services/api';


function App() {
  // const [receipts, setReceipts] = useState([])


  // async function handleGoogleLogin() {
  //   console.log("da vao");
  //   let result = await googleLogin();
  //   let token = await result.user.getIdToken()
  //   let serverRes = await axios.post("http://localhost:4000/authen-google", {
  //     token
  //   })
  //   console.log("result", serverRes);

  // }
  // useEffect(() => {
  //   api.purchaseApi
  //     .findUserReceipt()
  //     .then((res) => {
  //       if (res.status == 200) {
  //         console.log("res.data 123", res.data)
  //         setReceipts(res.data.data);
  //       } else {
  //         alert(res.data.message);
  //       }
  //     })
  //     .catch((err) => {
  //       alert("sap server");
  //     });
  // }, []);
  return (
    <>
      {/* Routing */}
      {/* <button onClick={() => {
        handleGoogleLogin()
      }}>Google Sign</button> */}
      <RouteSetup />
    </>
  )
}

export default App



