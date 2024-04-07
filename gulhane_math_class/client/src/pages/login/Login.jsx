import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleUserLogin = () => {
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
                <h2 className="text-2xl font-semibold mb-4 text-center">User Login</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block mb-1">
                            User Name
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleUserLogin}
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <button
                        onClick={() => navigate('/signup')}
                        className="text-blue-500 hover:underline focus:outline-none"
                    >
                        Create User
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
