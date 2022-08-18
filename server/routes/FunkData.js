const { Router } = require('express')
const express = require('express')
const { uuid } = require('uuidv4');
const router = Router();

router.get('/', (req, res) => {
    const FunkData = [
        {
            artist: 'Maceo Parker',
            songName: 'Uptown Up',
            album: 'Funk Overload',
            cover: 'https://lh3.googleusercontent.com/TuWhIclLntEF_xdKp3v-Nv8XEBlflGIcYdIvL9jlekNSe9E5hOfPlgArlHK_HY-ZXPWea_P0CTJw7Fs=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/maceo-parker/uptown-up/maceo-parker-uptown-up.mp3',
            id: uuid(),
        },
        {
            artist: 'George Benson',
            songName: 'The Ghetto',
            album: 'Absolute Benson',
            cover: 'https://lh3.googleusercontent.com/lDSIsqkDskSFJjfzcHh_Ned2qDYCPvFYE8ZVWxICEyzVXaDT7xd7Mda20TusPDvxwQ0GclkXWqI7SyPEpA=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/george-benson/the-ghetto/george-benson-the-ghetto.mp3',
            id: uuid(),
        },
        {
            artist: 'Earth Wind & Fire',
            songName: 'You',
            album: 'Faces',
            cover: 'https://lh3.googleusercontent.com/jGwTc3eaYqe3GzQZCfLHOt2PYjurvmbAsfwRuNaBxcAs-RBR5kwLjdLgJEeKdT993Dw_aV8g909X-Tbj=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/earth-wind-and-fire/you/earth-wind-and-fire-you.mp3',
            id: uuid(),
        },
        {
            artist: 'Bee Gees',
            songName: 'Reaching Out',
            album: 'Spirits Having Flown',
            cover: 'https://lh3.googleusercontent.com/ZVNkzevhFbuPg__RM09pEMWG4qO0e_krtR8cRK1LeoEI3oOIo32D9qIb6zz7B-bTSNdn2bT_Mv6EGwEh-g=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/bee-gees/reaching-out/bee-gees-reaching-out.mp3',
            id: uuid(),
        },
    ]

    res.json(FunkData)
})

module.exports = router;