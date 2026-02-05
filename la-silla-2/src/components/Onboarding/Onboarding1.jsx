import "./onboarding.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

export const Onboarding1 = () => {
  const navigate = useNavigate();
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLeaving(true), 2000);

    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      className="Onboarding"
      initial={{ y: 0, opacity: 1 }}
      animate={leaving ? { y: "-60%", opacity: 0 } : {}}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      onAnimationComplete={() => leaving && navigate("/")}
    >
      <h1 className="Onboarding1-h1">LA (2) SILLA</h1>
    </motion.div>
  );
};
