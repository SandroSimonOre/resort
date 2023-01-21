const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000/' : 'https://resort-eight.vercel.app/';

export const mongoDbUri = process.env.MONGODB_URI

export const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY