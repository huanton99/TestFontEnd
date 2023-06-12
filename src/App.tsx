import React, { useEffect, useState } from "react";
import Formula1Search from "./Formula1Search";
import races from "./data/races";
import drivers from "./data/drivers";
import teams from "./data/teams";
import "./App.css";
import {
  Race,
  columsRace,
  searchBy,
  raceColumns,
  driveColumns,
  teamColumns,
  Year,
} from "./const/const";
import Table from "./compoment/table/Table";
import RaceVisualization from "./compoment/graphic/graphic";
import Tabs from "./compoment/tab/Tab";

const App: React.FC = () => {
  const [filter, setFilter] = useState<any>({
    text: "",
    year: Year[0].name,
    search: searchBy[0].name,
  });
  const [data, setData] = useState<any>(races);
  const [colum, setColum] = useState<any>(raceColumns);
  const [labelGraphic, setLabelGraphic] = useState<string>("garan_prix");
  const [valueGraphic, setValueGraphic] = useState<string>("laps");
  console.log(filter);

  useEffect(() => {
    if (filter.search === searchBy[0].name) {
      const newRaces = races.filter((item) => {
        return (
          item.year === Number(filter.year) &&
          (item.car.includes(filter.text) ||
            item.garan_prix.includes(filter.text))
        );
      });
      setData(newRaces);
      setColum(raceColumns);
      setLabelGraphic("garan_prix");
      setValueGraphic("laps");
    } else if (filter.search === searchBy[1].name) {
      const newDrivers = drivers.filter((item) => {
        return (
          item.year === Number(filter.year) &&
          (item.car.includes(filter.text) || item.driver.includes(filter.text))
        );
      });
      setData(newDrivers);
      setColum(driveColumns);
      setLabelGraphic("driver");
      setValueGraphic("pts");
    } else if (filter.search === searchBy[2].name) {
      const newTeams = teams.filter((item) => {
        return (
          item.year === Number(filter.year) && item.team.includes(filter.text)
        );
      });
      setData(newTeams);
      setColum(teamColumns);
      setLabelGraphic("team");
      setValueGraphic("pts");
    }
  }, [filter]);
  const tabs = [
    { title: "Table", content: <Table data={data} columns={colum} /> },
    {
      title: "Graphic",
      content: (
        <RaceVisualization
          data={data}
          label={labelGraphic}
          value={valueGraphic}
        />
      ),
    },
  ];
  return (
    <div>
      <header className="header">
        <div className="header-container">
          <h1 className="logo">RacingF1</h1>
          <nav className="nav-menu">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <body>
        <Formula1Search fill={setFilter} />
        <div style={{ padding: "80px" }}>
          <Tabs tabs={tabs} />
        </div>
      </body>
      <footer className="footer">
        <p>&copy; 2023 RacingF1. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
