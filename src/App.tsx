import './main.scss'
import RouteSetup from '@routes/RouteSetup'
import './i18n/config';
// import { useTranslation } from 'react-i18next';
// import { googleLogin } from './firebase';
//import axios from 'axios';


function App() {

  // const { t } = useTranslation();
  // async function handleGoogleLogin() {
  //   console.log("da vao");
  //   let result = await googleLogin();
  //   let token = await result.user.getIdToken()
  //   let serverRes = await axios.post("http://localhost:4000/authen-google", {
  //     token
  //   })
  //   console.log("result", serverRes);

  // }
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



