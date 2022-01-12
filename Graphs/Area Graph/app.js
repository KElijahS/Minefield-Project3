import "./styles.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    Year: "1941",
    Female: 3,
    FemaleGroup: 3,
    Male: 64,
    MaleGroup: 10,
    MixedGroup: 0
  },
  {
    Year: "1945",
    Female: 6,
    FemaleGroup: 1,
    Male: 64,
    MaleGroup: 4,
    MixedGroup: 5
  },
  {
    Year: "1950",
    Female: 5,
    FemaleGroup: 0,
    Male: 14,
    MaleGroup: 6,
    MixedGroup: 5
  },
  {
    Year: "1955",
    Female: 5,
    FemaleGroup: 3,
    Male: 16,
    MaleGroup: 5,
    MixedGroup: 1
  },
  {
    Year: "1960",
    Female: 14,
    FemaleGroup: 2,
    Male: 63,
    MaleGroup: 17,
    MixedGroup: 4
  },
  {
    Year: "1965",
    Female: 11,
    FemaleGroup: 3,
    Male: 32,
    MaleGroup: 47,
    MixedGroup: 7
  },
  {
    Year: "1970",
    Female: 6,
    FemaleGroup: 1,
    Male: 27,
    MaleGroup: 52,
    MixedGroup: 14
  },
  {
    Year: "1975",
    Female: 14,
    FemaleGroup: 2,
    Male: 37,
    MaleGroup: 39,
    MixedGroup: 8
  },
  {
    Year: "1980",
    Female: 15,
    FemaleGroup: 0,
    Male: 47,
    MaleGroup: 27,
    MixedGroup: 11
  },
  {
    Year: "1985",
    Female: 20,
    FemaleGroup: 2,
    Male: 34,
    MaleGroup: 32,
    MixedGroup: 12
  },
  {
    Year: "1990",
    Female: 26,
    FemaleGroup: 6,
    Male: 35,
    MaleGroup: 26,
    MixedGroup: 7
  },
  {
    Year: "1995",
    Female: 29,
    FemaleGroup: 7,
    Male: 22,
    MaleGroup: 32,
    MixedGroup: 10
  },
  {
    Year: "2000",
    Female: 26,
    FemaleGroup: 5,
    Male: 33,
    MaleGroup: 22,
    MixedGroup: 14
  },
  {
    Year: "2005",
    Female: 21,
    FemaleGroup: 1,
    Male: 39,
    MaleGroup: 23,
    MixedGroup: 16
  },
  {
    Year: "2010",
    Female: 26,
    FemaleGroup: 0,
    Male: 42,
    MaleGroup: 12,
    MixedGroup: 20
  },
  {
    Year: "2015",
    Female: 25,
    FemaleGroup: 1,
    Male: 49,
    MaleGroup: 9,
    MixedGroup: 16
  },
  {
    Year: "2020",
    Female: 17,
    FemaleGroup: 1,
    Male: 67,
    MaleGroup: 2,
    MixedGroup: 13
  }
];

const toPercent = (decimal: number, fixed: number = 0) =>
  `${(decimal * 100).toFixed(fixed)}%`;

const getPercent = (value: number, total: number) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const renderTooltipContent = (o: any) => {
  const { payload = [], label } = o;
  const total = payload.reduce(
    (result: number, entry: any) => result + entry.value,
    0
  );

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry: any, index: number) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <AreaChart
      width={500}
      height={400}
      data={data}
      stackOffset="expand"
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Year" />
      <YAxis tickFormatter={toPercent} />
      <Tooltip content={renderTooltipContent} />
      <Area
        type="monotone"
        dataKey="Female"
        stackId="1"
        stroke="#a4de6c"
        fill="#a4de6c"
      />
      <Area
        type="monotone"
        dataKey="FemaleGroup"
        stackId="1"
        stroke="#d0ed57"
        fill="#d0ed57"
      />
      <Area
        type="monotone"
        dataKey="Male"
        stackId="1"
        stroke="#8dd1e1"
        fill="#8dd1e1"
      />
      <Area
        type="monotone"
        dataKey="MaleGroup"
        stackId="1"
        stroke="#83a6ed"
        fill="#83a6ed"
      />
      <Area
        type="monotone"
        dataKey="MixedGroup"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
  );
}
