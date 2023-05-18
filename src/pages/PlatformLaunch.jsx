import React from "react";
import ListTasks from "../components/ListTasks";

function PlatformLaunch({ data }) {
  const renderData = data.map((item) => (
    <ListTasks key={item.name} data={item} />
  ));
  return renderData;
}

export default PlatformLaunch;
