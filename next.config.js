module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/rate',
                permanent: true
            }
        ]
    }
}
