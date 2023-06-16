import SectionTitle from "./sectionTitle";

export const scheduleList = [
  {
    event: "1st Kumbal Perahera",
    date: `21st`,
  },
  {
    event: "2nd Kumbal Perahera",
    date: `22nd`,
  },
  {
    event: "3nd Kumbal Perahera",
    date: `23rd`,
  },
  {
    event: "4nd Kumbal Perahera",
    date: `24th`,
  },
  {
    event: "5nd Kumbal Perahera",
    date: `25th`,
  },
  {
    event: "1st Randoli Perahera",
    date: `26th`,
  },
  {
    event: "2nd Randoli Perahera",
    date: `27th`,
  },
  {
    event: "3rd Randoli Perahera",
    date: `28th`,
  },
  {
    event: "4th Randoli Perahera",
    date: `29th`,
  },
  {
    event: "Final Randoli Perahera",
    date: "30th",
  },
  { event: "The water cutting ceremony", date: "31st" },
  { event: "Day Perahera", date: "31st" },
];
function Schedule() {
  return (
    <div className="w-full ">
      <SectionTitle title="schedule" />
      {/* top */}
      <div className="grid grid-cols-2 text-3xl font-semibold text-black bg-yellow-500">
        <h3>Event</h3>
        <h3>Date</h3>
      </div>
      {/* bottom */}
      <div>
        {scheduleList.map((event, inx) => {
          return (
            <div
              className="grid grid-cols-2 py-2 text-xl font-semibold leading-7 border-b even:bg-yellow-500/5 border-yellow-900/50"
              key={inx}
            >
              <p>{event.event}</p>
              <p>
                <a href="#seats">
                  {event.date} August {new Date().getFullYear().toString()}
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Schedule;
