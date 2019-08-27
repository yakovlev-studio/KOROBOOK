import Category from "../models/category";

export const CATEGORIES = [
  new Category(
    "Фотокнига",
    "FotoBook",
    "Создание фотокниги мечты начинается сейчас",
    require("../assets/fotoBookCategory-bg.jpeg")
  ),
  new Category(
    "Фотокарточка",
    "FotoCard",
    "Уникальные шаблоны фотокарточек в Вашем распоряжении",
    require("../assets/fotoCardCategory-bg.jpeg")
  ),
  new Category(
    "Холст",
    "Canvas",
    "Фотография как искусство",
    require("../assets/canvasCategory-bg.jpg")
  )
];
