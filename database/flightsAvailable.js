const FlightsAvailable = require("./../models/fligthsAvailable")
const availableFlights = async () => {
  const exist = await FlightsAvailable.find().lean()
  if (!exist.length) {
    s.forEach(async e => {
      const create = new FlightsAvailable({
        origin: e[0],
        destination: e[1],
        img: e[2],
        airport: e[3],
        flightId: e[4],
        departs: e[5],
        status: e[6],
        gate: e[7],
        date: e[8],
        price: e[9],
        firstclase: e[10],
        seating: e[11],
        duration: e[12],
      })
      await create.save()
    })
  }
}

const s = [
  [
    "Canada",
    "Brasil",
    "https://www.turismobr.com/wp-content/uploads/2011/01/cristo-redentor.jpg",
    "Delta",
    2585,
    "11:11 AM",
    "On Time",
    "B11",
    "9/26/2022",
    1000,
    2000,
    100,
    5,
  ],
  [
    "Canada",
    "Brasil",
    "https://www.turismobr.com/wp-content/uploads/2011/01/cristo-redentor.jpg",
    "Delta",
    2280,
    "1:35 PM",
    "On Time",
    "B11",
    "9/26/2022",
    1000,
    2000,
    100,
    5,
  ],
  [
    "Canada",
    "Brasil",
    "https://www.turismobr.com/wp-content/uploads/2011/01/cristo-redentor.jpg",
    "Delta",
    2841,
    "3:15 PM",
    "On Time",
    "B6",
    "9/26/2022",
    1000,
    2000,
    100,
    3,
  ],
  [
    "Canada",
    "Puerto Rico",
    "https://www.costacruceros.es/content/dam/costa/costa-magazine/articles-magazine/islands/porto-rico/10-porto-rico-694x390.jpg.image.694.390.low.jpg",
    "American",
    4241,
    "7:28 AM",
    "On Time",
    "B22",
    "9/26/2022",
    1000,
    2000,
    100,
    3,
  ],
  [
    "Canada",
    "Puerto Rico",
    "https://www.costacruceros.es/content/dam/costa/costa-magazine/articles-magazine/islands/porto-rico/10-porto-rico-694x390.jpg.image.694.390.low.jpg",
    "Delta",
    4650,
    "7:34 AM",
    "On Time",
    "B15",
    "9/26/2022",
    1000,
    2000,
    100,
    3,
  ],
  [
    "Canada",
    "Chile",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/08/chile-pais.jpg",
    "American",
    661,
    "5:00 AM",
    "On Time",
    "A11",
    "9/26/2022",
    1000,
    2000,
    100,
    3,
  ],
  [
    "Canada",
    "Bolivia",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/07/salar-de-uyuni.jpg",
    "American",
    2137,
    "7:00 AM",
    "On Time",
    "B10",
    "9/26/2022",
    1000,
    2000,
    100,
    3,
  ],
  [
    "Canada",
    "Paraguay",
    "https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/03/que-ver-y-hacer-en-paraguya-cataratas-iguazu.jpg",
    "Delta",
    4508,
    "4:00 PM",
    "On Time",
    "B18",
    "9/26/2022",
    2000,
    4000,
    100,
    3,
  ],
  [
    "Canada",
    "Uruguay",
    "https://miro.medium.com/max/1200/1*HF4lrcrK6DphopNWV1XxIg.jpeg",
    "Delta",
    5556,
    "7:51 AM",
    "On Time",
    "B20",
    "9/26/2022",
    2000,
    4000,
    100,
    3,
  ],
  [
    "Canada",
    "Uruguay",
    "https://miro.medium.com/max/1200/1*HF4lrcrK6DphopNWV1XxIg.jpeg",
    "Delta",
    5543,
    "11:03 AM",
    "On Time",
    "B20",
    "10/26/2022",
    2000,
    4000,
    100,
    3,
  ],
  [
    "Brasil",
    "Uruguay",
    "https://miro.medium.com/max/1200/1*HF4lrcrK6DphopNWV1XxIg.jpeg",
    "Delta",
    3332,
    "12:35 PM",
    "On Time",
    "B28",
    "10/26/2022",
    2000,
    4000,
    100,
    3,
  ],
  [
    "Ecuador",
    "Mexico",
    "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2021/03/Mejores-lugares-para-visitar-en-Mexico-2021.jpg",
    "O'Hare American",
    3941,
    "7:05 AM",
    "On Time",
    "B28",
    "10/26/2022",
    2000,
    4000,
    100,
    3,
  ],
  [
    "Brasil",
    "Mexico",
    "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2021/03/Mejores-lugares-para-visitar-en-Mexico-2021.jpg",
    "O'Hare United",
    3440,
    "7:15 AM",
    "On Time",
    "A11",
    "10/26/2022",
    2000,
    4000,
    100,
    3,
  ],
  [
    "Brasil",
    "Mexico",
    "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2021/03/Mejores-lugares-para-visitar-en-Mexico-2021.jpg",
    "O'Hare United",
    3754,
    "11:18 AM",
    "On Time",
    "A11",
    "10/26/2022",
    2000,
    4000,
    100,
    3,
  ],
  [
    "Canada",
    "Mexico",
    "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2021/03/Mejores-lugares-para-visitar-en-Mexico-2021.jpg",
    "Worth American",
    1970,
    "6:00 AM",
    "On Time",
    "B22",
    "10/26/2022",
    3000,
    6000,
    100,
    3,
  ],
  [
    "Canada",
    "Ecuador",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtq6qQzgH5BW6C4LFauidd1q2JZljhlhbyAQ&usqp=CAU",
    "Worth American",
    1486,
    "9:02 AM",
    "On Time",
    "B24",
    "10/26/2022",
    3000,
    6000,
    100,
    3,
  ],
  [
    "Brasil",
    "Peru",
    "https://static.metrojourneys.com/wp-content/uploads/2019/07/machu-picchu-peru-tours.jpg",
    "Allegiant",
    367,
    "7:00 AM",
    "On Time",
    "A21",
    "10/26/2022",
    3000,
    6000,
    100,
    3,
  ],
  [
    "Brasil",
    "Peru",
    "https://static.metrojourneys.com/wp-content/uploads/2019/07/machu-picchu-peru-tours.jpg",
    "Delta",
    518,
    "7:00 AM",
    "On Time",
    "B17",
    "11/26/2022",
    3000,
    6000,
    100,
    3,
  ],
  [
    "Brasil",
    "Peru",
    "https://static.metrojourneys.com/wp-content/uploads/2019/07/machu-picchu-peru-tours.jpg",
    "United",
    749,
    "8:14 AM",
    "On Time",
    "A13",
    "11/26/2022",
    3000,
    6000,
    100,
    3,
  ],
  [
    "Brasil",
    "Colombia",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5f/dd/de/caption.jpg?w=500&h=300&s=1",
    "Delta",
    5027,
    "6:05 AM",
    "On Time",
    "B23",
    "11/26/2022",
    2000,
    4000,
    100,
    3,
  ],
  [
    "Brasil",
    "Colombia",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5f/dd/de/caption.jpg?w=500&h=300&s=1",
    "Delta",
    4800,
    "10:25 AM",
    "On Time",
    "B19",
    "11/26/2022",
    3000,
    6000,
    100,
    3,
  ],
  [
    "Brasil",
    "Venezuela",
    "https://www.caracteristicas.co/wp-content/uploads/2018/08/venezuela-1-800x406.jpg",
    "Delta",
    2260,
    "7:20 AM",
    "On Time",
    "B2",
    "11/26/2022",
    3000,
    6000,
    100,
    3,
  ],
  [
    "Chile",
    "Canada",
    "https://w0.peakpx.com/wallpaper/168/634/HD-wallpaper-little-hazel-creek-at-sunset-canda-village-river-sunset-clouds.jpg",
    "Worth American",
    1502,
    "1:49 PM",
    "On Time",
    "B22",
    "11/26/2022",
    3000,
    6000,
    100,
    3,
  ],
  [
    "Chile",
    "Canada",
    "https://w0.peakpx.com/wallpaper/168/634/HD-wallpaper-little-hazel-creek-at-sunset-canda-village-river-sunset-clouds.jpg",
    "Worth American",
    2166,
    "5:20 PM",
    "On Time",
    "B22",
    "11/26/2022",
    3000,
    6000,
    100,
    3,
  ],
  [
    "Chile",
    "Venezuela",
    "https://www.caracteristicas.co/wp-content/uploads/2018/08/venezuela-1-800x406.jpg",
    "Allegiant",
    381,
    "5:00 PM",
    "On Time",
    "A19",
    "11/26/2022",
    3000,
    6000,
    100,
    3,
  ],
  [
    "Argentina",
    "USA",
    "https://www.tufranquiciausa.com/wp-content/uploads/2021/08/statue-liberty-usa.jpg",
    "Delta",
    2622,
    "5:05 PM",
    "On Time",
    "B11",
    "11/26/2022",
    3000,
    6000,
    100,
    3,
  ],
  [
    "Argentina",
    "USA",
    "https://www.tufranquiciausa.com/wp-content/uploads/2021/08/statue-liberty-usa.jpg",
    "Frontier",
    1662,
    "5:57 PM",
    "On Time",
    "A14",
    "12/26/2022",
    3000,
    6000,
    100,
    3,
  ],
  [
    "Argentina",
    "Puerto Rico",
    "https://www.costacruceros.es/content/dam/costa/costa-magazine/articles-magazine/islands/porto-rico/10-porto-rico-694x390.jpg.image.694.390.low.jpg",
    "Allegiant",
    1510,
    "12:30 PM",
    "On Time",
    "A21",
    "12/26/2022",
    3000,
    6000,
    100,
    3,
  ],
  [
    "Argentina",
    "Puerto Rico",
    "https://www.costacruceros.es/content/dam/costa/costa-magazine/articles-magazine/islands/porto-rico/10-porto-rico-694x390.jpg.image.694.390.low.jpg",
    "American",
    3949,
    "5:00 PM",
    "On Time",
    "B28",
    "12/26/2022",
    3000,
    6000,
    100,
    4,
  ],
  [
    "Argentina",
    "Chile",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/08/chile-pais.jpg",
    "American",
    110,
    "10:50 AM",
    "On Time",
    "B1",
    "12/26/2022",
    1000,
    2000,
    100,
    4,
  ],
  [
    "Argentina",
    "Chile",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/08/chile-pais.jpg",
    "American",
    2317,
    "6:05 PM",
    "On Time",
    "B4",
    "12/26/2022",
    1000,
    2000,
    100,
    4,
  ],
  [
    "Argentina",
    "Bolivia",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/07/salar-de-uyuni.jpg",
    "American",
    559,
    "10:10 AM",
    "On Time",
    "B25",
    "12/26/2022",
    1000,
    2000,
    100,
    4,
  ],
  [
    "Argentina",
    "Paraguay",
    "https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/03/que-ver-y-hacer-en-paraguya-cataratas-iguazu.jpg",
    "American",
    4913,
    "1:25 PM",
    "On Time",
    "B18",
    "12/26/2022",
    1000,
    2000,
    100,
    4,
  ],
  [
    "Argentina",
    "Bolivia",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/07/salar-de-uyuni.jpg",
    "Delta",
    1328,
    "4:30 PM",
    "On Time",
    "B17",
    "12/26/2022",
    1000,
    2000,
    100,
    4,
  ],
  [
    "Argentina",
    "Uruguay",
    "https://miro.medium.com/max/1200/1*HF4lrcrK6DphopNWV1XxIg.jpeg",
    "Delta",
    5141,
    "3:30 PM",
    "On Time",
    "B20",
    "12/26/2022",
    1000,
    2000,
    100,
    4,
  ],
  [
    "Argentina",
    "Uruguay",
    "https://miro.medium.com/max/1200/1*HF4lrcrK6DphopNWV1XxIg.jpeg",
    "Delta",
    5129,
    "5:56 PM",
    "On Time",
    "B24",
    "13/26/2022",
    1000,
    2000,
    100,
    4,
  ],
  [
    "Argentina",
    "Mexico",
    "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2021/03/Mejores-lugares-para-visitar-en-Mexico-2021.jpg",
    "O'Hare United",
    3556,
    "6:00 AM",
    "On Time",
    "A8",
    "13/26/2022",
    4000,
    8000,
    100,
    4,
  ],
  [
    "Mexico",
    "Brasil",
    "https://www.turismobr.com/wp-content/uploads/2011/01/cristo-redentor.jpg",
    "Delta",
    2622,
    "5:05 PM",
    "On Time",
    "B11",
    "13/26/2022",
    4000,
    8000,
    100,
    4,
  ],
  [
    "Mexico",
    "Brasil",
    "https://www.turismobr.com/wp-content/uploads/2011/01/cristo-redentor.jpg",
    "Frontier",
    1663,
    "5:57 PM",
    "On Time",
    "A14",
    "13/26/2022",
    4000,
    8000,
    100,
    4,
  ],
  [
    "Mexico",
    "Puerto Rico",
    "https://www.costacruceros.es/content/dam/costa/costa-magazine/articles-magazine/islands/porto-rico/10-porto-rico-694x390.jpg.image.694.390.low.jpg",
    "Allegiant",
    1510,
    "12:30 PM",
    "On Time",
    "A21",
    "13/26/2022",
    2000,
    4000,
    100,
    4,
  ],
  [
    "Puerto Rico",
    "Mexico",
    "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2021/03/Mejores-lugares-para-visitar-en-Mexico-2021.jpg",
    "American",
    3949,
    "5:00 PM",
    "On Time",
    "B28",
    "13/26/2022",
    2000,
    4000,
    100,
    4,
  ],
  [
    "Puerto Rico",
    "Chile",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/08/chile-pais.jpg",
    "American",
    110,
    "10:50 AM",
    "On Time",
    "B9",
    "13/26/2022",
    3000,
    6000,
    100,
    4,
  ],
  [
    "Puerto Rico",
    "Chile",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/08/chile-pais.jpg",
    "American",
    2317,
    "6:05 PM",
    "On Time",
    "B3",
    "14/26/2022",
    3000,
    6000,
    100,
    4,
  ],
  [
    "Puerto Rico",
    "Bolivia",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/07/salar-de-uyuni.jpg",
    "American",
    559,
    "10:10 AM",
    "On Time",
    "B25",
    "14/26/2022",
    3000,
    6000,
    100,
    4,
  ],
  [
    "Puerto Rico",
    "Paraguay",
    "https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/03/que-ver-y-hacer-en-paraguya-cataratas-iguazu.jpg",
    "American",
    4913,
    "1:25 PM",
    "On Time",
    "B18",
    "14/26/2022",
    3000,
    6000,
    100,
    4,
  ],
  [
    "Paraguay",
    "Bolivia",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/07/salar-de-uyuni.jpg",
    "Delta",
    1328,
    "4:30 PM",
    "On Time",
    "B17",
    "14/26/2022",
    1000,
    2000,
    100,
    4,
  ],
  [
    "Paraguay",
    "Uruguay",
    "https://miro.medium.com/max/1200/1*HF4lrcrK6DphopNWV1XxIg.jpeg",
    "Delta",
    5141,
    "3:30 PM",
    "On Time",
    "B20",
    "14/26/2022",
    1000,
    2000,
    100,
    4,
  ],
  [
    "Paraguay",
    "Uruguay",
    "https://miro.medium.com/max/1200/1*HF4lrcrK6DphopNWV1XxIg.jpeg",
    "Delta",
    5129,
    "5:56 PM",
    "On Time",
    "B24",
    "14/26/2022",
    1000,
    2000,
    100,
    4,
  ],
  [
    "Paraguay",
    "Mexico",
    "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2021/03/Mejores-lugares-para-visitar-en-Mexico-2021.jpg",
    "O'Hare United",
    3556,
    "6:00 AM",
    "On Time",
    "A8",
    "14/26/2022",
    3000,
    6000,
    100,
    4,
  ],
  [
    "Mexico",
    "Brasil",
    "https://www.turismobr.com/wp-content/uploads/2011/01/cristo-redentor.jpg",
    "Delta",
    2622,
    "5:05 PM",
    "On Time",
    "B11",
    "15/26/2022",
    4000,
    8000,
    100,
    4,
  ],
  [
    "Mexico",
    "Brasil",
    "https://www.turismobr.com/wp-content/uploads/2011/01/cristo-redentor.jpg",
    "Frontier",
    1664,
    "5:57 PM",
    "On Time",
    "A14",
    "15/26/2022",
    4000,
    8000,
    100,
    4,
  ],
  [
    "Mexico",
    "Puerto Rico",
    "https://www.costacruceros.es/content/dam/costa/costa-magazine/articles-magazine/islands/porto-rico/10-porto-rico-694x390.jpg.image.694.390.low.jpg",
    "Allegiant",
    1510,
    "12:30 PM",
    "On Time",
    "A21",
    "15/26/2022",
    1000,
    2000,
    100,
    5,
  ],
  [
    "Puerto Rico",
    "Mexico",
    "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2021/03/Mejores-lugares-para-visitar-en-Mexico-2021.jpg",
    "American",
    3949,
    "5:00 PM",
    "On Time",
    "B28",
    "15/26/2022",
    1000,
    2000,
    100,
    5,
  ],
  [
    "Puerto Rico",
    "Chile",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/08/chile-pais.jpg",
    "American",
    110,
    "10:50 AM",
    "On Time",
    "B4",
    "15/26/2022",
    3000,
    6000,
    100,
    5,
  ],
  [
    "Puerto Rico",
    "Chile",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/08/chile-pais.jpg",
    "American",
    2317,
    "6:05 PM",
    "On Time",
    "B2",
    "15/26/2022",
    4000,
    8000,
    100,
    5,
  ],
  [
    "Puerto Rico",
    "Bolivia",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/07/salar-de-uyuni.jpg",
    "American",
    559,
    "10:10 AM",
    "On Time",
    "B25",
    "15/26/2022",
    3000,
    6000,
    100,
    5,
  ],
  [
    "Puerto Rico",
    "Paraguay",
    "https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/03/que-ver-y-hacer-en-paraguya-cataratas-iguazu.jpg",
    "American",
    4913,
    "1:25 PM",
    "On Time",
    "B18",
    "15/26/2022",
    4000,
    8000,
    100,
    5,
  ],
  [
    "Paraguay",
    "Bolivia",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/07/salar-de-uyuni.jpg",
    "Delta",
    1328,
    "4:30 PM",
    "On Time",
    "B17",
    "15/26/2022",
    1000,
    2000,
    100,
    5,
  ],
  [
    "Paraguay",
    "Uruguay",
    "https://miro.medium.com/max/1200/1*HF4lrcrK6DphopNWV1XxIg.jpeg",
    "Delta",
    5141,
    "3:30 PM",
    "On Time",
    "B20",
    "16/26/2022",
    1000,
    2000,
    100,
    5,
  ],
  [
    "Paraguay",
    "Uruguay",
    "https://miro.medium.com/max/1200/1*HF4lrcrK6DphopNWV1XxIg.jpeg",
    "Delta",
    5129,
    "5:56 PM",
    "On Time",
    "B24",
    "16/26/2022",
    1000,
    2000,
    100,
    5,
  ],
  [
    "Paraguay",
    "Mexico",
    "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2021/03/Mejores-lugares-para-visitar-en-Mexico-2021.jpg",
    "O'Hare United",
    3556,
    "6:00 AM",
    "On Time",
    "A8",
    "16/26/2022",
    3000,
    6000,
    100,
    5,
  ],
  [
    "Mexico",
    "Brasil",
    "https://www.turismobr.com/wp-content/uploads/2011/01/cristo-redentor.jpg",
    "Delta",
    2622,
    "5:05 PM",
    "On Time",
    "B11",
    "16/26/2022",
    3000,
    6000,
    100,
    5,
  ],
  [
    "Mexico",
    "Brasil",
    "https://www.turismobr.com/wp-content/uploads/2011/01/cristo-redentor.jpg",
    "Frontier",
    1665,
    "5:57 PM",
    "On Time",
    "A14",
    "16/26/2022",
    3000,
    6000,
    100,
    5,
  ],
  [
    "Mexico",
    "Puerto Rico",
    "https://www.costacruceros.es/content/dam/costa/costa-magazine/articles-magazine/islands/porto-rico/10-porto-rico-694x390.jpg.image.694.390.low.jpg",
    "Allegiant",
    1510,
    "12:30 PM",
    "On Time",
    "A21",
    "16/26/2022",
    1000,
    2000,
    100,
    5,
  ],
  [
    "Puerto Rico",
    "Mexico",
    "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2021/03/Mejores-lugares-para-visitar-en-Mexico-2021.jpg",
    "American",
    3949,
    "5:00 PM",
    "On Time",
    "B28",
    "16/26/2022",
    1000,
    2000,
    100,
    5,
  ],
  [
    "Puerto Rico",
    "Chile",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/08/chile-pais.jpg",
    "American",
    110,
    "10:50 AM",
    "On Time",
    "B5",
    "17/26/2022",
    3000,
    6000,
    100,
    5,
  ],
  [
    "Puerto Rico",
    "Chile",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/08/chile-pais.jpg",
    "American",
    2317,
    "6:05 PM",
    "On Time",
    "B3",
    "17/26/2022",
    3000,
    6000,
    100,
    5,
  ],
  [
    "Puerto Rico",
    "Bolivia",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/07/salar-de-uyuni.jpg",
    "American",
    559,
    "10:10 AM",
    "On Time",
    "B25",
    "17/26/2022",
    3000,
    6000,
    100,
    5,
  ],
  [
    "Puerto Rico",
    "Paraguay",
    "https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/03/que-ver-y-hacer-en-paraguya-cataratas-iguazu.jpg",
    "American",
    4913,
    "1:25 PM",
    "On Time",
    "B18",
    "17/26/2022",
    3000,
    6000,
    100,
    5,
  ],
  [
    "Paraguay",
    "Bolivia",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/07/salar-de-uyuni.jpg",
    "Delta",
    1328,
    "4:30 PM",
    "On Time",
    "B17",
    "17/26/2022",
    1000,
    2000,
    100,
    5,
  ],
  [
    "Paraguay",
    "Uruguay",
    "https://miro.medium.com/max/1200/1*HF4lrcrK6DphopNWV1XxIg.jpeg",
    "Delta",
    5141,
    "3:30 PM",
    "On Time",
    "B20",
    "17/26/2022",
    1000,
    2000,
    100,
    5,
  ],
  [
    "Paraguay",
    "Uruguay",
    "https://miro.medium.com/max/1200/1*HF4lrcrK6DphopNWV1XxIg.jpeg",
    "Delta",
    5129,
    "5:56 PM",
    "On Time",
    "B24",
    "17/26/2022",
    1000,
    2000,
    100,
    5,
  ],
  [
    "Paraguay",
    "Mexico",
    "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2021/03/Mejores-lugares-para-visitar-en-Mexico-2021.jpg",
    "O'Hare United",
    3556,
    "6:00 AM",
    "On Time",
    "A8",
    "17/26/2022",
    3000,
    6000,
    100,
    5,
  ],
  [
    "Mexico",
    "Brasil",
    "https://www.turismobr.com/wp-content/uploads/2011/01/cristo-redentor.jpg",
    "Delta",
    2622,
    "5:05 PM",
    "On Time",
    "B11",
    "17/26/2022",
    3000,
    6000,
    100,
    5,
  ],
  [
    "Mexico",
    "Brasil",
    "https://www.turismobr.com/wp-content/uploads/2011/01/cristo-redentor.jpg",
    "Frontier",
    1666,
    "5:57 PM",
    "On Time",
    "A14",
    "17/26/2022",
    1000,
    2000,
    100,
    5,
  ],
  [
    "Mexico",
    "Puerto Rico",
    "https://www.costacruceros.es/content/dam/costa/costa-magazine/articles-magazine/islands/porto-rico/10-porto-rico-694x390.jpg.image.694.390.low.jpg",
    "Allegiant",
    1510,
    "12:30 PM",
    "On Time",
    "A21",
    "9/26/2022",
    3000,
    6000,
    100,
    5,
  ],
  [
    "Puerto Rico",
    "Mexico",
    "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2021/03/Mejores-lugares-para-visitar-en-Mexico-2021.jpg",
    "American",
    3949,
    "5:00 PM",
    "On Time",
    "B28",
    "9/26/2022",
    3000,
    6000,
    100,
    5,
  ],
  [
    "Puerto Rico",
    "Chile",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/08/chile-pais.jpg",
    "American",
    110,
    "10:50 AM",
    "On Time",
    "B8",
    "9/26/2022",
    3000,
    6000,
    100,
    5,
  ],
  [
    "Puerto Rico",
    "Chile",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/08/chile-pais.jpg",
    "American",
    2317,
    "6:05 PM",
    "On Time",
    "B9",
    "9/26/2022",
    3000,
    6000,
    100,
    5,
  ],
  [
    "Puerto Rico",
    "Bolivia",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/07/salar-de-uyuni.jpg",
    "American",
    559,
    "10:10 AM",
    "On Time",
    "B25",
    "9/26/2022",
    3000,
    6000,
    100,
    5,
  ],
  [
    "Puerto Rico",
    "Paraguay",
    "https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/03/que-ver-y-hacer-en-paraguya-cataratas-iguazu.jpg",
    "American",
    4913,
    "1:25 PM",
    "On Time",
    "B18",
    "9/26/2022",
    3000,
    6000,
    100,
    6,
  ],
  [
    "Paraguay",
    "Bolivia",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/07/salar-de-uyuni.jpg",
    "Delta",
    1328,
    "4:30 PM",
    "On Time",
    "B17",
    "8/26/2022",
    1000,
    2000,
    100,
    6,
  ],
  [
    "Paraguay",
    "Uruguay",
    "https://miro.medium.com/max/1200/1*HF4lrcrK6DphopNWV1XxIg.jpeg",
    "Delta",
    5141,
    "3:30 PM",
    "On Time",
    "B20",
    "8/26/2022",
    1000,
    2000,
    100,
    6,
  ],
  [
    "Paraguay",
    "Uruguay",
    "https://miro.medium.com/max/1200/1*HF4lrcrK6DphopNWV1XxIg.jpeg",
    "Delta",
    5129,
    "5:56 PM",
    "On Time",
    "B24",
    "8/26/2022",
    1000,
    2000,
    100,
    6,
  ],
  [
    "Paraguay",
    "Mexico",
    "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2021/03/Mejores-lugares-para-visitar-en-Mexico-2021.jpg",
    "O'Hare United",
    3556,
    "6:00 AM",
    "On Time",
    "A8",
    "8/26/2022",
    3000,
    6000,
    100,
    6,
  ],
  [
    "Mexico",
    "Brasil",
    "https://www.turismobr.com/wp-content/uploads/2011/01/cristo-redentor.jpg",
    "Delta",
    2622,
    "5:05 PM",
    "On Time",
    "B11",
    "8/26/2022",
    3000,
    6000,
    100,
    6,
  ],
  [
    "Mexico",
    "Brasil",
    "https://www.turismobr.com/wp-content/uploads/2011/01/cristo-redentor.jpg",
    "Frontier",
    1667,
    "5:57 PM",
    "On Time",
    "A14",
    "8/26/2022",
    3000,
    6000,
    100,
    6,
  ],
  [
    "Mexico",
    "Puerto Rico",
    "https://www.costacruceros.es/content/dam/costa/costa-magazine/articles-magazine/islands/porto-rico/10-porto-rico-694x390.jpg.image.694.390.low.jpg",
    "Allegiant",
    1510,
    "12:30 PM",
    "On Time",
    "A21",
    "8/26/2022",
    3000,
    6000,
    100,
    6,
  ],
  [
    "Puerto Rico",
    "Mexico",
    "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2021/03/Mejores-lugares-para-visitar-en-Mexico-2021.jpg",
    "American",
    3949,
    "5:00 PM",
    "On Time",
    "B28",
    "10/26/2022",
    1000,
    2000,
    100,
    6,
  ],
  [
    "Puerto Rico",
    "Chile",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/08/chile-pais.jpg",
    "American",
    110,
    "10:50 AM",
    "On Time",
    "B5",
    "10/26/2022",
    3000,
    6000,
    100,
    6,
  ],
  [
    "Puerto Rico",
    "Chile",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/08/chile-pais.jpg",
    "American",
    2317,
    "6:05 PM",
    "On Time",
    "B10",
    "10/26/2022",
    3000,
    6000,
    100,
    6,
  ],
  [
    "USA",
    "Bolivia",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/07/salar-de-uyuni.jpg",
    "American",
    559,
    "10:10 AM",
    "On Time",
    "B25",
    "10/26/2022",
    3000,
    6000,
    100,
    6,
  ],
  [
    "USA",
    "Paraguay",
    "https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/03/que-ver-y-hacer-en-paraguya-cataratas-iguazu.jpg",
    "American",
    4913,
    "1:25 PM",
    "On Time",
    "B18",
    "10/26/2022",
    3000,
    6000,
    100,
    6,
  ],
  [
    "Paraguay",
    "USA",
    "https://www.tufranquiciausa.com/wp-content/uploads/2021/08/statue-liberty-usa.jpg",
    "Delta",
    1328,
    "4:30 PM",
    "On Time",
    "B17",
    "10/26/2022",
    4000,
    8000,
    100,
    6,
  ],
  [
    "Paraguay",
    "USA",
    "https://www.tufranquiciausa.com/wp-content/uploads/2021/08/statue-liberty-usa.jpg",
    "Delta",
    5141,
    "3:30 PM",
    "On Time",
    "B20",
    "10/26/2022",
    4000,
    8000,
    100,
    6,
  ],
  [
    "Uruguay",
    "USA",
    "https://www.tufranquiciausa.com/wp-content/uploads/2021/08/statue-liberty-usa.jpg",
    "Delta",
    5129,
    "5:56 PM",
    "On Time",
    "B24",
    "10/26/2022",
    1000,
    2000,
    100,
    6,
  ],
  [
    "Mexico",
    "USA",
    "https://www.tufranquiciausa.com/wp-content/uploads/2021/08/statue-liberty-usa.jpg",
    "O'Hare United",
    3556,
    "6:00 AM",
    "On Time",
    "A8",
    "10/26/2022",
    4000,
    8000,
    100,
    6,
  ],
  [
    "Brasil",
    "USA",
    "https://www.tufranquiciausa.com/wp-content/uploads/2021/08/statue-liberty-usa.jpg",
    "Delta",
    2622,
    "5:05 PM",
    "On Time",
    "B11",
    "11/26/2022",
    3000,
    6000,
    100,
    6,
  ],
  [
    "Mexico",
    "USA",
    "https://www.tufranquiciausa.com/wp-content/uploads/2021/08/statue-liberty-usa.jpg",
    "Frontier",
    1668,
    "5:57 PM",
    "On Time",
    "A14",
    "11/26/2022",
    4000,
    8000,
    100,
    6,
  ],
  [
    "Argentina",
    "USA",
    "https://www.tufranquiciausa.com/wp-content/uploads/2021/08/statue-liberty-usa.jpg",
    "Allegiant",
    1510,
    "12:30 PM",
    "On Time",
    "A21",
    "11/26/2022",
    7000,
    13000,
    100,
    6,
  ],
  [
    "USA",
    "Mexico",
    "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2021/03/Mejores-lugares-para-visitar-en-Mexico-2021.jpg",
    "American",
    3949,
    "5:00 PM",
    "On Time",
    "B28",
    "11/26/2022",
    3000,
    6000,
    100,
    6,
  ],
  [
    "USA",
    "Chile",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/08/chile-pais.jpg",
    "American",
    110,
    "10:50 AM",
    "On Time",
    "B4",
    "11/26/2022",
    4000,
    8000,
    100,
    6,
  ],
  [
    "USA",
    "Chile",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/08/chile-pais.jpg",
    "American",
    2317,
    "6:05 PM",
    "On Time",
    "B2",
    "11/26/2022",
    4000,
    8000,
    100,
    6,
  ],
  [
    "USA",
    "Bolivia",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/07/salar-de-uyuni.jpg",
    "American",
    559,
    "10:10 AM",
    "On Time",
    "B25",
    "11/26/2022",
    4000,
    8000,
    100,
    6,
  ],
  [
    "USA",
    "Paraguay",
    "https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/03/que-ver-y-hacer-en-paraguya-cataratas-iguazu.jpg",
    "American",
    4913,
    "1:25 PM",
    "On Time",
    "B18",
    "12/26/2022",
    4000,
    8000,
    100,
    6,
  ],
  [
    "Paraguay",
    "Bolivia",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/07/salar-de-uyuni.jpg",
    "Delta",
    1328,
    "4:30 PM",
    "On Time",
    "B17",
    "12/26/2022",
    1000,
    2000,
    100,
    4,
  ],
  [
    "Paraguay",
    "Uruguay",
    "https://miro.medium.com/max/1200/1*HF4lrcrK6DphopNWV1XxIg.jpeg",
    "Delta",
    5141,
    "3:30 PM",
    "On Time",
    "B20",
    "12/26/2022",
    1000,
    2000,
    100,
    4,
  ],
  [
    "Paraguay",
    "Uruguay",
    "https://miro.medium.com/max/1200/1*HF4lrcrK6DphopNWV1XxIg.jpeg",
    "Delta",
    5129,
    "5:56 PM",
    "On Time",
    "B24",
    "12/26/2022",
    1000,
    2000,
    100,
    4,
  ],
  [
    "Paraguay",
    "Mexico",
    "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2021/03/Mejores-lugares-para-visitar-en-Mexico-2021.jpg",
    "O'Hare United",
    3556,
    "6:00 AM",
    "On Time",
    "A8",
    "12/26/2022",
    3000,
    6000,
    100,
    4,
  ],
  [
    "Colombia",
    "Brasil",
    "https://www.turismobr.com/wp-content/uploads/2011/01/cristo-redentor.jpg",
    "Delta",
    2585,
    "11:11 AM",
    "On Time",
    "B11",
    "12/26/2022",
    3000,
    6000,
    100,
    4,
  ],
  [
    "Colombia",
    "Brasil",
    "https://www.turismobr.com/wp-content/uploads/2011/01/cristo-redentor.jpg",
    "Delta",
    2281,
    "1:35 PM",
    "On Time",
    "B11",
    "12/26/2022",
    2000,
    4000,
    100,
    4,
  ],
  [
    "Colombia",
    "Brasil",
    "https://www.turismobr.com/wp-content/uploads/2011/01/cristo-redentor.jpg",
    "Delta",
    2842,
    "3:15 PM",
    "On Time",
    "B6",
    "13/26/2022",
    2000,
    4000,
    100,
    4,
  ],
  [
    "Colombia",
    "USA",
    "https://www.tufranquiciausa.com/wp-content/uploads/2021/08/statue-liberty-usa.jpg",
    "American",
    4245,
    "7:28 AM",
    "On Time",
    "B22",
    "13/26/2022",
    5000,
    10000,
    100,
    4,
  ],
  [
    "Colombia",
    "USA",
    "https://www.tufranquiciausa.com/wp-content/uploads/2021/08/statue-liberty-usa.jpg",
    "Delta",
    4653,
    "7:34 AM",
    "On Time",
    "B15",
    "13/26/2022",
    5000,
    10000,
    100,
    4,
  ],
  [
    "Venezuela",
    "Chile",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/08/chile-pais.jpg",
    "American",
    669,
    "5:00 AM",
    "On Time",
    "A11",
    "13/26/2022",
    2000,
    4000,
    100,
    4,
  ],
  [
    "Venezuela",
    "Bolivia",
    "https://tipsparatuviaje.com/wp-content/uploads/2019/07/salar-de-uyuni.jpg",
    "American",
    2139,
    "7:00 AM",
    "On Time",
    "B10",
    "13/26/2022",
    2000,
    4000,
    100,
    4,
  ],
  [
    "Venezuela",
    "Paraguay",
    "https://cdn.inteligenciaviajera.com/wp-content/uploads/2020/03/que-ver-y-hacer-en-paraguya-cataratas-iguazu.jpg",
    "Delta",
    4508,
    "4:00 PM",
    "On Time",
    "B18",
    "13/26/2022",
    2000,
    4000,
    100,
    4,
  ],
  [
    "Venezuela",
    "Uruguay",
    "https://miro.medium.com/max/1200/1*HF4lrcrK6DphopNWV1XxIg.jpeg",
    "Delta",
    5556,
    "7:51 AM",
    "On Time",
    "B20",
    "13/26/2022",
    2000,
    4000,
    100,
    4,
  ],
  [
    "Venezuela",
    "Uruguay",
    "https://miro.medium.com/max/1200/1*HF4lrcrK6DphopNWV1XxIg.jpeg",
    "Delta",
    5543,
    "11:03 AM",
    "On Time",
    "B20",
    "14/26/2022",
    2000,
    4000,
    100,
    4,
  ],
  [
    "Bolivia",
    "Uruguay",
    "https://miro.medium.com/max/1200/1*HF4lrcrK6DphopNWV1XxIg.jpeg",
    "Delta",
    3332,
    "12:35 PM",
    "On Time",
    "B28",
    "14/26/2022",
    1000,
    2000,
    100,
    4,
  ],
  [
    "Bolivia",
    "Mexico",
    "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2021/03/Mejores-lugares-para-visitar-en-Mexico-2021.jpg",
    "O'Hare American",
    3941,
    "7:05 AM",
    "On Time",
    "B28",
    "14/26/2022",
    3000,
    6000,
    100,
    4,
  ],
  [
    "Bolivia",
    "Mexico",
    "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2021/03/Mejores-lugares-para-visitar-en-Mexico-2021.jpg",
    "O'Hare United",
    3440,
    "7:15 AM",
    "On Time",
    "A11",
    "14/26/2022",
    3000,
    6000,
    100,
    52,
  ],
  [
    "Bolivia",
    "Mexico",
    "https://rutaviajera.seguroparaviaje.com/wp-content/uploads/2021/03/Mejores-lugares-para-visitar-en-Mexico-2021.jpg",
    "O'Hare United",
    3754,
    "11:18 AM",
    "On Time",
    "A11",
    "14/26/2022",
    3000,
    6000,
    100,
    52,
  ],
  [
    "Peru",
    "Canada",
    "https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/Canada_Banff%20National%20Park_Staff-AH_3514_Alexander%20Howard_Lonely%20Planet.jpg?itok=a4fKUKa1",
    "Worth American",
    1970,
    "6:00 AM",
    "On Time",
    "B22",
    "14/26/2022",
    6000,
    12000,
    100,
    52,
  ],
  [
    "Peru",
    "Canada",
    "https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/Canada_Banff%20National%20Park_Staff-AH_3514_Alexander%20Howard_Lonely%20Planet.jpg?itok=a4fKUKa1",
    "Worth American",
    1486,
    "9:02 AM",
    "On Time",
    "B24",
    "14/26/2022",
    6000,
    12000,
    100,
    52,
  ],
  [
    "Peru",
    "Canada",
    "https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/Canada_Banff%20National%20Park_Staff-AH_3514_Alexander%20Howard_Lonely%20Planet.jpg?itok=a4fKUKa1",
    "Allegiant",
    367,
    "7:00 AM",
    "On Time",
    "A21",
    "15/26/2022",
    6000,
    12000,
    100,
    52,
  ],
  [
    "USA",
    "Peru",
    "https://static.metrojourneys.com/wp-content/uploads/2019/07/machu-picchu-peru-tours.jpg",
    "Delta",
    518,
    "7:00 AM",
    "On Time",
    "B17",
    "15/26/2022",
    5000,
    10000,
    100,
    52,
  ],
  [
    "USA",
    "Peru",
    "https://static.metrojourneys.com/wp-content/uploads/2019/07/machu-picchu-peru-tours.jpg",
    "United",
    749,
    "8:14 AM",
    "On Time",
    "A13",
    "15/26/2022",
    5000,
    10000,
    100,
    52,
  ],
  [
    "USA",
    "Colombia",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5f/dd/de/caption.jpg?w=500&h=300&s=1",
    "Delta",
    5027,
    "6:05 AM",
    "On Time",
    "B23",
    "15/26/2022",
    5000,
    10000,
    100,
    52,
  ],
  [
    "USA",
    "Colombia",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5f/dd/de/caption.jpg?w=500&h=300&s=1",
    "Delta",
    4800,
    "10:25 AM",
    "On Time",
    "B19",
    "15/26/2022",
    5000,
    10000,
    100,
    52,
  ],
  [
    "USA",
    "Venezuela",
    "https://www.caracteristicas.co/wp-content/uploads/2018/08/venezuela-1-800x406.jpg",
    "Delta",
    2260,
    "7:20 AM",
    "On Time",
    "B2",
    "16/26/2022",
    5000,
    10000,
    100,
    52,
  ],
]

module.exports = availableFlights
