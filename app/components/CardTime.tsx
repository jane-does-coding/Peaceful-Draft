"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const CardTime = ({
  time1: initialTime1,
  time2: initialTime2,
  isPast,
}: {
  time1: string;
  time2: string;
  isPast: boolean;
}) => {
  const [time1, setTime1] = useState(initialTime1);
  const [time2, setTime2] = useState(initialTime2);
  const [time1Error, setTime1Error] = useState(false);
  const [time2Error, setTime2Error] = useState(false);

  const handleTimeChange = (event: any, setTime: any, setError: any) => {
    setTime(event.target.value);
    setError(false);
  };

  const handleBlur = (event: any, setTime: any, setError: any) => {
    const isValidTime = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(
      event.target.value
    );
    if (!isValidTime) {
      setError(true);
      event.target.focus();
    } else {
      setTime(event.target.value);
    }
  };

  return (
    <div className={`${isPast && "opacity-50"}`}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-2 my-2 text-white"
      >
        <input
          value={time1}
          onChange={(e) => handleTimeChange(e, setTime1, setTime1Error)}
          onBlur={(e) => handleBlur(e, setTime1, setTime1Error)}
          className={`text-center text-white border-[1.5px] outline-none py-1 bg-neutral-800 text-sm rounded-md w-[6rem] ${
            time1Error
              ? "border-red-500 focus:border-red-500"
              : "border-transparent focus:border-neutral-600"
          }`}
        />
        -
        <input
          value={time2}
          onChange={(e) => handleTimeChange(e, setTime2, setTime2Error)}
          onBlur={(e) => handleBlur(e, setTime2, setTime2Error)}
          className={`text-center text-white border-[1.5px] outline-none py-1 bg-neutral-800 text-sm rounded-md w-[6rem] ${
            time2Error
              ? "border-red-500 focus:border-red-500"
              : "border-transparent focus:border-neutral-600"
          }`}
        />
      </motion.div>
    </div>
  );
};

export default CardTime;
