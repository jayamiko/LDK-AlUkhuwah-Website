import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function TabFilter({ resultQuery, resultData, setResultData}) {

  const [label, setLabel] = useState("Umum & Internal")
  
  function filterDataByAudience(category = "Umum & Internal") {
    const filterByAudience = resultQuery.filter(content => content.audience === category)
    return filterByAudience
  }

  const handleChange = (event) => {
    setLabel(event.target.textContent)
    if (label === "Umum") {
      setResultData(filterDataByAudience("Umum"));
    } else if (label === "Internal") {
      setResultData(filterDataByAudience("Internal"));
    } else {
      setResultData(resultQuery);
    }
  };

  function styleTab(category) {
    const style = {
      borderBottom: label === category ? 'solid rgb(6 182 212) 2px' : 'none',
      fontWeight: label === category ? 'bold' : 'normal',
    }
    return style
  }

  return (
    <Tabs value={resultData} onChange={handleChange} 
      className="my-3"
    >
      <Tab 
        label={"Umum & Internal"} 
        style={styleTab("Umum & Internal")}/>
      <Tab 
        label={"Umum"}
        style={styleTab("Umum")}/>
      <Tab 
        label={"Internal"}
        style={styleTab("Internal")}/>
    </Tabs>
  );
}
