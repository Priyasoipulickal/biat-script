define(['pipAPI', 'pipScorer'], function(APIConstructor, Scorer) {
  var API = new APIConstructor();

  return {
    category1: {
      name: 'Indian Names',
      title: {
        media: { word: 'Indian Names' },
        css: { color: '#31b404', 'font-size': '1.8em' },
        height: 4
      },
      stimulusMedia: [
        { word: 'Priya' },
        { word: 'Arjun' },
        { word: 'Neha' },
        { word: 'Rohit' },
        { word: 'Anjali' },
        { word: 'Vikram' }
      ],
      stimulusCss: { color: '#31b404', 'font-size': '2em' }
    },
    category2: {
      name: 'White Names',
      title: {
        media: { word: 'White Names' },
        css: { color: '#31b404', 'font-size': '1.8em' },
        height: 4
      },
      stimulusMedia: [
        { word: 'Emily' },
        { word: 'John' },
        { word: 'Sarah' },
        { word: 'Michael' },
        { word: 'Jessica' },
        { word: 'David' }
      ],
      stimulusCss: { color: '#31b404', 'font-size': '2em' }
    },
    attribute1: {
      name: 'Good',
      title: {
        media: { word: 'Good' },
        css: { color: '#0000FF', 'font-size': '1.8em' },
        height: 4
      },
      stimulusMedia: [
        { word: 'Joy' },
        { word: 'Love' },
        { word: 'Peace' },
        { word: 'Wonderful' },
        { word: 'Delight' },
        { word: 'Happy' }
      ],
      stimulusCss: { color: '#0000FF', 'font-size': '2em' }
    },
    attribute2: {
      name: 'Bad',
      title: {
        media: { word: 'Bad' },
        css: { color: '#0000FF', 'font-size': '1.8em' },
        height: 4
      },
      stimulusMedia: [
        { word: 'Hate' },
        { word: 'Evil' },
        { word: 'Pain' },
        { word: 'Horrible' },
        { word: 'Disgust' },
        { word: 'Nasty' }
      ],
      stimulusCss: { color: '#0000FF', 'font-size': '2em' }
    },
    base_url: {
      image: ''
    },
    blocks: {
      nMiniBlocks: 5,
      nTrialsPerMiniBlock: 20,
      nPracticeBlockTrials: 20
    },
    instructions: {
      firstBlock: {
        title: 'Part 1 of 2',
        text: 'Press "E" for items that belong to the category "Indian Names" or "Good". Press "I" for items that belong to the category "White Names" or "Bad".'
      },
      secondBlock: {
        title: 'Part 2 of 2',
        text: 'Press "E" for items that belong to the category "White Names" or "Good". Press "I" for items that belong to the category "Indian Names" or "Bad".'
      }
    }
  };
});
