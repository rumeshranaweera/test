import Hero from "../components/hero";
import History from "../components/history ";
import Schedule from "../components/schedule";
import Offers from "@/components/offers";
import AccordionSection from "@/components/accordion/accordionSection";
import AboutPerehera from "@/components/aboutPerehera";
import PageDiv from "@/components/pageDiv";
import SeatsSection from "@/components/seats/seatsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PageDiv>
        <AboutPerehera />
        <History />
        <Schedule />
        <Offers />
        <SeatsSection />
        <AccordionSection />
      </PageDiv>
    </>
  );
}
