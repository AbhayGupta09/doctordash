import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DoctorLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
      form: '',
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);

      // Later replace this with your API call
      console.log('Doctor login:', formData);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // After successful backend authentication
      navigate('/dashboard');
    } catch (error) {
      setErrors({
        form: 'Invalid email or password',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Doctor Login</h1>

          <p className="mt-2 text-sm text-slate-500">Sign in to access your clinical dashboard</p>
        </div>

        {/* General error */}
        {errors.form && (
          <div className="mb-5 p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-600">
            {errors.form}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Doctor Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="doctor@example.com"
              className="w-full px-4 py-3 border border-slate-300
                         rounded-lg outline-none
                         focus:border-blue-500
                         focus:ring-2 focus:ring-blue-100"
            />

            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-slate-300
                         rounded-lg outline-none
                         focus:border-blue-500
                         focus:ring-2 focus:ring-blue-100"
            />

            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
          </div>

          {/* Forgot password */}
          <div className="flex justify-end">
            <button type="button" className="text-sm text-blue-600 hover:text-blue-700">
              Forgot password?
            </button>
          </div>

          {/* Login */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg
                       bg-blue-600 text-white font-medium
                       hover:bg-blue-700
                       disabled:bg-blue-400
                       transition"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-6">Authorized medical staff only</p>
      </div>
    </div>
  );
}

export default DoctorLogin;
