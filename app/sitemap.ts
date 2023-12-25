import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://exchange.riverbank.world/rate',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: 'https://exchange.riverbank.world/map',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        }
    ]
}