"use client";


import { motion } from "./AnimationProvider";
import Image from "next/image";

function BestMaterial() {
  // Component labels data
  const labels = [
    {
      id: 1,
      name: "Wire Guardian",
      position: "left-4 sm:left-8 md:left-16 top-1/3",
    },
    {
      id: 2,
      name: "Ribbon Crimp",
      position: "right-4 sm:right-8 md:right-16 top-1/4",
      reverse: true,
    },
    {
      id: 3,
      name: "End Cap",
      position: "left-6 sm:left-12 md:left-20 bottom-1/3",
    },
    {
      id: 4,
      name: "Chain Terminator",
      position: "right-4 sm:right-8 md:right-16 top-1/2",
      reverse: true,
    },
    {
      id: 5,
      name: "Bead Tip",
      position: "left-2 sm:left-4 md:left-8 bottom-1/4",
    },
    {
      id: 6,
      name: "Cord Coil",
      position: "right-6 sm:right-12 md:right-20 bottom-1/4",
      reverse: true,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-20 text-center relative"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-xs sm:text-sm text-[#79593D] mb-1 sm:mb-2 tracking-wider">
          Basic And Exquisite
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-8 sm:mb-12 md:mb-16">
          Best Material
        </h2>

        {/* Main rings container */}
        <div className="relative w-full max-w-5xl mx-auto h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
          {/* Golden rings visualization */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/images/golden-rings.svg"
              alt="Golden wedding rings"
              fill
              className="object-contain"
              quality={100}
            />
          </div>

          {/* Component labels - Responsive adjustments */}
          {labels.map((label) => (
            <div key={label.id} className={`absolute ${label.position}`}>
              <div
                className={`flex items-center ${label.reverse ? "flex-row-reverse" : ""
                  }`}
              >
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#7F5F43] rounded-full"></div>
                <div
                  className={`w-12 sm:w-16 md:w-24 h-px border-t-2 border-dashed border-gray-400 ${label.reverse ? "mr-1 sm:mr-2" : "ml-1 sm:ml-2"
                    }`}
                ></div>
                <span className="text-xs sm:text-sm md:text-base text-gray-700 whitespace-nowrap mx-1 sm:mx-2">
                  {label.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default BestMaterial;
