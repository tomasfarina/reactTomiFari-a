import { v4 as uuidv4 } from 'uuid';



const items = [
    {
        id: uuidv4(),
        title: "Glico Strawberry Pocky",
        price: 3.99,
        img:'https://images.heb.com/is/image/HEBGrocery/001767120'
    }, {
        id: uuidv4(),
        title: "Nestlé Dark Chocolate KitKat",
        price: 2.99,
        img:'https://cdn.shopify.com/s/files/1/1083/2612/products/JapaneseKitKat_DarkChocolate_Tabling_2000x.jpg?v=1604068180'
    },
    {
        id: uuidv4(),
        title: "Nabisco Green Tea Oreos",
        price: 5.99,
        img:  'https://www.oyster.com/wp-content/uploads/sites/35/2019/05/11103-green-tea-japan-oreos-dd.jpg'
    },
    {
        id: uuidv4(),
        title: "Ramune Strawberry Soda",
        price: 2.99,
        img: 'https://cdn.shopify.com/s/files/1/0561/3553/products/JP-346_x700.jpg?v=1538232143'
    },
];

export default function getItems() {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve(items)
        }, 2000 )
    })
}