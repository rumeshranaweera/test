import SectionTitle from "../sectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const content = [
  {
    trigger: "What is the meaning of Perahera?",
    content:
      "Perhara is more likely a parade held in Srilanka. The best known perahera is the Esala Perahera held in Kandy at the time of the full moon of the months of July/August.",
  },

  {
    trigger: "What is the Kandy Esala Perahera?",
    content:
      "The Kandy Esala Perahara is a famouse Culutural Festival held in July - August to pay homage to the Sacred Tooth Relic of Buddha. Kandy Esala Perahara is considerethe world and to be the oldest cultural event in the world and continues with it's colurful, glamorous splender making it an out of this world experience. ",
  },

  {
    trigger: "When does the Kandy Esala Perahara take place?",
    content:
      "Kandy Esala Perahera is celebrated annually in July or August and this year, it will be celebrated from August 21 to 31. This week-long holiday honors the Sacred Tooth Relic and the four 'guardian' Gods Natha, Vishnu, Kataragama, and Goddess Pattini.",
  },

  {
    trigger: "Where does the Kandy Esala Perahara occur?",
    content:
      "Kandy Esala Perahara is held in the town of Kandy,located in the central province of Sri Lanka. Kandy is a significant religious and pildgrimage site,attracting both local and foriegn tourists from across the world.",
  },

  {
    trigger: "How long does the Kandy Esala Perahara last?",
    content:
      "Kandy Esala Perahara is typically around 10 days with various events and processions taking place during this period.",
  },

  {
    trigger: "What happens during the the Kandy Esala Perahara?",
    content:
      "The Kandy Esala Perahera Casket which is considered as living Lord Buddha which parades the streets is worshipped by the divinity, humanity and elephants. This is considered to be the oldest cultural event in the world and continues with its colourful,glamorous splendour making it an out of this world experience.",
  },

  {
    trigger:
      "Are there any special customs or practice associated with the Kandy Esala Perahara?",
    content:
      "The Asela Perahera holds deep cultural and religious significance for the locals. Many devotees fast and engage in various acts of penance during the festival. It is also common for people to make vows or offer prayers to Sacred Tooth Relic of Lord Buddha during this time. Additionally, the festival provides an opportunity for traditional artisans and craftsmen to showcase their skills through various cultural exhibitions.",
  },

  {
    trigger: "Who leads the Kandy Esala Perahara?",
    content:
      "The Kandy Esala Perahera actually comprises of five separate Peraheras - four from the Kandy devales (shrines) to the deities - with order of precedence maintained throughout. Led by the Dalada Maligawa Perahera, the second is to Natha, a deity of special importance to Kandy, believed to be Buddha-in-waiting.",
  },

  {
    trigger: "What is the order of Kandy Perahera?",
    content:
      "The Kandy Maligawa Perahera is followed in order by those of the Natha, Vishnu, Kataragama and Pattini 'Devales' (Temples dedicated to these Gods) which are situated in the vicinity of the Kandy Maligawa (Temple of the Tooth).",
  },

  {
    trigger: "Can tourists participate in the Kandy Esala Perahara?",
    content:
      "Yes, tourists are welcome to witness and experience the Asela Perahera. However, it's important to respect the cultural and religious significance of the festival. It is advisable to dress modestly and behave respectfully during the event.",
  },
];

const AccordionSection = () => {
  return (
    <div>
      <SectionTitle title="FAQs" />
      <Accordion type="single" collapsible>
        {content.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="mx-1 font-sans text-lg tracking-wide text-left md:text-xl text-slate-100 md:mx-0">
              {faq.trigger}
            </AccordionTrigger>
            <AccordionContent>{faq.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionSection;
