"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const AboutPerehera = () => {
  const [showFullAbout, setShowFullAbout] = useState(false);

  return (
    <div className="py-2 rounded-lg bg-yellow-500/5">
      <h2 className="my-2 text-4xl">
        Discover the Colorful History and Traditions of Kandy Perahera
      </h2>
      <motion.div
        layout
        transition={{ layout: { duration: 0.5 } }}
        className="overflow-hidden "
      >
        <motion.p
          layout="position"
          className={` ${
            !showFullAbout && "line-clamp-5"
          } md:line-clamp-none paragraph`}
        >
          Kandy Perahera is one of the most important cultural events in Sri
          Lanka, and it&rsquo;s a festival that is steeped in tradition and
          history. This annual event, which takes place in the city of Kandy, is
          a celebration of the sacred Tooth Relic of the Buddha, which is housed
          in the Temple of the Tooth. The festival dates back over 250 years,
          and it has evolved over time to become the grand spectacle that it is
          today.
          <br /> During the festival, participants from all over Sri Lanka come
          together to take part in colorful processions, traditional dances, and
          other performances that showcase the rich culture and heritage of the
          island. The festival lasts for ten days, and each day is filled with
          events that are both entertaining and educational. <br />
          So we&rsquo;ll provide you with all the information you need to know
          about Kandy Perahera. From the festival&rsquo;s history and
          significance to its schedule and locations, we&rsquo;ll cover
          everything you need to plan your visit and make the most of your
          experience. So come along and join us as we explore this amazing
          festival and everything it has to offer!
        </motion.p>
        <motion.span
          layout="position"
          className="inline-block !py-2 cursor-pointer primary-btn md:hidden"
          onClick={() => setShowFullAbout(!showFullAbout)}
        >
          {showFullAbout ? "show less" : "continue reading"}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default AboutPerehera;
