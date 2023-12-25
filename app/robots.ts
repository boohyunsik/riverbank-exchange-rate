import {MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://exchange.riverbank.world/sitemap.xml',
        host: 'https://exchange.riverbank.world'
    }
}