import headline from "./headline";
import localeItem from "./locale";
import topStories from "./top-stories";

console.log("====================================");
console.log(localeItem);
console.log("====================================");
console.log("====================================");
console.log([headline, topStories]);
console.log("====================================");

const menuItem = {
  // items: [headline, topStories],
  items: localeItem,
};

export default menuItem;
