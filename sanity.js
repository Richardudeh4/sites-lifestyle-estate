import {createClient} from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';


export const config = {
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    token: process.env.SANITY_API_TOKEN,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-10-21", //learn more
    useCdn: process.env/MODE_ENV === "production",
};

// set up the client for fetching data 
export const sanityClient = createClient(config);


export const urlFor = (source) => createImageUrlBuilder(config).image(source);