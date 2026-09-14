"use client";

import { motion } from "motion/react";
import { InterfaceMockup } from "./InterfaceMockup";
import { evolutionStages } from "./stages";

export function SteppedSequence() {
  return (
    <div className="flex flex-col gap-32">
      {evolutionStages.map((stage, index) => (
        <motion.div
          key={stage.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-lg"
        >
          <p className="text-accent mb-4 text-center font-mono text-sm tracking-wide uppercase">
            {stage.title}
          </p>
          <InterfaceMockup stage={index} />
        </motion.div>
      ))}
    </div>
  );
}
