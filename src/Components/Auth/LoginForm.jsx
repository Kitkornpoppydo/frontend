import { useState } from "react";
import Login from "../Common/Button/Login";

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      email,
      password,
    });
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-card__top">
          <div className="auth-brand">
            <span className="auth-brand__icon">P</span>
            <span className="auth-brand__text">ProjectParking</span>
          </div>
          <div className="auth-title-wrap">
            <span className="auth-kicker">Welcome back</span>
            <h1 className="auth-title">เข้าสู่ระบบ</h1>
            <p className="auth-subtitle">กรุณาเข้าสู่ระบบเพื่อจัดการที่จอดรถของคุณ</p>
          </div>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-form__field">
            <label className="auth-label" htmlFor="email">
              อีเมล
            </label>
            <div className="auth-input-wrap">
              <span className="auth-input-icon">✉</span>
              <input
                id="email"
                className="auth-input"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="auth-form__field">
            <div className="auth-label-row">
              <label className="auth-label" htmlFor="password">
                รหัสผ่าน
              </label>
              <a className="auth-link" href="#forgot">
                ลืมรหัสผ่าน?
              </a>
            </div>
            <div className="auth-input-wrap">
              <span className="auth-input-icon">◆</span>
              <input
                id="password"
                className="auth-input"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="auth-remember">
            <label className="auth-check">
              <input type="checkbox" />
              <span>จดจำฉันไว้</span>
            </label>
          </div>

          <div className="auth-submit">
            <Login className="auth-button" />
          </div>
        </form>

        <div className="auth-divider">
          <span>หรือ</span>
        </div>

        <div className="auth-signup">
          <span>ยังไม่มีบัญชี?</span>
          <a className="auth-link" href="#register">
            สร้างบัญชีใหม่
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;