import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username: formData.username,
          password: formData.password,
          expiresInMins: 30,
        }
      );

      console.log(response.data);

      setUser(response.data);
      setMessage("Login Successful");
      toast.success("Login Success")
      setFormData({
        username: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("Invalid username or password");
      toast.error("Invalid Username and password")
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-100 flex justify-center items-center">
      <div className="bg-white w-[380px] rounded-3xl shadow-2xl p-8">
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-4xl">
            👤
          </div>
        </div>

        
        <h1 className="text-3xl font-bold text-center text-gray-700">
          Welcome
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8 font-semibold">
          Sign in to Continue
        </p>

        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter Your Username"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

        
          <div className="mb-5">
            <label className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

        
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold text-white transition duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        
        {message && (
          <p
            className={`text-center mt-5 font-medium ${
              message === "Login Successful"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;