define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/qualtrics/qbiat.js'], function(APIConstructor, iatExtension) {
    var API = new APIConstructor();

    return iatExtension({
        practiceCategory1: {
            name: 'Fruits',
            title: {
                media: { word: 'Fruits' },
                css: { color: '#31b404', 'font-size': '1.8em' },
                height: 4,
                startStimulus: {
                    media: { word: 'Apple, Banana, Mango, Orange' },
                    css: { color: '#31b404', 'font-size': '1em' },
                    height: 2
                }
            },
            stimulusMedia: [
                { word: 'Apple' },
                { word: 'Banana' },
                { word: 'Mango' },
                { word: 'Orange' }
            ],
            stimulusCss: { color: '#31b404', 'font-size': '2em' }
        },
        practiceCategory2: {
            name: 'Vegetables',
            title: {
                media: { word: 'Vegetables' },
                css: { color: '#31b404', 'font-size': '1.8em' },
                height: 4,
                startStimulus: {
                    media: { word: 'Carrot, Potato, Spinach, Broccoli' },
                    css: { color: '#31b404', 'font-size': '1em' },
                    height: 2
                }
            },
            stimulusMedia: [
                { word: 'Carrot' },
                { word: 'Potato' },
                { word: 'Spinach' },
                { word: 'Broccoli' }
            ],
            stimulusCss: { color: '#31b404', 'font-size': '2em' }
        },
        categories: [
            {
                name: 'Indians',
                title: {
                    media: { word: 'Indians' },
                    css: { color: '#0000ff', 'font-size': '1.8em' },
                    height: 4,
                    startStimulus: {
                        media: { word: 'Arjun, Deepika, Rajesh, Kavya' },
                        css: { color: '#0000ff', 'font-size': '1em' },
                        height: 2
                    }
                },
                stimulusMedia: [
                    { word: 'Arjun' },
                    { word: 'Deepika' },
                    { word: 'Rajesh' },
                    { word: 'Kavya' },
                    { word: 'Vikram' },
                    { word: 'Ananya' }
                ],
                stimulusCss: { color: '#0000ff', 'font-size': '2em' }
            },
            {
                name: 'Whites',
                title: {
                    media: { word: 'Whites' },
                    css: { color: '#0000ff', 'font-size': '1.8em' },
                    height: 4,
                    startStimulus: {
                        media: { word: 'Tyler, Jessica, Brandon, Ashley' },
                        css: { color: '#0000ff', 'font-size': '1em' },
                        height: 2
                    }
                },
                stimulusMedia: [
                    { word: 'Tyler' },
                    { word: 'Jessica' },
                    { word: 'Brandon' },
                    { word: 'Ashley' },
                    { word: 'Connor' },
                    { word: 'Jennifer' }
                ],
                stimulusCss: { color: '#0000ff', 'font-size': '2em' }
            }
        ],
        attributes: [
            {
                name: 'Good',
                title: {
                    media: { word: 'Good' },
                    css: { color: '#green', 'font-size': '1.8em' },
                    height: 4,
                    startStimulus: {
                        media: { word: 'Joy, Love, Peace, Wonderful' },
                        css: { color: 'green', 'font-size': '1em' },
                        height: 2
                    }
                },
                stimulusMedia: [
                    { word: 'Joy' },
                    { word: 'Love' },
                    { word: 'Peace' },
                    { word: 'Pleasure' },
                    { word: 'Happy' },
                    { word: 'Wonderful' }
                ],
                stimulusCss: { color: 'green', 'font-size': '2em' }
            },
            {
                name: 'Bad',
                title: {
                    media: { word: 'Bad' },
                    css: { color: 'red', 'font-size': '1.8em' },
                    height: 4,
                    startStimulus: {
                        media: { word: 'Hate, Pain, Horrible, Evil' },
                        css: { color: 'red', 'font-size': '1em' },
                        height: 2
                    }
                },
                stimulusMedia: [
                    { word: 'Hate' },
                    { word: 'Pain' },
                    { word: 'Horrible' },
                    { word: 'Evil' },
                    { word: 'Awful' },
                    { word: 'Nasty' }
                ],
                stimulusCss: { color: 'red', 'font-size': '2em' }
            }
        ]
    });
});
