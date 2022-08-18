const { Router } = require('express')
const express = require('express')
const { uuid } = require('uuidv4');
const router = Router();

router.get('/', (req, res) => {
    const JazzData = [
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
            artist: 'Ella Fitzgerald',
            songName: 'Overture',
            album: 'Porgy and Bess, Vol. 48',
            cover: 'https://lh3.googleusercontent.com/yHogem1xDKagRB7VhgiM4rYP9lFflEgvIhFyg0QULL6ueND5MfG_X81GUSvcTi5lLkD6WEI4uWWcT3mqYA=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/ella-fitzgerald/overture/ella-fitzgerald-overture.mp3',
            id: uuid(),
        },
        {
            artist: 'Ella Fitzgerald',
            songName: 'Yesterdays',
            album: 'Easily Stop Time',
            cover: 'https://lh3.googleusercontent.com/DA27jWqzF3LHk7KZ4jCzxtXIl0DH_Pqy4QvsHTna0UPW9HOVePP-Ght3SI_ReAiHsXkmDfuVuwG7mG2n=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/ella-fitzgerald/yesterdays/ella-fitzgerald-yesterdays.mp3',
            id: uuid(),
        },
    ]

    res.json(JazzData)
})

module.exports = router;