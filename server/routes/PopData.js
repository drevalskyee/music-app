const { Router } = require('express')
const express = require('express')
const {uuid} = require('uuidv4');
const router = Router();

router.get('/', (req, res) => {
    const popData = [
        {
            artist: 'Ed Sheeran',
            songName: 'Shape Of You',
            album: 'Shape Of You',
            cover: 'https://lh3.googleusercontent.com/TMbA3LImAL96nFkm5cI1x6LiEMvMbRg4IRxEeABd9qpXsfmwKhZHRD1MucnjG5QIsVEp0Vpn7h7M51FH3Q=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/ed-sheeran/shape-of-you/ed-sheeran-shape-of-you.mp3',
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
    ]
    res.json(popData)
})

module.exports = router;