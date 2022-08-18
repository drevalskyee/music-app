const { Router } = require('express')
const express = require('express')
const { uuid } = require('uuidv4');
const router = Router();

router.get('/', (req, res) => {
    const ListenAgainData = [
        {
            artist: 'Ella Fitzgerald',
            songName: 'Yesterdays',
            album: 'Easily Stop Time',
            cover: 'https://lh3.googleusercontent.com/DA27jWqzF3LHk7KZ4jCzxtXIl0DH_Pqy4QvsHTna0UPW9HOVePP-Ght3SI_ReAiHsXkmDfuVuwG7mG2n=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/ella-fitzgerald/yesterdays/ella-fitzgerald-yesterdays.mp3',
            id: uuid(),
        },
        {
            artist: 'The Weeknd',
            songName: "Can't Feel My Face",
            album: 'Beauty Behind The Madness',
            cover: 'https://lh3.googleusercontent.com/RNsC4IIArffVIpusLyonzKv_ijRbLmZYXkrQtKNrtLomjWr_sGnvPoDRoNSSDzq9F_ax-TOFmxuYS6hMRg=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/the-weeknd/cant-feel-my-face/the-weeknd-cant-feel-my-face.mp3',
            id: uuid(),
        },
        {
            artist: 'Flume',
            songName: 'Quirk',
            album: 'Skin Companion EP I',
            cover: 'https://lh3.googleusercontent.com/eobReshzAC0mZn1K_HfWbR83Dt1474QGueqCF3TZOwizBEMNEbLBEROSqaj-tlfuEVqSp4os6bq3nHg=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/flume/quirk/flume-quirk.mp3',
            id: uuid(),
        },
        {
            artist: 'Pendulum',
            songName: 'Voodoo People',
            album: 'Voodoo People / Out of Space',
            cover: 'https://lh3.googleusercontent.com/7xoKQBgt8ix8ykngzAVQfoehEdHJGcDA_QQpvnPck3qey4hq7Lgp0nnx00IFTKsjVNwDp0TqxHbDvNT1=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/pendulum/voodoo-people-pendulum-remix/pendulum-voodoo-people-pendulum-remix.mp3',
            id: uuid(),
        },
        {
            artist: 'sadtoi, Relyae',
            songName: 'Ending',
            album: 'Ending',
            cover: 'https://chillhop.com/wp-content/uploads/2022/01/0ac63dcdc4e16e6bb979f6ea2c9d0a394ee9e386-1024x1024.jpg',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=28969',
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

    ]

    res.json(ListenAgainData)
})

module.exports = router;