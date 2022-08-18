const { Router } = require('express')
const express = require('express')
const { uuid } = require('uuidv4');
const router = Router();

router.get('/', (req, res) => {
    const RecommendedData = [
        {
            artist: 'Tyler The Creator',
            songName: 'Yonkers',
            album: 'Goblin',
            cover: 'https://lh3.googleusercontent.com/BhsLJFdOUkym9kjasMXUjA3PClJeKi_uPki9_d5e9PygiDX4h4wBUJO1N4JEpjKTEEii2NS-jqCI024=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/tyler-the-creator/yonkers/tyler-the-creator-yonkers.mp3',
            id: uuid(),
        },
        {
            artist: 'J. Cole',
            songName: 'Wet Dreamz',
            album: '2014 Forest Hills Drive',
            cover: 'https://lh3.googleusercontent.com/kMrbZiHDjddAGv58UvL1T-I5ddCzUAAclrmIMaY3ty4-jAxHueE4pqJ-SX8o_ggXimkPMcsKxh9Ev45P9Q=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/j-cole/wet-dreamz/j-cole-wet-dreamz.mp3',
            id: uuid(),
        },
        {
            artist: 'Dua Lipa',
            songName: 'IDGAF',
            album: 'Dua Lipa (Deluxe)',
            cover: 'https://lh3.googleusercontent.com/57A2jLYJ6P6iSbuMrjNeV6N5CsjyBaMVwBBGRFiDFSzAdfglDQatdl0c5OZ-h4F1ord-IiAJfwekLxITrQ=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/dua-lipa/idgaf/dua-lipa-idgaf.mp3',
            id: uuid(),
        },
        {
            artist: 'Dua Lipa',
            songName: 'Hotter Than Hell',
            album: 'Dua Lipa (Deluxe)',
            cover: 'https://lh3.googleusercontent.com/57A2jLYJ6P6iSbuMrjNeV6N5CsjyBaMVwBBGRFiDFSzAdfglDQatdl0c5OZ-h4F1ord-IiAJfwekLxITrQ=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/dua-lipa/hotter-than-hell/dua-lipa-hotter-than-hell.mp3',
            id: uuid(),
        },
        {
            artist: 'Oh, Caroline',
            songName: 'Letters',
            album: 'Letters',
            cover: 'https://chillhop.com/wp-content/uploads/2021/12/754c5a4edf9d3bb338dfe89062760f22b7aaec70-1024x1024.jpg',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=30131',
            id: uuid(),
        },
        {
            artist: 'C Y G N',
            songName: 'Tropical Midnight',
            album: 'Tropical Midnight',
            cover: 'https://chillhop.com/wp-content/uploads/2022/02/7c943e75ba2e1017052e03444366c79445b43195-1024x1024.jpg',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=31516',
            id: uuid(),

        },
        {
            artist: 'Brainstorm',
            songName: 'Maybe',
            album: 'Online',
            cover: 'https://lh3.googleusercontent.com/7s4ODXjDHrkZka19Ut5TUGoRv8Qz0YcoOYJmH5hM0bJyNAwFziUDxwGMdQEjjeweOkvCuOHqaEGpak0=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/brainstorm/maybe/brainstorm-maybe.mp3',
            id: uuid(),
        },
        {
            artist: 'Один В Каное',
            songName: 'Човен',
            album: 'Один В Каное',
            cover: 'https://lh3.googleusercontent.com/chU_PRb7t_cfDhYSXdfKRvBGFkAGc5-GWn3zX1A05zFm-sPnjlrfbbXkjadm1bJ_Z5fLVmF-UHYgRqE=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/odin-v-kanoe/choven/odin-v-kanoe-choven.mp3',
            id: uuid(),
        },
        {
            artist: 'E. Fitzgerald & L. Armstrong',
            songName: 'Summertime',
            album: "Can't We Be Friends",
            cover: 'https://lh3.googleusercontent.com/KrH2nBsKhSouh-qB8QTKrQVsp1E8P3ExUfuxBUff1PhGDIewyRtKZoCuY3uh4NG_ZNJ7BvMuwIkGl56y=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/ella-fitzgerald/summertime/ella-fitzgerald-summertime.mp3',
            id: uuid(),
        },
        {
            artist: 'Louis Armstrong',
            songName: 'Hello Dolly',
            album: 'Hello, Dolly!',
            cover: 'https://lh3.googleusercontent.com/QSwp7Y279scCGsZfP_DcoemeaR1_-ttXLc9VNtJkwhKNwTrEHziV6euvDByU_d1fU_sHZgJRUU2T3Ifw=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/louis-armstrong/hello-dolly/louis-armstrong-hello-dolly.mp3',
            id: uuid(),
        },
        {
            artist: 'Ga',
            songName: 'Awake',
            album: 'The Journey Begins',
            cover: 'https://lh3.googleusercontent.com/RosGRuhXAFeLjmz0VIaqcbJbkP9bunEQrfthkEcN7gBOyrSIE2Bk3GT64SP9KgpTMLoDZsxbR4VR4ygT9A=w544-h544-l90-rj',
            audio: 'https://flora.at.ua/Ambient/18-Awake.mp3',
            id: uuid(),
        },
        {
            artist: 'Ga',
            songName: 'Before The Flood',
            album: 'The Journey Begins',
            cover: 'https://lh3.googleusercontent.com/RosGRuhXAFeLjmz0VIaqcbJbkP9bunEQrfthkEcN7gBOyrSIE2Bk3GT64SP9KgpTMLoDZsxbR4VR4ygT9A=w544-h544-l90-rj',
            audio: 'https://flora.at.ua/Ambient/08-Before_The_Flood.mp3',
            id: uuid(),
        },
        {
            artist: 'Blink-182',
            songName: "What's My Age Again?",
            album: 'Enema Of The State',
            cover: 'https://lh3.googleusercontent.com/gvJRhYmobGgvP6ehbkQK_y1zSSKKBDWdnxR9QTFQ3iMYvTXPP7jbkf8UAEN_u7RMAMDtIVcTpWHtQ6Jk4A=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/blink-182/whats-my-age-again/blink-182-whats-my-age-again.mp3',
            id: uuid(),
        },
        {
            artist: 'Sum 41',
            songName: 'Underclass Hero',
            album: 'Level II',
            cover: 'https://lh3.googleusercontent.com/9fGhOKmIpwIvgOcCwh0yTxwwPpOYvC_QjDqPVEM9agcm9jKWgTNh2nah-D3WVicerQZJzskK2mVptukDFg=w544-h544-s-l90-rj',
            audio: 'https://minty.club/artist/sum-41/underclass-hero/sum-41-underclass-hero.mp3',
            id: uuid(),
        },
    ]

    res.json(RecommendedData)
})

module.exports = router;