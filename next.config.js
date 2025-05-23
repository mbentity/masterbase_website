/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: 'export',
    async rewrites()
    {
        return [
            //minecraft map
            {
                source: '/minecraft/map',
                destination: 'http://map.vanilla.masterbase.team:8123'
            },
            {
                source: '/minecraft/:path*',
                destination: 'http://map.vanilla.masterbase.team:8123/:path*'
            }
        ]
    },
    async redirects()
    {
        return [
            //discord
            {
                source: '/links/discord',
                destination: 'https://discord.gg/FfRBaAnBgQ',
                permanent: false
            },
            //instagram
            {
                source: '/links/instagram',
                destination: 'https://www.instagram.com/masterbaseguild',
                permanent: false
            },
            //youtube
            {
                source: '/links/youtube',
                destination: 'https://www.youtube.com/@masterbaseguild?sub_confirmation=1',
                permanent: false
            },
            //yt music
            {
                source: '/links/ytmusic',
                destination: 'https://www.youtube.com/channel/UCqiEiiZuMIURK0dlXy9wXNA?sub_confirmation=1',
                permanent: false
            },
            //spotify
            {
                source: '/links/spotify',
                destination: 'https://open.spotify.com/artist/1p9qwSUsd20TMRulxrgaSG',
                permanent: false
            },
            //threads
            {
                source: '/links/threads',
                destination: 'https://threads.net/masterbaseguild',
                permanent: false
            },
            //tiktok
            {
                source: '/links/tiktok',
                destination: 'https://www.tiktok.com/@masterbaseguild',
                permanent: false
            },
            //twitch
            {
                source: '/links/twitch',
                destination: 'https://www.twitch.tv/masterbaseguild',
                permanent: false
            },
            //x
            {
                source: '/links/x',
                destination: 'https://x.com/masterbaseguild',
                permanent: false
            },
            //instagram reggio
            {
                source: '/links/igreggio',
                destination: 'https://www.instagram.com/masterbasereggio',
                permanent: false
            },
            //presubscription form
            {
                source: '/versary/presubscribe',
                destination: 'https://forms.gle/AXw33ugtWVtC2BxB9',
                permanent: false
            },
        ]
    },
}

module.exports = nextConfig