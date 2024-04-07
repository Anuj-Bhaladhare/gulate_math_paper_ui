import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
                <h2 className="text-2xl font-semibold mb-4 text-center">Create User</h2>
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
                        <label htmlFor="email" className="block mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email address"
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
                        onClick={() => navigate('/login')}
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <button onClick={() => navigate('/login')} className="text-blue-500 hover:underline focus:outline-none">
                        User Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
