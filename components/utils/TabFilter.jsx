import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function TabFilter({ resultQuery, resultData, setResultData}) {

  function filterDataByAudience(category = "Umum") {
    const filterByAudience = resultQuery.filter(content => content.audience === category)
    return filterByAudience
  }

  const handleChange = (event) => {
    const labelName = event.target.textContent;
    if (labelName === "Umum") {
      setResultData(filterDataByAudience("Umum"));
    } else if (labelName === "Internal") {
      setResultData(filterDataByAudience("Internal"));
    } else {
      setResultData(resultQuery);
    }
  };

  return (
    <Tabs value={resultData} onChange={handleChange}>
      <Tab label={"Umum & Internal"} />
      <Tab label={"Umum"} />
      <Tab label={"Internal"} />
    </Tabs>
  );
}
