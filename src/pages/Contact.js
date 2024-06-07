import React from "react";
import WomanImg from "../img/contact/woman.png";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Contact = () => {
  return (
    <motion.section
      initail={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opactiy: 0, y: "100%" }}
      transition={transition1}
      className="section bg-white"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          <motion.div
            initail={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opactiy: 0, y: "100%" }}
            transition={transition1}
            className="hidden lg:flex bg-[#eef7f79] absolute bottom-0 left-0 right-0 top-72 -z-10"
          >
            bg
          </motion.div>
          <div className="lg:flex-1 lg:pt-32 px-4">
            <h1 className="h1">Contact me</h1>
            <p className="mb-12">I would love to get suggestions from you.</p>
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  type="text"
                  placeholder="Your name"
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                />
                <input
                  type="text"
                  placeholder="Your email address"
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                />
              </div>
              <input
                type="text"
                placeholder="Your message"
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
              />
              <button className="btn mb-[30px] mx-auto lg:mx-0 slef-start">
                Send it
              </button>
            </form>
          </div>
          <motion.div
            initail={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opactiy: 0, y: "100%" }}
            transition={{ transition: transition1, duration: 1.5 }}
            className="relative lg:-right-40 overflow-hidden"
          >
            <img src={WomanImg} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
