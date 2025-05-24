import "./Login.css"; // CSS styles in a separate file

export const Login = () => {
    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Welcome Back 👋</h2>
                <p>Please login to your account</p>

                <label>Email</label>
                <input type="email" placeholder="you@example.com" required />

                <label>Password</label>
                <input type="password" placeholder="Enter your password" required />

                <button type="submit">Login</button>

                <p className="register-link">
                    Don’t have an account? <a href="/register">Register here</a>
                </p>
            </form>
        </div>
    );
};
