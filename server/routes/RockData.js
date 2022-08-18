const { Router } = require('express')
const express = require('express')
const { uuid } = require('uuidv4');
const router = Router();

router.get('/', (req, res) => {
    const RockData = [
        {
            artist: 'Led Zeppelin',
            songName: 'Heartbreaker',
            album: 'Led Zeppelin x Led Zeppelin',
            cover: 'https://lh3.googleusercontent.com/oCan9mGgcj9OGr2yKnIaESf-I6xj_G4k_pLHCGWZ3Ua9BhVNbtU-ND66hS9_zJmklUtPOd2aacqqJZ_oPA=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/led-zeppelin/heartbreaker/led-zeppelin-heartbreaker.mp3',
            id: uuid(),
        },
        {
            artist: 'Disturbed',
            songName: 'Decadence',
            album: 'Ten Thousand Fists',
            cover: 'https://lh3.googleusercontent.com/9KTDSKJGBEgYkxEJEQoQ0q-d18yvlJgJ1Da5PaJCEPAV0wWcPCXMwUGtQAXTP1m2qO-HMVwJGYuQ-osE=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/disturbed/decadence/disturbed-decadence.mp3',
            id: uuid(),
        },
        {
            artist: 'Idles',
            songName: 'Mother',
            album: 'Brutalism',
            cover: 'https://lh3.googleusercontent.com/18e_CSdi6DYLBHEB5G9c1hSSf3hTGGBlAiAJAN3gq8_XkhdGwxiLZdbJv8XZCflvd7eBCQBdGMWFS5z6=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/idles/mother/idles-mother.mp3',
            id: uuid(),
        },
        {
            artist: 'Idles',
            songName: 'Well Done',
            album: 'Brutalism',
            cover: 'https://lh3.googleusercontent.com/18e_CSdi6DYLBHEB5G9c1hSSf3hTGGBlAiAJAN3gq8_XkhdGwxiLZdbJv8XZCflvd7eBCQBdGMWFS5z6=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/idles/well-done/idles-well-done.mp3',
            id: uuid(),
        },
    ]

    res.json(RockData)
})

module.exports = router;