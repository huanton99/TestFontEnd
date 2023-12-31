const drivers = [
  {
    id: 1,
    pos: 1,
    driver: "Verstappen",
    nationality: "NED",
    car: "RED BULL RACING HONDA RBPT",
    pts: 170,
    full_name: "Max Verstappen",
    year: 2023,
  },
  {
    id: 2,
    pos: 2,
    driver: "Perez",
    nationality: "MEX",
    car: "RED BULL RACING HONDA RBPT",
    pts: 117,
    full_name: "Sergio Perez",
    year: 2023,
  },
  {
    id: 1,
    pos: 3,
    driver: "Alonso",
    nationality: "ESP",
    car: "ASTON MARTIN ARAMCO MERCEDES",
    pts: 99,
    full_name: "Fernando Alonso",
    year: 2023,
  },
  {
    id: 4,
    pos: 4,
    driver: "Hamilton",
    nationality: "GBR",
    car: "MERCEDES",
    pts: 87,
    full_name: "Lewis Hamilton",
    year: 2023,
  },
  {
    id: 5,
    pos: 5,
    driver: "Russell",
    nationality: "GBR",
    car: "MERCEDES",
    pts: 65,
    full_name: "George Russell",
    year: 2023,
  },
  {
    id: 6,
    pos: 6,
    driver: "Sainz",
    nationality: "ESP",
    car: "FERRARI",
    pts: 58,
    full_name: "Carlos Sainz",
    year: 2023,
  },
  {
    id: 7,
    pos: 7,
    driver: "Leclerc",
    nationality: "MON",
    car: "FERRARI",
    pts: 42,
    full_name: "Charles Leclerc",
    year: 2023,
  },
  {
    id: 8,
    pos: 8,
    driver: "Stroll",
    nationality: "CAN",
    car: "ASTON MARTIN ARAMCO MERCEDES",
    pts: 35,
    full_name: "Lance Stroll",
    year: 2023,
  },
  {
    id: 9,
    pos: 9,
    driver: "Ocon",
    nationality: "FRA",
    car: "ALPINE RENAULT",
    pts: "25",
    full_name: "Esteban Ocon",
    year: 2023,
  },
  {
    id: 10,
    pos: 10,
    driver: "Gasly",
    nationality: "FRA",
    car: "ALPINE RENAULT",
    pts: 15,
    full_name: "Pierre Gasly",
    year: 2023,
  },
  {
    id: 11,
    pos: 11,
    driver: "Norris",
    nationality: "GBR",
    car: "MCLAREN MERCEDES",
    pts: 12,
    full_name: "Lando Norris",
    year: 2023,
  },
  {
    id: 12,
    pos: 12,
    driver: "Hulkenberg",
    nationality: "GER",
    car: "HAAS FERRARI",
    pts: 6,
    full_name: "Nico Hulkenberg",
    year: 2023,
  },
  {
    id: 13,
    pos: 13,
    driver: "Piastri",
    nationality: "AUS",
    car: "MCLAREN MERCEDES",
    pts: 5,
    full_name: "Oscar Piastri",
    year: 2023,
  },
  {
    id: 14,
    pos: 14,
    driver: "Bottas",
    nationality: "FIN",
    car: "ALFA ROMEO FERRARI",
    pts: 4,
    full_name: "Valtteri Bottas",
    year: 2023,
  },
  {
    id: 15,
    pos: 15,
    driver: "Zhou",
    nationality: "CHN",
    car: "ALFA ROMEO FERRARI",
    pts: 4,
    full_name: "Zhou Guanyu",
    year: 2023,
  },
  {
    id: 16,
    pos: 16,
    driver: "Tsunoda",
    nationality: "JPN",
    car: "ALPHATAURI HONDA RBPT",
    pts: 2,
    full_name: "Yuki Tsunoda",
    year: 2023,
  },
  {
    id: 17,
    pos: 17,
    driver: "Magnussen",
    nationality: "DEN",
    car: "HAAS FERRARI",
    pts: 2,
    full_name: "Kevin Magnussen",
    year: 2023,
  },
  {
    id: 18,
    pos: 18,
    driver: "Albon",
    nationality: "THA",
    car: "WILLIAMS MERCEDES",
    pts: 1,
    full_name: "Alexander Albon",
    year: 2023,
  },
  {
    id: 19,
    pos: 19,
    driver: "De Vries",
    nationality: "NED",
    car: "ALPHATAURI HONDA RBPT",
    pts: 0,
    full_name: "Nyck De Vries",
    year: 2023,
  },
  {
    id: 20,
    pos: 20,
    driver: "Sargeant",
    nationality: "USA",
    car: "WILLIAMS MERCEDES",
    pts: 0,
    full_name: "Logan Sargeant",
    year: 2023,
  },
  {
    id: 21,
    pos: 1,
    driver: "Max Verstappen",
    nationality: "NED",
    car: "RED BULL RACING HONDA RBPT",
    pts: 454,
    full_name: "Max Verstappen",
    year: 2022,
  },
  {
    id: 22,
    pos: 2,
    driver: "Charles Leclerc",
    nationality: "MON",
    car: "FERRARI",
    pts: 308,
    full_name: "Charles Leclerc",
    year: 2022,
  },
  {
    id: 23,
    pos: 3,
    driver: "Sergio Perez",
    nationality: "MEX",
    car: "RED BULL RACING RBPT",
    pts: 305,
    full_name: "Fernando Alonso",
    year: 2022,
  },
  {
    id: 24,
    pos: 24,
    driver: "George Russell",
    nationality: "GBR",
    car: "MERCEDES",
    pts: 275,
    full_name: "George Russell",
    year: 2022,
  },
  {
    id: 25,
    pos: 5,
    driver: "Carlos Sainz",
    nationality: "ESP",
    car: "FERRARI",
    pts: 246,
    full_name: "Carlos Sainz",
    year: 2022,
  },
  {
    id: 26,
    pos: 6,
    driver: "Lewis Hamilton",
    nationality: "GBR",
    car: "MERCEDES",
    pts: 240,
    full_name: "Lewis Hamilton",
    year: 2022,
  },
  {
    id: 27,
    pos: 7,
    driver: "Lando Norris",
    nationality: "GBR",
    car: "MCLAREN MERCEDES",
    pts: 122,
    full_name: "Lando Norris",
    year: 2022,
  },
  {
    id: 28,
    pos: 8,
    driver: "Esteban Ocon",
    nationality: "FRA",
    car: "ALPINE RENAULT",
    pts: 92,
    full_name: "Esteban Ocon",
    year: 2022,
  },
  {
    id: 29,
    pos: 9,
    driver: "Fernando Alonso",
    nationality: "ESP",
    car: "ALPINE RENAULT",
    pts: "81",
    full_name: "Fernando Alonso",
    year: 2022,
  },
  {
    id: 30,
    pos: 10,
    driver: "Valtteri Bottas",
    nationality: "FIN",
    car: "ALFA ROMEO FERRARI",
    pts: 19,
    full_name: "Valtteri Bottas",
    year: 2022,
  },
  {
    id: 31,
    pos: 11,
    driver: "Daniel Ricciardo",
    nationality: "AUS",
    car: "MCLAREN MERCEDES",
    pts: 37,
    full_name: "Daniel Ricciard",
    year: 2022,
  },
  {
    id: 32,
    pos: 12,
    driver: "Sebastian Vettel",
    nationality: "GER",
    car: "ASTON MARTIN ARAMCO MERCEDES",
    pts: 37,
    full_name: "Sebastian Vettel",
    year: 2022,
  },
  {
    id: 33,
    pos: 13,
    driver: "Kevin Magnussen",
    nationality: "	DEN",
    car: "HAAS FERRARI",
    pts: 25,
    full_name: "Kevin Magnussen",
    year: 2022,
  },
  {
    id: 34,
    pos: 14,
    driver: "Pierre Gasly",
    nationality: "FRA",
    car: "ALPHATAURI RBPT",
    pts: 23,
    full_name: "Pierre Gasly",
    year: 2022,
  },
  {
    id: 35,
    pos: 15,
    driver: "Lance Stroll",
    nationality: "CAN",
    car: "ASTON MARTIN ARAMCO MERCEDES",
    pts: 18,
    full_name: "Lance Stroll",
    year: 2023,
  },
  {
    id: 36,
    pos: 16,
    driver: "Mick Schumacher",
    nationality: "GER",
    car: "HAAS FERRARI",
    pts: 12,
    full_name: "Mick Schumacher",
    year: 2022,
  },
  {
    id: 37,
    pos: 17,
    driver: "Yuki Tsunoda",
    nationality: "JPN",
    car: "ALPHATAURI RBPT",
    pts: 12,
    full_name: "Sebastian Vettel",
    year: 2022,
  },
  {
    id: 38,
    pos: 18,
    driver: "Zhou Guanyu",
    nationality: "JPN",
    car: "ALFA ROMEO FERRARI",
    pts: 6,
    full_name: "Zhou Guanyu",
    year: 2022,
  },
  {
    id: 39,
    pos: 19,
    driver: "Alexander Albon",
    nationality: "THA",
    car: "WILLIAMS MERCEDES",
    pts: 4,
    full_name: "Alexander Albon",
    year: 2022,
  },
  {
    id: 40,
    pos: 20,
    driver: "Nicholas Latifi",
    nationality: "CAN",
    car: "WILLIAMS MERCEDES",
    pts: 2,
    full_name: "Nicholas Latifi",
    year: 2022,
  },
  {
    id: 41,
    pos: 21,
    driver: "Nyck De Vries",
    nationality: "NED",
    car: "WILLIAMS MERCEDES",
    pts: 2,
    full_name: "Nyck De Vries",
    year: 2022,
  },
  {
    id: 42,
    pos: 22,
    driver: "Nico Hulkenberg",
    nationality: "GER",
    car: "ASTON MARTIN ARAMCO MERCEDES",
    pts: 0,
    full_name: "Nico Hulkenberg",
    year: 2022,
  },
];

export default drivers;
