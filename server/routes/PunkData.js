const { Router } = require('express')
const express = require('express')
const { uuid } = require('uuidv4');
const router = Router();

router.get('/', (req, res) => {
    const PunkData = [
        {
            artist: 'The Misfits',
            songName: 'Scream',
            album: 'Famous Monsters',
            cover: 'https://lh3.googleusercontent.com/ORVvm40vkUHyyezBBgD0cNQ6VPC3y3EOg3IS6yE31m_57ILLytF4iYH-BxWYnHiahWjY4shZSMre7zw=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/the-misfits/scream/the-misfits-scream.mp3',
            id: uuid(),
        },
        {
            artist: 'Blink-182',
            songName: 'I Miss You',
            album: 'blink-182',
            cover: 'https://lh3.googleusercontent.com/U-8oKNdf77hwvVAt_NCqjfXpaXVK4QQw88RCc6O_pXQUCwDTTsNd4cVuqRkptSP3nZekU9lRusTgSy4Pig=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/blink-182/i-miss-you/blink-182-i-miss-you.mp3',
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

    res.json(PunkData)
})

module.exports = router;