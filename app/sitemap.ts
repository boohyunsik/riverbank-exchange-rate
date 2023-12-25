import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://exchange.riverbank.world',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        }
    ]
}