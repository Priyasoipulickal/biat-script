define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/qualtrics/qbiat6.js'], function(APIConstructor, iatExtension){
  var API = new APIConstructor();

  return iatExtension({
    category1 : {
      name : 'Indians',
      title : {
        media : {word : 'Indians'},
        css : {color:'#31b404','font-size':'1.8em'},
        height : 4
      },
      stimulusMedia : [
        {word : 'Rajesh'},
        {word : 'Priya'},
        {word : 'Amit'},
        {word : 'Deepa'},
        {word : 'Ravi'},
        {word : 'Sunita'}
      ],
      stimulusCss : {color:'#31b404','font-size':'2em'}
    },

    category2 : {
      name : 'Whites',
      title : {
        media : {word : 'Whites'},
        css : {color:'#31b404','font-size':'1.8em'},
        height : 4
      },
      stimulusMedia : [
        {word : 'John'},
        {word : 'Emma'},
        {word : 'James'},
        {word : 'Olivia'},
        {word : 'William'},
        {word : 'Grace'}
      ],
      stimulusCss : {color:'#31b404','font-size':'2em'}
    },

    attribute1 : {
      name : 'Good',
      title : {
        media : {word : 'Good'},
        css : {color:'#0000FF','font-size':'1.8em'},
        height : 4
      },
      stimulusMedia : [
        {word : 'Joy'},
        {word : 'Love'},
        {word : 'Peace'},
        {word : 'Wonderful'},
        {word : 'Pleasure'},
        {word : 'Glorious'}
      ],
      stimulusCss : {color:'#0000FF','font-size':'2em'}
    },

    attribute2 : {
      name : 'Bad',
      title : {
        media : {word : 'Bad'},
        css : {color:'#FF0000','font-size':'1.8em'},
        height : 4
      },
      stimulusMedia : [
        {word : 'Horrible'},
        {word : 'Nasty'},
        {word : 'Anger'},
        {word : 'Evil'},
        {word : 'Failure'},
        {word : 'Terrible'}
      ],
      stimulusCss : {color:'#FF0000','font-size':'2em'}
    },

    base_url : {
      image : 'https://baranan.github.io/minno-tasks/images/'
    }
  });
});
