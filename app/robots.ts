import {MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://www.riverbank.world/sitemap.xml',
        host: 'https://www.riverbank.world'
    }
}