define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/qualtrics/qbiat6.js'], function(APIConstructor, iatExtension){
  var API = new APIConstructor();

  return iatExtension({
    practiceCategory1 : {
      name : 'Mammals',
      title : {
        media : {word : 'Mammals'},
        css : {color:'#31b404','font-size':'1.8em'},
        height : 4,
        startStimulus : {
          media : {word : 'Dogs, Horses, Cows, Lions'},
          css : {color:'#31b404','font-size':'1em'},
          height : 2
        }
      },
      stimulusMedia : [
        {word : 'Dogs'},
        {word : 'Horses'},
        {word : 'Lions'},
        {word : 'Cows'}
      ],
      stimulusCss : {color:'#31b404','font-size':'2em'}
    },
    practiceCategory2 : {
      name : 'Birds',
      title : {
        media : {word : 'Birds'},
        css : {color:'#31b404','font-size':'1.8em'},
        height : 4,
        startStimulus : {
          media : {word : 'Pigeons, Swans, Crows, Ravens'},
          css : {color:'#31b404','font-size':'1em'},
          height : 2
        }
      },
      stimulusMedia : [
        {word : 'Pigeons'},
        {word : 'Swans'},
        {word : 'Crows'},
        {word : 'Ravens'}
      ],
      stimulusCss : {color:'#31b404','font-size':'2em'}
    },
    categories : [
      {
        name : 'Indians',
        title : {
          media : {word : 'Indians'},
          css : {color:'#31b404','font-size':'1.8em'},
          height : 4,
          startStimulus : {
            media : {word : 'Aarav, Vivaan, Aditya, Diya, Ananya, Aanya, Aarohi, Aditi'},
            css : {color:'#31b404','font-size':'1em'},
            height : 2
          }
        },
        stimulusMedia : [
          {word : 'Aarav'},
          {word : 'Vivaan'},
          {word : 'Aditya'},
          {word : 'Diya'},
          {word : 'Ananya'},
          {word : 'Aanya'},
          {word : 'Aarohi'},
          {word : 'Aditi'}
        ],
        stimulusCss : {color:'#31b404','font-size':'2em'}
      },
      {
        name : 'Whites',
        title : {
          media : {word : 'Whites'},
          css : {color:'#31b404','font-size':'1.8em'},
          height : 4,
          startStimulus : {
            media : {word : 'Todd, Neil, Geoffrey, Brett, Brendan, Matthew, Jay, Brad, Emily, Anne, Jill, Allison, Laurie, Sarah, Meredith, Carrie, Kristen'},
            css : {color:'#31b404','font-size':'1em'},
            height : 2
          }
        },
        stimulusMedia : [
          {word : 'Todd'},
          {word : 'Neil'},
          {word : 'Geoffrey'},
          {word : 'Brett'},
          {word : 'Brendan'},
          {word : 'Matthew'},
          {word : 'Jay'},
          {word : 'Brad'},
          {word : 'Emily'},
          {word : 'Anne'},
          {word : 'Jill'},
          {word : 'Allison'},
          {word : 'Laurie'},
          {word : 'Sarah'},
          {word : 'Meredith'},
          {word : 'Carrie'},
          {word : 'Kristen'}
        ],
        stimulusCss : {color:'#31b404','font-size':'2em'}
      }
    ],
    attributes : [
      {
        name : 'Competent',
        title : {
          media : {word : 'Competent'},
          css : {color:'#31b404','font-size':'1.8em'},
          height : 4,
          startStimulus : {
            media : {word : 'Competent, Productive, Capable, Efficient'},
            css : {color:'#31b404','font-size':'1em'},
            height : 2
          }
        },
        stimulusMedia : [
          {word : 'Competent'},
          {word : 'Productive'},
          {word : 'Capable'},
          {word : 'Efficient'}
        ],
        stimulusCss : {color:'#31b404','font-size':'2em'}
      },
      {
        name : 'Incompetent',
        title : {
          media : {word : 'Incompetent'},
          css : {color:'#31b404','font-size':'1.8em'},
          height : 4,
          startStimulus : {
            media : {word : 'Incompetent, Inadequate, Useless, Unskilled'},
            css : {color:'#31b404','font-size':'1em'},
            height : 2
          }
        },
        stimulusMedia : [
          {word : 'Incompetent'},
          {word : 'Inadequate'},
          {word : 'Useless'},
          {word : 'Unskilled'}
        ],
        stimulusCss : {color:'#31b404','font-size':'2em'}
      }
    ],
    base_url : {
      image : 'https://baranan.github.io/minno-tasks/images/'
    }
  });
});
