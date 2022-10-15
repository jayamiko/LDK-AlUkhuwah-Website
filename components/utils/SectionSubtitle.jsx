import React from "react";
import classes from "../../styles/subtitle.module.css";

const SectionSubtitle = (props) => {
  return (
    <h5
      className={`${classes.section__subtitle} mt-4 text-lg sm:text-xl lg:text-2xl`}
    >
      {props.subtitle}
    </h5>
  );
};

export default SectionSubtitle;
