/**
 * Created by Jiayi Li at 12/24/2024,7:16 PM
 */
import React, { useState } from 'react';

const App: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-blue-600">Welcome to React with TypeScript and Tailwind!</h1>
            <p className="text-xl mt-4">Current Count: <span className="font-semibold">{count}</span></p>
            <div className="mt-4 space-x-4">
                <button
                    onClick={increment}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Increment
                </button>
                <button
                    onClick={decrement}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default App;