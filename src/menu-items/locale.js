import { locale } from "../store/constants";

let localeRoutes = [];

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const newList = shuffle(locale);

newList.slice(0, 4).map((v) => {
  return localeRoutes.push({
    id: v.code,
    title: v.country,
    type: "item",
    url: `/search?type=locale&q=${v.code}`,
  });
});

const localeItem = localeRoutes;

export default localeItem;
