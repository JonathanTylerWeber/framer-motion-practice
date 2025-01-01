export const photos: Photo[] = [
  {
    id: "1556654953-3719bfc8db16",
    url: "https://unsplash.com/photos/lqr79P88v4w",
    building: "Museum aan de Stroom",
    location: "Antwerp, Belgium",
    wiki: "https://en.wikipedia.org/wiki/Museum_aan_de_Stroom",
  },
  {
    id: "1594229416093-5d595163e641",
    url: "https://unsplash.com/photos/nh3rDHdApPE",
    building: "Guggenheim Museum Bilbao",
    location: "Bilbao, Spain",
    wiki: "https://en.wikipedia.org/wiki/Guggenheim_Museum_Bilbao",
  },
  {
    id: "1580693793281-87824f53e3fd",
    url: "https://unsplash.com/photos/i1i40Cv7jb4",
    building: "Solomon R. Guggenheim Museum",
    location: "New York City, USA",
    wiki: "https://en.wikipedia.org/wiki/Solomon_R._Guggenheim_Museum",
  },
  {
    id: "1541264161754-445bbdd7de52",
    url: "https://unsplash.com/photos/ud9u7beav2s",
    building: "Louvre",
    location: "Paris, France",
    wiki: "https://en.wikipedia.org/wiki/Louvre",
  },
  {
    id: "1526916025899-1a28d20f2a5f",
    url: "https://unsplash.com/photos/6gdqWFolkC4",
    building: "Museo Soumaya",
    location: "Mexico City, Mexico",
    wiki: "https://en.wikipedia.org/wiki/Museo_Soumaya",
  },
  {
    id: "1564152387608-e856fd750840",
    url: "https://unsplash.com/photos/4K9MB9QKRxM",
    building: "Eye Filmmuseum",
    location: "Amsterdam, The Netherlands",
    wiki: "https://en.wikipedia.org/wiki/EYE_Film_Institute_Netherlands",
  },
  {
    id: "1562515174-63c3248052d9",
    url: "https://unsplash.com/photos/s6I0yf6dLK8",
    building: "Museu de les Ciències Príncipe Felipe",
    location: "Valencia, Spain",
    wiki: "https://en.wikipedia.org/wiki/Museu_de_les_Ciències_Pr%C3%ADncipe_Felipe",
  },
  {
    id: "1588313568029-5bd7c69cda92",
    url: "https://unsplash.com/photos/-Qy1KcVc9e0",
    building: "Niterói Contemporary Art Museum",
    location: "Niterói, Rio de Janeiro, Brazil",
    wiki: "https://en.wikipedia.org/wiki/Niterói_Contemporary_Art_Museum",
  },
  {
    id: "1519056312994-33952f238fac",
    url: "https://unsplash.com/photos/TLHBQtzAEfU",
    building: "British Museum",
    location: "London, United Kingdom",
    wiki: "https://en.wikipedia.org/wiki/British_Museum",
  },
  {
    id: "1595146463222-19603449c6af",
    url: "https://unsplash.com/photos/NXVMRWGgCfg",
    building: "ARoS Aarhus Kunstmuseum",
    location: "Aarhus, Denmark",
    wiki: "https://en.wikipedia.org/wiki/ARoS_Aarhus_Kunstmuseum",
  },
  {
    id: "1535209252068-f498eac4aaa3",
    url: "https://unsplash.com/photos/Y1UtWeiRmhE",
    building: "Louvre Abu Dhabi",
    location: "Abu Dhabi, United Arab Emirates",
    wiki: "https://en.wikipedia.org/wiki/Louvre_Abu_Dhabi",
  },
  {
    id: "1516427933892-a848c4411cb6",
    url: "https://unsplash.com/photos/rVUABjB-3BI",
    building: "Milwaukee Art Museum",
    location: "Milwaukee, USA",
    wiki: "https://en.wikipedia.org/wiki/Milwaukee_Art_Museum",
  },
];

export interface Photo {
  id: string;
  url: string;
  building: string;
  location: string;
  wiki: string;
}

export const shuffledPhotos: Photo[] = shuffle(photos);

function shuffle<T>(a: T[]): T[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
