const FlightsAvailable = require("./../models/fligthsAvailable")
const availableFlights = async () => {
  const exist = await FlightsAvailable.find().lean()
  if (!exist.length) {
    s.forEach(async e => {
      const create = new FlightsAvailable({
        origin: e[0],
        destination: e[1],

        airport: e[2],
        flightId: e[3],
        departs: e[4],
        status: e[5],
        gate: e[6],
        date: e[7],
        price: e[8],
        firstclase: e[9],
        seating: e[10],
        duration: e[11],
      })
      await create.save()
    })
  }
}

const s = [
  [
    "Canada",
    "Brasil",

    "Delta",
    2585,
    "11:11 AM",
    "On Time",
    "B11",
    "25/10/2022",
    1000,
    2000,
    50,
    5,
  ],
  [
    "Canada",
    "Brasil",

    "Delta",
    2280,
    "1:35 PM",
    "On Time",
    "B11",
    "25/10/2022",
    1000,
    2000,
    50,
    5,
  ],
  [
    "Canada",
    "Brasil",

    "Delta",
    2841,
    "3:15 PM",
    "On Time",
    "B6",
    "25/10/2022",
    1000,
    2000,
    50,
    3,
  ],
  [
    "Canada",
    "Puerto Rico",

    "American",
    4241,
    "7:28 AM",
    "On Time",
    "B22",
    "25/10/2022",
    1000,
    2000,
    50,
    3,
  ],
  [
    "Canada",
    "Puerto Rico",

    "Delta",
    4650,
    "7:34 AM",
    "On Time",
    "B15",
    "25/10/2022",
    1000,
    2000,
    50,
    3,
  ],
  [
    "Canada",
    "Chile",

    "American",
    661,
    "5:00 AM",
    "On Time",
    "A11",
    "25/10/2022",
    1000,
    2000,
    50,
    3,
  ],
  [
    "Canada",
    "Bolivia",

    "American",
    2137,
    "7:00 AM",
    "On Time",
    "B10",
    "25/10/2022",
    1000,
    2000,
    50,
    3,
  ],
  [
    "Canada",
    "Paraguay",

    "Delta",
    4508,
    "4:00 PM",
    "On Time",
    "B18",
    "25/10/2022",
    2000,
    4000,
    50,
    3,
  ],
  [
    "Canada",
    "Uruguay",

    "Delta",
    5556,
    "7:51 AM",
    "On Time",
    "B20",
    "25/10/2022",
    2000,
    4000,
    50,
    3,
  ],
  [
    "Canada",
    "Uruguay",

    "Delta",
    5543,
    "11:03 AM",
    "On Time",
    "B20",
    "26/10/2022",
    2000,
    4000,
    50,
    3,
  ],
  [
    "Brasil",
    "Uruguay",

    "Delta",
    3332,
    "12:35 PM",
    "On Time",
    "B28",
    "26/10/2022",
    2000,
    4000,
    50,
    3,
  ],
  [
    "Ecuador",
    "Mexico",

    "O'Hare American",
    3941,
    "7:05 AM",
    "On Time",
    "B28",
    "26/10/2022",
    2000,
    4000,
    50,
    3,
  ],
  [
    "Brasil",
    "Mexico",

    "O'Hare United",
    3440,
    "7:15 AM",
    "On Time",
    "A11",
    "26/10/2022",
    2000,
    4000,
    50,
    3,
  ],
  [
    "Brasil",
    "Mexico",

    "O'Hare United",
    3754,
    "11:18 AM",
    "On Time",
    "A11",
    "26/10/2022",
    2000,
    4000,
    50,
    3,
  ],
  [
    "Canada",
    "Mexico",

    "Worth American",
    1970,
    "6:00 AM",
    "On Time",
    "B22",
    "26/10/2022",
    3000,
    6000,
    50,
    3,
  ],
  [
    "Canada",
    "Ecuador",

    "Worth American",
    1486,
    "9:02 AM",
    "On Time",
    "B24",
    "26/10/2022",
    3000,
    6000,
    50,
    3,
  ],
  [
    "Brasil",
    "Peru",

    "Allegiant",
    367,
    "7:00 AM",
    "On Time",
    "A21",
    "26/10/2022",
    3000,
    6000,
    50,
    3,
  ],
  [
    "Brasil",
    "Peru",

    "Delta",
    518,
    "7:00 AM",
    "On Time",
    "B17",
    "24/10/2022",
    3000,
    6000,
    50,
    3,
  ],
  [
    "Brasil",
    "Peru",

    "United",
    749,
    "8:14 AM",
    "On Time",
    "A13",
    "24/10/2022",
    3000,
    6000,
    50,
    3,
  ],
  [
    "Brasil",
    "Colombia",

    "Delta",
    5027,
    "6:05 AM",
    "On Time",
    "B23",
    "24/10/2022",
    2000,
    4000,
    50,
    3,
  ],
  [
    "Brasil",
    "Colombia",

    "Delta",
    4800,
    "10:25 AM",
    "On Time",
    "B19",
    "24/10/2022",
    3000,
    6000,
    50,
    3,
  ],
  [
    "Brasil",
    "Venezuela",

    "Delta",
    2260,
    "7:20 AM",
    "On Time",
    "B2",
    "24/10/2022",
    3000,
    6000,
    50,
    3,
  ],
  [
    "Chile",
    "Canada",

    "Worth American",
    1502,
    "1:49 PM",
    "On Time",
    "B22",
    "24/10/2022",
    3000,
    6000,
    50,
    3,
  ],
  [
    "Chile",
    "Canada",

    "Worth American",
    2166,
    "5:20 PM",
    "On Time",
    "B22",
    "24/10/2022",
    3000,
    6000,
    50,
    3,
  ],
  [
    "Chile",
    "Venezuela",

    "Allegiant",
    381,
    "5:00 PM",
    "On Time",
    "A19",
    "24/10/2022",
    3000,
    6000,
    50,
    3,
  ],
  [
    "Argentina",
    "USA",

    "Delta",
    2622,
    "5:05 PM",
    "On Time",
    "B11",
    "24/10/2022",
    3000,
    6000,
    50,
    3,
  ],
  [
    "Argentina",
    "USA",

    "Frontier",
    1662,
    "5:57 PM",
    "On Time",
    "A14",
    "23/10/2022",
    3000,
    6000,
    50,
    3,
  ],
  [
    "Argentina",
    "Puerto Rico",

    "Allegiant",
    1510,
    "12:30 PM",
    "On Time",
    "A21",
    "23/10/2022",
    3000,
    6000,
    50,
    3,
  ],
  [
    "Argentina",
    "Puerto Rico",

    "American",
    3949,
    "5:00 PM",
    "On Time",
    "B28",
    "23/10/2022",
    3000,
    6000,
    50,
    4,
  ],
  [
    "Argentina",
    "Chile",

    "American",
    110,
    "10:50 AM",
    "On Time",
    "B1",
    "23/10/2022",
    1000,
    2000,
    50,
    4,
  ],
  [
    "Argentina",
    "Chile",

    "American",
    2317,
    "6:05 PM",
    "On Time",
    "B4",
    "23/10/2022",
    1000,
    2000,
    50,
    4,
  ],
  [
    "Argentina",
    "Bolivia",

    "American",
    559,
    "10:10 AM",
    "On Time",
    "B25",
    "23/10/2022",
    1000,
    2000,
    50,
    4,
  ],
  [
    "Argentina",
    "Paraguay",

    "American",
    4913,
    "1:25 PM",
    "On Time",
    "B18",
    "23/10/2022",
    1000,
    2000,
    50,
    4,
  ],
  [
    "Argentina",
    "Bolivia",

    "Delta",
    1328,
    "4:30 PM",
    "On Time",
    "B17",
    "23/10/2022",
    1000,
    2000,
    50,
    4,
  ],
  [
    "Argentina",
    "Uruguay",

    "Delta",
    5141,
    "3:30 PM",
    "On Time",
    "B20",
    "23/10/2022",
    1000,
    2000,
    50,
    4,
  ],
  [
    "Argentina",
    "Uruguay",

    "Delta",
    5129,
    "5:56 PM",
    "On Time",
    "B24",
    "22/10/2022",
    1000,
    2000,
    50,
    4,
  ],
  [
    "Argentina",
    "Mexico",

    "O'Hare United",
    3556,
    "6:00 AM",
    "On Time",
    "A8",
    "22/10/2022",
    4000,
    8000,
    50,
    4,
  ],
  [
    "Mexico",
    "Brasil",

    "Delta",
    2622,
    "5:05 PM",
    "On Time",
    "B11",
    "22/10/2022",
    4000,
    8000,
    50,
    4,
  ],
  [
    "Mexico",
    "Brasil",

    "Frontier",
    1663,
    "5:57 PM",
    "On Time",
    "A14",
    "22/10/2022",
    4000,
    8000,
    50,
    4,
  ],
  [
    "Mexico",
    "Puerto Rico",

    "Allegiant",
    1510,
    "12:30 PM",
    "On Time",
    "A21",
    "22/10/2022",
    2000,
    4000,
    50,
    4,
  ],
  [
    "Puerto Rico",
    "Mexico",

    "American",
    3949,
    "5:00 PM",
    "On Time",
    "B28",
    "22/10/2022",
    2000,
    4000,
    50,
    4,
  ],
  [
    "Puerto Rico",
    "Chile",

    "American",
    110,
    "10:50 AM",
    "On Time",
    "B9",
    "22/10/2022",
    3000,
    6000,
    50,
    4,
  ],
  [
    "Puerto Rico",
    "Chile",

    "American",
    2317,
    "6:05 PM",
    "On Time",
    "B3",
    "21/10/2022",
    3000,
    6000,
    50,
    4,
  ],
  [
    "Puerto Rico",
    "Bolivia",

    "American",
    559,
    "10:10 AM",
    "On Time",
    "B25",
    "21/10/2022",
    3000,
    6000,
    50,
    4,
  ],
  [
    "Puerto Rico",
    "Paraguay",

    "American",
    4913,
    "1:25 PM",
    "On Time",
    "B18",
    "21/10/2022",
    3000,
    6000,
    50,
    4,
  ],
  [
    "Paraguay",
    "Bolivia",

    "Delta",
    1328,
    "4:30 PM",
    "On Time",
    "B17",
    "21/10/2022",
    1000,
    2000,
    50,
    4,
  ],
  [
    "Paraguay",
    "Uruguay",

    "Delta",
    5141,
    "3:30 PM",
    "On Time",
    "B20",
    "21/10/2022",
    1000,
    2000,
    50,
    4,
  ],
  [
    "Paraguay",
    "Uruguay",

    "Delta",
    5129,
    "5:56 PM",
    "On Time",
    "B24",
    "21/10/2022",
    1000,
    2000,
    50,
    4,
  ],
  [
    "Paraguay",
    "Mexico",

    "O'Hare United",
    3556,
    "6:00 AM",
    "On Time",
    "A8",
    "21/10/2022",
    3000,
    6000,
    50,
    4,
  ],
  [
    "Mexico",
    "Brasil",

    "Delta",
    2622,
    "5:05 PM",
    "On Time",
    "B11",
    "20/10/2022",
    4000,
    8000,
    50,
    4,
  ],
  [
    "Mexico",
    "Brasil",

    "Frontier",
    1664,
    "5:57 PM",
    "On Time",
    "A14",
    "20/10/2022",
    4000,
    8000,
    50,
    4,
  ],
  [
    "Mexico",
    "Puerto Rico",

    "Allegiant",
    1510,
    "12:30 PM",
    "On Time",
    "A21",
    "20/10/2022",
    1000,
    2000,
    50,
    5,
  ],
  [
    "Puerto Rico",
    "Mexico",

    "American",
    3949,
    "5:00 PM",
    "On Time",
    "B28",
    "20/10/2022",
    1000,
    2000,
    50,
    5,
  ],
  [
    "Puerto Rico",
    "Chile",

    "American",
    110,
    "10:50 AM",
    "On Time",
    "B4",
    "20/10/2022",
    3000,
    6000,
    50,
    5,
  ],
  [
    "Puerto Rico",
    "Chile",

    "American",
    2317,
    "6:05 PM",
    "On Time",
    "B2",
    "20/10/2022",
    4000,
    8000,
    50,
    5,
  ],
  [
    "Puerto Rico",
    "Bolivia",

    "American",
    559,
    "10:10 AM",
    "On Time",
    "B25",
    "20/10/2022",
    3000,
    6000,
    50,
    5,
  ],
  [
    "Puerto Rico",
    "Paraguay",

    "American",
    4913,
    "1:25 PM",
    "On Time",
    "B18",
    "20/10/2022",
    4000,
    8000,
    50,
    5,
  ],
  [
    "Paraguay",
    "Bolivia",

    "Delta",
    1328,
    "4:30 PM",
    "On Time",
    "B17",
    "20/10/2022",
    1000,
    2000,
    50,
    5,
  ],
  [
    "Paraguay",
    "Uruguay",

    "Delta",
    5141,
    "3:30 PM",
    "On Time",
    "B20",
    "19/10/2022",
    1000,
    2000,
    50,
    5,
  ],
  [
    "Paraguay",
    "Uruguay",

    "Delta",
    5129,
    "5:56 PM",
    "On Time",
    "B24",
    "19/10/2022",
    1000,
    2000,
    50,
    5,
  ],
  [
    "Paraguay",
    "Mexico",

    "O'Hare United",
    3556,
    "6:00 AM",
    "On Time",
    "A8",
    "19/10/2022",
    3000,
    6000,
    50,
    5,
  ],
  [
    "Mexico",
    "Brasil",

    "Delta",
    2622,
    "5:05 PM",
    "On Time",
    "B11",
    "19/10/2022",
    3000,
    6000,
    50,
    5,
  ],
  [
    "Mexico",
    "Brasil",

    "Frontier",
    1665,
    "5:57 PM",
    "On Time",
    "A14",
    "19/10/2022",
    3000,
    6000,
    50,
    5,
  ],
  [
    "Mexico",
    "Puerto Rico",

    "Allegiant",
    1510,
    "12:30 PM",
    "On Time",
    "A21",
    "19/10/2022",
    1000,
    2000,
    50,
    5,
  ],
  [
    "Puerto Rico",
    "Mexico",

    "American",
    3949,
    "5:00 PM",
    "On Time",
    "B28",
    "19/10/2022",
    1000,
    2000,
    50,
    5,
  ],
  [
    "Puerto Rico",
    "Chile",

    "American",
    110,
    "10:50 AM",
    "On Time",
    "B5",
    "18/10/2022",
    3000,
    6000,
    50,
    5,
  ],
  [
    "Puerto Rico",
    "Chile",

    "American",
    2317,
    "6:05 PM",
    "On Time",
    "B3",
    "18/10/2022",
    3000,
    6000,
    50,
    5,
  ],
  [
    "Puerto Rico",
    "Bolivia",

    "American",
    559,
    "10:10 AM",
    "On Time",
    "B25",
    "18/10/2022",
    3000,
    6000,
    50,
    5,
  ],
  [
    "Puerto Rico",
    "Paraguay",

    "American",
    4913,
    "1:25 PM",
    "On Time",
    "B18",
    "18/10/2022",
    3000,
    6000,
    50,
    5,
  ],
  [
    "Paraguay",
    "Bolivia",

    "Delta",
    1328,
    "4:30 PM",
    "On Time",
    "B17",
    "18/10/2022",
    1000,
    2000,
    50,
    5,
  ],
  [
    "Paraguay",
    "Uruguay",

    "Delta",
    5141,
    "3:30 PM",
    "On Time",
    "B20",
    "18/10/2022",
    1000,
    2000,
    50,
    5,
  ],
  [
    "Paraguay",
    "Uruguay",

    "Delta",
    5129,
    "5:56 PM",
    "On Time",
    "B24",
    "18/10/2022",
    1000,
    2000,
    50,
    5,
  ],
  [
    "Paraguay",
    "Mexico",

    "O'Hare United",
    3556,
    "6:00 AM",
    "On Time",
    "A8",
    "18/10/2022",
    3000,
    6000,
    50,
    5,
  ],
  [
    "Mexico",
    "Brasil",

    "Delta",
    2622,
    "5:05 PM",
    "On Time",
    "B11",
    "18/10/2022",
    3000,
    6000,
    50,
    5,
  ],
  [
    "Mexico",
    "Brasil",

    "Frontier",
    1666,
    "5:57 PM",
    "On Time",
    "A14",
    "18/10/2022",
    1000,
    2000,
    50,
    5,
  ],
  [
    "Mexico",
    "Puerto Rico",

    "Allegiant",
    1510,
    "12:30 PM",
    "On Time",
    "A21",
    "25/10/2022",
    3000,
    6000,
    50,
    5,
  ],
  [
    "Puerto Rico",
    "Mexico",

    "American",
    3949,
    "5:00 PM",
    "On Time",
    "B28",
    "25/10/2022",
    3000,
    6000,
    50,
    5,
  ],
  [
    "Puerto Rico",
    "Chile",

    "American",
    110,
    "10:50 AM",
    "On Time",
    "B8",
    "25/10/2022",
    3000,
    6000,
    50,
    5,
  ],
  [
    "Puerto Rico",
    "Chile",

    "American",
    2317,
    "6:05 PM",
    "On Time",
    "B9",
    "25/10/2022",
    3000,
    6000,
    50,
    5,
  ],
  [
    "Puerto Rico",
    "Bolivia",

    "American",
    559,
    "10:10 AM",
    "On Time",
    "B25",
    "25/10/2022",
    3000,
    6000,
    50,
    5,
  ],
  [
    "Puerto Rico",
    "Paraguay",

    "American",
    4913,
    "1:25 PM",
    "On Time",
    "B18",
    "25/10/2022",
    3000,
    6000,
    50,
    6,
  ],
  [
    "Paraguay",
    "Bolivia",

    "Delta",
    1328,
    "4:30 PM",
    "On Time",
    "B17",
    "17/10/2022",
    1000,
    2000,
    50,
    6,
  ],
  [
    "Paraguay",
    "Uruguay",

    "Delta",
    5141,
    "3:30 PM",
    "On Time",
    "B20",
    "17/10/2022",
    1000,
    2000,
    50,
    6,
  ],
  [
    "Paraguay",
    "Uruguay",

    "Delta",
    5129,
    "5:56 PM",
    "On Time",
    "B24",
    "17/10/2022",
    1000,
    2000,
    50,
    6,
  ],
  [
    "Paraguay",
    "Mexico",

    "O'Hare United",
    3556,
    "6:00 AM",
    "On Time",
    "A8",
    "17/10/2022",
    3000,
    6000,
    50,
    6,
  ],
  [
    "Mexico",
    "Brasil",

    "Delta",
    2622,
    "5:05 PM",
    "On Time",
    "B11",
    "17/10/2022",
    3000,
    6000,
    50,
    6,
  ],
  [
    "Mexico",
    "Brasil",

    "Frontier",
    1667,
    "5:57 PM",
    "On Time",
    "A14",
    "17/10/2022",
    3000,
    6000,
    50,
    6,
  ],
  [
    "Mexico",
    "Puerto Rico",

    "Allegiant",
    1510,
    "12:30 PM",
    "On Time",
    "A21",
    "17/10/2022",
    3000,
    6000,
    50,
    6,
  ],
  [
    "Puerto Rico",
    "Mexico",

    "American",
    3949,
    "5:00 PM",
    "On Time",
    "B28",
    "26/10/2022",
    1000,
    2000,
    50,
    6,
  ],
  [
    "Puerto Rico",
    "Chile",

    "American",
    110,
    "10:50 AM",
    "On Time",
    "B5",
    "26/10/2022",
    3000,
    6000,
    50,
    6,
  ],
  [
    "Puerto Rico",
    "Chile",

    "American",
    2317,
    "6:05 PM",
    "On Time",
    "B10",
    "26/10/2022",
    3000,
    6000,
    50,
    6,
  ],
  [
    "USA",
    "Bolivia",

    "American",
    559,
    "10:10 AM",
    "On Time",
    "B25",
    "26/10/2022",
    3000,
    6000,
    50,
    6,
  ],
  [
    "USA",
    "Paraguay",

    "American",
    4913,
    "1:25 PM",
    "On Time",
    "B18",
    "26/10/2022",
    3000,
    6000,
    50,
    6,
  ],
  [
    "Paraguay",
    "USA",

    "Delta",
    1328,
    "4:30 PM",
    "On Time",
    "B17",
    "26/10/2022",
    4000,
    8000,
    50,
    6,
  ],
  [
    "Paraguay",
    "USA",

    "Delta",
    5141,
    "3:30 PM",
    "On Time",
    "B20",
    "26/10/2022",
    4000,
    8000,
    50,
    6,
  ],
  [
    "Uruguay",
    "USA",

    "Delta",
    5129,
    "5:56 PM",
    "On Time",
    "B24",
    "26/10/2022",
    1000,
    2000,
    50,
    6,
  ],
  [
    "Mexico",
    "USA",

    "O'Hare United",
    3556,
    "6:00 AM",
    "On Time",
    "A8",
    "26/10/2022",
    4000,
    8000,
    50,
    6,
  ],
  [
    "Brasil",
    "USA",

    "Delta",
    2622,
    "5:05 PM",
    "On Time",
    "B11",
    "24/10/2022",
    3000,
    6000,
    50,
    6,
  ],
  [
    "Mexico",
    "USA",

    "Frontier",
    1668,
    "5:57 PM",
    "On Time",
    "A14",
    "24/10/2022",
    4000,
    8000,
    50,
    6,
  ],
  [
    "Argentina",
    "USA",

    "Allegiant",
    1510,
    "12:30 PM",
    "On Time",
    "A21",
    "24/10/2022",
    7000,
    13000,
    50,
    6,
  ],
  [
    "USA",
    "Mexico",

    "American",
    3949,
    "5:00 PM",
    "On Time",
    "B28",
    "24/10/2022",
    3000,
    6000,
    50,
    6,
  ],
  [
    "USA",
    "Chile",

    "American",
    110,
    "10:50 AM",
    "On Time",
    "B4",
    "24/10/2022",
    4000,
    8000,
    50,
    6,
  ],
  [
    "USA",
    "Chile",

    "American",
    2317,
    "6:05 PM",
    "On Time",
    "B2",
    "24/10/2022",
    4000,
    8000,
    50,
    6,
  ],
  [
    "USA",
    "Bolivia",

    "American",
    559,
    "10:10 AM",
    "On Time",
    "B25",
    "24/10/2022",
    4000,
    8000,
    50,
    6,
  ],
  [
    "USA",
    "Paraguay",

    "American",
    4913,
    "1:25 PM",
    "On Time",
    "B18",
    "23/10/2022",
    4000,
    8000,
    50,
    6,
  ],
  [
    "Paraguay",
    "Bolivia",

    "Delta",
    1328,
    "4:30 PM",
    "On Time",
    "B17",
    "23/10/2022",
    1000,
    2000,
    50,
    4,
  ],
  [
    "Paraguay",
    "Uruguay",

    "Delta",
    5141,
    "3:30 PM",
    "On Time",
    "B20",
    "23/10/2022",
    1000,
    2000,
    50,
    4,
  ],
  [
    "Paraguay",
    "Uruguay",

    "Delta",
    5129,
    "5:56 PM",
    "On Time",
    "B24",
    "23/10/2022",
    1000,
    2000,
    50,
    4,
  ],
  [
    "Paraguay",
    "Mexico",

    "O'Hare United",
    3556,
    "6:00 AM",
    "On Time",
    "A8",
    "23/10/2022",
    3000,
    6000,
    50,
    4,
  ],
  [
    "Colombia",
    "Brasil",

    "Delta",
    2585,
    "11:11 AM",
    "On Time",
    "B11",
    "23/10/2022",
    3000,
    6000,
    50,
    4,
  ],
  [
    "Colombia",
    "Brasil",

    "Delta",
    2281,
    "1:35 PM",
    "On Time",
    "B11",
    "23/10/2022",
    2000,
    4000,
    50,
    4,
  ],
  [
    "Colombia",
    "Brasil",

    "Delta",
    2842,
    "3:15 PM",
    "On Time",
    "B6",
    "22/10/2022",
    2000,
    4000,
    50,
    4,
  ],
  [
    "Colombia",
    "USA",

    "American",
    4245,
    "7:28 AM",
    "On Time",
    "B22",
    "22/10/2022",
    5000,
    10000,
    50,
    4,
  ],
  [
    "Colombia",
    "USA",

    "Delta",
    4653,
    "7:34 AM",
    "On Time",
    "B15",
    "22/10/2022",
    5000,
    10000,
    50,
    4,
  ],
  [
    "Venezuela",
    "Chile",

    "American",
    669,
    "5:00 AM",
    "On Time",
    "A11",
    "22/10/2022",
    2000,
    4000,
    50,
    4,
  ],
  [
    "Venezuela",
    "Bolivia",

    "American",
    2139,
    "7:00 AM",
    "On Time",
    "B10",
    "22/10/2022",
    2000,
    4000,
    50,
    4,
  ],
  [
    "Venezuela",
    "Paraguay",

    "Delta",
    4508,
    "4:00 PM",
    "On Time",
    "B18",
    "22/10/2022",
    2000,
    4000,
    50,
    4,
  ],
  [
    "Venezuela",
    "Uruguay",

    "Delta",
    5556,
    "7:51 AM",
    "On Time",
    "B20",
    "22/10/2022",
    2000,
    4000,
    50,
    4,
  ],
  [
    "Venezuela",
    "Uruguay",

    "Delta",
    5543,
    "11:03 AM",
    "On Time",
    "B20",
    "21/10/2022",
    2000,
    4000,
    50,
    4,
  ],
  [
    "Bolivia",
    "Uruguay",

    "Delta",
    3332,
    "12:35 PM",
    "On Time",
    "B28",
    "21/10/2022",
    1000,
    2000,
    50,
    4,
  ],
  [
    "Bolivia",
    "Mexico",

    "O'Hare American",
    3941,
    "7:05 AM",
    "On Time",
    "B28",
    "21/10/2022",
    3000,
    6000,
    50,
    4,
  ],
  [
    "Bolivia",
    "Mexico",

    "O'Hare United",
    3440,
    "7:15 AM",
    "On Time",
    "A11",
    "21/10/2022",
    3000,
    6000,
    50,
    52,
  ],
  [
    "Bolivia",
    "Mexico",

    "O'Hare United",
    3754,
    "11:18 AM",
    "On Time",
    "A11",
    "21/10/2022",
    3000,
    6000,
    50,
    52,
  ],
  [
    "Peru",
    "Canada",

    "Worth American",
    1970,
    "6:00 AM",
    "On Time",
    "B22",
    "21/10/2022",
    6000,
    12000,
    50,
    52,
  ],
  [
    "Peru",
    "Canada",

    "Worth American",
    1486,
    "9:02 AM",
    "On Time",
    "B24",
    "21/10/2022",
    6000,
    12000,
    50,
    52,
  ],
  [
    "Peru",
    "Canada",

    "Allegiant",
    367,
    "7:00 AM",
    "On Time",
    "A21",
    "20/10/2022",
    6000,
    12000,
    50,
    52,
  ],
  [
    "USA",
    "Peru",

    "Delta",
    518,
    "7:00 AM",
    "On Time",
    "B17",
    "20/10/2022",
    5000,
    10000,
    50,
    52,
  ],
  [
    "USA",
    "Peru",

    "United",
    749,
    "8:14 AM",
    "On Time",
    "A13",
    "20/10/2022",
    5000,
    10000,
    50,
    52,
  ],
  [
    "USA",
    "Colombia",

    "Delta",
    5027,
    "6:05 AM",
    "On Time",
    "B23",
    "20/10/2022",
    5000,
    10000,
    50,
    52,
  ],
  [
    "USA",
    "Colombia",

    "Delta",
    4800,
    "10:25 AM",
    "On Time",
    "B19",
    "20/10/2022",
    5000,
    10000,
    50,
    52,
  ],
  [
    "USA",
    "Venezuela",

    "Delta",
    2260,
    "7:20 AM",
    "On Time",
    "B2",
    "19/10/2022",
    5000,
    10000,
    50,
    52,
  ],
]

module.exports = availableFlights
