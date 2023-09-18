const botao1 = document.getElementById('button1')
const botao2 = document.getElementById('button2')
const botao3 = document.getElementById('button3')
const botao4 = document.getElementById('button4')
const pages1 = document.getElementById('firstP')
const pages2 = document.getElementById('secondP')


const products = [
    {
        id: 1,
        title: 'iPhone 14 Pro 128GB',
        price: 2710.0,
        oldPrice: 5700.0,
        poster: '/src/images/iphone144.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 18x de R$',
        title2: 'iPhone 14',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPhones'
    }, 
    {
        id: 2,
        title: 'iPhone 13 128GB',
        price: 2465.0,
        poster: '/src/images/iphone1333.png',
        poster2: '/src/images/13image2.png',
        poster3 : '/src/images/13image3.png ',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 18x de R$',
        title2: 'iPhone 13',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    }, 
    {
        id: 3,
        title: 'iPhone 12 64GB',
        price: 1995.0,
        poster:'/src/images/iphone12.png',
        poster2: '/src/images/12image2.png',
        poster3 : '/src/images/12image3.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '64GB',
        payment: 'ou até 12x de R$',
        title2: 'iPhone 12',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 4,
        title: 'iPhone 11 64GB',
        price: 1650.0,
        poster: '/src/images/iphone4.png',
        poster2: '/src/images/11image2.png',
        poster3 : '/src/images/11image3.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '64GB',
        payment: 'ou até 12x de R$ ',
        title2: 'Iphone 11',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 5,
        title: 'iPhone 11 Pro Max 64GB',
        price: 1870.0,
        poster:'/src/images/11promax64gb.png',
        poster2: '/src/images/11maximage2.png',
        poster3 : '/src/images/11maximage3.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '64GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 6,
        title: 'iPhone 11 Pro Max 256GB',
        price: 1990.0,
        poster:'/src/images/11promax256.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 7,
        title: 'iPhone 12 Mini 64GB',
        price: 1695.0,
        poster:'/src/images/iphone1264gb.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '64GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 8,
        title: 'iPhone 12 Mini 128GB',
        price: 1485.0,
        poster:'/src/images/iPhone12mini128.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 9,
        title: 'iPhone 11 Pro 64GB',
        price: 1700.0,
        poster:'/src/images/iphone11pro128.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '64GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 10,
        title: 'iPhone 12 128GB',
        price: 1800.0,
        poster:'/src/images/iphone12.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 11,
        title: 'iPhone 12 Pro 128GB',
        price: 2220.0,
        poster:'/src/images/iphone12pro.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 12,
        title: 'iPhone 12 Pro 256GB',
        price: 2320.0,
        poster:'/src/images/iphone12pro128.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 13,
        title: 'iPhone 12 Pro 512GB',
        price: 2430.0,
        poster:'/src/images/iphone12pro512gb.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '512GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 14,
        title: 'iPhone 12 Pro Max 128GB',
        price: 2680.0,
        poster:'/src/images/iphone12promax128.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$ ',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 15,
        title: 'iPhone 13 Mini 128GB',
        price: 2150.0,
        poster: '/src/images/iphone13mini.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 16,
        title: 'iPhone 11 128GB',
        price: 1650.0,
        poster: '/src/images/iphone11128gb.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$ ',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    
    {
        id: 17,
        title: 'iPhone 13 256GB',
        price: 2535.0,
        poster: '/src/images/iphone13256.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 18,
        title: 'iPhone 13 Pro 128GB',
        price: 3095.0,
        poster: '/src/images/iphone13pro.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 19,
        title: 'iPhone 13 Pro 256GB',
        price: 3200.0,
        poster: '',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 20,
        title: 'iPhone 13 Pro Max 128GB',
        price: 3410.0,
        poster: '',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 21,
        title: 'iPhone 11 Pro 128GB',
        price: 1800.0,
        poster:'/src/images/iphone11pro128.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 22,
        title: 'iPhone 14 256GB',
        price: 2850.0,
        poster: '',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 23,
        title: 'iPhone 14 Plus 128GB',
        price: 3270.0,
        poster: '',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 24,
        title: 'iPhone 14 Plus 256GB',
        price: 3420.0,
        poster: '',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 25,
        title: 'iPhone 14 Pro 128GB',
        price: 4050.0,
        poster: '',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 26,
        title: 'iPhone 14 Pro Max 128GB',
        price: 3850.0,
        poster: '',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    { 
        id: 27,
        title: 'iPhone 14 Pro Max 256GB',
        price: 4200.0,
        poster: '',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 28,
        title: 'iPhone 13 128GB',
        price: 2800.0,
        poster: '',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPhones'
    },
    { 
        id: 29,
        title: 'iPhone 14 128GB',
        price: 3350.0,
        poster: '',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPhones'
    },{
        id: 30,
        title: 'iPhone 14 Pro 256GB',
        price: 4319.0,
        poster: '',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPhones'
    },
    { 
        id: 31,
        title: 'iPhone 14 Pro Max 256GB',
        price: 4850.0,
        poster: '',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPhones'
    },{
        id: 32,
        title: 'iPhone 14 Pro Max 128GB',
        price: 4500.0,
        poster: '',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 33,
        title: 'MacBook Air M1 256GB 8GB de ram 13P',
        price: 3510.0,
        poster: '/src/images/m1256.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        link: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '256GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Lacrado',
        shippingMethod: 'Importado',
        payment: 'ou até 12x de R$ ',
        ram: '8GB',
        polegadas: '13P',
        title2: 'MacBook M1',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Notebook'
    },
    
    {
        id: 34,
        title: 'MacBook Air M2 256GB 8Gb de ram 13P',
        price: 4683.0,
        poster: '/src/images/m2256.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        link: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '256GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Lacrado',
        shippingMethod: 'Importado',
        payment: 'ou até 12x de R$ ',
        ram: '8GB',
        inches: '13P',
        title2: 'MacBook M2',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Notebook'
    },
    {
        id: 35,
        title: 'MacBook Air M2 256GB 8GB de ram 15P',
        price: 5250.0,
        poster: '/src/images/m215p.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '256GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Novo',
        shippingMethod: 'Importado',
        payment: 'ou até 12x de R$ ',
        ram: '8GB',
        polegadas: '15P',
        year: '2023',
        title2: 'MacBook Pro',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Notebook'
    },
    {
        id: 36,
        title: 'MacBook Air M1 1TB 16GB de ram 14P',
        price: 8220.0,
        poster:'/src/images/macm11tb.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '1TB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Novo',
        shippingMethod: 'Importado',
        payment: 'ou até 12x de R$ ',
        ram: '16GB',
        polegadas: '14P',
        year: '2021',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Notebook'
    },
    {
        id: 37,
        title: 'MacBook Air M1 1TB 16GB de ram 16P',
        price: 9200.0,
        poster:'/src/images/macm116.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '44mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Novo',
        shippingMethod: 'Importado',
        payment: 'ou até 12x de R$ ',
        ram: '16GB',
        polegadas: '14P',
        year: '2021',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Notebook'
    },
    {
        id: 38,
        title: 'Apple Watch Série 6 40mm',
        price: 1050.0,
        poster: '/src/images/applewatch1.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        link: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '40mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Semi Novo',
        payment: 'ou até 12x de R$ ',
        title2: 'Apple Watch S6',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Watch'
    },
    {
        id: 39,
        title: 'Apple Watch Série 7 41mm',
        price: 1200.0,
        poster:'/src/images/applewatch3.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '41mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Semi Novo',
        payment: 'ou até 12x de R$ ',
        title2: 'Apple Watch S7',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Watch'
    },
    {
        id: 40,
        title: 'Apple Watch Série 8 41mm',
        price: 1520.0,
        poster:'/src/images/applewatch4.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '41mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Novo',
        payment: 'ou até 12x de R$ ',
        title2: 'Apple Watch S8',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Watch'
    },
    {
        id: 41,
        title: 'Apple Watch Série 7 45mm',
        price: 1275.0,
        poster:'',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '45mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Semi Novo',
        payment: 'ou até 12x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Watch'
    },
    {
        id: 42,
        title: 'Apple Watch Série S5 44mm',
        price: 900.0,
        poster:'/src/images/iphone14amarelo128gb.jpeg',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '44mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Semi Novo',
        payment: 'ou até 12x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Watch'
    },
    {
        id: 43,
        title: 'Apple Watch Série 6 44mm',
        price: 1100.0,
        poster: '',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        link: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '44mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Semi Novo',
        payment: 'ou até 12x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Watch'
    },
    {
        id: 44,
        title: 'Apple Watch Série 8 45mm',
        price: 1720.0,
        poster:'',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '45mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Novo',
        payment: 'ou até 12x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Watch'
    },
    {
        id: 45,
        title: 'Apple Watch Série 8 45mm Midnight',
        price: 1850.0,
        poster:'',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '45mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Novo',
        payment: 'ou até 12x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Watch'
    },
    {
        id: 46,
        title: 'Apple Watch Ultra 49mm',
        price: 3360.0,
        poster:'',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '49mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Novo',
        payment: 'ou até 12x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Watch'
    },
    {
        id: 47,
        title: 'Apple Pencil 2',
        price: 500.0,
        poster:'',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        payment: 'ou até 12x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Pencil'
    },
    {
        id: 48,
        title: 'Apple Pencil 1',
        price: 450.0,
        poster:'',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        payment: 'ou até 12x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Pencil'
    },
    {
        id: 49,
        title: 'Apple Pencil 1 C/Adaptador',
        price: 495.0,
        poster:'',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        payment: 'ou até 12x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Pencil'
    },
    {
        id: 50,
        title: 'iPad 9 64GB',
        price: 1380.0,
        poster:'/src/images/ipad9.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        size: '64GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        payment: 'ou até 12x de R$ ',
        title2: 'iPad 9',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPad'
    },
    {
        id: 51,
        title: 'iPad 10 64GB',
        price: 2010.0,
        poster:'/src/images/ipad10.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '64GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        payment: 'ou até 12x de R$ ',
        title2: 'iPad 10',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPad'
    },
    {
        id: 52,
        title: 'iPad Pro 12.9 128GB M2',
        price: 4420.0,
        poster:'/src/images/ipadair64gb.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '128GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        payment: 'ou até 12x de R$ ',
        title2: 'iPad Pro',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPad'
    },
    {
        id: 53,
        title: 'iPad 10 256GB Wi-Fi + Celular',
        price: 3395.0,
        poster:'/src/images/iiPad10.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '256GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        payment: 'ou até 12x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPad'
    },
    {
        id: 54,
        title: 'iPad 11 Pro 128GB Wi-FI + Celular',
        price: 4600.0,
        poster:'/src/images/iiPad11.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '128GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        payment: 'ou até 12x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPad'
    },
    {
        id: 55,
        title: 'iPad 10 256GB',
        price: 2465.0,
        poster: '/src/images/ipad10256.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '256GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        payment: 'ou até 12x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPad'
    },
    
    {
        id: 56,
        title: 'iPad Pro 12.9 256GB M2',
        price: 4850.0,
        poster:'/src/images/iiPad12.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '256GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        payment: 'ou até 12x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPad'
    },
    {
        id: 57,
        title: 'AirPods Pro',
        price: 500.0,
        poster:'/src/images/airpodspro.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '128GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        payment: 'ou até 12x de R$ ',
        title2: 'AirPods Pro',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Pods'
    },
    {
        id: 58,
        title: 'AirPods 2ª geração',
        price: 500.0,
        poster:'/src/images/airpods2.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        payment: 'ou até 12x de R$ ',
        title2: 'AirPods 2ª geração',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Pods'
    }
]


  function searchProducts(termo) {
    termo = termo.toLowerCase();
    return products.filter((products) => {
        const tituloLowerCase = products.title.toLowerCase();
        return tituloLowerCase.includes(termo);
    });
}

function renderProducts(products) {
    const containerResults = document.getElementById('result');
    containerResults.innerHTML = ``;
    containerResults.style.display = 'flex';
    containerResults.style.flexDirection = 'column';
    containerResults.style.gap = '1rem';
    containerResults.style.textAlign = 'center'
    const justPc = document.getElementById('justPc');

        justPc.innerHTML = `<div id="justPc" style="display: flex; flex-direction: column; gap: .5rem; padding-top: 20px; justify-content: center; margin-left: 465px;">
    <div id="caminho" style="color: gray; font-size: 12px; display: flex; align-items: center; gap:.3rem;">
      <i class="fa-solid fa-house-chimney fa-lg" style="color: #787878;"></i> > <a href="/home.html" style="text-decoration: none; color: gray"> Home </a> > <a href="/src/assets/html/iphones.html" style="text-decoration: none; color: gray">Ver Todos</a> > <a href="/src/assets/html/iphones.html" style="text-decoration: none; color: gray"></a> > Pesquisa
    </div>
    <div id="topFiltro"  style="display: flex; flex-direction: column; width: 95%; border-radius: 8px; padding: 30px; background-color: #f1f1f1;">
      <b style="color: gray; font-size: 24px;">Ver Todos</b>
      <hr></hr>
      <span style="font-size: 13px; color: gray;">Foram encontrados <b style="color: black">58</b> produtos</span>
      <hr size="10px"></hr>
      <i class="fa-solid fa-grip fa-xl" style="color: #000000;"></i>
  </div>`
    


  const ptest = document.getElementById('ptest')
  ptest.innerHTML = ''



  
    if (products.length === 0) {
      const divmensagemNenhumResultado = document.createElement('div');
      divmensagemNenhumResultado.innerHTML = `<img src="/src/images/no-results.png" style="width: 90px">
        <p>Nenhum resultado encontrado</p>`
  
      divmensagemNenhumResultado.style.display = 'flex';
      divmensagemNenhumResultado.style.flexDirection = 'column';
      divmensagemNenhumResultado.style.alignItems = 'center';
      divmensagemNenhumResultado.style.gap = '1rem'
      divmensagemNenhumResultado.style.marginTop = '100px';
      divmensagemNenhumResultado.style.marginBottom = '100px'
      containerResults.appendChild(divmensagemNenhumResultado);

  
      return; // Encerra a função aqui, não precisa continuar o loop abaixo
    }
  
    // Verifica a largura da tela
    const width = window.innerWidth;
  
    // Cria um contêiner flexível para os cards
    const cardsContainer = document.createElement('div');
    cardsContainer.style.display = 'flex';
    cardsContainer.style.flexWrap = 'wrap';
    cardsContainer.style.paddingLeft = '400px';
    cardsContainer.style.paddingRight = '400px';
    cardsContainer.style.marginLeft = '70px';


    // Para que os cards fiquem em várias linhas se necessário
 // Centralizar o s cards horizontalmente
    
  
    products.forEach((product) => {
      const divProducts = document.createElement('div');
  
      if (width > 500) {

        divProducts.style.display = 'flex';
        divProducts.style.justifyContent = 'center';
        divProducts.style.marginTop = '10px';  
        divProducts.style.marginRight = '.5rem'

  
        divProducts.innerHTML = `
        <div class="cards" style="width: 14rem;">
        <a href="#"><img src="${product.poster}" class="card-img-top" alt="Imagem do Produto"></a>
        <div class="card-body" style="display: flex; flex-direction: column;">
          <h6 class="card-text">${product.title}</h6>
          <div class="preco" style="font-size: 20px; display: flex; flex-direction: column; gap: 0rem">
           <div style="display: flex; flex-direction: column; gap: 1rem"> 
            <div style="display: flex; gap: .3rem">
              ${product.star}
            </div>
            <div style="display: flex; flex-direction: column; ">
              <span style="font-size: 13px; text-decoration: line-through; color: gray">R$ ${product.oldPrice},00</span>
              <span>R$${product.price.toFixed(2)}</span>
            </div>
            </div>
            <span style="font-size: 14px">${product.payment}</span> 
          </div>
          <!-- Adicione o ID do produto na URL do link -->
          <a href="/src/assets/html/details.html?id=${product.id}" style="text-decoration: none">
            <p class="compras">COMPRAR</p>
          </a>
        </div>
      </div>`;
      } 
      
      else {
        divProducts.innerHTML = `<div class="menu-sessao-bloco-card">
          <div class="cardM" style="width: 24.3rem; display: flex; box-shadow: 0px 0px 1.2px 0px rgb(182, 182, 182); align-items: center; gap:0rem">
          <a href="/assets/html/details.html?id=${product.id}" style="text-decoratio: none; color: black"><img src=${product.poster} style="width: 110px; height: 110px" class="card-img-top" alt="..."></a>
            <div class="card-body">
            <a href="/assets/html/details.html?id=${product.id}"><p><strong>${product.title}</strong></p></a>
              <div id="rating">
                <i class="fa-solid fa-star fa-lg" style="color: #005eff;"></i>
                <i class="fa-solid fa-star fa-lg" style="color: #005eff;"></i>
                <i class="fa-solid fa-star fa-lg" style="color: #005eff;"></i>
                <i class="fa-solid fa-star fa-lg" style="color: #005eff;"></i>
                <i class="fa-solid fa-star fa-lg" style="color: #005eff;"></i>
              </div>
              <div class="preco">
                <h5><strong>R$ ${product.price}</strong></h5>
              </div>
            </div>
          </div>
      </div>`;
  
        divProducts.style.display = 'flex';
        divProducts.style.marginBottom = '10px'; // Espaçamento entre os cards
      }
  
      // Adiciona o card ao contêiner de cards
      cardsContainer.appendChild(divProducts);
      
    });
  
    // Adiciona o contêiner de cards ao resultado final
    containerResults.appendChild(cardsContainer);
  }
  

function handleSearch() {
    const itemSearch = document.getElementById('barraPesquisa').value;
    const results = searchProducts(itemSearch);
    renderProducts(results);

}



document.getElementById('barraPesquisa').addEventListener('keyup', handleSearch);


const cardsWrapperMobile = document.getElementById("cardsWrapperMobile");
const prevButtonMobile = document.getElementById("prevButtonMobile");
const nextButtonMobile = document.getElementById("nextButtonMobile");

const cardWidthMobile = 320; // Largura de cada card
const cardsPerPageMobile = 2; // Quantidade de cartões exibidos por página
let currentPageMobile = 0;

// Escolha os índices dos produtos que você deseja exibir
const startProductIndex1Mobile = 0; // Índice do primeiro produto desejado
const endProductIndex1Mobile = 31;   // Índice do último produto desejado (excluído)

function renderCardsMobile() {
    cardsWrapperMobile.innerHTML = "";

    // Calcule os índices reais com base na página atual e na quantidade de cartões por página
    const startIndex = currentPageMobile * cardsPerPageMobile + startProductIndex1Mobile;
    const endIndex = Math.min(startIndex + cardsPerPageMobile, endProductIndex1Mobile + 1);

    for (let i = startIndex; i < endIndex; i++) {
        const product = products[i];

        const card = document.createElement("div");
        card.classList.add("card");
        card.style.opacity = 0; // Começa com opacidade zero


            const cardHTML = `
            <div class="cards" style="width: 10rem;">
                <a href="#"><img src="${product.poster}" class="card-img-top" alt="Imagem do Produto"></a>
                <div class="card-body" style="display: flex; flex-direction: column;">
                    <h6 class="card-text">${product.title}</h6>
                    <div class="preco" style="font-size: 20px; display: flex; flex-direction: column; gap: 0rem">
                        <div style="display: flex; flex-direction: column; gap: 1rem"> 
                            <div style="display: flex; gap: .3rem">
                                ${product.star}
                            </div>
                            <div style="display: flex; flex-direction: column; ">
                                <span style="font-size: 13px; text-decoration: line-through; color: gray">R$ ${product.oldPrice},00</span>
                                <span>R$${product.price.toFixed(2)}</span>
                            </div>
                        </div>
                        <span style="font-size: 14px">${product.payment}</span> 
                    </div>
                    <!-- Adicione o ID do produto na URL do link -->
                    <a href="/src/assets/html/details.html?id=${product.id}" style="text-decoration: none">
                        <p class="compras">COMPRAR</p>
                    </a>
                </div>
            </div>
        `;
        const width = innerWidth

        
        card.innerHTML = cardHTML;
        cardsWrapperMobile.appendChild(card);

        // Adiciona um pequeno atraso para que a transição seja visível
        setTimeout(() => {
            card.style.opacity = 1;
        }, 50 * (i - startIndex));
    }

    prevButtonMobile.disabled = currentPageMobile === 0;
    nextButtonMobile.disabled = endIndex >= endProductIndex1Mobile + 1;
}

prevButtonMobile.addEventListener("click", () => {
    if (currentPageMobile > 0) {
        currentPageMobile--;
        renderCardsMobile();
    }
});

nextButtonMobile.addEventListener("click", () => {
    const startIndex = currentPageMobile * cardsPerPageMobile + startProductIndex1Mobile;
    const endIndex = Math.min(startIndex + cardsPerPageMobile, endProductIndex1Mobile + 1);

    if (endIndex < endProductIndex1Mobile + 1) {
        currentPageMobile++;
        renderCardsMobile();
    }
});

// Inicialização
renderCardsMobile();




const cardsWrapperMobile2 = document.getElementById("cardsWrapperMobile2");
const prevButtonMobile2 = document.getElementById("prevButtonMobile2");
const nextButtonMobile2 = document.getElementById("nextButtonMobile2");

const cardWidthMobile2 = 320; // Largura de cada card
const cardsPerPageMobile2 = 2; // Quantidade de cartões exibidos por página
let currentPageMobile2 = 0;

// Escolha os índices dos produtos que você deseja exibir
const startProductIndex1Mobile2 = 32; // Índice do primeiro produto desejado
const endProductIndex1Mobile2 = 36;   // Índice do último produto desejado (excluído)

function renderCardsMobile2() {
    cardsWrapperMobile2.innerHTML = "";

    // Calcule os índices reais com base na página atual e na quantidade de cartões por página
    const startIndex = currentPageMobile2 * cardsPerPageMobile2 + startProductIndex1Mobile2;
    const endIndex = Math.min(startIndex + cardsPerPageMobile2, endProductIndex1Mobile2 + 1);

    for (let i = startIndex; i < endIndex; i++) {
        const product = products[i];

        const card = document.createElement("div");
        card.classList.add("card");
        card.style.opacity = 0; // Começa com opacidade zero


            const cardHTML = `
            <div class="cards" style="width: 10rem;">
                <a href="#"><img src="${product.poster}" class="card-img-top" alt="Imagem do Produto"></a>
                <div class="card-body" style="display: flex; flex-direction: column;">
                    <h6 class="card-text">${product.title}</h6>
                    <div class="preco" style="font-size: 20px; display: flex; flex-direction: column; gap: 0rem">
                        <div style="display: flex; flex-direction: column; gap: 1rem"> 
                            <div style="display: flex; gap: .3rem">
                                ${product.star}
                            </div>
                            <div style="display: flex; flex-direction: column; ">
                                <span style="font-size: 13px; text-decoration: line-through; color: gray">R$ ${product.oldPrice},00</span>
                                <span>R$${product.price.toFixed(2)}</span>
                            </div>
                        </div>
                        <span style="font-size: 14px">${product.payment}</span> 
                    </div>
                    <!-- Adicione o ID do produto na URL do link -->
                    <a href="/src/assets/html/details.html?id=${product.id}" style="text-decoration: none">
                        <p class="compras">COMPRAR</p>
                    </a>
                </div>
            </div>
        `;
        const width = innerWidth

        
        card.innerHTML = cardHTML;
        cardsWrapperMobile2.appendChild(card);

        // Adiciona um pequeno atraso para que a transição seja visível
        setTimeout(() => {
            card.style.opacity = 1;
        }, 50 * (i - startIndex));
    }

    prevButtonMobile2.disabled = currentPageMobile2 === 0;
    nextButtonMobile2.disabled = endIndex >= endProductIndex1Mobile2 + 1;
}

prevButtonMobile2.addEventListener("click", () => {
    if (currentPageMobile2 > 0) {
        currentPageMobile2--;
        renderCardsMobile2();
    }
});

nextButtonMobile2.addEventListener("click", () => {
    const startIndex = currentPageMobile2 * cardsPerPageMobile2 + startProductIndex1Mobile2;
    const endIndex = Math.min(startIndex + cardsPerPageMobile2, endProductIndex1Mobile2 + 1);

    if (endIndex < endProductIndex1Mobile2 + 1) {
        currentPageMobile2++;
        renderCardsMobile2();
    }
});

// Inicialização
renderCardsMobile2();


const cardsWrapperMobile3 = document.getElementById("cardsWrapperMobile3");
const prevButtonMobile3 = document.getElementById("prevButtonMobile3");
const nextButtonMobile3 = document.getElementById("nextButtonMobile3");

const cardWidthMobile3 = 320; // Largura de cada card
const cardsPerPageMobile3 = 2; // Quantidade de cartões exibidos por página
let currentPageMobile3 = 0;

// Escolha os índices dos produtos que você deseja exibir
const startProductIndex1Mobile3 = 49; // Índice do primeiro produto desejado
const endProductIndex1Mobile3 = 55;   // Índice do último produto desejado (excluído)

function renderCardsMobile3() {
    cardsWrapperMobile3.innerHTML = "";

    // Calcule os índices reais com base na página atual e na quantidade de cartões por página
    const startIndex = currentPageMobile3 * cardsPerPageMobile3 + startProductIndex1Mobile3;
    const endIndex = Math.min(startIndex + cardsPerPageMobile3, endProductIndex1Mobile3 + 1);

    for (let i = startIndex; i < endIndex; i++) {
        const product = products[i];

        const card = document.createElement("div");
        card.classList.add("card");
        card.style.opacity = 0; // Começa com opacidade zero


            const cardHTML = `
            <div class="cards" style="width: 10rem;">
                <a href="#"><img src="${product.poster}" class="card-img-top" alt="Imagem do Produto"></a>
                <div class="card-body" style="display: flex; flex-direction: column;">
                    <h6 class="card-text">${product.title}</h6>
                    <div class="preco" style="font-size: 20px; display: flex; flex-direction: column; gap: 0rem">
                        <div style="display: flex; flex-direction: column; gap: 1rem"> 
                            <div style="display: flex; gap: .3rem">
                                ${product.star}
                            </div>
                            <div style="display: flex; flex-direction: column; ">
                                <span style="font-size: 13px; text-decoration: line-through; color: gray">R$ ${product.oldPrice},00</span>
                                <span>R$${product.price.toFixed(2)}</span>
                            </div>
                        </div>
                        <span style="font-size: 14px">${product.payment}</span> 
                    </div>
                    <!-- Adicione o ID do produto na URL do link -->
                    <a href="/src/assets/html/details.html?id=${product.id}" style="text-decoration: none">
                        <p class="compras">COMPRAR</p>
                    </a>
                </div>
            </div>
        `;
        const width = innerWidth

        
        card.innerHTML = cardHTML;
        cardsWrapperMobile3.appendChild(card);
        

        // Adiciona um pequeno atraso para que a transição seja visível
        setTimeout(() => {
            card.style.opacity = 1;
        }, 50 * (i - startIndex));
    }

    prevButtonMobile3.disabled = currentPageMobile3 === 0;
    nextButtonMobile3.disabled = endIndex >= endProductIndex1Mobile3 + 1;
}

prevButtonMobile3.addEventListener("click", () => {
    if (currentPageMobile3 > 0) {
        currentPageMobile3--;
        renderCardsMobile3();
    }
});

nextButtonMobile3.addEventListener("click", () => {
    const startIndex = currentPageMobile3 * cardsPerPageMobile3 + startProductIndex1Mobile3;
    const endIndex = Math.min(startIndex + cardsPerPageMobile3, endProductIndex1Mobile3 + 1);

    if (endIndex < endProductIndex1Mobile3 + 1) {
        currentPageMobile3++;
        renderCardsMobile3();
    }
});

// Inicialização
renderCardsMobile3();


const cardsWrapper = document.getElementById("cardsWrapper");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const cardWidth = 320; // Largura de cada card
const cardsPerPage = 3; // Quantidade de cartões exibidos por página
let currentPage = 0;

// Escolha os índices dos produtos que você deseja exibir
const startProductIndex1 = 0; // Índice do primeiro produto desejado
const endProductIndex1 = 31;   // Índice do último produto desejado (excluído)

function renderCards() {
    cardsWrapper.innerHTML = "";

    // Calcule os índices reais com base na página atual e na quantidade de cartões por página
    const startIndex = currentPage * cardsPerPage + startProductIndex1;
    const endIndex = Math.min(startIndex + cardsPerPage, endProductIndex1 + 1);

    for (let i = startIndex; i < endIndex; i++) {
        const product = products[i];

        const card = document.createElement("div");
        card.classList.add("card");
        card.style.opacity = 0; // Começa com opacidade zero


            const cardHTML = `
            <div class="cards" style="width: 14rem;">
                <a href="#"><img src="${product.poster}" class="card-img-top" alt="Imagem do Produto"></a>
                <div class="card-body" style="display: flex; flex-direction: column;">
                    <h6 class="card-text">${product.title}</h6>
                    <div class="preco" style="font-size: 20px; display: flex; flex-direction: column; gap: 0rem">
                        <div style="display: flex; flex-direction: column; gap: 1rem"> 
                            <div style="display: flex; gap: .3rem">
                                ${product.star}
                            </div>
                            <div style="display: flex; flex-direction: column; ">
                                <span style="font-size: 13px; text-decoration: line-through; color: gray">R$ ${product.oldPrice},00</span>
                                <span>R$${product.price.toFixed(2)}</span>
                            </div>
                        </div>
                        <span style="font-size: 14px">${product.payment}</span> 
                    </div>
                    <!-- Adicione o ID do produto na URL do link -->
                    <a href="/src/assets/html/details.html?id=${product.id}" style="text-decoration: none">
                        <p class="compras">COMPRAR</p>
                    </a>
                </div>
            </div>
        `;
        const width = innerWidth

        if (width <= 500) {
          const iphones = document.getElementById('iphones')
          iphones.innerHTML = ''
          
          const macbookss = document.getElementById('macbooks')
          macbookss.innerHTML = ''
          
          const ipadss = document.getElementById('ipads')
          ipadss.innerHTML = ''
          
          const produtosAp2 = document.getElementById('produtosAp2')
          produtosAp2.innerHTML = ''

        }


       
        
        
        card.innerHTML = cardHTML;
        cardsWrapper.appendChild(card);

        // Adiciona um pequeno atraso para que a transição seja visível
        setTimeout(() => {
            card.style.opacity = 1;
        }, 50 * (i - startIndex));
    }

    prevButton.disabled = currentPage === 0;
    nextButton.disabled = endIndex >= endProductIndex1 + 1;
}

prevButton.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        renderCards();
    }
});

nextButton.addEventListener("click", () => {
    const startIndex = currentPage * cardsPerPage + startProductIndex1;
    const endIndex = Math.min(startIndex + cardsPerPage, endProductIndex1 + 1);

    if (endIndex < endProductIndex1 + 1) {
        currentPage++;
        renderCards();
    }
});

// Inicialização
renderCards();






const cardsWrapper2 = document.getElementById("cardsWrapper2");
const prevButton2 = document.getElementById("prevButton2");
const nextButton2 = document.getElementById("nextButton2");

const cardWidth2 = 320; // Largura de cada card
const cardsPerPage2 = 3; // Quantidade de cards exibidos por página
let currentPage2 = 0;

// Escolha os índices dos produtos que você deseja exibir
const startProductIndex = 32; // Índice do primeiro produto desejado
const endProductIndex = 36;   // Índice do último produto desejado (excluído)

function renderCards2() {
    cardsWrapper2.innerHTML = "";

    // Calcule os índices reais com base na página atual e na quantidade de cartões por página
    const startIndex = currentPage2 * cardsPerPage2 + startProductIndex;
    const endIndex = Math.min(startIndex + cardsPerPage2, endProductIndex + 1);

    for (let i = startIndex; i < endIndex; i++) {
        const product = products[i];

        const card = document.createElement("div");
        card.classList.add("card");

        const cardHTML = `
        <div class="cards" style="width: 14rem;">
        <a href="#"><img src="${product.poster}" class="card-img-top" alt="Imagem do Produto"></a>
        <div class="card-body" style="display: flex; flex-direction: column;">
          <h6 class="card-text">${product.title}</h6>
          <div class="preco" style="font-size: 20px; display: flex; flex-direction: column; gap: 0rem">
           <div style="display: flex; flex-direction: column; gap: 1rem"> 
            <div style="display: flex; gap: .3rem">
              ${product.star}
            </div>
            <div style="display: flex; flex-direction: column; ">
              <span style="font-size: 13px; text-decoration: line-through; color: gray">R$ ${product.oldPrice},00</span>
              <span>R$${product.price.toFixed(2)}</span>
            </div>
            </div>
            <span style="font-size: 14px">${product.payment}</span> 
          </div>
          <!-- Adicione o ID do produto na URL do link -->
          <a href="/src/assets/html/details.html?id=${product.id}" style="text-decoration: none">
            <p class="compras">COMPRAR</p>
          </a>
        </div>
      </div>
        `;

        card.innerHTML = cardHTML;
        cardsWrapper2.appendChild(card);

        if (width <= 500) {
            const iphones = document.getElementById('iphones')
            iphones.innerHTML = ''
            
            const macbookss = document.getElementById('macbooks')
            macbookss.innerHTML = ''
            
            const ipadss = document.getElementById('ipads')
            ipadss.innerHTML = ''
            
            const produtosAp2 = document.getElementById('produtosAp22')
            produtosAp2.innerHTML = ''
  
          }
    }

    prevButton2.disabled = currentPage2 === 0;
    nextButton2.disabled = endIndex >= endProductIndex + 1;
}

prevButton2.addEventListener("click", () => {
    if (currentPage2 > 0) {
        currentPage2--;
        renderCards2();
    }
});

nextButton2.addEventListener("click", () => {
    const startIndex = currentPage2 * cardsPerPage2 + startProductIndex;
    const endIndex = Math.min(startIndex + cardsPerPage2, endProductIndex + 1);

    if (endIndex < endProductIndex + 1) {
        currentPage2++;
        renderCards2();
    }
});

// Inicialização
renderCards2();


const cardsWrapper3 = document.getElementById("cardsWrapper3");
const prevButton3 = document.getElementById("prevButton3");
const nextButton3 = document.getElementById("nextButton3");

const cardWidth3 = 320; // Largura de cada card
const cardsPerPage3 = 3; // Quantidade de cards exibidos por página
let currentPage3 = 0;

// Escolha os índices dos produtos que você deseja exibir
const startProductIndex3 = 49; // Índice do primeiro produto desejado
const endProductIndex3 = 55;   // Índice do último produto desejado (excluído)

function renderCards3() {
    cardsWrapper3.innerHTML = "";

    // Calcule os índices reais com base na página atual e na quantidade de cartões por página
    const startIndex = currentPage3 * cardsPerPage3 + startProductIndex3;
    const endIndex = Math.min(startIndex + cardsPerPage3, endProductIndex3 + 1);

    for (let i = startIndex; i < endIndex; i++) {
        const product = products[i];

        const card = document.createElement("div");
        card.classList.add("card");

        const cardHTML = `
            <div class="card" style="width: 14rem;">
                <a href="#"><img src="${product.poster}" class="card-img-top" alt="Imagem do Produto"></a>
                <div class="card-body" style="display: flex; flex-direction: column;">
                    <p class="card-text">${product.title}</p>
                    <div class="preco">
                        ${product.star}
                        <h5>R$${product.price.toFixed(2)}</h5>
                        <p style="font-size: 14px">${product.payment}</p> 
                    </div>
                    <!-- Adicione o ID do produto na URL do link -->
                    <a href="/src/assets/html/details.html?id=${product.id}">
                        <p class="compras">COMPRAR</p>
                    </a>
                </div>
            </div>
        `;

        card.innerHTML = cardHTML;
        cardsWrapper3.appendChild(card);

        if (width <= 500) {
            const iphones = document.getElementById('iphones')
            iphones.innerHTML = ''
            
            const macbookss = document.getElementById('macbooks')
            macbookss.innerHTML = ''
            
            const ipadss = document.getElementById('ipads')
            ipadss.innerHTML = ''
            
            const produtosAp2 = document.getElementById('produtosAp23')
            produtosAp2.innerHTML = ''
  
          }
    }

    prevButton3.disabled = currentPage3 === 0;
    nextButton3.disabled = endIndex >= endProductIndex3 + 1;
}

prevButton3.addEventListener("click", () => {
    if (currentPage3 > 0) {
        currentPage3--;
        renderCards3();
    }
});

nextButton3.addEventListener("click", () => {
    const startIndex = currentPage3 * cardsPerPage3 + startProductIndex3;
    const endIndex = Math.min(startIndex + cardsPerPage3, endProductIndex3 + 1);

    if (endIndex < endProductIndex3 + 1) {
        currentPage3++;
        renderCards3();
    }
});

// Inicialização
renderCards3();





function backLeft() {
    pages1.style.display = 'flex';
    pages1.style.flexDirection = 'column'
    pages2.style.display = 'none'
    botao2.style.backgroundColor = 'black'
    botao2.style.color = 'white'
    botao3.style.color = 'black'
    botao1.style.backgroundColor = ' rgba(128, 128, 128, 0.357)'
  
    if (pages2.style.display = 'none') {
      botao3.style.backgroundColor = 'transparent'
      botao4.style.backgroundColor = 'transparent'
      botao3.style.colorolor = 'black'
    }
  }
  
  function pageOne() {
    pages1.style.display = 'flex';
    pages1.style.flexDirection = 'column'
    pages2.style.display = 'none'
    botao2.style.backgroundColor = 'black'
    botao2.style.color = 'white'
    botao3.style.color = 'black'
    botao1.style.backgroundColor = ' rgba(128, 128, 128, 0.357)'
  
    if (pages2.style.display = 'none') {
      botao3.style.backgroundColor = 'transparent'
      botao4.style.backgroundColor = 'transparent'
    }
      }
  
  function pageTwo() {
    pages2.style.display = 'flex';
    pages2.style.flexDirection = 'column'
    pages1.style.display = 'none'
    botao3.style.backgroundColor = 'black'
    botao3.style.color = 'white'
    botao2.style.color = 'black'
    botao4.style.backgroundColor = ' rgba(128, 128, 128, 0.357)'
  
    if (pages1.style.display = 'none') {
      botao2.style.backgroundColor = 'transparent'
      botao1.style.backgroundColor = 'transparent'
    }
  }
  
  function backRight() {
    pages2.style.display = 'flex';
    pages2.style.flexDirection = 'column'
    pages1.style.display = 'none'
    botao3.style.backgroundColor = 'black'
    botao3.style.color = 'white'
     botao2.style.color = 'black'
    botao4.style.backgroundColor = ' rgba(128, 128, 128, 0.357)'
  
    if (pages1.style.display = 'none') {
      botao2.style.backgroundColor = 'transparent'
      botao1.style.backgroundColor = 'transparent'
      botao3.style.colorolor = 'black'
    }
  }
  