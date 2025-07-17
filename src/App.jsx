import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, AlertCircle, Gift } from 'lucide-react';

const randomColors = [
  'bg-gradient-to-r from-pink-400 via-red-400 to-yellow-300',
  'bg-gradient-to-r from-green-400 via-blue-400 to-purple-400',
  'bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500',
  'bg-gradient-to-r from-blue-400 via-cyan-400 to-green-300',
  'bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400',
];

const App = () => {
  const [username, setUsername] = useState('');
  const [showSurprise, setShowSurprise] = useState(false);
  const [colorIdx, setColorIdx] = useState(0);

  const handleSurprise = () => {
    setColorIdx(Math.floor(Math.random() * randomColors.length));
    setShowSurprise(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full"
      >
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="text-purple-500 w-8 h-8 animate-bounce" />
          <h1 className="text-4xl font-extrabold text-gray-800">
            Welcome to Tailwind Test
          </h1>
        </div>
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 flex items-center gap-2 rounded"
          role="alert"
        >
          <AlertCircle className="w-6 h-6 text-yellow-500" />
          <div>
            <p className="font-bold">Alert</p>
            <p>This is a sample Tailwind alert box.</p>
          </div>
        </motion.div>
        {/* Username input and surprise button */}
        <motion.input
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          type="text"
          placeholder="Enter your name..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition mb-2"
        />
        <motion.button
          whileHover={{ scale: 1.07, backgroundColor: '#2563eb' }}
          whileTap={{ scale: 0.97 }}
          className="bg-blue-500 hover:bg-blue-700 transition-colors text-white font-bold py-2 px-4 rounded-lg w-full mb-4 shadow"
          onClick={handleSurprise}
          disabled={!username}
        >
          Surprise Me!
        </motion.button>
        {/* Surprise card */}
        {showSurprise && (
          <motion.div
            initial={{ scale: 0.7, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`rounded-xl p-6 mt-4 text-white flex flex-col items-center justify-center shadow-lg ${randomColors[colorIdx]}`}
          >
            <Gift className="w-10 h-10 mb-2 animate-bounce" />
            <div className="text-2xl font-bold mb-1">Hello, {username}!</div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default App;
