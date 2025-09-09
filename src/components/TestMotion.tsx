"use client";

import { motion } from "framer-motion";
import React from "react";

export default function TestMotion() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

    </motion.div>
  );
}
