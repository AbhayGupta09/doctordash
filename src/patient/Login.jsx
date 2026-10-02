import { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    patientId: '',
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

    // Remove error when user starts correcting the field
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.patientId.trim()) {
      newErrors.patientId = 'Patient ID is required';
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

    setLoading(true);

    try {
      // Later:
      // const response = await loginPatient(formData);

      console.log('Login data:', formData);

      // Simulating API request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Login successful');
    } catch (error) {
      setErrors({
        form: 'Invalid Patient ID or password',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Patient Login</h1>

          <p className="text-sm text-slate-500 mt-2">Sign in to access your medical dashboard</p>
        </div>

        {/* General Error */}
        {errors.form && (
          <div className="mb-5 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
            {errors.form}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Patient ID */}
          <div>
            <label htmlFor="patientId" className="block text-sm font-medium text-slate-700 mb-2">
              Patient ID
            </label>

            <input
              id="patientId"
              name="patientId"
              type="text"
              value={formData.patientId}
              onChange={handleChange}
              placeholder="e.g. PAT-1001"
              className={`w-full px-4 py-3 rounded-lg border outline-none transition
                ${
                  errors.patientId
                    ? 'border-red-400 focus:ring-2 focus:ring-red-100'
                    : 'border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                }
              `}
            />

            {errors.patientId && <p className="mt-1 text-sm text-red-500">{errors.patientId}</p>}
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
              className={`w-full px-4 py-3 rounded-lg border outline-none transition
                ${
                  errors.password
                    ? 'border-red-400 focus:ring-2 focus:ring-red-100'
                    : 'border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                }
              `}
            />

            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" className="rounded border-slate-300" />
              Remember me
            </label>

            <button type="button" className="text-blue-600 hover:text-blue-700 font-medium">
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400
                       text-white font-medium py-3 rounded-lg transition"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-6">
          Your medical information is kept secure.
        </p>
      </div>
    </div>
  );
}

export default Login;
