import { useState } from "react";
import TinderCard from 'react-tinder-card';

import "./styles.scss";

export default function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
    },
    {
      name: "Zoë Kravitz",
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgyNzU1OTYwMDYwNjUwODQ4/gettyimages-1200246871.jpg",
    },
    {
      name: "Florence Pugh",
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgyNzI5MTA4MTkzNTUxNzc5/gettyimages-1205209881.jpg",
    },
    {
      name: "Cleve Jones",
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgxNDUxNTcwMTcxMzU3MTMx/cleve-jones_500x500_gettyimages-643277430.jpg",
    },
    {
      name: "Daniel Kaluuya",
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc4ODMxODY1MDY5NzA4Nzk5/daniel-kaluuya_500x500_gettyimages-926817010.jpg",
    },
    {
      name: "Amy Coney Barrett",
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc1NzIzNDcwNTM2MDU3OTEx/amy_barrett_headshot_university_of_notre_dame_500x0500.jpg",
    },
    {
      name: "Mark Zuckerberg",
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  }

  return (
    <div className="tinder-cards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard 
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>

          </TinderCard>
        ))}
      </div>
    </div>
  );
}
