const products = [
    {
        id: 1,
        title: 'iPhone 14 Pro 128GB',
        price: 2710.0,
        poster: '/src/images/iphone144.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        title2: 'iPhone 14'
    }, 
    {
        id: 2,
        title: 'iPhone 13 128GB',
        price: 2465.0,
        poster: '/src/images/iphone1333.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        title2: 'iPhone 13'
    }, 
    {
        id: 3,
        title: 'iPhone 12 64GB',
        price: 1695.0,
        poster:'/src/images/iphone12.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '64GB',
        payment: 'ou até 12x de R$',
        title2: 'iPhone 12'
    },
    {
        id: 4,
        title: 'iPhone 11 64GB',
        price: 1350.0,
        poster: '/src/images/iphone4.png',
        link: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '64GB',
        payment: 'ou até 12x de R$ ',
        title2: 'Iphone 11'
    },
    {
        id: 5,
        title: 'iPhone 11 Pro Max 64GB',
        price: 1870.0,
        poster:'/src/images/11promax64gb.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '64GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 6,
        title: 'iPhone 11 Pro Max 256GB',
        price: 1990.0,
        poster:'/src/images/11promax256.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 7,
        title: 'iPhone 12 Mini 64GB',
        price: 1695.0,
        poster:'/src/images/iphone1264gb.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '64GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 8,
        title: 'iPhone 12 Mini 128GB',
        price: 1485.0,
        poster:'/src/images/iPhone12mini128.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 9,
        title: 'iPhone 11 Pro 64GB',
        price: 1700.0,
        poster:'/src/images/iphone11pro128.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '64GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 10,
        title: 'iPhone 12 128GB',
        price: 1800.0,
        poster:'/src/images/iphone12.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 11,
        title: 'iPhone 12 Pro 128GB',
        price: 2220.0,
        poster:'/src/images/iphone12pro.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 12,
        title: 'iPhone 12 Pro 256GB',
        price: 2320.0,
        poster:'/src/images/iphone12pro128.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 13,
        title: 'iPhone 12 Pro 512GB',
        price: 2430.0,
        poster:'/src/images/iphone12pro512gb.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '512GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 14,
        title: 'iPhone 12 Pro Max 128GB',
        price: 2680.0,
        poster:'/src/images/iphone12promax128.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$ '
    },
    {
        id: 15,
        title: 'iPhone 13 Mini 128GB',
        price: 2150.0,
        poster: '/src/images/iphone13mini.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 16,
        title: 'iPhone 11 128GB',
        price: 1650.0,
        poster: '/src/images/iphone11128gb.png',
        link: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$ ',
    },
    
    {
        id: 17,
        title: 'iPhone 13 256GB',
        price: 2535.0,
        poster: '/src/images/iphone13256.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 18,
        title: 'iPhone 13 Pro 128GB',
        price: 3095.0,
        poster: '/src/images/iphone13pro.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 19,
        title: 'iPhone 13 Pro 256GB',
        price: 3200.0,
        poster: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 20,
        title: 'iPhone 13 Pro Max 128GB',
        price: 3410.0,
        poster: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 21,
        title: 'iPhone 11 Pro 128GB',
        price: 1800.0,
        poster:'/src/images/iphone11pro128.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 22,
        title: 'iPhone 14 256GB',
        price: 2850.0,
        poster: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 23,
        title: 'iPhone 14 Plus 128GB',
        price: 3270.0,
        poster: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 24,
        title: 'iPhone 14 Plus 256GB',
        price: 3420.0,
        poster: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 25,
        title: 'iPhone 14 Pro 128GB',
        price: 4050.0,
        poster: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 26,
        title: 'iPhone 14 Pro Max 128GB',
        price: 3850.0,
        poster: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$'
    },
    { 
        id: 27,
        title: 'iPhone 14 Pro Max 256GB',
        price: 4200.0,
        poster: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$'
    },
    {
        id: 28,
        title: 'iPhone 13 128GB',
        price: 2800.0,
        poster: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: 'Lacrado'
    },
    { 
        id: 29,
        title: 'iPhone 14 128GB',
        price: 3350.0,
        poster: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: 'Lacrado'
    },{
        id: 30,
        title: 'iPhone 14 Pro 256GB',
        price: 4319.0,
        poster: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$',
        condition: 'Lacrado'
    },
    { 
        id: 31,
        title: 'iPhone 14 Pro Max 256GB',
        price: 4850.0,
        poster: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '256GB',
        payment: 'ou até 12x de R$',
        condition: 'Lacrado'
    },{
        id: 32,
        title: 'iPhone 14 Pro Max 128GB',
        price: 4500.0,
        poster: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        color: '',
        size: '128GB',
        payment: 'ou até 12x de R$',
        condition: 'Lacrado'
    },
    {
        id: 33,
        title: 'MacBook Air M1 256GB 8GB de ram 13P',
        price: 3510.0,
        poster: '/src/images/m1256.png',
        link: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '256GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Lacrado',
        shippingMethod: 'Importado',
        payment: 'ou até 12x de R$ ',
        ram: '8GB',
        polegadas: '13P',
        title2: 'MacBook M1'
    },
    
    {
        id: 34,
        title: 'MacBook Air M2 256GB 8Gb de ram 13P',
        price: 4683.0,
        poster: '/src/images/m2256.png',
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
        title2: 'MacBook M2'
    },
    {
        id: 35,
        title: 'MacBook Air M2 256GB 8GB de ram 15P',
        price: 5250.0,
        poster: '/src/images/m215p.png',
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
        title2: 'MacBook Pro'
    },
    {
        id: 36,
        title: 'MacBook Air M1 1TB 16GB de ram',
        price: 8220.0,
        poster:'',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '1TB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Novo',
        shippingMethod: 'Importado',
        payment: 'ou até 12x de R$ ',
        ram: '16GB',
        polegadas: '14P',
        year: '2021'
    },
    {
        id: 37,
        title: 'MacBook Air M1 1TB 16GB de ram',
        price: 9200.0,
        poster:'/src/images/iphone14amarelo128gb.jpeg',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '44mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Novo',
        shippingMethod: 'Importado',
        payment: 'ou até 12x de R$ ',
        ram: '16GB',
        polegadas: '14P',
        year: '2021'
    },
    {
        id: 38,
        title: 'Apple Watch Série 6 40mm',
        price: 1050.0,
        poster: '/src/images/applewatch1.png',
        link: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        size: '40mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Semi Novo',
        payment: 'ou até 12x de R$ ',
        title2: 'Apple Watch S6'
    },
    {
        id: 39,
        title: 'Apple Watch Série 7 41mm',
        price: 1200.0,
        poster:'/src/images/applewatch3.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '41mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Semi Novo',
        payment: 'ou até 12x de R$ ',
        title2: 'Apple Watch S7'
    },
    {
        id: 40,
        title: 'Apple Watch Série 8 41mm',
        price: 1520.0,
        poster:'/src/images/applewatch4.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '41mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Novo',
        payment: 'ou até 12x de R$ ',
        title2: 'Apple Watch S8'
    },
    {
        id: 41,
        title: 'Apple Watch Série 7 45mm',
        price: 1275.0,
        poster:'',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '45mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Semi Novo',
        payment: 'ou até 12x de R$ '
    },
    {
        id: 42,
        title: 'Apple Watch Série S5 44mm',
        price: 900.0,
        poster:'/src/images/iphone14amarelo128gb.jpeg',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '44mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Semi Novo',
        payment: 'ou até 12x de R$ '
    },
    {
        id: 43,
        title: 'Apple Watch Série 6 44mm',
        price: 1100.0,
        poster: '',
        link: '',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        color: '',
        size: '44mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Semi Novo',
        payment: 'ou até 12x de R$ '
    },
    {
        id: 44,
        title: 'Apple Watch Série 8 45mm',
        price: 1720.0,
        poster:'',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '45mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Novo',
        payment: 'ou até 12x de R$ '
    },
    {
        id: 45,
        title: 'Apple Watch Série 8 45mm Midnight',
        price: 1850.0,
        poster:'',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '45mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Novo',
        payment: 'ou até 12x de R$ '
    },
    {
        id: 46,
        title: 'Apple Watch Ultra 49mm',
        price: 3360.0,
        poster:'',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        size: '49mm',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        condition: 'Novo',
        payment: 'ou até 12x de R$ '
    },
    {
        id: 47,
        title: 'Apple Pencil 2',
        price: 500.0,
        poster:'',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        payment: 'ou até 12x de R$ '
    },
    {
        id: 48,
        title: 'Apple Pencil 1',
        price: 450.0,
        poster:'',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        payment: 'ou até 12x de R$ '
    },
    {
        id: 49,
        title: 'Apple Pencil 1 C/Adaptador',
        price: 495.0,
        poster:'',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        payment: 'ou até 12x de R$ '
    },
    {
        id: 50,
        title: 'iPad 9 64GB',
        price: 1380.0,
        poster:'/src/images/ipad9.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        size: '64GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        payment: 'ou até 12x de R$ ',
        title2: 'iPad 9'
    },
    {
        id: 51,
        title: 'iPad 10 64GB',
        price: 2010.0,
        poster:'/src/images/ipad10.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        size: '64GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        payment: 'ou até 12x de R$ ',
        title2: 'iPad 10'
    },
    {
        id: 52,
        title: 'iPad Pro 12.9 128GB M2',
        price: 4420.0,
        poster:'/src/images/ipadair64gb.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        size: '128GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        payment: 'ou até 12x de R$ ',
        title2: 'iPad Pro'
    },
    {
        id: 53,
        title: 'iPad 10 256GB Wi-Fi + Celular',
        price: 3395.0,
        poster:'',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        size: '256GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        payment: 'ou até 12x de R$ '
    },
    {
        id: 54,
        title: 'iPad 11 Pro 128GB Wi-FI + Celular',
        price: 4600.0,
        poster:'',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        size: '128GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        payment: 'ou até 12x de R$ '
    },
    {
        id: 55,
        title: 'iPad 10 256GB',
        price: 2465.0,
        poster: '/src/images/ipad10256.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        size: '256GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        payment: 'ou até 12x de R$ ',
    },
    
    {
        id: 56,
        title: 'iPad Pro 12.9 256GB M2',
        price: 4850.0,
        poster:'',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        size: '256GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        payment: 'ou até 12x de R$ '
    },
    {
        id: 57,
        title: 'AirPods Pro',
        price: 500.0,
        poster:'/src/images/airpodspro.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        size: '128GB',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        payment: 'ou até 12x de R$ ',
        title2: 'AirPods Pro'
    },
    {
        id: 58,
        title: 'AirPods 2ª geração',
        price: 500.0,
        poster:'/src/images/airpods2.png',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        size: '',
        color: ['Preto', 'Branco', 'Prateado', 'Dourado', 'Azul'],
        payment: 'ou até 12x de R$ ',
        title2: 'AirPods 2ª geração'
    },
    {
        id: 59,
        title: 'Apple Pencil 2',
        price: 500.0,
        poster:'',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        payment: 'ou até 12x de R$ '
    },
    {
        id: 60,
        title: 'Apple Pencil 1',
        price: 450.0,
        poster:'',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        payment: 'ou até 12x de R$ '
    },
    {
        id: 61,
        title: 'Apple Pencil 1 C/Adaptador',
        price: 495.0,
        poster:'',
        star: '<i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i><i class="fa-solid fa-star" style="color: #e6d200;"></i>',
        link: '',
        condition: 'Novo',
        payment: 'ou até 12x de R$ '
    },

]



const cardsWrapper = document.getElementById("cardsWrapper");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const cardWidth = 320; // Largura de cada card
const cardsPerPage = 3; // Quantidade de cards exibidos por página
let currentPage = 0;

function renderCards() {
    cardsWrapper.innerHTML = "";
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    products.slice(startIndex, endIndex).forEach((product) => {
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
        cardsWrapper.appendChild(card);
    });

    prevButton.disabled = currentPage === 0;
    nextButton.disabled = endIndex >= products.length;
}

prevButton.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        renderCards();
    }
});

nextButton.addEventListener("click", () => {
    const startIndex = currentPage * cardsPerPage;
    if (startIndex + cardsPerPage < products.length) {
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

function renderCards2() {
    cardsWrapper2.innerHTML = "";
    const startIndex = currentPage2 * cardsPerPage2;
    const endIndex = startIndex + cardsPerPage2;

    products.slice(startIndex, endIndex).forEach((product) => {
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
        cardsWrapper2.appendChild(card);
    });

    prevButton2.disabled = currentPage2 === 0;
    nextButton2.disabled = endIndex >= products.length;
}

prevButton2.addEventListener("click", () => {
    if (currentPage2 > 0) {
        currentPage2--;
        renderCards2();
    }
});

nextButton2.addEventListener("click", () => {
    const startIndex = currentPage2 * cardsPerPage2;
    if (startIndex + cardsPerPage2 < products.length) {
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

function renderCards3() {
    cardsWrapper3.innerHTML = "";
    const startIndex = currentPage3 * cardsPerPage3;
    const endIndex = startIndex + cardsPerPage3;

    products.slice(startIndex, endIndex).forEach((product) => {
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
    });

    prevButton3.disabled = currentPage3 === 0;
    nextButton3.disabled = endIndex >= products.length;
}

prevButton3.addEventListener("click", () => {
    if (currentPage3 > 0) {
        currentPage3--;
        renderCards3();
    }
});

nextButton3.addEventListener("click", () => {
    const startIndex = currentPage3 * cardsPerPage3;
    if (startIndex + cardsPerPage3 < products.length) {
        currentPage3++;
        renderCards3();
    }
});

// Inicialização
renderCards3();
