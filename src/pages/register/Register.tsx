
import './register.scss'
import api from "../../services/api";
import { FormEvent, memo } from 'react'
//import { useTranslation } from 'react-i18next'


const Register = () => {
  // const { t } = useTranslation();

  async function register(event: FormEvent) {
    console.log("da vao");

    event.preventDefault();
    let newUser = {
      email: (event.target as any).email.value,
      userName: (event.target as any).userName.value,
      password: (event.target as any).password.value,

    }
    let result = await api.userApi.register(newUser);

    console.log("newUser", result)
    //     try {
    //       setOnLoad(true);
    //       let result = await api.users.register(newUser);
    //       if (result.status != 200) {
    //         setOnLoad(false);
    //         Modal.error({
    //           content: "Email already exists",
    //         });
    //         // alert(result.data.message);
    //       } else {
    //         setOnLoad(false);
    //         Modal.confirm({
    //           content: result.data.message,
    //           onOk: () => {
    //             window.location.href = "/login";
    //           },
    //         });
    //         //alert(result.data.message);
    //       }
    //     } catch (err) {
    //       alert("call api that bai");
    //     }
    //   }
    // }
  }
  return (
    <div style={{ marginTop: "50px" }} className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{ borderRadius: 25 }}>
            <div className="card-body p-md-5 bgr">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>
                  <form onSubmit={(e) => {
                    register(e)
                    console.log("da vaon");

                  }} className="mx-1 mx-md-4">
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="form3Example1c"
                          className="form-control"
                          placeholder=' Your Name'
                          name="userName"
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          name="email"
                          type="email"
                          id="form3Example3c"
                          className="form-control"
                          placeholder=' Your Email'
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          name="password"
                          type="password"
                          id="form3Example4c"
                          className="form-control"
                          placeholder=' Password'
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="form3Example4cd"
                          className="form-control"
                          placeholder='Repeat your password'
                        />
                      </div>
                    </div>
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className=" me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example3c"
                      />
                      <label className="form-check-label" htmlFor="form2Example3">
                        I agree all statements in
                        <a href="#!"> Terms of service</a>
                      </label>
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" style={{ backgroundColor: "black", width: "100%" }} className="btn btn-primary btn-lg">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img
                    style={{ width: "650px", height: "450px", borderRadius: "10px" }}
                    src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/313418137_118460397717241_6755371143753448203_n.jpg?stp=dst-jpg_p843x403&_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=PaSPmlH136oAX8n_R_5&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfClP3h5gZMpH0AYfEw1HwR6p-yuY0T1iTLo-P3Wl1nfXQ&oe=64EFB756"
                    className="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default memo(Register)