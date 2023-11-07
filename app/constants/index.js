import {
  property1,
  property2,
  property3,
  property4,
  property5,
  property6,
  property7,
  property8,
  property9,
  property10,
  property11,
  property12,
  facebook,
  twitter,
  instagram,
} from '../assets';

export const navmenu = [
  { title: 'Communities', href: '/Communities' },
  { title: 'About Us', href: '/Aboutus' },
  { title: 'Gallery', href: '/Gallery' },
  { title: 'Blog', href: '/Blog' },
  { title: 'Contact Us', href: '/Contact us' },
  { title: 'Management', href: 'Management' },
];
export const house = [
  {
    name: 'Green Oaks',
    desc: 'At Sites & Lifestyle, we redefine the very essence of excellence in home ownership. We dont just sell properties; we craft lifestyles.',
    image: property1,
  },
  {
    name: 'Belvedere',
    desc: 'At Sites & Lifestyle, we redefine the very essence of excellence in home ownership. We dont just sell properties; we craft lifestyles.',
    image: property2,
  },
  {
    name: 'Ivywood Manor',
    desc: 'At Sites & Lifestyle, we redefine the very essence of excellence in home ownership. We dont just sell properties; we craft lifestyles.',
    image: property3,
  },
];
export const images = [
  { images: property4 },
  { images: property5 },
  { images: property6 },
  { images: property7 },
];
export const community = [
  { image: property8, HouseName: 'Regal Haven', Location: 'Abuja' },
  { image: property9, HouseName: 'Ivywood Manor', Location: 'Abuja' },
  { image: property10, HouseName: 'Noblewood Ridge', Location: 'Abuja' },
  { image: property11, HouseName: 'Azure Meadows', Location: 'Abuja' },
  { image: property12, HouseName: 'Edenview', Location: 'Abuja' },
];

export const FooterLink = [
  {
    title: 'Header Text',
    links: [
      { name: 'Button', link: '/' },
      { name: 'Button', link: '/' },
      { name: 'Button', link: '/' },
      { name: 'Button', link: '/' },
      { name: 'Button', link: '/' },
    ],
  },
  {
    title: 'Header Text',
    links: [
      { name: 'Button', link: '/' },
      { name: 'Button', link: '/' },
      { name: 'Button', link: '/' },
      { name: 'Button', link: '/' },
      { name: 'Button', link: '/' },
    ],
  },
  {
    title: 'Header Text',
    links: [
      { name: 'Button', link: '/' },
      { name: 'Button', link: '/' },
      { name: 'Button', link: '/' },
      { name: 'Button', link: '/' },
      { name: 'Button', link: '/' },
    ],
  },
];
export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' },
];

export const PropertyProps = [
  {
    title: 'property',
    option: [{ values: 'land' }, { values: 'house' }],
  },
  {
    title: 'Community',
    option: [{ values: 'Urban' }, { values: 'Rural' }],
  },
  {
    title: 'Price Range',
    option: [
      { values: '100000 - 4000000' },
      { values: '4000000 - 8000000' },
      { values: '8000000 - 12000000' },
      { values: '12000000 - 16000000' },
      { values: '16000000 - 20000000' },
      { values: '20000000 - 24000000' },
      { values: '24000000 - 28000000' },
      { values: '28000000 - 32000000' },
      { values: '32000000 - 36000000' },
      { values: '36000000 - 40000000' },
    ],
  },
  // {
  //     id:4, name: "Bedrooms", property: {
  //         item1: 2,
  //         item2:4,
  //         item3: 6,
  //         item4: 8
  //     },
  // },
  {
    title: 'Area',
    option: [
      { values: '1500' },
      { values: '5000' },
      { values: '2500' },
      { values: '3200' },
      { values: '5300' },
      { values: '5500' },
      { values: '6500' },
      { values: '7000' },
      { values: '250' },
      { values: '355' },
      { values: '1225' },
      { values: '750' },
      { values: '875' },
      { values: '5600' },
      { values: '4500' },
      { values: '300' },
      { values: '1200' },
      { values: '2400' },
      { values: '3700' },
      { values: '5500' },
    ],
  },
  {
    title: 'Bedroom',
    option: [
      { values: '1' },
      { values: '2' },
      { values: '3' },
      { values: '4' },
      { values: '5' },
      { values: '6' },
    ],
  },
  {
    title: 'Location',
    option: [
      { values: 'Katampe' },
      { values: 'Kuje' },
      { values: 'Wuse' },
      { values: 'Zuba' },
      { values: 'Gwagwalada' },
      { values: 'Lugbe' },
      { values: 'Kubwa' },
      { values: 'Wuye' },
      { values: 'Maitiama' },
      { values: 'Lugbe' },
      { values: 'Garki' },
      { values: 'Duste' },
      { values: 'Asokoro' },
      { values: 'Jabi' },
    ],
  },
];
