import React from "react";
import logo from "../../logo/logo.png";
import "../../style/style_mobile.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="bg">
          <div className="login-content">
            <div className="login-form">
              <div className="login-logo">
                <img src={logo} alt="logo" />
              </div>
              <h4>FPT.HyperSM Platform Login</h4>
              <form>
                <div className="form-group">
                  <div className="ui left icon input">
                    <input
                      type="text"
                      placeholder="Nhập tên tài khoản đăng nhập"
                      className="form-control"
                    />
                    <i aria-hidden="true" className="user icon"></i>
                  </div>
                </div>
                <div className="form-group">
                  <div className="ui left icon input">
                    <input
                      type="text"
                      placeholder="Mật khẩu"
                      className="form-control"
                    />
                    <i aria-hidden="true" className="lock icon"></i>
                  </div>
                </div>
                <a
                  type="submit"
                  className="btn_login m-b-20"
                  href="dashboard.html"
                >
                  ĐĂNG NHẬP
                </a>
                <div className="register-link text-center">
                  <p>
                    <a href="forgot_pass.html"> Quên mật khẩu?</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;
