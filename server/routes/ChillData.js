const { Router } = require('express')
const express = require('express')
const { uuid } = require('uuidv4');
const router = Router();

router.get('/', (req, res) => {
    const ChillData = [
        {
            artist: 'Molly McPhaul',
            songName: 'Embers',
            album: 'Field Studies Vol. 1',
            cover: 'https://chillhop.com/wp-content/uploads/2022/01/d7c0bd347f56540babd9dd85454b93a89df84a15-1024x1024.jpg',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=30135',
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
            artist: 'sadtoi, Relyae',
            songName: 'Ending',
            album: 'Ending',
            cover: 'https://chillhop.com/wp-content/uploads/2022/01/0ac63dcdc4e16e6bb979f6ea2c9d0a394ee9e386-1024x1024.jpg',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=28969',
            id: uuid(),
        },
    ]

    res.json(ChillData)
})

module.exports = router;