import './main.scss'
import RouteSetup from '@routes/RouteSetup'
import './i18n/config';
// import { useTranslation } from 'react-i18next';
// import { googleLogin } from './firebase';
//import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
// import { StoreType } from './stores'
// import api from './services/api'
// import { useEffect } from 'react';
// import { userAction } from './stores/slices/user';

function App() {
  // const dispatch = useDispatch();
  // const store = useSelector(store => store) as StoreType;
  // console.log("store", store);

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     api.userApi.authentication()
  //       .then(res => {
  //         console.log("res", res)
  //         if (res.status == 200) {
  //           dispatch(userAction.setLoginData(res.data.data))
  //         } else {
  //           localStorage.removeItem("token")
  //         }
  //       })
  //   }
  // }, [])
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
      {/* thu: {t('hello',)} {t('about',)} */}
      {/* Routing */}
      {/* <button onClick={() => {
        handleGoogleLogin()
      }}>Google Sign</button> */}
      {/* <h1>User is login: {store.userStore.data?.userName}</h1> */}
      <RouteSetup />
    </>
  )
}

export default App



