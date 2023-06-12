export const Year = [
  {
    id: 2023,
    name: "2023",
  },
  {
    id: 2022,
    name: "2022",
  },
];
export const searchBy = [
  {
    id: 1,
    name: "Races",
  },
  {
    id: 2,
    name: "Drivers",
  },
  {
    id: 3,
    name: "Teams",
  },
  // {
  //   id: 4,
  //   name: "DHL Fastest Lap Award",
  // },
];
export const columsRace = [
  "Id",
  "GARAN PRIX",
  "DATE",
  "WINNER",
  "CAR",
  "LAPS",
  "TIME",
];
export interface Column<T> {
  header: string;
  accessor: keyof T;
}
export interface Race {
  id: number;
  garan_prix: string;
  date: string;
  winner: string;
  car: string;
  laps: number;
  time: string;
}

export interface Driver {
  pos: number;
  driver: string;
  nationality: string;
  car: string;
  pts: number | string;
  full_name: string;
}
export interface Team {
  pos: number;
  team: string;
  pts: number | string;
}
export const raceColumns: Column<Race>[] = [
  { header: "ID", accessor: "id" },
  { header: "GARAN PRIX", accessor: "garan_prix" },
  { header: "DATE", accessor: "date" },
  { header: "WINNER", accessor: "winner" },
  { header: "CAR", accessor: "car" },
  { header: "LAPS", accessor: "laps" },
  { header: "TIME", accessor: "time" },
];
export const driveColumns: Column<Driver>[] = [
  { header: "POS", accessor: "pos" },
  { header: "DRIVER", accessor: "driver" },
  { header: "NATIONALITY", accessor: "nationality" },
  { header: "CAR", accessor: "car" },
  { header: "PTS", accessor: "pts" },
  //   { header: "full_name", accessor: "full_name" },
];
export const teamColumns: Column<Team>[] = [
  { header: "POS", accessor: "pos" },
  { header: "	TEAM", accessor: "team" },
  { header: "PTS", accessor: "pts" },
  //   { header: "full_name", accessor: "full_name" },
];
