const { Router } = require('express')
const express = require('express')
const { uuid } = require('uuidv4');
const router = Router();

router.get('/', (req, res) => {
    const hipHopData = [
        {
            artist: 'Tyler The Creator',
            songName: 'Yonkers',
            album: 'Goblin',
            cover: 'https://lh3.googleusercontent.com/BhsLJFdOUkym9kjasMXUjA3PClJeKi_uPki9_d5e9PygiDX4h4wBUJO1N4JEpjKTEEii2NS-jqCI024=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/tyler-the-creator/yonkers/tyler-the-creator-yonkers.mp3',
            id: uuid(),
        },
        {
            artist: 'Tyler The Creator',
            songName: 'Temale',
            album: 'Wolf',
            cover: 'https://lh3.googleusercontent.com/u2nDwLpDigjlqdUMIZCI5PbvNqDCPOz9BAaRTRhozjoqFT0knuFYoV78pWlOh8iKCPQALCQikKg1YRkCOA=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/tyler-the-creator/wolf/tyler-the-creator-wolf.mp3',
            id: uuid(),
        },
        {
            artist: 'J. Cole',
            songName: 'Wet Dreamz',
            album: '2014 Forest Hills Drive',
            cover: 'https://lh3.googleusercontent.com/kMrbZiHDjddAGv58UvL1T-I5ddCzUAAclrmIMaY3ty4-jAxHueE4pqJ-SX8o_ggXimkPMcsKxh9Ev45P9Q=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/j-cole/wet-dreamz/j-cole-wet-dreamz.mp3',
            id: uuid(),
        },
        {
            artist: 'J. Cole',
            songName: 'MIDDLE CHILD',
            album: 'MIDDLE CHILD',
            cover: 'https://lh3.googleusercontent.com/6kBP8McJ7rEYaU-k8bt1x4EJ5Kuu4IbfAnTH_OrodNWpANKdVrMSTfTP2NcWTBIKuW2VBQEuwYB2Ggl4wg=w544-h544-l90-rj',
            audio: 'https://minty.club/artist/j-cole/middle-child/j-cole-middle-child.mp3',
            id: uuid(),
        },
    ]

    res.json(hipHopData)
})

module.exports = router;