const { Router } = require('express')
const express = require('express')
const { uuid } = require('uuidv4');
const router = Router();

router.get('/', (req, res) => {
    const ElectronicData = [
        {
            artist: 'Flume',
            songName: 'Helix',
            album: 'Skin',
            cover: 'https://lh3.googleusercontent.com/2DNHWs27sSBzdOe36sGbFqe70cUo24Rrubxy02tbZPpVMeedFkmTkvl6kMkGL1cjDnRvGIS_SEUDK2xyDA=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/flume/helix/flume-helix.mp3',
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
            artist: 'Pendulum',
            songName: 'Showdown',
            album: 'In Silico',
            cover: 'https://lh3.googleusercontent.com/ym7yCMgv_WytNGNBg2LUrW6oYNsnZMzAQdgr2YHA_K0oEVO08CzcAZWkdp6qySWJIHFRKBCytCgT9a2kZQ=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/pendulum/showdown/pendulum-showdown.mp3',
            id: uuid(),
        },
    ]

    res.json(ElectronicData)
})

module.exports = router;