import React from 'react';

const RazorpayComponent = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Razorpay</h1>
      </header>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-2xl font-bold text-gray-800">40%</p>
          <p className="text-gray-600">Boost buyer intent</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-2xl font-bold text-gray-800">+50%</p>
          <p className="text-gray-600">Reduce fake orders</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-2xl font-bold text-gray-800">+25%</p>
          <p className="text-gray-600">Increase prepaid order share</p>
        </div>
      </div>

      {/* Magic Checkout Section */}
      <div className="bg-blue-600 text-white p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Boost buyer intent, reduce fake orders, & increase prepaid order share on Magic Checkout!
        </h2>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
          Explore Magic Checkout →
        </button>
      </div>

      {/* Help Section */}
      <div className="text-center mb-12">
        <p className="text-gray-600">Need help? <a href="#" className="text-blue-600 hover:underline">Contact Us</a></p>
      </div>

      {/* New to Razorpay Section */}
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">New to Razorpay?</h2>
        <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold mb-4 hover:bg-blue-700 transition">
          Sign Up
        </button>
        <button className="w-full bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition">
          Login to Dashboard
        </button>

        <div className="mt-6">
          <input
            type="text"
            placeholder="Email or Mobile Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
          />
          <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Next
          </button>
        </div>

        <div className="text-center my-6">
          <span className="text-gray-600">or</span>
        </div>

        <button className="w-full bg-white border border-gray-300 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>

        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Protected by reCAPTCHA, Google</p>
          <p>
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> &{' '}
            <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> apply.
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-12 text-sm text-gray-500">
        <p>Activate Windows</p>
        <p>Go to Settings to activate Windows.</p>
      </div>
    </div>
  );
};

export default RazorpayComponent;