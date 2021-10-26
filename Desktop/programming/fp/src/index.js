import fetch from 'node-fetch';

fetch('https://raw.githubusercontent.com/cmda-tt/course-21-22/main/tech-track-dataset.json')
    .then(parseResponse)
    .then(data => {
        const keys = [
            'Als je later een auto zou kopen, van welk merk zou deze dan zijn?',
            'Wat is je favoriete soort huisdier?',
        ];

        return data.map(a => ({ auto: a[keys[0]], animal: a[keys[1]] }));
    })
    .then(data => console.log(data));

function parseResponse(res) {
    return res.json();
}