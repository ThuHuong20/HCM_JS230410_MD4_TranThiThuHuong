import './login.scss'

export default function Login() {
  return (

    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card bgr" style={{ borderRadius: "1rem" }}>
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="../images/login.webp"
                  alt="login form"
                  className="img-fluid"
                  style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }}
                />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                  <form>
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <img style={{ width: "80px" }} src="https://icon-library.com/images/cake-icon/cake-icon-9.jpg" alt="" />
                      {/* <i
                        className="fas fa-cubes fa-2x me-3"
                        style={{ color: "#ff6219" }}
                      /> */}
                      <span className="h1 fw-bold mb-0">
                        <img style={{ width: "120px", marginLeft: "20px" }} src="../images/logo.webp" alt="" />
                      </span>
                    </div>
                    <h5
                      className="fw-normal mb-3 pb-3"
                      style={{ letterSpacing: 1 }}
                    >
                      Sign into your account
                    </h5>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example17"
                        className="form-control form-control-lg"
                        placeholder=' Email address'
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example27"
                        className="form-control form-control-lg"
                        placeholder=' Password'
                      />

                    </div>
                    <div className="pt-1 mb-4">
                      <button style={{ color: "white", backgroundColor: "black" }}
                        className="btn btn-sucsess btn-lg btn-block"
                        type="button"
                      >
                        Login
                      </button>
                    </div>
                    <a className="small text-muted" href="#!">
                      Forgot password?
                    </a>
                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                      Don't have an account?{" "}
                      <a href="#!" style={{ color: "#393f81" }}>
                        Register here
                      </a>
                    </p>
                    <a href="#!" className="small text-muted">
                      Terms of use.
                    </a>
                    <a href="#!" className="small text-muted">
                      Privacy policy
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

