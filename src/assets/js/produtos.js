const botao1 = document.getElementById('button1')
const botao2 = document.getElementById('button2')
const botao3 = document.getElementById('button3')
const botao4 = document.getElementById('button4')
const pages1 = document.getElementById('firstP')
const pages2 = document.getElementById('secondP')


const products = [
    {
        id: 1,
        title: 'iPhone 15 Pro Max 128GB ',
        price: 6500.0,
        poster: '/src/images/iphone15pro.png',
        oldPrice: 8200.0,
        poster2: '/src/images/i152img.png',
        poster3 : '/src/images/i153img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 18x de R$',
        condition: 'Semi Novo',
        type: 'Importado',
        title2: 'iPhone 15 ',
        category: 'iPhones'
    },
    {
        id: 2,
        title: 'iPhone 14 Pro 128GB',
        price: 3650.0,
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
        id: 3,
        title: 'iPhone 13 128GB',
        price: 2950.0,
        oldPrice: 4700.0,
        poster: '/src/images/iphone1333.png',
        poster2: '/src/images/13image2.png',
        poster3 : '/src/images/13image3.png ',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 18x de R$',
        title2: 'iPhone 13',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPhones'
    }, 
    {
        id: 4,
        title: 'iPhone 12 64GB',
        price: 1995.0,
        poster:'/src/images/iphone12.png',
        oldPrice: 8200.0,
        poster2: '/src/images/iphone122jmg.png',
        poster3 : '/src/images/iphone123img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '64GB',
        payment: 'ou até 12x de R$',
        title2: 'iPhone 12',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 5,
        title: 'iPhone 11 64GB',
        price: 1650.0,
        poster: '/src/images/iphone4.png',
        oldPrice: 2800.0,
        poster2: '/src/images/iphone112img.png',
        poster3 : '/src/images/iphone113img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '64GB',
        payment: 'ou até 12x de R$ ',
        title2: 'Iphone 11',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 6,
        title: 'iPhone 11 Pro Max 64GB',
        price: 1870.0,
        poster:'/src/images/11promax64gb.png',
        oldPrice: 8200.0,
        poster2: '/src/images/iphone112img.png',
        poster3 : '/src/images/iphone113img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '64GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 7,
        title: 'iPhone 11 Pro Max 256GB',
        price: 1990.0,
        oldPrice: 2800.0,
        poster:'/src/images/iph11claro.png',
        poster2: '/src/images/iphone112img.png',
        poster3 : '/src/images/iphone113img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 8,
        title: 'iPhone 12 Mini 64GB',
        price: 1695.0,
        poster:'/src/images/iphone1264gb.png',
        oldPrice: 2500.0,
        poster2: '/src/images/12minibranco2foto.png',
        poster3 : '/src/images/iphone123img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '64GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 9,
        title: 'iPhone 12 Mini 128GB',
        price: 1485.0,
        poster:'/src/images/iPhone12mini128.png',
        oldPrice: 2600.0,
        poster2: '/src/images/iphone122jmg.png',
        poster3 : '/src/images/iphone123img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 10,
        title: 'iPhone 11 Pro 64GB',
        price: 1700.0,
        poster:'/src/images/iphone11pro128.png',
        oldPrice: 2800.0,
        poster2: '/src/images/iphone112img.png',
        poster3 : '/src/images/iphone113img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '64GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 11,
        title: 'iPhone 12 128GB',
        price: 1800.0,
        poster:'/src/images/iphone12.png',
        oldPrice: 2800.0,
        poster2: '/src/images/iphone122jmg.png',
        poster3 : '/src/images/iphone123img.png',
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
        title: 'iPhone 12 Pro 128GB',
        price: 2220.0,
        poster:'/src/images/iphone12pro.png',
        oldPrice: 3600.0,
        poster2: '/src/images/iphone12proBranco2img.png',
        poster3 : '/src/images/iphone123img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 13,
        title: 'iPhone 12 Pro 256GB',
        price: 2320.0,
        poster:'/src/images/iphone12proazul.png',
        oldPrice: 3400.0,
        poster2: '/src/images/iphone122jmg.png',
        poster3 : '/src/images/iphone123img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 14,
        title: 'iPhone 12 Pro 512GB',
        price: 2430.0,
        poster:'/src/images/iphone12pro512gb.png',
        oldPrice: 3700.0,
        poster2: '/src/images/iphone122jmg.png',
        poster3 : '/src/images/iphone123img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '512GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 15,
        title: 'iPhone 12 Pro Max 128GB',
        price: 2680.0,
        poster:'/src/images/iphone12promax128.png',
        oldPrice: 3800.0,
        poster2: '/src/images/iphone122jmg.png',
        poster3 : '/src/images/iphone123img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$ ',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 16,
        title: 'iPhone 13 Mini 128GB',
        price: 2150.0,
        poster: '/src/images/iphone13mini.png',
        oldPrice: 3800.0,
        poster2: '/src/images/iphone132img.png',
        poster3 : '/src/images/iphone133img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 17,
        title: 'iPhone 11 128GB',
        price: 1650.0,
        poster: '/src/images/iphone11128gb.png',
        oldPrice: 2800.0,
        poster2: '/src/images/iphone112img.png',
        poster3 : '/src/images/iphone113img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$ ',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    
    {
        id: 18,
        title: 'iPhone 13 256GB',
        price: 2535.0,
        poster: '/src/images/iphone13256.png',
        oldPrice: 3500.0,
        poster2: '/src/images/iphone132img.png',
        poster3 : '/src/images/iphone133img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 19,
        title: 'iPhone 13 Pro 128GB',
        price: 3095.0,
        poster: '/src/images/iphone13pro.png',
        oldPrice: 3900.0,
        poster2: '/src/images/iphone132img.png',
        poster3 : '/src/images/iphone133img.png',
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
        title: 'iPhone 13 Pro 256GB',
        price: 3200.0,
        poster: '/src/images/i13img.png',
        oldPrice: 4300.0,
        poster2: '/src/images/iphone132img.png',
        poster3 : '/src/images/iphone133img.png',
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
        title: 'iPhone 13 Pro Max 128GB',
        price: 3410.0,
        poster: '/src/images/i13pro.png',
        oldPrice: 4600.0,
        poster2: '/src/images/iphone132img.png',
        poster3 : '/src/images/iphone133img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 22,
        title: 'iPhone 11 Pro 128GB',
        price: 1800.0,
        poster:'/src/images/iphone11pro128.png',
        oldPrice: 2800.0,
        poster2: '/src/images/iphone112img.png',
        poster3 : '/src/images/iphone113img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 23,
        title: 'iPhone 14 256GB',
        price: 2850.0,
        poster: '/src/images/14prof.png',
        oldPrice: 3800.0,
        poster2: '/src/images/i152img.png',
        poster3 : '/src/images/i153img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$',
        condition: '',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 24,
        title: 'iPhone 14 Plus 128GB',
        price: 3270.0,
        poster: '/src/images/14plus.png',
        oldPrice: 4100.0,
        poster2: '/src/images/i152img.png',
        poster3 : '/src/images/i153img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 25,
        title: 'iPhone 14 Plus 256GB',
        price: 3420.0,
        poster: '/src/images/14plus.png',
        oldPrice: 4200.0,
        poster2: '/src/images/i152img.png',
        poster3 : '/src/images/i153img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 26,
        title: 'iPhone 14 Pro 128GB',
        price: 4050.0,
        poster: '/src/images/iph143cam.png',
        oldPrice: 5100.0,
        poster2: '/src/images/i152img.png',
        poster3 : '/src/images/i153img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 27,
        title: 'iPhone 14 Pro Max 128GB',
        price: 3850.0,
        poster: '/src/images/14prof.png',
        oldPrice: 4800.0,
        poster2: '/src/images/i152img.png',
        poster3 : '/src/images/i153img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPhones'
    },
    { 
        id: 28,
        title: 'iPhone 14 Pro Max 256GB',
        price: 4200.0,
        poster: '/src/images/14prof.png',
        oldPrice: 5300.0,
        poster2: '/src/images/i152img.png',
        poster3 : '/src/images/i153img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 29,
        title: 'iPhone 13 128GB',
        price: 2800.0,
        poster: '/src/images/iphone13imgg.png',
        oldPrice: 3800.0,
        poster2: '/src/images/iphone132img.png',
        poster3 : '/src/images/iphone133img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 30,
        title: 'iPhone 15 Pro 128GB ',
        price: 5300.0,
        poster: '/src/images/iphone15pro.png',
        oldPrice: 7300.0,
        poster2: '/src/images/i152img.png',
        poster3 : '/src/images/i153img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 18x de R$',
        condition: 'Semi Novo',
        type: 'Importado',
        title2: 'iPhone 15 ',
        category: 'iPhones'
    },
    {
        id: 31,
        title: 'iPhone 15 128GB ',
        price: 4300.0,
        poster: '/src/images/i15.png',
        oldPrice: 6200.0,
        poster2: '/src/images/i152img.png',
        poster3 : '/src/images/i153img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 18x de R$',
        condition: 'Semi Novo',
        type: 'Importado',
        title2: 'iPhone 15 ',
        category: 'iPhones'
    },
    { 
        id: 32,
        title: 'iPhone 14 Pro Max 256GB',
        price: 4850.0,
        oldPrice: 6300.0,
        poster: '/src/images/iphone144.png',
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
        id: 33,
        title: 'iPhone 14 Pro Max 128GB',
        price: 4500.0,
        oldPrice: 5900.0,
        poster: '/src/images/iphone144.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 18x de R$',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 34,
        title: 'iPhone 14 Pro 128GB Semi Novo',
        price: 3550.0,
        oldPrice: 5300.0,
        poster: '/src/images/iphone144.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 18x de R$',
        condition: 'Semi Novo',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 35,
        title: 'iPhone 14 Pro Max 128GB Semi Novo',
        price: 3850.0,
        oldPrice: 6200.0,
        poster: '/src/images/iphone144.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 18x de R$',
        condition: 'Semi Novo',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 36,
        title: 'iPhone 14 Pro Max 256GB Semi Novo',
        price: 4350.0,
        oldPrice: 6500.0,
        poster: '/src/images/iphone144.png',
        poster2: '/src/images/14image3.jpg',
        poster3 : '/src/images/142foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 18x de R$',
        condition: 'Semi Novo',
        type: 'Importado',
        category: 'iPhones'
    },
    {
        id: 37,
        title: 'MacBook Air M1 256GB 8GB de ram 13P',
        price: 3510.0,
        oldPrice: 4700.0,
        poster: '/src/images/m1256.png',
        poster2: '/src/images/2fotomacm1.png',
        poster3 : '/src/images/3fotomacbooks.png',
        link: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '256GB',
        condition: 'Lacrado',
        payment: 'ou até 18x de R$ ',
        ram: '8GB',
        polegadas: '13P',
        title2: 'MacBook M1',
        condition: 'Lacrado',
        type: 'Importado',
    },
    
    {
        id: 38,
        title: 'MacBook Air M2 256GB 8Gb de ram 13P',
        price: 4683.0,
        poster: '/src/images/m2256.png',
        oldPrice: 5400.0,
        poster2: '/src/images/2fotomacbookazul.png',
        poster3 : '/src/images/3fotomacbooks.png',
        link: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '256GB',
        payment: 'ou até 18x de R$ ',
        ram: '8GB',
        inches: '13P',
        title2: 'MacBook M2',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Notebook'
    },
    {
        id: 39,
        title: 'MacBook Air M2 256GB 8GB de ram 15P',
        price: 5250.0,
        poster: '/src/images/m215p.png',
        oldPrice: 5900.0,
        poster2: '/src/images/mac2foto.png',
        poster3 : '/src/images/3fotomacbooks.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '256GB',
        payment: 'ou até 18x de R$ ',
        ram: '8GB',
        polegadas: '15P',
        year: '2023',
        title2: 'MacBook Pro',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Notebook'
    },
    {
        id: 40,
        title: 'MacBook Air M1 1TB 16GB de ram 14P',
        price: 8220.0,
        poster:'/src/images/macm11tb.png',
        oldPrice: 9200.0,
        poster2: '/src/images/macm12foto.png',
        poster3 : '/src/images/3fotomacbooks.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '1TB',
        payment: 'ou até 18x de R$ ',
        ram: '16GB',
        polegadas: '14P',
        year: '2021',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Notebook'
    },
    {
        id: 41,
        title: 'MacBook Air M1 1TB 16GB de ram 16P',
        price: 9200.0,
        poster:'/src/images/macm116.png',
        oldPrice: 10220.0,
        poster2: '/src/images/macm12foto2.png',
        poster3 : '/src/images/3fotomacbooks.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '44mm',
        payment: 'ou até 18x de R$ ',
        ram: '16GB',
        polegadas: '14P',
        year: '2021',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Notebook'
    },
    {
        id: 42,
        title: 'Apple Watch Série 6 40mm',
        price: 1050.0,
        poster: '/src/images/watchs6.png',
        oldPrice: 2200.0,
        poster2: '/src/images/watchs62foto.png',
        poster3 : '/src/images/watchs63foto.png',
        link: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '40mm',
        payment: 'ou até 18x de R$ ',
        title2: 'Apple Watch S6',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Watch'
    },
    {
        id: 43,
        title: 'Apple Watch Série 7 41mm',
        price: 1200.0,
        poster:'/src/images/applewatch3.png',
        oldPrice: 2100.0,
        poster2: '/src/images/watch7img2.png',
        poster3 : '/src/images/watch7img3.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '41mm',
        payment: 'ou até 18x de R$ ',
        title2: 'Apple Watch S7',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Watch'
    },
    {
        id: 44,
        title: 'Apple Watch Série 8 41mm',
        price: 1520.0,
        poster:'/src/images/applewatch4.png',
        poster2: '/src/images/watchs8img2.png',
        poster3 : '/src/images/watchimg3.png',
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
        id: 45,
        title: 'Apple Watch Série 7 45mm',
        price: 1275.0,
        poster:'/src/images/applewatch7.png',
        oldPrice: 2300.0,
        poster2: '/src/images/i152img.png',
        poster3 : '/src/images/i153img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '45mm',
        payment: 'ou até 18x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Watch'
    },
    {
        id: 46,
        title: 'Apple Watch Série S5 44mm',
        price: 900.0,
        poster:'/src/images/applewatch5.png',
        oldPrice: 1600.0,
        poster2: '/src/images/i152img.png',
        poster3 : '/src/images/i153img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '44mm',
        payment: 'ou até 18x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Watch'
    },
    {
        id: 47,
        title: 'Apple Watch Série 6 44mm',
        price: 1100.0,
        poster:'/src/images/applewatch6.png',
        oldPrice: 2200.0,
        poster2: '/src/images/i152img.png',
        poster3 : '/src/images/i153img.png',
        link: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '44mm',
        payment: 'ou até 18x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Watch'
    },
    {
        id: 48,
        title: 'Apple Watch Série 8 45mm',
        price: 1850.0,
        poster:'/src/images/applewatch8.png',
        oldPrice: 3200.0,
        poster2: '/src/images/i152img.png',
        poster3 : '/src/images/i153img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '45mm',
        payment: 'ou até 18x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Watch'
    },
    {
        id: 49,
        title: 'Apple Watch Série 8 41mm',
        price: 1650.0,
        poster:'/src/images/applewatch82.png',
        oldPrice: 2800.0,
        poster2: '/src/images/i152img.png',
        poster3 : '/src/images/i153img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '45mm',
        payment: 'ou até 18x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Watch'
    },
    {
        id: 50,
        title: 'Apple Watch Série 8 45mm Midnight',
        price: 1850.0,
        poster:'/src/images/applewatch823.png',
        oldPrice: 3200.0,
        poster2: '/src/images/i152img.png',
        poster3 : '/src/images/i153img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '45mm',
        payment: 'ou até 18x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Watch'
    },
    {
        id: 51,
        title: 'Apple Watch Ultra 49mm',
        price: 3360.0,
        poster:'/src/images/srcimagesapplewatchultra.png.png',
        oldPrice: 4800.0,
        poster2: '/src/images/i152img.png',
        poster3 : '/src/images/i153img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '49mm',
        payment: 'ou até 18x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Watch'
    },
    {
        id: 52,
        title: 'Apple Pencil 2',
        price: 500.0,
        poster:'/src/images/applepencil2.png',
        oldPrice: 800.0,
        poster2: '/src/images/applepimg2.png',
        poster3 : '/src/images/appleimg3.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        payment: 'ou até 18x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Pencil'
    },
    {
        id: 53,
        title: 'Apple Pencil 1',
        price: 450.0,
        poster:'/src/images/applepencil1.png',
        oldPrice: 750.0,
        poster2: '/src/images/applepimg2.png',
        poster3 : '/src/images/appleimg3.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        payment: 'ou até 18x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Pencil'
    },
    {
        id: 54,
        title: 'Apple Pencil 1 C/Adaptador',
        price: 495.0,
        poster:'/src/images/applepencil1cAdap.png',
        oldPrice: 800.0,
        poster2: '/src/images/applepimg2.png',
        poster3 : '/src/images/appleimg3.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        payment: 'ou até 18x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Pencil'
    },
    {
        id: 55,
        title: 'iPad 9 64GB',
        price: 1380.0,
        poster:'/src/images/ipad9.png',
        oldPrice: 2800.0,
        poster2: '/src/images/ipad92foto.png',
        poster3 : '/src/images/ipad93foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '64GB',
        payment: 'ou até 18x de R$ ',
        title2: 'iPad 9',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPad'
    },
    {
        id: 56,
        title: 'iPad 10 64GB',
        price: 2010.0,
        poster:'/src/images/ipad10.png',
        oldPrice: 3800.0,
        poster2: '/src/images/ipad102foto.png',
        poster3 : '/src/images/ipad103foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '64GB',
        payment: 'ou até 18x de R$ ',
        title2: 'iPad 10',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPad'
    },
    {
        id: 57,
        title: 'iPad Pro 12.9 128GB M2',
        price: 4220.0,
        poster:'/src/images/ipad12.9.png',
        oldPrice: 5400.0,
        poster2: '/src/images/ipad12.92foto.png',
        poster3 : '/src/images/ipad12.93foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '128GB',
        payment: 'ou até 18x de R$ ',
        title2: 'iPad Pro',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPad'
    },
    {
        id: 58,
        title: 'iPad 10 256GB Wi-Fi + Celular',
        price: 3395.0,
        oldPrice: 4100.0,
        poster:'/src/images/ipad10256gb.png',
        poster2: '/src/images/ipad10azul2foto.png',
        poster3 : '/src/images/ipad10azul3foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '256GB',
        payment: 'ou até 18x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPad'
    },
    {
        id: 59,
        title: 'iPad 11 Pro 128GB Wi-FI + Celular',
        price: 4600.0,
        poster:'/src/images/iiPad11.png',
        oldPrice: 5300.0,
        poster2: '/src/images/ipad112foto.png',
        poster3 : '/src/images/ipad113foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '128GB',
        payment: 'ou até 18x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPad'
    },
    {
        id: 60,
        title: 'iPad 10 256GB',
        price: 2465.0,
        poster: '/src/images/ipad10256.png',
        oldPrice: 3800.0,
        poster2: '/src/images/ipad102562fto.png',
        poster3 : '/src/images/ipad102563fto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '256GB',
        payment: 'ou até 18x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPad'
    },
    
    {
        id: 61,
        title: 'iPad Pro 12.9 256GB M2',
        price: 4850.0,
        poster:'/src/images/iiPad12.png',
        oldPrice: 5800.0,
        poster2: '/src/images/ipad12.92fotoo.png',
        poster3 : '/src/images/ipad12.93fotoo.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '256GB',
        payment: 'ou até 18x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPad'
    },
    {
        id: 62,
        title: 'iPad Air 5 64GB',
        price: 2550.0,
        poster:'/src/images/ipadair5.png',
        oldPrice: 3800.0,
        poster2: '/src/images/ipadair52foto.png',
        poster3 : '/src/images/ipadair53foto.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '256GB',
        payment: 'ou até 18x de R$ ',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPad'
    },
    {
        id: 63,
        title: 'AirPods Pro',
        price: 900.0,
        poster:'/src/images/airpodspro.png',
        oldPrice: 1300.0,
        poster2: '/src/images/2fotoairpodspro.png',
        poster3 : '/src/images/3fotoairpodspro.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '128GB',
        payment: 'ou até 18x de R$ ',
        title2: 'AirPods Pro',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Pods'
    },
    {
        id: 64,
        title: 'AirPods 2',
        price: 650.0,
        oldPrice: 1200.0,
        poster:'/src/images/airpods2.png',
        poster2: '/src/images/2fotoairpods2g.png',
        poster3 : '/src/images/3fotoairpods2g.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '',
        payment: 'ou até 18x de R$ ',
        title2: 'AirPods 2',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Pods'
    },
    {
        id: 65,
        title: 'AirPods Pro 2',
        price: 1000.0,
        oldPrice: 1500.0,
        poster:'/src/images/airpodsPro2.png',
        poster2: '/src/images/2fotoairpods2g.png',
        poster3 : '/src/images/3fotoairpods2g.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '',
        payment: 'ou até 18x de R$ ',
        title2: 'AirPods Pro 2',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Pods'
    },
    {
        id: 66,
        title: 'AirPods Max',
        price: 2650.0,
        oldPrice: 2900.0,
        poster:'/src/images/airpodsMax.png',
        poster2: '/src/images/airpodsmax2img.png',
        poster3 : '/src/images/airpodsmaximg2.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '',
        payment: 'ou até 18x de R$ ',
        title2: 'AirPods 2ª geração',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'Pods'
    },
    { 
        id: 67,
        title: 'iPhone 14 128GB',
        price: 3350.0,
        poster: '/src/images/iphone144.png',
        oldPrice: 4500.0,
        poster2: '/src/images/i152img.png',
        poster3 : '/src/images/i153img.png',
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
        id: 68,
        title: 'iPhone 14 Pro 256GB',
        price: 4319.0,
        poster: '/src/images/iphone144.png',
        oldPrice: 5300.0,
        poster2: '/src/images/i152img.png',
        poster3 : '/src/images/i153img.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$',
        condition: 'Lacrado',
        type: 'Importado',
        category: 'iPhones'
    },
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
    cardsContainer.style.marginLeft = '520px'
    cardsContainer.style.marginRight = '520px'

    if(width > 500 && width <= 1400) {
        cardsContainer.style.marginLeft = '200px'
        cardsContainer.style.marginRight = '200px'

        
    }



    // Para que os cards fiquem em várias linhas se necessário
 // Centralizar o s cards horizontalmente
    
  
    products.forEach((product) => {
      const divProducts = document.createElement('div');
  
      if (width > 500 ) {

        divProducts.style.display = 'flex';
        divProducts.style.justifyContent = 'center';
        divProducts.style.marginTop = '10px';  
        divProducts.style.marginRight = '.5rem'
        cardsContainer.style.justifyContent = 'center';
        cardsContainer.style.alignItems = 'center';

  
        divProducts.innerHTML = `
        <div class="cards" style="width: 12.5rem;">
            <a href="/src/assets/html/details.html?id=${product.id}"><img src="${product.poster}" class="card-img-top" alt="Imagem do Produto"></a>
            <div class="card-body" style="display: flex; flex-direction: column;">
            <h6 class="card-text">${product.title}</h6>
            <div class="preco" style="font-size: 20px; display: flex; flex-direction: column; gap: 0rem; align-items: center;">
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


        justPc.innerHTML = `<div id="justPc" style="display: flex; flex-direction: column; gap: .5rem; padding-top: 20px; justify-content: center; ">
    <div id="caminho" style="color: gray; font-size: 12px; display: flex; align-items: center; gap:.3rem;">
      <i class="fa-solid fa-house-chimney fa-lg" style="color: #787878;"></i> > <a href="/home.html" style="text-decoration: none; color: gray"> Home </a> > <a href="/src/assets/html/iphones.html" style="text-decoration: none; color: gray">Ver Todos</a> > <a href="/src/assets/html/iphones.html" style="text-decoration: none; color: gray"></a> Pesquisa
    </div>
    <div id="topFiltro"  style="display: flex; flex-direction: column; width: 820px; border-radius: 8px; padding: 30px; background-color: white;">
      <b style="color: gray; font-size: 24px;">Ver Todos</b>
      <hr></hr>
      <span style="font-size: 13px; color: gray;">Foram encontrados <b style="color: black">66</b> produtos</span>
      <hr size="10px"></hr>
      <i class="fa-solid fa-grip fa-xl" style="color: #000000;"></i>
  </div>`
      } 
      
      else {

        const justPc = document.getElementById('justPc');

        justPc.innerHTML = `<div id="justPc" style="display: flex; flex-direction: column; gap: .5rem; padding-top: 20px; justify-content: center; margin-bottom: 20px;">
    <div id="caminho" style="color: gray; font-size: 12px; display: flex; align-items: center; gap:.3rem;">
      <i class="fa-solid fa-house-chimney fa-lg" style="color: #787878;"></i> > <a href="/home.html" style="text-decoration: none; color: gray"> Home </a> > <a href="/src/assets/html/iphones.html" style="text-decoration: none; color: gray">Ver Todos</a> > <a href="/src/assets/html/iphones.html" style="text-decoration: none; color: gray"></a> Pesquisa
    </div>
    <div id="topFiltro"  style="display: flex; flex-direction: column; width: 350px; border-radius: 8px; padding: 30px; background-color: #f1f1f1;">
      <b style="color: gray; font-size: 24px;">Ver Todos</b>
      <hr></hr>
      <span style="font-size: 13px; color: gray;">Foram encontrados <b style="color: black">66</b> produtos</span>
      <hr size="10px"></hr>
      <i class="fa-solid fa-grip fa-xl" style="color: #000000;"></i>
  </div>`

  
        divProducts.innerHTML = `<div class="menu-sessao-bloco-card">
          <div class="cardM" style="width: 24.3rem; display: flex; box-shadow: 0px 0px 1.2px 0px rgb(182, 182, 182); align-items: center; gap: 0rem;">
          <a href="/src/assets/html/details.html?id=${product.id}" style="text-decoratio: none; color: black"><img src=${product.poster} style="width: 110px; height: 110px" class="card-img-top" alt="..."></a>
            <div class="card-body">
            <a href="/src/assets/html/details.html?id=${product.id}"><p><strong>${product.title}</strong></p></a>
              <div id="rating" style="display: flex; gap: .5rem; font-size: 18px; justify-content: center; ">
                ${product.star}
              </div>
              <div class="preco">
                <h5><strong>R$ ${product.price},00</strong></h5>
              </div>
            </div>
          </div>
      </div>`;
  
        divProducts.style.display = 'flex';
        divProducts.style.marginBottom = '0px'; // Espaçamento entre os cards
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
const endProductIndex1Mobile = 36;   // Índice do último produto desejado (excluído)

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
            <div class="cards" style="width: 9.5rem;">
                <a href="/src/assets/html/details.html?id=${product.id}"><img src="${product.poster}" style="width: 150px" class="card-img-top" alt="Imagem do Produto"></a>
                <div class="card-body" style="display: flex; flex-direction: column;">
                    <h6 class="card-text">${product.title}</h6>
                    <div class="preco" style="font-size: 20px; display: flex; flex-direction: column; gap: 0rem; margin-bottom: 20px;">
                        <div style="display: flex; flex-direction: column; gap: 1rem"> 
                            <div style="display: flex; gap: .3rem; font-size: 14px">
                                ${product.star}
                            </div>
                            <div style="display: flex; flex-direction: column; ">
                                <span style="font-size: 11.5px; text-decoration: line-through; color: gray">R$ ${product.oldPrice},00</span>
                                <span style="font-size: 17px;"><b> R$ ${product.price.toFixed(2)}</b></span>
                            </div>
                        </div>
                        <span style="font-size: 12px">${product.payment}</span> 
                    </div>
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
const startProductIndex1Mobile2 = 36; // Índice do primeiro produto desejado
const endProductIndex1Mobile2 = 40;   // Índice do último produto desejado (excluído)

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
            <div class="cards" style="width: 9.5rem;">
                <a href="/src/assets/html/details.html?id=${product.id}"><img src="${product.poster}" style="width: 150px" class="card-img-top" alt="Imagem do Produto"></a>
                <div class="card-body" style="display: flex; flex-direction: column;">
                    <h6 class="card-text">${product.title}</h6>
                    <div class="preco" style="font-size: 20px; display: flex; flex-direction: column; gap: 0rem; margin-bottom: 20px;">
                        <div style="display: flex; flex-direction: column; gap: 1rem"> 
                            <div style="display: flex; gap: .3rem; font-size: 14px">
                                ${product.star}
                            </div>
                            <div style="display: flex; flex-direction: column; ">
                                <span style="font-size: 11.5px; text-decoration: line-through; color: gray">R$ ${product.oldPrice},00</span>
                                <span style="font-size: 17px;"><b> R$ ${product.price.toFixed(2)}</b></span>
                            </div>
                        </div>
                        <span style="font-size: 12px">${product.payment}</span> 
                    </div>
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
const startProductIndex1Mobile3 = 54; // Índice do primeiro produto desejado
const endProductIndex1Mobile3 = 61;   // Índice do último produto desejado (excluído)

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
            <div class="cards" style="width: 9.5rem;">
                <a href="/src/assets/html/details.html?id=${product.id}"><img src="${product.poster}" style="width: 150px" class="card-img-top" alt="Imagem do Produto"></a>
                <div class="card-body" style="display: flex; flex-direction: column;">
                    <h6 class="card-text">${product.title}</h6>
                    <div class="preco" style="font-size: 20px; display: flex; flex-direction: column; gap: 0rem; margin-bottom: 20px;">
                        <div style="display: flex; flex-direction: column; gap: 1rem"> 
                            <div style="display: flex; gap: .3rem; font-size: 14px">
                                ${product.star}
                            </div>
                            <div style="display: flex; flex-direction: column; ">
                                <span style="font-size: 11.5px; text-decoration: line-through; color: gray">R$ ${product.oldPrice},00</span>
                                <span style="font-size: 17px;"><b> R$ ${product.price.toFixed(2)}</b></span>
                            </div>
                        </div>
                        <span style="font-size: 12px">${product.payment}</span> 
                    </div>
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
const endProductIndex1 = 35;   // Índice do último produto desejado (excluído)

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
            <div class="cards" style="width: 12.5rem;">
                <a href="/src/assets/html/details.html?id=${product.id}"><img src="${product.poster}" class="card-img-top" alt="Imagem do Produto"></a>
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

          const produtosAp22Note = document.getElementById('produtosAp22Note')
          produtosAp22Note.innerHTML = ''

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
const startProductIndex = 36; // Índice do primeiro produto desejado
const endProductIndex = 40;   // Índice do último produto desejado (excluído)

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
        <div class="cards" style="width: 12.5rem;">
        <a href="/src/assets/html/details.html?id=${product.id}"><img src="${product.poster}" class="card-img-top" alt="Imagem do Produto"></a>
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
const startProductIndex3 = 54; // Índice do primeiro produto desejado
const endProductIndex3 = 61;   // Índice do último produto desejado (excluído)

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
            <div class="card" style="width: 12.5rem;">
                <a href="/src/assets/html/details.html?id=${product.id}"><img src="${product.poster}" class="card-img-top" alt="Imagem do Produto"></a>
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
  