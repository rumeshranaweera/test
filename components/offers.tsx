"use client";
import { motion } from "framer-motion";
import SectionTitle from "./sectionTitle";

const Offers = () => {
  return (
    <>
      <div className="py-8">
        <div className="mb-10 text-center">
          <SectionTitle title="What we offer" />
          <p className="mx-auto text-base leading-relaxed paragraph">
            Secure your spot and enjoy the best views of the Kandy Perahera with
            our reserved seating, ensuring a memorable and hassle-free
            experience.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2">
          {/* offer goes here */}
          <Offer title="Receive a complimentary souvenir package, including a Kandy Perahera program booklet, traditional Kandyan masks, and other memorabilia" />
          <Offer title="Reserved seating in a prime location to enjoy the Perahera" />
          <Offer title="Special souvenirs and gifts to remember the occasion" />
          <Offer title="Optimal photography opportunities during the Kandy Perahera" />
        </div>
      </div>
    </>
  );
};

const Offer = ({ title }: { title: string }) => {
  return (
    <div className="w-full p-2 sm:w-1/2">
      <div className="flex items-center h-full p-4 bg-yellow-500 rounded">
        <motion.svg
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          className="flex-shrink-0 w-6 h-6 mr-4 text-black"
          viewBox="0 0 24 24"
        >
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </motion.svg>
        <span className="font-medium text-left text-black title-font">
          {title}
        </span>
      </div>
    </div>
  );
};

export default Offers;
