const { Router } = require('express')
const express = require('express')
const { uuid } = require('uuidv4');
const router = Router();

router.get('/', (req, res) => {
    const AmbientData = [
        {
            artist: 'Ga',
            songName: 'The Journey Begins',
            album: 'The Journey Begins',
            cover: 'https://lh3.googleusercontent.com/RosGRuhXAFeLjmz0VIaqcbJbkP9bunEQrfthkEcN7gBOyrSIE2Bk3GT64SP9KgpTMLoDZsxbR4VR4ygT9A=w544-h544-l90-rj',
            audio: 'https://flora.at.ua/Ambient/02-The_Journey_Begins.mp3',
            id: uuid(),
        },
        {
            artist: 'Ga',
            songName: 'Spirit Of Ashram',
            album: 'Ambientt',
            cover: 'https://lh3.googleusercontent.com/RosGRuhXAFeLjmz0VIaqcbJbkP9bunEQrfthkEcN7gBOyrSIE2Bk3GT64SP9KgpTMLoDZsxbR4VR4ygT9A=w544-h544-l90-rj',
            audio: 'https://flora.at.ua/Ambient/04-Spirit_Of_Ashram.mp3',
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
    ]

    res.json(AmbientData)
})

module.exports = router;