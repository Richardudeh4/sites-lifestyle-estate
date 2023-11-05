// import { copyrightSign } from "../assets/icons";
// import { footerLogo } from "../assets/images";
import { FooterLink, socialMedia } from "../constants";
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className='max-container pt-36'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            {/* <img
              src={footerLogo}
              alt='logo'
              width={150}
              height={46}
              className='m-0'
            /> */}
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-gray-400 md:text-white sm:max-w-sm'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis necessitatibus voluptatum animi temporibus, in placeat et, sunt fugiat ratione ullam alias nobis repellat doloremque molestias officiis dicta excepturi voluptates assumenda!
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 text-white md:text-black bg-gray-400 md:bg-white rounded-full'
                key={icon.alt}
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {FooterLink.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-gray-400 md:text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-gray-400 md:text-white hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start text-white items-center font-semibold gap-2 font-montserrat cursor-pointer'>
          {/* <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          /> */}
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer font-semibold text-white'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
