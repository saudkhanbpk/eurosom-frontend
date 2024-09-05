import React from "react";
import { motion } from "framer-motion";
import useInView from "../components/hook/useInView"; // Adjust the path as needed
import Slidebar from "../components/home/slidebar/slidebar/Slidebar";
import ChatPopUp from "../components/ChatPopUp";
import BusinessStaff from "../components/home/BusinessStaff/BusinessStaff";
import TechStack from "../components/home/tech-stack/components/TechStack";
import EmpowerBusiness from "../components/home/EmpowerBusiness/EmpowerBusiness";
import EngagementModel from "../components/home/EngagementModel/EngagementModel";
import SolutionOffering from "../components/home/SloutionOffering/SolutionOffering";
import Contact from "../components/home/Contact/Contact";

const HomePage = () => {
  const slideInVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0 },
  };

  const isInView = useInView();

  return (
    <div className="bg-light">
      <div  style={{ overflowX: 'hidden' }}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={slideInVariants}
        transition={{ duration: 0.8 }}
        id="animatedElement"
      >
        <Slidebar />
      </motion.div>
      
      <motion.div
        className="mt-5"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={slideInVariants}
        transition={{ duration: 0.8 }}
        id="animatedElement"
      >
        <BusinessStaff />
      </motion.div>

      <motion.div
        className="mt-5"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={slideInVariants}
        transition={{ duration: 0.8 }}
        id="animatedElement"
      >
        <EmpowerBusiness />
      </motion.div>

      <motion.div
        className="mt-5"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={slideInVariants}
        transition={{ duration: 0.8 }}
        id="animatedElement"
      >
        <TechStack />
      </motion.div>

      <motion.div
        className="mt-5"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={slideInVariants}
        transition={{ duration: 0.8 }}
        id="animatedElement"
      >
        <SolutionOffering />
      </motion.div>

      <motion.div
        className="mt-5"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={slideInVariants}
        transition={{ duration: 0.8 }}
        id="animatedElement"
      >
        <EngagementModel />
      </motion.div>

      <motion.div
        className="mt-5"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={slideInVariants}
        transition={{ duration: 0.8 }}
        id="animatedElement"
      >
        <Contact />
      </motion.div>

      <motion.div
        className="mt-5"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={slideInVariants}
        transition={{ duration: 0.8 }}
        id="animatedElement"
      >
        <ChatPopUp />
      </motion.div>
    </div>
    </div>
  );
};

export default HomePage;
