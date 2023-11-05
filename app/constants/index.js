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
  { title: 'Contact Us', href: '/Contactus' },
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

export const propertyProps = [
  {
    title: 'property',
    option: [{ item1: 'land' }, { item2: 'house' }],
  },
  {
    title: 'Community',
    option: [{ item1: 'Urban' }, { item2: 'Rural' }],
  },
  {
    title: 'Price Range',
    option: [
      { item1: '100000 - 4000000' },
      { item2: '4000000 - 8000000' },
      { item3: '8000000 - 12000000' },
      { item4: '12000000 - 16000000' },
      { item5: '16000000 - 20000000' },
      { item6: '20000000 - 24000000' },
      { item7: '24000000 - 28000000' },
      { item8: '28000000 - 32000000' },
      { item9: '32000000 -36000000' },
      { item10: '36000000 -40000000' },
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
      { value: 1500 },
      { value: 5000 },
      { value: 2500 },
      { value: 3200 },
      { value: 5300 },
      { value: 5500 },
      { value: 6500 },
      { value: 7000 },
      { value: 250 },
      { value: 355 },
      { value: 1225 },
      { value: 750 },
      { value: 875 },
      { value: 5600 },
      { value: 4500 },
      { value: 300 },
      { value: 1200 },
      { value: 2400 },
      { value: 3700 },
      { value: 5500 },
    ],
  },
  {
    title: 'Bedroom',
    option: [
      { values: 1 },
      { values: 2 },
      { values: 3 },
      { values: 4 },
      { values: 5 },
      { values: 6 },
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
