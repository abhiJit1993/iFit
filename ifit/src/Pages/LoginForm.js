import React, { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login data submitted:", formData);
  };

  const handleSSO = (provider) => {
    console.log(`Logging in with ${provider}`);
    // Implement SSO logic for providers here
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-sm p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <hr className="my-4" />
        <div className="text-center">
          <p>Or login with</p>
          <button
            type="button"
            className="btn btn-danger me-2"
            style={{'float':'left'}}

            onClick={() => handleSSO("Google")}
          >
            Google
          </button>
          <button
            type="button"
            className="btn btn-primary me-2"
            style={{'float':'right'}}
            onClick={() => handleSSO("Facebook")}
          >
            Facebook
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default LoginForm;