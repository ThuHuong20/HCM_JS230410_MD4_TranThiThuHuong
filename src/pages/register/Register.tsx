
import './register.scss'
import api from "../../services/api";
import { FormEvent, memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Loading from '../components/Loading'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Modal } from 'antd';

const Register = () => {
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

  async function register(event: FormEvent) {
    event.preventDefault();

    const email = (event.target as any).email.value;
    const userName = (event.target as any).userName.value;
    const password = (event.target as any).password.value;

    // Kiểm tra xem tất cả các trường đã được điền đầy đủ
    if (!email || !userName || !password) {
      Modal.error({
        content: t('err1'),
        okText: t('try'),
      });
      return;
    }

    // Kiểm tra độ dài của mật khẩu
    if (password.length < 6) {
      Modal.error({
        content: t('err2'),
        okText: t('try'),
      });
      return;
    }

    setLoad(true);

    try {
      const newUser = {
        email,
        userName,
        password,
      };

      const res = await api.userApi.register(newUser);

      if (res.status !== 200) {
        Modal.confirm({
          content: res.data.message,
          okText: t('try'),
        });
      } else {
        Modal.success({
          content: res.data.message,
          okText: 'login',
          onOk: () => {
            window.location.href = '/login';
          },
        });
      }
    } catch (error) {
      Modal.error({
        content: 'Sập server!',
        okText: t('try'),
      });
    }

    setLoad(false);
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
                    {t('Signup')}
                  </p>
                  <form onSubmit={(e) => {
                    register(e)

                  }} className="mx-1 mx-md-4">
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="text"
                          id="form3Example1c"
                          className="form-control"
                          placeholder={t('YourName')}
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
                          placeholder={t('YourEmail')}
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
                          placeholder={t('password')}
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
                          placeholder={t('repeat')}
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
                        {t('agree')}
                      </label>
                    </div>

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      {
                        load && <Loading />
                      }
                      <button type="submit" style={{ backgroundColor: "black", width: "100%", display: "flex", justifyContent: "center" }} className={`${load && 'active'} btn_submit btn btn-primary btn-lg`}>
                        <p>{t('register')}</p>
                        <div className='btn_loading'>
                          <Spin indicator={antIcon} />
                        </div>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img
                    style={{ width: "650px", height: "450px", borderRadius: "10px" }}
                    src="https://cakerun.com.au/wp-content/uploads/2022/10/Whole-Cake-Ferrero-Rocher-Cake-Melbourne-Delivery.webp"
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
