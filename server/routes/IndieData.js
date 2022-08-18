const { Router } = require('express')
const express = require('express')
const { uuid } = require('uuidv4');
const router = Router();

router.get('/', (req, res) => {
    const IndieData = [
        {
            artist: 'The XX',
            songName: 'Intro',
            album: 'xx',
            cover: 'https://lh3.googleusercontent.com/uTUiDmMWmZTjtTWRP0VCGcN5chERWlG0HLkshJ37uHL8f4T6yBaknBYaHMaPQ3t4Ff5PwB8NZMkybOg=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/the-xx/vcr/the-xx-vcr.mp3',
            id: uuid(),
        },
        {
            artist: 'The XX',
            songName: 'Infinity',
            album: 'xx',
            cover: 'https://lh3.googleusercontent.com/uTUiDmMWmZTjtTWRP0VCGcN5chERWlG0HLkshJ37uHL8f4T6yBaknBYaHMaPQ3t4Ff5PwB8NZMkybOg=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/the-xx/infinity/the-xx-infinity.mp3',
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
    ]

    res.json(IndieData)
})

module.exports = router;