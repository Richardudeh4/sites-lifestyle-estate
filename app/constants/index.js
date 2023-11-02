import { house3, house5, house4, house1} from "../assets";
import { house2,house6,house7,house8, facebook, twitter, instagram} from "../assets";

export const navmenu = [
{title:'Communities', href: '/Communities'},
{title: 'About Us', href: '/Aboutus'},
{title: 'Gallery', href: '/Gallery'},
{title: 'Blog', href: '/Blog'},
{title: 'Contact Us', href: '/Contactus'},
{title:'Management' , href: 'Management'}
]
export const house = [
    {name:'Green Oaks', desc: 'At Sites & Lifestyle, we redefine the very essence of excellence in home ownership. We dont just sell properties; we craft lifestyles.', image : house5},
    {name: 'Belvedere', desc: 'At Sites & Lifestyle, we redefine the very essence of excellence in home ownership. We dont just sell properties; we craft lifestyles.', image: house8},
    {name: 'Ivywood Manor',desc: 'At Sites & Lifestyle, we redefine the very essence of excellence in home ownership. We dont just sell properties; we craft lifestyles.', image:house3}
]
export const images = [
    {images: house8},
    {images: house6},
    {images: house7},
    {images:house8}
]
export const community = [
    {image:house1, HouseName: "Regal Haven", Location: "Abuja"},
    {image:house2, HouseName: "Ivywood Manor", Location: "Abuja"},
    {image:house3, HouseName: "Noblewood Ridge", Location: "Abuja"},
    {image:house4, HouseName: "Azure Meadows", location:"Abuja"},
    {image:house5, HouseName: "Edenview", location: "Abuja"}
]

export const FooterLink = [
    {
        title: "Header Text",
        links: [
            { name: "Button", link: "/" },
            { name: "Button", link: "/" },
            { name: "Button", link: "/" },
            { name: "Button", link: "/" },
            { name: "Button", link: "/" }
        ],
    },
    {
        title: "Header Text",
        links: [
            { name: "Button", link: "/" },
            { name: "Button", link: "/" },
            { name: "Button", link: "/" },
            { name: "Button", link: "/" },
            { name: "Button", link: "/" },
        ],
    },
    {
        title: "Header Text",
        links: [
            { name: "Button", link: "/" },
            { name: "Button", link: "/" },
            { name: "Button", link: "/" },
            { name: "Button", link: "/" },
            { name: "Button", link: "/" },
        ]
    }
]
export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const propertyProps = [
    {id:1, name:"property",
    property: {
        item1:"land",
        item2:"house"
    },

},
    {id:2, name: "Community", property: {
        item1: "Urban",
        item2: "Rural"
    },
   
},
    {id:3, name: "Price Range", property: {
        item1: "100000 - 4000000",
        item2: "4000000 - 8000000",
        item3: "8000000 - 12000000",
        item4: "12000000 - 16000000",
        item5: "16000000 - 20000000",
        item6: "20000000 - 24000000",
        item7: "24000000 - 28000000",
        item8: "28000000 - 32000000",
        item9: "32000000 -36000000",
        item10: "36000000 -40000000"
    },
    
},
    {id:4, name: "Bedrooms", property: {
        item1: 2,
        item2:4,
        item3: 6,
        item4: 8
    },
},
{
    id:5,name: "Location", property: {
        item1: "Kuje",
        item2:"Gwagwalada",
        item3:"wuye"
    }
}
]