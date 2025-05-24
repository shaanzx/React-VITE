import "./Home.css";

export const Home = () => {
    return (
        <div className="dashboard">

            {/* Main Content Area */}
            <div className="main">
                {/* Topbar */}
                <header className="topbar">
                    <input type="text" placeholder="Search..." />
                    <div className="user-info">
                        <span>👤 Admin</span>
                    </div>
                </header>

                {/* Dashboard Content */}
                <section className="content">
                    <h1>Welcome to the Dashboard</h1>
                    <div className="cards">
                        <div className="card">
                            <h3>Total Users</h3>
                            <p>1,240</p>
                        </div>
                        <div className="card">
                            <h3>Revenue</h3>
                            <p>$13,420</p>
                        </div>
                        <div className="card">
                            <h3>New Orders</h3>
                            <p>320</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
