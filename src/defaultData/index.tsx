import { ProductCardProps, SubProduct } from "../Interfaces";

const Products: ProductCardProps[] = [
  {
    id: 1,
    name: "Calendario",
    price: 60.0,
    description: "A beautiful calendar to keep track of your events.",
    imageUrl:
      "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/legacy_dam/en-us/S001679236/NPIB-9504-Wall-Calendars-Marquee-004?cb=508b29af03def22069e6a27a3085bd79e9f84d9d",
  },
  {
    id: 2,
    name: "Album de fotos",
    price: 120,
    description: "A stylish mug for your favorite beverages.",
    imageUrl:
      "https://www.photojaanic.com/blog/wp-content/uploads/sites/2/2018/07/Vacational-Photobooks-1024x683.jpg",
  },
  {
    id: 3,
    name: "Kids Art",
    price: 150,
    description:
      "Experience high-quality sound with these wireless headphones.",
    imageUrl:
      "https://www.startearly.org/app/uploads/2021/03/HERO_Little-Girl-Coloring-in-Rainbow-Shirt.png",
  },
];

const SubProducts: SubProduct[] = [
  {
    id: 101,
    productId: 1, // Reference to Calendario
    name: "Wall Calendar",
    price: 30.0,
    description: "A wall calendar with stunning landscapes.",
    imageUrl:
      "https://c-static.smartphoto.com/structured/repositoryimage/productcategory/calendars/wall_calendar/topimages/0016/image/wallcalendar-carrousel1.jpg",
    images: [
      "https://c-static.smartphoto.com/structured/repositoryimage/productcategory/calendars/wall_calendar/topimages/0016/image/wallcalendar-carrousel1.jpg",
      "https://m.media-amazon.com/images/I/71gtlo3VD9L._AC_UF350,350_QL80_.jpg",
    ],
  },
  {
    id: 102,
    productId: 1, // Reference to Calendario
    name: "Desk Calendar",
    price: 25.0,
    description: "A compact desk calendar for your workspace.",
    imageUrl:
      "https://m.media-amazon.com/images/I/71gtlo3VD9L._AC_UF350,350_QL80_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71gtlo3VD9L._AC_UF350,350_QL80_.jpg",
      "https://c-static.smartphoto.com/structured/repositoryimage/productcategory/calendars/wall_calendar/topimages/0016/image/wallcalendar-carrousel1.jpg",
    ],
  },
  {
    id: 201,
    productId: 2, // Reference to Album de fotos
    name: "Foto Album con texto",
    price: 120.0,
    description: "A premium photo album with leather cover.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm-0TVMbAQbZP0rd5ez4rwXsVMnbgXxhzjqQ&s",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm-0TVMbAQbZP0rd5ez4rwXsVMnbgXxhzjqQ&s",
      "https://m.media-amazon.com/images/I/71gtlo3VD9L._AC_UF350,350_QL80_.jpg",
      "https://c-static.smartphoto.com/structured/repositoryimage/productcategory/calendars/wall_calendar/topimages/0016/image/wallcalendar-carrousel1.jpg",
    ],
  },
  {
    id: 202,
    productId: 2, // Reference to Album de fotos
    name: "Foto Album",
    price: 120.0,
    description: "A classic photo album with a vintage touch.",
    imageUrl:
      "https://images.herzindagi.info/image/2022/Feb/wedding-album-tips.jpg",
    images: [
      "https://images.herzindagi.info/image/2022/Feb/wedding-album-tips.jpg",
      "https://m.media-amazon.com/images/I/71gtlo3VD9L._AC_UF350,350_QL80_.jpg",
      "https://c-static.smartphoto.com/structured/repositoryimage/productcategory/calendars/wall_calendar/topimages/0016/image/wallcalendar-carrousel1.jpg",
    ],
  },
  {
    id: 301,
    productId: 3, // Reference to Kids Art
    name: "Kids Coloring Book",
    price: 15.0,
    description: "A fun coloring book for kids.",
    imageUrl:
      "https://copypencil.pk/cdn/shop/products/Coloring-and-Activity-Book.jpg?v=1665437325",
    images: [
      "https://copypencil.pk/cdn/shop/products/Coloring-and-Activity-Book.jpg?v=1665437325",
      "https://m.media-amazon.com/images/I/71gtlo3VD9L._AC_UF350,350_QL80_.jpg",
      "https://c-static.smartphoto.com/structured/repositoryimage/productcategory/calendars/wall_calendar/topimages/0016/image/wallcalendar-carrousel1.jpg",
    ],
  },
  {
    id: 302,
    productId: 3, // Reference to Kids Art
    name: "Art Supplies Set",
    price: 20.0,
    description: "An all-in-one art supplies set for kids.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4B6NZ54tTVXBVXdKUTKo_HmzzVF9CCosNg&s",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4B6NZ54tTVXBVXdKUTKo_HmzzVF9CCosNg&s",
      "https://m.media-amazon.com/images/I/71gtlo3VD9L._AC_UF350,350_QL80_.jpg",
      "https://c-static.smartphoto.com/structured/repositoryimage/productcategory/calendars/wall_calendar/topimages/0016/image/wallcalendar-carrousel1.jpg",
    ],
  },
];

export { Products, SubProducts }; // Export as named exports
