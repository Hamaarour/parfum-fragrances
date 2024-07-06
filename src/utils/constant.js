// Import your brand logos
import brand1 from '../assets/brands/armani.png'
import brand2 from '../assets/brands/Byredo.png'
import brand3 from '../assets/brands/chanel.png'
import brand4 from '../assets/brands/dior.png'
import brand5 from '../assets/brands/JoMalone.png'
import brand6 from '../assets/brands/Prada.png'
import brand7 from '../assets/brands/YvesSaintLaurent.png'

export const NAV_LINKS = [
  { title: 'Shop', link: '/shop' },
  { title: 'Pacs', link: '/pacs' },
  { logo: true, src: '../assets/react.svg', alt: 'Logo', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' },
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
    text: ['perfume', 'jesmina'],
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
    title: 'Product 1',
    image:
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/5BHL6OB4zQspmztPZ5P7c05GhuFyrJ5WxSIOM3Gs_lg.jpeg',
    prices: { '2ml': 5, '5ml': 10, '10ml': 15 },
    quantities: { '2ml': 0, '5ml': 0, '10ml': 0 },
  },
  {
    id: 2,
    title: 'Product 2',
    image:
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/746aMIUyIIo6TmyifWDdV6VGrnZzjdTDuDSw0hY7_md.png',
    prices: { '2ml': 6, '5ml': 11, '10ml': 16 },
    quantities: { '2ml': 0, '5ml': 0, '10ml': 0 },
  },
  {
    id: 3,
    title: 'Product 3',
    image:
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/aZeCG64jihqSBAG02vjP8f73CclzrppiDlX5TitS_md.jpeg',
    prices: { '2ml': 7, '5ml': 12, '10ml': 17 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
  },
  {
    id: 4,
    title: 'Product 4',
    image:
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/Z6oAORWRDCUqlqCjk7VnOY1zfdRcQyQB1TDN8vdn.webp',
    prices: { '2ml': 8, '5ml': 13, '10ml': 18 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
  },
  {
    id: 5,
    title: 'Product 5',
    image:
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/IFXoQPTHP6P4XVBlqRECz8XcUR1T59XyvrLPA75P_md.png',
    prices: { '2ml': 9, '5ml': 14, '10ml': 19 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
  },
  {
    id: 6,
    title: 'Product 6',
    image:
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/us8EJTVupKSJQYDvcQ1552DCkZGAAH7eD1nddOjU_md.jpeg',
    prices: { '2ml': 10, '5ml': 15, '10ml': 20 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
  },
  {
    id: 7,
    title: 'Product 7',
    image:
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/EdRtTUQNyn9T7MF6XTyA8OLUNUitsD6fDYBgdjac_md.png',
    prices: { '2ml': 11, '5ml': 16, '10ml': 21 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
  },
  {
    id: 8,
    title: 'Product 8',
    image:
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/mooWKI89JK5mV5haEKKQTgT8vyZXp0jHkja3QrUN_lg.jpeg',
    prices: { '2ml': 12, '5ml': 17, '10ml': 22 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
  },
  {
    id: 9,
    title: 'Product 9',
    image:
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/ZusHCIzNYZE3XdNwuy2SeVpwry0h9ohGv1A4NJpj_md.jpeg',
    prices: { '2ml': 13, '5ml': 18, '10ml': 23 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
  },
  {
    id: 10,
    title: 'Product 10',
    image:
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/nJIwPJagHxxyCs3zD2L0ncINQm3DgylpIThPEkxK_md.jpeg',
    prices: { '2ml': 14, '5ml': 19, '10ml': 24 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
  },
  {
    id: 11,
    title: 'Product 11',
    image:
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/zdzSzUTVA4biopokDy9h92DFeSf6I97eyyRKyvTs_md.png',
    prices: { '2ml': 15, '5ml': 20, '10ml': 25 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
  },
  {
    id: 12,
    title: 'Product 12',
    image:
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/t2sVzFeNEMAmiH1LYT4MUOpkrw6j0V8dmgvsxwed.webp',
    prices: { '2ml': 16, '5ml': 21, '10ml': 26 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
  },
  {
    id: 13,
    title: 'Product 13',
    image:
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/42xQ0leHo4JVuGuian7h8lvXeqPIW8zyfWWNXkdj_md.jpeg',
    prices: { '2ml': 17, '5ml': 22, '10ml': 27 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
  },
  {
    id: 14,
    title: 'Product 14',
    image:
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/XnV93RGyq4InQTjx3X10ZyxFvlCl1WAgcdINirx9_md.png',
    prices: { '2ml': 18, '5ml': 23, '10ml': 28 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
  },
  {
    id: 15,
    title: 'Product 15',
    image:
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/9L6049goASIBqTeTSQExMksHqUieIE8dmHzlXIJB_md.jpeg',
    prices: { '2ml': 19, '5ml': 24, '10ml': 29 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
  },
  {
    id: 16,
    title: 'Product 16',
    image:
      'https://cdn.youcan.shop/stores/89d8685ac564a7fae4854ec4289572d6/products/E9ZGwuHoYGoxvS3uKrWhmbxUprRIMmdnxUL9koas_md.jpeg',
    prices: { '2ml': 20, '5ml': 25, '10ml': 30 },
    quantities: { '2ml': 10, '5ml': 5, '10ml': 2 },
  },
]

export const ITEMS_PER_PAGE = 12 // 3 rows * 4 columns
