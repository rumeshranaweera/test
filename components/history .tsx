"use client";
import { FiArrowRightCircle } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import SectionTitle from "./sectionTitle";

function Hstory() {
  const [isHistoryModelOpen, setIsHistoryModelOpen] = useState(false);

  return (
    <>
      <motion.div className="relative my-10">
        <SectionTitle title="History of perahera" />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 " />
          <div className="relative flex overflow-hidden rounded-lg">
            {/* left - text */}
            <section className="max-w-md md:max-w-2xl">
              <p className="relative paragraph line-clamp-[10] ">
                Kandy Perahara is a traditional festival that takes place
                annually in Kandy, Sri Lanka. The festival has a long and rich
                history, dating back to the early 18th century. The festival is
                dedicated to the Sacred Tooth Relic, which is believed to be the
                left canine tooth of Lord Buddha.
                <br />
                The origins of Kandy Perahara can be traced back to the reign of
                King Kirthi Sri Rajasinghe, who ruled Kandy from 1747 to 1781.
                The king established the festival as a way to honor the Sacred
                Tooth Relic and to showcase the cultural and religious
                traditions of the Kandyan Kingdom. The first Kandy Perahara was
                held in 1755, and the festival has continued to be celebrated
                every year since then.
                <br />
                Over the years, Kandy Perahara has evolved and grown in size and
                scope. During the British colonial period, the festival was
                suppressed, but it was revived in the early 20th century with
                the help of local Buddhist leaders. In the post-independence
                period, the festival has become a major cultural event, drawing
                visitors from all over the world.
                <br />
                Today, Kandy Perahara is one of the most important festivals in
                Sri Lanka, and it is recognized as a UNESCO World Heritage
                cultural event. The festival features a grand procession of
                decorated elephants, dancers, drummers, and other performers,
                who parade through the streets of Kandy over ten nights. The
                procession culminates in a traditional water-cutting ceremony,
                in which water from the Mahaweli River is used to purify the
                streets after the parade.
                <br />
                Kandy Perahara is not just a celebration of Sri Lankan culture
                and tradition, but also a testament to the resilience and
                enduring spirit of the Sri Lankan people. Despite political
                upheaval, natural disasters, and other challenges, the festival
                has continued to be a symbol of hope and renewal, and a source
                of inspiration for generations of Sri Lankans.
              </p>
            </section>
            {/* right - photos */}
            <section className="absolute top-0 right-0 w-1/2 h-full shadow-inner -z-10 shadow-black">
              <Image
                src={"/imgs/img-2.jpg"}
                fill
                alt=""
                className="object-cover "
              />
            </section>
          </div>
          <button
            onClick={() => setIsHistoryModelOpen(true)}
            className="absolute left-0 right-0 mx-auto italic w-fit bottom-2 primary-btn hover:cursor-pointer focus:ring-2 focus:ring-black focus:border-none group"
          >
            continue reading{" "}
            <FiArrowRightCircle
              size={"1.4rem"}
              className="inline-block ml-1 duration-300 group-hover:ml-2"
            />
          </button>
        </div>
      </motion.div>
      <AnimatePresence>
        {isHistoryModelOpen && (
          <Modal
            onClose={() => {
              setIsHistoryModelOpen(false);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Hstory;

// MODAL component

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        // Call the onClose function to close the modal
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKeyPress);

    return () => {
      // Clean up the event listener when the component is unmounted
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  return isOpen ? (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <motion.div className="bg-slate-800/80 backdrop-blur-3xl group h-4/5 m-2 relative flex flex-col md:flex-col w-full max-w-[1024px] xl:h-[550px] p-4 rounded-lg shadow-lg">
        <button
          className="absolute z-50 w-10 h-10 primary-btn top-2 right-2 "
          onClick={() => handleClose()}
        >
          <GrClose className="duration-300 sm:opacity-20 group-hover:opacity-100 " />
        </button>
        <header className="sticky top-0 left-0 mb-4">
          <h2 className="text-2xl font-semibold md:text-3xl">
            History of perahera
          </h2>
        </header>
        <div className="flex flex-row overflow-y-scroll md:flex-col">
          <div className="h-full">
            <p className=" paragraph">
              Kandy Perahara is a traditional festival that takes place annually
              in Kandy, Sri Lanka. The festival has a long and rich history,
              dating back to the early 18th century. The festival is dedicated
              to the Sacred Tooth Relic, which is believed to be the left canine
              tooth of Lord Buddha.
              <br />
              The origins of Kandy Perahara can be traced back to the reign of
              King Kirthi Sri Rajasinghe, who ruled Kandy from 1747 to 1781. The
              king established the festival as a way to honor the Sacred Tooth
              Relic and to showcase the cultural and religious traditions of the
              Kandyan Kingdom. The first Kandy Perahara was held in 1755, and
              the festival has continued to be celebrated every year since then.
              <br />
              Over the years, Kandy Perahara has evolved and grown in size and
              scope. During the British colonial period, the festival was
              suppressed, but it was revived in the early 20th century with the
              help of local Buddhist leaders. In the post-independence period,
              the festival has become a major cultural event, drawing visitors
              from all over the world.
              <br />
              Today, Kandy Perahara is one of the most important festivals in
              Sri Lanka, and it is recognized as a UNESCO World Heritage
              cultural event. The festival features a grand procession of
              decorated elephants, dancers, drummers, and other performers, who
              parade through the streets of Kandy over ten nights. The
              procession culminates in a traditional water-cutting ceremony, in
              which water from the Mahaweli River is used to purify the streets
              after the parade.
              <br />
              Kandy Perahara is not just a celebration of Sri Lankan culture and
              tradition, but also a testament to the resilience and enduring
              spirit of the Sri Lankan people. Despite political upheaval,
              natural disasters, and other challenges, the festival has
              continued to be a symbol of hope and renewal, and a source of
              inspiration for generations of Sri Lankans.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  ) : null;
};
