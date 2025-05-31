export const Home = () => {
    return (
        <div className="flex h-screen bg-slate-50 font-sans">

            {/* Sidebar (optional - can be added later if needed) */}

            {/* Main Content Area */}
            <div className="flex flex-col flex-1">
                {/* Topbar */}
                <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <div className="font-semibold text-gray-800">
                        👤 Admin
                    </div>
                </header>

                {/* Dashboard Content */}
                <section className="p-8">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">
                        Welcome to the Dashboard
                    </h1>

                    <div className="flex gap-6 flex-wrap">
                        <div className="bg-white shadow-md rounded-xl p-6 flex-1 min-w-[200px]">
                            <h3 className="text-gray-500 mb-2">Total Users</h3>
                            <p className="text-2xl font-bold text-gray-800">1,240</p>
                        </div>
                        <div className="bg-white shadow-md rounded-xl p-6 flex-1 min-w-[200px]">
                            <h3 className="text-gray-500 mb-2">Revenue</h3>
                            <p className="text-2xl font-bold text-gray-800">$13,420</p>
                        </div>
                        <div className="bg-white shadow-md rounded-xl p-6 flex-1 min-w-[200px]">
                            <h3 className="text-gray-500 mb-2">New Orders</h3>
                            <p className="text-2xl font-bold text-gray-800">320</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
