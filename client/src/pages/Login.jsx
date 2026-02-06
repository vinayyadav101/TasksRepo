import "./css/auth.css";

export default function Login(){
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  };
    return(
        <div className="LoginOuterDiv">
            <div className="login-container">
        <h1>LOGIN</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit">SIGN IN</button>
        </form>

        <div className="divider">OR</div>

        <div className="social-login">
          <div className="social-btn">G</div>
          <div className="social-btn">F</div>
          <div className="social-btn">X</div>
        </div>

        <div className="footer">
          Don&apos;t have an account? <a href="/signup">Sign up</a>
        </div>
          </div>
        </div>
    )
}