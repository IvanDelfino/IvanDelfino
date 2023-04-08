import React from "react";
interface Props {
  name: string;
  img: string;
}

const Chip: React.FC<Props> = ({ name, img }) => {
  return (
    <div className="chip">
      {img}
      {name}
    </div>
  );
};

export default Chip;
