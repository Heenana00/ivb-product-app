//create some products field in the json file
//with structure like this
// {
//      "id":1,
//      "name": "product 1",
//      "price": 1000,
//      "stock": 10,
//      "category": "category 1"
//      "createdAt": "2021-08-01T00:00:00.000Z",
//      "updatedAt": "2021-08-01T00:00:00.000Z",
//      "image_url": "https://www.google.com"
//}

const products = [
  {
    id: 1,
    name: "Shoes",
    price: 1000,
    stock: 10,
    category: "category 1",
    description: "Because your feet deserve the best.",
    createdAt: "2021-08-01T00:00:00.000Z",
    updatedAt: "2021-08-01T00:00:00.000Z",
    image_url:
      "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/11/product_photography_tips_4.jpg?resize=1500%2C1001&ssl=1",
  },
  {
    id: 2,
    name: "Facial Kit",
    price: 2000,
    stock: 20,
    category: "category 2",
    description: "Spa-like glow at home.",
    createdAt: "2021-08-01T00:00:00.000Z",
    updatedAt: "2021-08-01T00:00:00.000Z",
    image_url:
      "https://5.imimg.com/data5/RC/FX/MY-4573598/customized-personal-care-products-500x500.jpg",
  },
  {
    id: 3,
    name: "Cereals",
    price: 3000,
    stock: 30,
    category: "category 3",
    description: "Start your day with a bowl of health.",
    createdAt: "2021-08-01T00:00:00.000Z",
    updatedAt: "2021-08-01T00:00:00.000Z",
    image_url: "https://images.indianexpress.com/2023/02/pulses-pixabay.jpg",
  },
  {
    id: 4,
    name: "Chocolates",
    price: 3000,
    stock: 0,
    category: "category 4",
    description: "Because there is no such thing as too much chocolate.",
    createdAt: "2021-08-01T00:00:00.000Z",
    updatedAt: "2021-08-01T00:00:00.000Z",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGEQXnTeQvX_dc3M1YLwCcI2NampqEonS1fg&s",
  },
  {
    id: 5,
    name: "Toys",
    price: 3000,
    stock: 30,
    category: "category 5",
    description: "For the child in you.",
    createdAt: "2021-08-01T00:00:00.000Z",
    updatedAt: "2021-08-01T00:00:00.000Z",
    image_url:
      "https://rukminim3.flixcart.com/image/850/1000/xif0q/toy-weapon/9/e/t/big-size-paw-patrol-set-toys-for-kids-boys-and-girls-6pcs-pup-original-imagupzdps3qj8pb.jpeg?q=90&crop=false",
  },
  {
    id: 6,
    name: "Electronics",
    price: 3000,
    stock: 30,
    category: "category 6",
    description: "Because technology is the future.",
    createdAt: "2021-08-01T00:00:00.000Z",
    updatedAt: "2021-08-01T00:00:00.000Z",
    image_url:
      "https://images-cdn.ubuy.co.in/63400828da17551acd788ca4-mystery-electronic-box-unexpected-gift.jpg",
  },
];

export default products;
