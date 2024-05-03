"use client";
import React from "react";
import { motion } from "framer-motion";

const CardTags = ({ tags, isPast }: any) => {
  return (
    <div className={`${isPast && "opacity-50"}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-2"
      >
        {tags.map((tag: any) => (
          <span
            key={tag.title}
            className="exo2 font-semibold px-4 py-1 bg-gradient-to-tl from-blue-200 to-red-100 text-xs rounded-full text-black"
          >
            {tag.title}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default CardTags;
