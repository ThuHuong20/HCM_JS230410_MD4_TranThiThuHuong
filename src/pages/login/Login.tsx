import './login.scss'
import { FormEvent, memo, useState } from 'react'
import api from "../../services/api";
import Loading from '../components/Loading'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Modal } from 'antd';
import { useTranslation } from 'react-i18next'
const Login = () => {
  const { t } = useTranslation();

  const [load, setLoad] = useState(false);
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  async function login(event: FormEvent) {
    event.preventDefault();
    if (load) return;

    const userName = (event.target as any).userName.value;
    const password = (event.target as any).password.value;

    // Kiểm tra xem tên người dùng và mật khẩu đã được điền và không để trống
    if (!userName || !password) {
      Modal.error({
        content: t('err1'),
        okText: t('try'),
      });
      return;
    }

    setLoad(true);

    try {
      const data = {
        userName,
        password,
      };

      const res = await api.userApi.login(data);

      if (res.status !== 200) {
        console.log("res", res);
        Modal.confirm({
          content: res.data.message,
          okText: t('try'),
        });
      } else {
        localStorage.setItem("token", res.data.token);
        window.location.href = '/';
        // Modal.success({
        //   content: res.data.message,
        //   okText: 'ok',
        //   onOk: () => {
        //     localStorage.setItem("token", res.data.token);
        //     window.location.href = '/';
        //   },
        // });
      }
    } catch (_err) {
      Modal.confirm({
        content: "Sập server!",
        okText: "Retry",
      });
    }

    setLoad(false);
  }
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
                  <form onSubmit={(e) => {
                    login(e)
                  }}>
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <img style={{ width: "80px" }} src="https://icon-library.com/images/cake-icon/cake-icon-9.jpg" alt="" />
                      <span className="h1 fw-bold mb-0">
                        <img style={{ width: "120px", marginLeft: "20px" }} src="../images/logo.webp" alt="" />
                      </span>
                    </div>
                    <h5
                      className="fw-normal mb-3 pb-3"
                      style={{ letterSpacing: 1 }}
                    >
                      {t('Signintoyouraccount')}
                    </h5>
                    <div className="form-outline mb-4">
                      <input
                        name='userName'
                        id="form2Example17"
                        className="form-control form-control-lg"
                        placeholder={t('emailAddress')}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        name="password"
                        type="password"
                        id="form2Example27"
                        className="form-control form-control-lg"
                        placeholder={t('password')}
                      />

                    </div>
                    <div className="pt-1 mb-4">
                      {
                        load && <Loading />
                      }
                      <button style={{ color: "white", backgroundColor: "black", display: "flex", justifyContent: "center" }}
                        className={`${load && 'active'} btn_submit btn btn-sucsess btn-lg btn-block`}
                        type="submit"
                      >
                        <p> {t('login')}</p>
                        <div className='btn_loading'>
                          <Spin indicator={antIcon} />
                        </div>
                      </button>

                    </div>
                    <a className="small text-muted" href="#!">
                      {t('forgotPassword')}
                    </a>
                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                      {t('doneacount')}
                      <a href="/register" style={{ color: "#393f81" }}>
                        {t('here')}
                      </a>
                    </p>

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
export default memo(Login)

