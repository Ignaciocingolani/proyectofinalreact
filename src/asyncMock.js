const MOCK_DATA = [
    {
        id: 1,
        name: "Fume Unlimited 7000",
        img: "https://crazyweeknd.com/cdn/shop/products/FUME_7000_PUFF_-_VAPE_DESECHABLE.png?v=1679972527",
        description:"Vape descartable marca Fume de 7000 puffs",
        category: 1,
        price: 30000,
        stock: 18,
    },

    {
        id: 2,
        name: "NikBar White Slush",
        img: "https://www.tiendavapor.com/image/cache/catalog/Nikbar/nikbar6000-500x500.jpg",
        description:"Vape descartable marca NikBar de 6000 puffs",
        category: 1,
        price: 28000,
        stock: 12,
    },

    {
        id: 3,
        name: "Elfbar BC5000",
        img: "https://indyargentina.com/cdn/shop/files/9f5f54a6-684e-4fdc-9793-82befcb2bd3b.jpg?v=1688569178",
        description:"Vape descartable marca Elfbar de 5000 puffs",
        category: 1,
        price: 25000,
        stock: 8,
    },

    {
        id: 4,
        name: "Ignite V15",
        img: "https://cigarrilloselectronicos.com.ar/cdn/shop/products/Numero00132_210cc6ea-7354-4364-95dd-e5c6e61de40b.webp?v=1662035711",
        description:"Vape descartable marca Ignite de 1500 puffs",
        category: 1,
        price: 12000,
        stock: 10,
    },

    {
        id: 5,
        name: "Frozen Fruit Monster",
        img: "https://diyvape.co/cdn/shop/products/gdW6jXypR6aAM7Jgddlf_blueraspsalt_1.jpg?v=1623906024&width=1100",
        description:"Sal de nicotina importada, marca Fruit Monster",
        category: 2,
        price: 10000,
        stock: 9,
    },

    {
        id: 6,
        name: "Cush Man",
        img: "https://acdn.mitiendanube.com/stores/003/000/926/products/9c13032f-3d65-4b30-990e-9e110375b01f1-94d65205492b1e1e9816918767209640-1024-1024.jpeg",
        description:"Sal de nicotina importada, marca Cush Man",
        category: 2,
        price: 9500,
        stock: 6,
    },

    {
        id: 7,
        name: "Jack Vaper",
        img: "https://rosariovapeshop.com/wp-content/uploads/2020/10/Jack_vaper_tribeca.jpg",
        description:"Sal de nicotina nacional, marca Jack Vaper",
        category: 2,
        price: 6000,
        stock: 25,
    },

]


export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA);
        }, 2000);
    });
};