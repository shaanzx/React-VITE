export const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
            <form className="bg-white p-8 md:p-10 rounded-xl shadow-xl w-full max-w-md flex flex-col">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-1">
                    Welcome Back 👋
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Please login to your account
                </p>

                <label className="font-semibold text-gray-600 mb-1">Email</label>
                <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="mb-5 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />

                <label className="font-semibold text-gray-600 mb-1">Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="mb-5 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />

                <button
                    type="submit"
                    className="bg-black hover:bg-green-500 text-white py-3 rounded-lg text-base font-semibold transition-colors"
                >
                    Login
                </button>

                <p className="text-center text-sm mt-4">
                    Don’t have an account?{" "}
                    <a href="/register" className="text-blue-600 hover:underline">
                        Register here
                    </a>
                </p>
            </form>
        </div>
    );
};
