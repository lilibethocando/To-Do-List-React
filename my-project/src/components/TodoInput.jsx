import { useState } from 'react';

const TodoInput = ({addTodo}) => {
    const [title, setTitle] = useState('');

    const handleAddTodo = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            addTodo(title);
            setTitle('');
        }
    }

    return (
        <div className="container mt-6 relative">
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <span className='border border-orange-500 border-solid p-3 rounded-full'></span>
            </div>
            <input 
            className="focus:shadow-lg font-inter focus:shadow-green-800 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 easy-in-out" 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => handleAddTodo(e)}
            placeholder="What's next..."
            />
        </div>
    )
}

export default TodoInput;