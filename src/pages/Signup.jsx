import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Loader2, AlertCircle } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";
import { motion } from 'framer-motion';

// 1. Correct Import: We use 'registerUser' and 'loginWithGoogle' from our new service
import { registerUser, loginWithGoogle } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // To update app state after signup

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: 'learner',
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validate password explicitly for email signup
    if (!formData.password) {
      setError('Password is required for email signup');
      setLoading(false);
      return;
    }
    try {
      // 2. Call the backend API (includes selected role)
      const data = await registerUser(formData);

      // 3. Log the user in immediately
      login(data);

      // 4. Redirect to role-specific dashboard
      const route = data?.role === 'tutor' ? '/tutor-dashboard' : '/learner-dashboard';
      navigate(route);
    } catch (err) {
      setError(err.message || "Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      setLoadingGoogle(true);
      const data = await loginWithGoogle(credentialResponse.credential, formData.role);
      login(data);
      const route = data?.role === 'tutor' ? '/tutor-dashboard' : '/learner-dashboard';
      navigate(route);
    } catch (err) {
      setError("Google Signup Failed");
    } finally {
      setLoadingGoogle(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
            <p className="text-gray-500 mt-2">Join PPStack today</p>
          </div>

          {/* Role selection + Google Signup */}
          <div className="flex flex-col items-center gap-3 mb-4">
            <div className="text-sm text-gray-600">I am a</div>
            <div className="flex items-center gap-4">
              <label className={`inline-flex items-center gap-2 ${formData.role === 'learner' ? 'font-semibold' : ''}`}>
                <input type="radio" name="role" value="learner" checked={formData.role === 'learner'} onChange={(e) => setFormData({ ...formData, role: e.target.value })} />
                Learner
              </label>
              <label className={`inline-flex items-center gap-2 ${formData.role === 'tutor' ? 'font-semibold' : ''}`}>
                <input type="radio" name="role" value="tutor" checked={formData.role === 'tutor'} onChange={(e) => setFormData({ ...formData, role: e.target.value })} />
                Tutor
              </label>
            </div>
          </div>

          <div className="flex justify-center mb-6 relative">
            <GoogleLogin 
              onSuccess={handleGoogleSuccess} 
              onError={() => setError("Google Signup Failed")}
              useOneTap
            />
            {loadingGoogle && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/60 rounded-xl">
                <Loader2 className="animate-spin" />
              </div>
            )}
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign up with email</span>
            </div>
          </div>

          <form onSubmit={handleEmailSignup} className="space-y-4">
            {/* Name Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <User size={20} />
              </div>
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Mail size={20} />
              </div>
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Lock size={20} />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: [0, -6, 6, -6, 6, 0] }}
                transition={{ duration: 0.6 }}
                className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center gap-2"
              >
                <AlertCircle size={16} />
                {error}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : "Create Account"}
            </motion.button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Signup;