import { useEffect, useState } from "react";
import type { EventI } from "../types/Events";
import type { EventApi } from "../types/Events";
import CardMusic from "./CardMusic";

function ArtsPage() {
  const [event, setEvent] = useState<EventI[]>([]);
  useEffect(() => {
    fetch(
      "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=20&refine=types_libelles%3AProjection",
    )
      .then((response) => response.json())
      .then((data: EventApi) => {
        setEvent(data.results);
      });
  }, []);

  return (
    <>
      <section className="theme-body">
        <h1 className="theme-title"> Evènement Artistiques </h1>

        {event?.map((el) => {
          return <CardMusic key={el.id_agenda_in} data={el} id={el.id_manif} />;
        })}
      </section>
    </>
  );
}
export default ArtsPage;
