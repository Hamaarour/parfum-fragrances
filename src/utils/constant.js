// Import your brand logos
import brand1 from '../assets/brands/armani.png'
import brand2 from '../assets/brands/Byredo.png'
import brand3 from '../assets/brands/chanel.png'
import brand4 from '../assets/brands/dior.png'
import brand5 from '../assets/brands/JoMalone.png'
import brand6 from '../assets/brands/Prada.png'
import brand7 from '../assets/brands/YvesSaintLaurent.png'

export const NAV_LINKS = [
  { title: 'Store', link: '/shop' },
  { title: 'Collection', link: '/collection' },
  {
    logo: true,
    src: '../assets/logo/logo_circle_white.png',
    alt: 'Logo',
    link: '/',
  },
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' },
]

export const STATS = [
  { id: 1, name: 'Perfumes Available', value: '500+' },
  { id: 2, name: 'Happy Customers', value: '10,000+' },
  { id: 3, name: 'Countries Shipped To', value: '50+' },
  { id: 4, name: 'Orders Processed', value: '20,000+' },
]

// Array of brand logos
export const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7]

// array with 4 images
//src:'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw0f71d334/images/beauty/0-HOME/WHAT-S-NEW/2024/SauvageBaccarat_2000x3000.jpg?sw=640'
// src: 'https://us.initioparfums.com/cdn/shop/files/MUSK-THERAPY2_LIFESTYLE_1700x2100_ce6aa78b-a475-40d5-b427-950d29a97188_800x.png?v=1700041148',
export const SHOW_IMAGES = [
  {
    id: 0,
    src: 'https://images.unsplash.com/photo-1698877577733-65ae7dee328c?q=80&w=1563&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Perfume',
  },
  {
    id: 1,
    text: ['perfume', 'JASMIN'],
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1681935703733-5e9df028a318?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Perfume',
  },
  {
    id: 3,
    text: 'This is a paragraph in div 2',
  },
  {
    id: 4,
    src: 'https://marionnaud.ma/cdn/shop/files/GA_2024_EA-SWY-EDT_SL_Digital-Ingredients_1x1_RVB-4000_1800x1800.png?v=1709896586',
    alt: 'Perfume',
  },
  {
    id: 5,
    text: 'This is a paragraph in div 3',
  },
]

export const PRODUCTS = [
  {
    id: 1,
    title: 'Jean Paul Gaultier - Le Beau Le Parfum - EDP -',
    images: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/5BHL6OB4zQspmztPZ5P7c05GhuFyrJ5WxSIOM3Gs_lg.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/5BHL6OB4zQspmztPZ5P7c05GhuFyrJ5WxSIOM3Gs_lg.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/5BHL6OB4zQspmztPZ5P7c05GhuFyrJ5WxSIOM3Gs_lg.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/5BHL6OB4zQspmztPZ5P7c05GhuFyrJ5WxSIOM3Gs_lg.jpeg',
    ],
    description:
      'This captivating fragrance is a delightful exploration of contrasts. It opens with a burst of sparkling citrus notes that invigorate the senses. The heart unfolds with a luxurious bouquet of fresh florals, creating a romantic and feminine aura. As the fragrance dries down, a warm embrace of amber and musk lingers, leaving a lasting impression of sophistication. This versatile perfume is perfect for daytime wear or special occasions, leaving you feeling confident and empowered',
    prices: { '2ml': 50, '5ml': 100, '10ml': 150 },
    quantities: { '2ml': 0, '5ml': 10, '10ml': 10 },
    category: 'men',
    bestSelling: true,
    dateOfCreation: '2024-07-11',
  },
  {
    id: 2,
    title: 'Valentino - Coral Fantasy - UOMO -',
    images: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/746aMIUyIIo6TmyifWDdV6VGrnZzjdTDuDSw0hY7_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/746aMIUyIIo6TmyifWDdV6VGrnZzjdTDuDSw0hY7_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/746aMIUyIIo6TmyifWDdV6VGrnZzjdTDuDSw0hY7_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/746aMIUyIIo6TmyifWDdV6VGrnZzjdTDuDSw0hY7_md.png',
    ],
    description:
      'This captivating fragrance is a delightful exploration of contrasts. It opens with a burst of sparkling citrus notes that invigorate the senses. The heart unfolds with a luxurious bouquet of fresh florals, creating a romantic and feminine aura. As the fragrance dries down, a warm embrace of amber and musk lingers, leaving a lasting impression of sophistication. This versatile perfume is perfect for daytime wear or special occasions, leaving you feeling confident and empowered',
    prices: { '2ml': 60, '5ml': 110, '10ml': 160 },
    quantities: { '2ml': 0, '5ml': 0, '10ml': 0 },
    category: 'women',
    bestSelling: true,
    dateOfCreation: '2024-07-11',
  },
  {
    id: 3,
    title: 'D&G - Light Blue Intense - Eau Intense ',
    images: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/aZeCG64jihqSBAG02vjP8f73CclzrppiDlX5TitS_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/aZeCG64jihqSBAG02vjP8f73CclzrppiDlX5TitS_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/aZeCG64jihqSBAG02vjP8f73CclzrppiDlX5TitS_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/aZeCG64jihqSBAG02vjP8f73CclzrppiDlX5TitS_md.jpeg',
    ],
    description:
      'This captivating fragrance is a delightful exploration of contrasts. It opens with a burst of sparkling citrus notes that invigorate the senses. The heart unfolds with a luxurious bouquet of fresh florals, creating a romantic and feminine aura. As the fragrance dries down, a warm embrace of amber and musk lingers, leaving a lasting impression of sophistication. This versatile perfume is perfect for daytime wear or special occasions, leaving you feeling confident and empowered',
    prices: { '2ml': 70, '5ml': 120, '10ml': 170 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
    category: 'men',
    bestSelling: false,
    dateOfCreation: '2024-07-11',
  },
  {
    id: 4,
    title: 'Viktor & Rolf - Spicebomb Extreme - EDP ',
    images: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/6oZQy09cRnuLApDWhoCnFpHw0sNOiCA8A5rBa7Cj_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/6oZQy09cRnuLApDWhoCnFpHw0sNOiCA8A5rBa7Cj_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/6oZQy09cRnuLApDWhoCnFpHw0sNOiCA8A5rBa7Cj_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/6oZQy09cRnuLApDWhoCnFpHw0sNOiCA8A5rBa7Cj_md.png',
    ],
    description:
      'This captivating fragrance is a delightful exploration of contrasts. It opens with a burst of sparkling citrus notes that invigorate the senses. The heart unfolds with a luxurious bouquet of fresh florals, creating a romantic and feminine aura. As the fragrance dries down, a warm embrace of amber and musk lingers, leaving a lasting impression of sophistication. This versatile perfume is perfect for daytime wear or special occasions, leaving you feeling confident and empowered',
    prices: { '2ml': 80, '5ml': 130, '10ml': 180 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
    category: 'women',
    bestSelling: false,
    dateOfCreation: '2023-07-11',
  },
  {
    id: 5,
    title: 'Emporio Armani - Stronger With You Absolutely ',
    images: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/IFXoQPTHP6P4XVBlqRECz8XcUR1T59XyvrLPA75P_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/IFXoQPTHP6P4XVBlqRECz8XcUR1T59XyvrLPA75P_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/IFXoQPTHP6P4XVBlqRECz8XcUR1T59XyvrLPA75P_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/IFXoQPTHP6P4XVBlqRECz8XcUR1T59XyvrLPA75P_md.png',
    ],
    description:
      'This captivating fragrance is a delightful exploration of contrasts. It opens with a burst of sparkling citrus notes that invigorate the senses. The heart unfolds with a luxurious bouquet of fresh florals, creating a romantic and feminine aura. As the fragrance dries down, a warm embrace of amber and musk lingers, leaving a lasting impression of sophistication. This versatile perfume is perfect for daytime wear or special occasions, leaving you feeling confident and empowered',
    prices: { '2ml': 90, '5ml': 140, '10ml': 190 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
    category: 'men',
    bestSelling: false,
    dateOfCreation: '2024-07-11',
  },
  {
    id: 6,
    title: 'Jean Paul Gaultier - Le Male Lover -',
    images: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/us8EJTVupKSJQYDvcQ1552DCkZGAAH7eD1nddOjU_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/us8EJTVupKSJQYDvcQ1552DCkZGAAH7eD1nddOjU_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/us8EJTVupKSJQYDvcQ1552DCkZGAAH7eD1nddOjU_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/us8EJTVupKSJQYDvcQ1552DCkZGAAH7eD1nddOjU_md.jpeg',
    ],
    description:
      'This captivating fragrance is a delightful exploration of contrasts. It opens with a burst of sparkling citrus notes that invigorate the senses. The heart unfolds with a luxurious bouquet of fresh florals, creating a romantic and feminine aura. As the fragrance dries down, a warm embrace of amber and musk lingers, leaving a lasting impression of sophistication. This versatile perfume is perfect for daytime wear or special occasions, leaving you feeling confident and empowered',
    prices: { '2ml': 100, '5ml': 150, '10ml': 200 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
    category: 'men',
    bestSelling: false,
    dateOfCreation: '2023-07-11',
  },
  {
    id: 7,
    title: 'Jean Paul Gaultier - Le Male Essence - EDP Intense ',
    images: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/EdRtTUQNyn9T7MF6XTyA8OLUNUitsD6fDYBgdjac_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/EdRtTUQNyn9T7MF6XTyA8OLUNUitsD6fDYBgdjac_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/EdRtTUQNyn9T7MF6XTyA8OLUNUitsD6fDYBgdjac_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/EdRtTUQNyn9T7MF6XTyA8OLUNUitsD6fDYBgdjac_md.png',
    ],
    description:
      'This captivating fragrance is a delightful exploration of contrasts. It opens with a burst of sparkling citrus notes that invigorate the senses. The heart unfolds with a luxurious bouquet of fresh florals, creating a romantic and feminine aura. As the fragrance dries down, a warm embrace of amber and musk lingers, leaving a lasting impression of sophistication. This versatile perfume is perfect for daytime wear or special occasions, leaving you feeling confident and empowered',
    prices: { '2ml': 110, '5ml': 160, '10ml': 210 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
    category: 'men',
    bestSelling: false,
    dateOfCreation: '2023-07-11',
  },
  {
    id: 8,
    title: 'Chanel - Allure Homme Sport - Eau Extreme',
    images: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/mooWKI89JK5mV5haEKKQTgT8vyZXp0jHkja3QrUN_lg.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/mooWKI89JK5mV5haEKKQTgT8vyZXp0jHkja3QrUN_lg.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/mooWKI89JK5mV5haEKKQTgT8vyZXp0jHkja3QrUN_lg.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/mooWKI89JK5mV5haEKKQTgT8vyZXp0jHkja3QrUN_lg.jpeg',
    ],
    description:
      'This captivating fragrance is a delightful exploration of contrasts. It opens with a burst of sparkling citrus notes that invigorate the senses. The heart unfolds with a luxurious bouquet of fresh florals, creating a romantic and feminine aura. As the fragrance dries down, a warm embrace of amber and musk lingers, leaving a lasting impression of sophistication. This versatile perfume is perfect for daytime wear or special occasions, leaving you feeling confident and empowered',
    prices: { '2ml': 120, '5ml': 170, '10ml': 220 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
    category: 'women',
    bestSelling: false,
    dateOfCreation: '2023-07-11',
  },
  {
    id: 9,
    title: 'Yves Saint Laurent - Y - EDP Intense',
    images: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/ZusHCIzNYZE3XdNwuy2SeVpwry0h9ohGv1A4NJpj_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/ZusHCIzNYZE3XdNwuy2SeVpwry0h9ohGv1A4NJpj_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/ZusHCIzNYZE3XdNwuy2SeVpwry0h9ohGv1A4NJpj_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/ZusHCIzNYZE3XdNwuy2SeVpwry0h9ohGv1A4NJpj_md.jpeg',
    ],
    description:
      'This captivating fragrance is a delightful exploration of contrasts. It opens with a burst of sparkling citrus notes that invigorate the senses. The heart unfolds with a luxurious bouquet of fresh florals, creating a romantic and feminine aura. As the fragrance dries down, a warm embrace of amber and musk lingers, leaving a lasting impression of sophistication. This versatile perfume is perfect for daytime wear or special occasions, leaving you feeling confident and empowered',
    prices: { '2ml': 130, '5ml': 180, '10ml': 230 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
    category: 'men',
    bestSelling: false,
    dateOfCreation: '2023-07-11',
  },
  {
    id: 10,
    title: 'Carolina Herrera - Bad Boy Extreme - EDP Extreme',
    images: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/nJIwPJagHxxyCs3zD2L0ncINQm3DgylpIThPEkxK_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/nJIwPJagHxxyCs3zD2L0ncINQm3DgylpIThPEkxK_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/nJIwPJagHxxyCs3zD2L0ncINQm3DgylpIThPEkxK_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/nJIwPJagHxxyCs3zD2L0ncINQm3DgylpIThPEkxK_md.jpeg',
    ],
    description:
      'This captivating fragrance is a delightful exploration of contrasts. It opens with a burst of sparkling citrus notes that invigorate the senses. The heart unfolds with a luxurious bouquet of fresh florals, creating a romantic and feminine aura. As the fragrance dries down, a warm embrace of amber and musk lingers, leaving a lasting impression of sophistication. This versatile perfume is perfect for daytime wear or special occasions, leaving you feeling confident and empowered',
    prices: { '2ml': 140, '5ml': 190, '10ml': 240 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
    category: 'women',
    bestSelling: false,
    dateOfCreation: '2023-07-11',
  },
  {
    id: 11,
    title: 'Valentino - Born In Roma Green Stravaganza',
    images: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/zdzSzUTVA4biopokDy9h92DFeSf6I97eyyRKyvTs_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/zdzSzUTVA4biopokDy9h92DFeSf6I97eyyRKyvTs_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/zdzSzUTVA4biopokDy9h92DFeSf6I97eyyRKyvTs_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/zdzSzUTVA4biopokDy9h92DFeSf6I97eyyRKyvTs_md.png',
    ],
    description:
      'This captivating fragrance is a delightful exploration of contrasts. It opens with a burst of sparkling citrus notes that invigorate the senses. The heart unfolds with a luxurious bouquet of fresh florals, creating a romantic and feminine aura. As the fragrance dries down, a warm embrace of amber and musk lingers, leaving a lasting impression of sophistication. This versatile perfume is perfect for daytime wear or special occasions, leaving you feeling confident and empowered',
    prices: { '2ml': 150, '5ml': 200, '10ml': 250 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
    category: 'men',
    bestSelling: false,
    dateOfCreation: '2023-07-11',
  },
  {
    id: 12,
    title: 'Emporio Armani - Stronger With You Tobacco',
    images: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/t2sVzFeNEMAmiH1LYT4MUOpkrw6j0V8dmgvsxwed.webp',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/t2sVzFeNEMAmiH1LYT4MUOpkrw6j0V8dmgvsxwed.webp',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/zdzSzUTVA4biopokDy9h92DFeSf6I97eyyRKyvTs_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/t2sVzFeNEMAmiH1LYT4MUOpkrw6j0V8dmgvsxwed.webp',
    ],
    description:
      'This captivating fragrance is a delightful exploration of contrasts. It opens with a burst of sparkling citrus notes that invigorate the senses. The heart unfolds with a luxurious bouquet of fresh florals, creating a romantic and feminine aura. As the fragrance dries down, a warm embrace of amber and musk lingers, leaving a lasting impression of sophistication. This versatile perfume is perfect for daytime wear or special occasions, leaving you feeling confident and empowered',
    prices: { '2ml': 160, '5ml': 210, '10ml': 260 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
    category: 'men',
    bestSelling: true,
    dateOfCreation: '2023-07-11',
  },
  {
    id: 13,
    title: 'Valentino - Born In Roma Coral Fantasy ',
    images: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/42xQ0leHo4JVuGuian7h8lvXeqPIW8zyfWWNXkdj_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/42xQ0leHo4JVuGuian7h8lvXeqPIW8zyfWWNXkdj_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/42xQ0leHo4JVuGuian7h8lvXeqPIW8zyfWWNXkdj_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/42xQ0leHo4JVuGuian7h8lvXeqPIW8zyfWWNXkdj_md.jpeg',
    ],
    description:
      'This captivating fragrance is a delightful exploration of contrasts. It opens with a burst of sparkling citrus notes that invigorate the senses. The heart unfolds with a luxurious bouquet of fresh florals, creating a romantic and feminine aura. As the fragrance dries down, a warm embrace of amber and musk lingers, leaving a lasting impression of sophistication. This versatile perfume is perfect for daytime wear or special occasions, leaving you feeling confident and empowered',
    prices: { '2ml': 170, '5ml': 220, '10ml': 270 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
    category: 'men',
    bestSelling: true,
    dateOfCreation: '2023-07-11',
  },
  {
    id: 14,
    title: 'Jean Paul Gaultier - Le Male Elixir -',
    images: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/XnV93RGyq4InQTjx3X10ZyxFvlCl1WAgcdINirx9_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/XnV93RGyq4InQTjx3X10ZyxFvlCl1WAgcdINirx9_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/XnV93RGyq4InQTjx3X10ZyxFvlCl1WAgcdINirx9_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/XnV93RGyq4InQTjx3X10ZyxFvlCl1WAgcdINirx9_md.png',
    ],
    description:
      'This captivating fragrance is a delightful exploration of contrasts. It opens with a burst of sparkling citrus notes that invigorate the senses. The heart unfolds with a luxurious bouquet of fresh florals, creating a romantic and feminine aura. As the fragrance dries down, a warm embrace of amber and musk lingers, leaving a lasting impression of sophistication. This versatile perfume is perfect for daytime wear or special occasions, leaving you feeling confident and empowered',
    prices: { '2ml': 180, '5ml': 230, '10ml': 280 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
    category: 'men',
    bestSelling: false,
    dateOfCreation: '2023-07-11',
  },
  {
    id: 15,
    title: 'TOM FORD Tobacco Vanille - Eau de parfum  ',
    images: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/9L6049goASIBqTeTSQExMksHqUieIE8dmHzlXIJB_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/9L6049goASIBqTeTSQExMksHqUieIE8dmHzlXIJB_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/9L6049goASIBqTeTSQExMksHqUieIE8dmHzlXIJB_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/9L6049goASIBqTeTSQExMksHqUieIE8dmHzlXIJB_md.jpeg',
    ],
    description:
      'This captivating fragrance is a delightful exploration of contrasts. It opens with a burst of sparkling citrus notes that invigorate the senses. The heart unfolds with a luxurious bouquet of fresh florals, creating a romantic and feminine aura. As the fragrance dries down, a warm embrace of amber and musk lingers, leaving a lasting impression of sophistication. This versatile perfume is perfect for daytime wear or special occasions, leaving you feeling confident and empowered',
    prices: { '2ml': 190, '5ml': 240, '10ml': 290 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
    category: 'men',
    bestSelling: false,
    dateOfCreation: '2023-07-11',
  },
  {
    id: 16,
    title: 'Versace Eros - Eau de Parfum -',
    images: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/E9ZGwuHoYGoxvS3uKrWhmbxUprRIMmdnxUL9koas_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/E9ZGwuHoYGoxvS3uKrWhmbxUprRIMmdnxUL9koas_md.jpeg',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/E9ZGwuHoYGoxvS3uKrWhmbxUprRIMmdnxUL9koas_md.jpeg',
    ],
    description:
      'This captivating fragrance is a delightful exploration of contrasts. It opens with a burst of sparkling citrus notes that invigorate the senses. The heart unfolds with a luxurious bouquet of fresh florals, creating a romantic and feminine aura. As the fragrance dries down, a warm embrace of amber and musk lingers, leaving a lasting impression of sophistication. This versatile perfume is perfect for daytime wear or special occasions, leaving you feeling confident and empowered',
    prices: { '2ml': 200, '5ml': 250, '10ml': 30 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
    category: 'women',
    bestSelling: false,
    dateOfCreation: '2023-07-11',
  },
]

export const ITEMS_PER_PAGE = 12 // 3 rows * 4 columns

export const COLLECTIONS = [
  {
    id: 1,
    name: 'Jean Paul Gaultier Pack Trio',
    price: 439,
    image: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/KQrvA3G4KTvF2r41i9l8UQ2L5YWJ40RkFKbhRhMO_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/oRvL9ASnhBYjsTLAbxfCSlSX2cQ8PNiJixGTbbWO_lg.png',
    ],
    description:
      'Experience the luxurious essence of Jean Paul Gaultier with this exclusive Pack Trio. Featuring three iconic fragrances, this set is perfect for any occasion.',
    brand: 'Jean Paul Gaultier',
    category: 'Fragrance',
    rating: 4.8,
    reviews: [
      { user: 'Alice', comment: 'Amazing scents, long-lasting!', rating: 5 },
      { user: 'Bob', comment: 'Great value for the price.', rating: 4 },
    ],
    availability: 'In stock',
  },
  {
    id: 2,
    name: 'Jean Paul Gaultier "Le Beau" Duo Pack',
    price: 295,
    image: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/sTHA17E4PRzYao6VUnn7sw3agffAbIbK6lZClyRU_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/oRvL9ASnhBYjsTLAbxfCSlSX2cQ8PNiJixGTbbWO_lg.png',
    ],
    description:
      'Experience the luxurious essence of Jean Paul Gaultier with this exclusive Pack Trio. Featuring three iconic fragrances, this set is perfect for any occasion.',
    brand: 'Jean Paul Gaultier',
    category: 'Fragrance',
    rating: 4.8,
    reviews: [
      { user: 'Alice', comment: 'Amazing scents, long-lasting!', rating: 5 },
      { user: 'Bob', comment: 'Great value for the price.', rating: 4 },
    ],
    availability: 'In stock',
  },
  {
    id: 3,
    name: "JParfums d'été Niche Duo Pack",
    price: 445,
    image: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/iRM1PHwZCvJkSEh8ZZ0NLgt9FRMIhOUg44dJusIl_lg.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/oRvL9ASnhBYjsTLAbxfCSlSX2cQ8PNiJixGTbbWO_lg.png',
    ],
    description:
      'Experience the luxurious essence of Jean Paul Gaultier with this exclusive Pack Trio. Featuring three iconic fragrances, this set is perfect for any occasion.',
    brand: 'Jean Paul Gaultier',
    category: 'Fragrance',
    rating: 5,
    reviews: [
      { user: 'Alice', comment: 'Amazing scents, long-lasting!', rating: 5 },
      { user: 'Bob', comment: 'Great value for the price.', rating: 4 },
    ],
    availability: 'In stock',
  },
  {
    id: 4,
    name: "Parfums d'été Niche Trio Pack",
    price: 695,
    image: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/Q5iNWyReEZV2CbiQtoaFN367Jkz1EjXy6LRL8DYg_lg.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/oRvL9ASnhBYjsTLAbxfCSlSX2cQ8PNiJixGTbbWO_lg.png',
    ],
    description:
      'Experience the luxurious essence of Jean Paul Gaultier with this exclusive Pack Trio. Featuring three iconic fragrances, this set is perfect for any occasion.',
    brand: 'Jean Paul Gaultier',
    category: 'Fragrance',
    rating: 5,
    reviews: [
      { user: 'Alice', comment: 'Amazing scents, long-lasting!', rating: 5 },
      { user: 'Bob', comment: 'Great value for the price.', rating: 4 },
    ],
    availability: 'In stock',
  },
  {
    id: 5,
    name: "Parfums d'été Niche Trio Pack II",
    price: 1049,
    image: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/EJUf45HAWXofpB3o4fxPwaxueqdoxLAwpPnCq3lG_lg.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/oRvL9ASnhBYjsTLAbxfCSlSX2cQ8PNiJixGTbbWO_lg.png',
    ],
    description:
      'Experience the luxurious essence of Jean Paul Gaultier with this exclusive Pack Trio. Featuring three iconic fragrances, this set is perfect for any occasion.',
    brand: 'Jean Paul Gaultier',
    category: 'Fragrance',
    rating: 5,
    reviews: [
      { user: 'Alice', comment: 'Amazing scents, long-lasting!', rating: 5 },
      { user: 'Bob', comment: 'Great value for the price.', rating: 4 },
    ],

    availability: 'Out of stock',
  },
  {
    id: 6,
    name: 'Héritage Aromatique Pack Trio',
    price: 1035,
    image: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/w22VgPPOr1JSYNkCTGUbaAeOEXgKBqnunPBizGr0_lg.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/oRvL9ASnhBYjsTLAbxfCSlSX2cQ8PNiJixGTbbWO_lg.png',
    ],
    description:
      'Experience the luxurious essence of Jean Paul Gaultier with this exclusive Pack Trio. Featuring three iconic fragrances, this set is perfect for any occasion.',
    brand: 'Jean Paul Gaultier',
    category: 'Fragrance',
    rating: 4.8,
    reviews: [
      { user: 'Alice', comment: 'Amazing scents, long-lasting!', rating: 5 },
      { user: 'Bob', comment: 'Great value for the price.', rating: 4 },
    ],
    availability: 'Out of stock',
  },
  {
    id: 7,
    name: 'Stronger With You Decantes Pack',
    price: 295,
    image: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/AGk9cOHO2g2ao6cEkefaGnldnYbF06CnHL2tkfy6_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/oRvL9ASnhBYjsTLAbxfCSlSX2cQ8PNiJixGTbbWO_lg.png',
    ],
    description:
      'Experience the luxurious essence of Jean Paul Gaultier with this exclusive Pack Trio. Featuring three iconic fragrances, this set is perfect for any occasion.',
    brand: 'Jean Paul Gaultier',
    category: 'Fragrance',
    rating: 4.8,
    reviews: [
      { user: 'Alice', comment: 'Amazing scents, long-lasting!', rating: 5 },
      { user: 'Bob', comment: 'Great value for the price.', rating: 4 },
    ],
    availability: 'In stock',
  },
  {
    id: 8,
    name: 'Valentino Uomo "Born in Roma" Decantes Pack',
    price: 280,
    image: [
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/8xih57dOvotYolHCCkUpuerJkbKtz4EDYvmsFAgK_md.png',
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/oRvL9ASnhBYjsTLAbxfCSlSX2cQ8PNiJixGTbbWO_lg.png',
    ],
    description:
      'Experience the luxurious essence of Jean Paul Gaultier with this exclusive Pack Trio. Featuring three iconic fragrances, this set is perfect for any occasion.',
    brand: 'Jean Paul Gaultier',
    category: 'Fragrance',
    rating: 4.8,
    reviews: [
      { user: 'Alice', comment: 'Amazing scents, long-lasting!', rating: 5 },
      { user: 'Bob', comment: 'Great value for the price.', rating: 4 },
    ],
    availability: 'Out of stock',
  },
]

export const DISCOUNTS = [
  {
    title: 'SUM2024',
    description: 'Get up to 50% off on selected items',
    percent: 50,
  },
  {
    title: 'SUM20',
    description: 'Get up to 50% off on selected items',
    percent: 20,
  },
  {
    title: 'SUM24',
    description: 'Get up to 50% off on selected items',
    percent: 10,
  },
]
