import './main.scss'
import RouteSetup from '@routes/RouteSetup'
import './i18n/config';
// import { useTranslation } from 'react-i18next';
// import { googleLogin } from './firebase';
// import axios from 'axios';

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
      {/* thu: {t('hello',)} {t('about',)} */}
      {/* Routing */}
      {/* <button onClick={() => {
        handleGoogleLogin()
      }}>Google Sign</button> */}
      <RouteSetup />
    </>
  )
}

export default App

// import "./main.scss";
// import React, { createContext, useEffect, useState } from "react";
// import { Routes } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";
// //import { RootState, AppDispatch } from "./stores"; // Thay thế "stores" bằng tên tệp rootReducer và store của bạn.
// import { userActions } from "./stores/slices/user";

// import RouteSetup from '@routes/RouteSetup'

// /* Context Config */
// interface IRootContext {
//   dispatch: any;
//   userActions: typeof userActions;
//   // userStore: RootState["userStore"];
// }

// export const RootContext = createContext<IRootContext | undefined>(undefined);

// function App() {

//   const store = useSelector((store: any) => store);
//   const dispatch = useDispatch<any>();

//   useEffect(() => {
//     dispatch(userActions.authenToken());
//   }, []);



//   return (
//     <RootContext.Provider
//       value={{
//         dispatch,
//         userActions,
//       }}
//     >
//       <RouteSetup />
//     </RootContext.Provider>
//   );
// }

// export default App;
