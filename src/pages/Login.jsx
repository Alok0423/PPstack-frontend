import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Mail, Lock, AlertCircle, ArrowRight } from 'lucide-react';

// --- Mock Components/Hooks for Demo purposes ---
// In your real app, keep your original imports: 
// import { GoogleLogin } from '@react-oauth/google';
// import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

const useAuth = () => ({
  login: (data) => console.log("Logged in:", data)
});

const useNavigate = () => {
  return (path) => {
    console.log(`Navigating to: ${path}`);
    // For demo purposes only:
    alert(`Redirecting to ${path}...`); 
  };
};

const Link = ({ to, className, children }) => (
  <a href={to} className={className} onClick={(e) => e.preventDefault()}>{children}</a>
);

// Mock Google Login Button Component
const MockGoogleButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center justify-center gap-2 w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-all shadow-sm hover:shadow-md"
  >
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
    <span>Sign in with Google</span>
  </button>
);

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [googleRole, setGoogleRole] = useState('learner');

  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Mock Google Success Handler
  const handleGoogleClick = async () => {
    setError('');
    setLoadingGoogle(true);
    // Simulate API Call
    setTimeout(() => {
        setLoadingGoogle(false);
        // Simulate Success
        const data = { role: googleRole, name: "Google User" };
        login(data);
        const route = googleRole === 'tutor' ? '/tutor-dashboard' : '/learner-dashboard';
        navigate(route);
    }, 1500);
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    // Simulate API Login
    setTimeout(() => {
        setLoading(false);
        if (form.email === 'error@test.com') {
            setError('Invalid email or password provided.');
        } else {
            const data = { role: 'learner', email: form.email };
            login(data);
            navigate('/learner-dashboard');
        }
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 font-sans">
      
      {/* Floating Shapes for Visual Appeal */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="relative max-w-4xl w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50"
      >
        <div className="flex flex-col md:flex-row">
          
          {/* LEFT SIDE: Email Login */}
          <div className="flex-1 p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Welcome back</h2>
              <p className="text-sm text-gray-500 mt-2">
                Enter your details to access your 
                <span className="font-bold text-indigo-600"> PPStack</span> account.
              </p>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm border border-red-100"
              >
                <AlertCircle size={16} />
                {error}
              </motion.div>
            )}

            <form onSubmit={handleEmailLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleInput}
                    type="email"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none bg-gray-50/50 focus:bg-white"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    name="password"
                    value={form.password}
                    onChange={handleInput}
                    type="password"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none bg-gray-50/50 focus:bg-white"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  <span className="text-gray-600 group-hover:text-gray-800">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-indigo-600 font-medium hover:text-indigo-800 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2
                  ${loading ? 'opacity-70 cursor-not-allowed' : ''}
                `}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In <ArrowRight size={18} />
                  </>
                )}
              </motion.button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-8">
              Don’t have an account?{' '}
              <Link to="/signup" className="text-indigo-600 font-bold hover:underline">
                Create one now
              </Link>
            </p>
          </div>

          {/* DIVIDER (Mobile: Horizontal, Desktop: Vertical) */}
          <div className="relative flex items-center py-4 md:py-0 md:w-px">
             <div className="w-full h-px bg-gray-200 md:w-px md:h-full"></div>
             <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-gray-400 font-medium uppercase tracking-wider border border-gray-100 rounded-full py-1">Or</span>
          </div>

          {/* RIGHT SIDE: Google Login */}
          <div className="flex-1 p-8 md:p-12 bg-gray-50/50 flex flex-col justify-center">
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold text-gray-800">Fast Login</h3>
              <p className="text-sm text-gray-500">Use your Google account to skip the password.</p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 text-center">Select Role</p>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`relative cursor-pointer rounded-lg p-3 text-center transition-all border-2 ${googleRole === 'learner' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-transparent hover:bg-gray-50 text-gray-600'}`}>
                    <input 
                      type="radio" 
                      name="googleRole" 
                      value="learner" 
                      checked={googleRole === 'learner'} 
                      onChange={(e) => setGoogleRole(e.target.value)} 
                      className="sr-only"
                    />
                    <span className="block text-sm font-bold">Learner</span>
                    {googleRole === 'learner' && <Check size={16} className="absolute top-2 right-2 text-indigo-500" />}
                  </label>

                  <label className={`relative cursor-pointer rounded-lg p-3 text-center transition-all border-2 ${googleRole === 'tutor' ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-transparent hover:bg-gray-50 text-gray-600'}`}>
                    <input 
                      type="radio" 
                      name="googleRole" 
                      value="tutor" 
                      checked={googleRole === 'tutor'} 
                      onChange={(e) => setGoogleRole(e.target.value)} 
                      className="sr-only"
                    />
                    <span className="block text-sm font-bold">Tutor</span>
                    {googleRole === 'tutor' && <Check size={16} className="absolute top-2 right-2 text-purple-500" />}
                  </label>
                </div>
              </div>

              <div className="relative">
                <MockGoogleButton onClick={handleGoogleClick} />
                
                {loadingGoogle && (
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px] rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
              </div>
            </div>

            <p className="text-xs text-center text-gray-400 mt-6 max-w-xs mx-auto">
              By continuing, you agree to PPStack's <a href="#" className="underline hover:text-gray-600">Terms</a> and <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>.
            </p>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Login;