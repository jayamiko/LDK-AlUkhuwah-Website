import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function TabFilter({ resultQuery, resultData, setResultData }) {
  const [label, setLabel] = useState("All Video");

  function filterDataByAudience(category = "HTML") {
    console.log("Category", category);
    const filterByAudience = resultQuery.filter(
      (content) => content.category === category
    );
    // console.log(filterByAudience);
    return filterByAudience;
  }

  const handleChange = (event) => {
    setLabel(event.target.textContent);
    if (event.target.textContent === "HTML") {
      console.log("HTML");
      setResultData(filterDataByAudience("HTML"));
    } else if (event.target.textContent === "CSS") {
      console.log("CSS");
      setResultData(filterDataByAudience("CSS"));
    } else if (event.target.textContent === "Javascript") {
      console.log("Javascript");
      setResultData(filterDataByAudience("Javascript"));
    } else {
      console.log("All Video");
      setResultData(resultQuery);
    }
  };

  function styleTab(category) {
    const style = {
      borderBottom: label === category ? "solid rgb(6 182 212) 2px" : "none",
      fontWeight: label === category ? "bold" : "normal",
      color: label === category ? "rgb(6 182 212)" : "black",
    };
    return style;
  }

  return (
    <div className="flex flex-col md:flex-row my-3">
      <Tabs value={resultData} onChange={handleChange}>
        <Tab label={"All Video"} style={styleTab("All Video")} />
        <Tab label={"HTML"} style={styleTab("HTML")} />
        <Tab label={"CSS"} style={styleTab("CSS")} />
        <Tab label={"Javascript"} style={styleTab("Javascript")} />
      </Tabs>
      <Tabs value={resultData} onChange={handleChange}>
        <Tab label={"React Js"} style={styleTab("React Js")} />
      </Tabs>
    </div>
  );
}
