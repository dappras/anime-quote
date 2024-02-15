import React, { useEffect, useState } from "react";
import Colorway from "../utils/colorway";
import { Link, useNavigate } from "react-router-dom";
import RouteName from "../routes/routeName";
import Cookies from "universal-cookie";
import { login } from "../services/authServices";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    checkIsLogin();
  }, []);

  const checkIsLogin = () => {
    const token = cookies.get("token");
    if (token != null) {
      navigate(RouteName.home);
    }
  };

  const loginUser = async () => {
    const body = {
      email: email,
      password: password,
    };
    const res = await login(body);
    if (res.status === 200) {
      cookies.set("token", res.data.token);
      alert("Success Login User");
      navigate(RouteName.home);
    } else {
      return alert("Failed Login User");
    }
  };

  return (
    <div
      className="w-full flex flex-col justify-center items-center"
      style={{ height: "100vh" }}
    >
      <div style={{ fontSize: 28, fontWeight: "bold" }}>LOGIN</div>
      <div
        className="w-5/6 md:3/6 lg:w-2/6 px-4 py-4 border shadow mt-5"
        style={{ borderRadius: 12 }}
      >
        <div className="sm:col-span-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-4 mt-3">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="mt-3" style={{ fontSize: 14 }}>
          Not Registered?
          <Link to={RouteName.register} style={{ color: "blue" }}>
            {" "}
            Register Now
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            onClick={() => loginUser()}
            className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm w-5/6"
            style={{ backgroundColor: Colorway.secondary }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
