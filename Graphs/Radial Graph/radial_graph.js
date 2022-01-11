import "styles.css";
import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
    {
      name: "Mixed Group",
      uv: 0,
      //pv: 3908,
      fill: "#ffc658"
    },
    {
      name: "Female Group",
      uv: 3,
      //pv: 2400,
      fill: "#d0ed57"
    },
    {
      name: "Female",
      uv: 3,
      //pv: 4567,
      fill: "#a4de6c"
    },
    {
      name: "Male Group",
      uv: 10,
      //pv: 1398,
      fill: "#83a6ed"
    },
    {
      name: "Male",
      uv: 64,
      //pv: 9800,
      fill: "#8dd1e1"
    }
  ];
  
  const style = {
    top: 0,
    left: 350,
    lineHeight: "24px"
  };

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};

function RadialGraph() {
  return (
    <RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={10}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
}
RadialGraph();