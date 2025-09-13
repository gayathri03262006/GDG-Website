import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  // Format target date as dd/mm/yyyy
  const eventDate = new Date(targetDate);
  const formattedDate = eventDate.toLocaleDateString('en-GB'); // 👉 dd/mm/yyyy

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
          ),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setIsExpired(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isExpired) {
    return (
      <div className="text-center">
        <p className="text-xl font-semibold text-gray-600 dark:text-gray-400">
          Event has started!
        </p>
        <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
          Event Date: {formattedDate}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center space-x-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div
            key={unit}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg min-w-[80px]">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm uppercase text-gray-500 dark:text-gray-400 mt-1">
                {unit}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 👇 Event Date in dd/mm/yyyy */}
      <p className="mt-4 text-lg font-medium dark:text-gray-300">
        Event Date: {formattedDate}
      </p>
    </div>
  );
};

export default CountdownTimer;
