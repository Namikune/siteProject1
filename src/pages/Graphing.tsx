import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

export default function Graphing({ items, heading } : Props) {


  const [selectedIndex, setSelectedIndex] = useState(-1);

  const message = (a: string) => {
    return items.length === 0 && <p> {a} </p>;
  }; 

  return (
    <>
      <h1> {heading} </h1> 
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>

      {message("bitches")}
    </>
  );
}
