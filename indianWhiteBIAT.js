define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/qualtrics/qbiat6.js'], function(APIConstructor, iatExtension){
  var API = new APIConstructor();

  return iatExtension({
    practiceCategory1 : 
      {
        name : 'Mammals', //Will appear in the data.
        title : {
          media : {word : 'Mammals'}, //Name of the category presented in the task.
          css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
          height : 4, //Height (because we need to know where to put the next item in the title)
          startStimulus : { 
          //If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
            media : {word : 'Dogs, Horses, Cows, Lions'}, 
            css : {color:'#31b404','font-size':'1em'}, 
            height : 2
          }
        }, 
        stimulusMedia : [ //Stimuli content as PIP's media objects
          {word : 'Dogs'}, 
          {word : 'Horses'}, 
          {word : 'Lions'}, 
          {word : 'Cows'}
        ], 
        //Stimulus css (style of the stimuli)
        stimulusCss : {color:'#31b404','font-size':'2em'}
      },  
      practiceCategory2 : 
      {
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
        stimulusMedia : [ //Stimuli content as PIP's media objects
          {word : 'Pigeons'}, 
          {word : 'Swans'}, 
          {word : 'Crows'}, 
          {word : 'Ravens'}
        ], 
        //Stimulus css
        stimulusCss : {color:'#31b404','font-size':'2em'}
      },
      categories : [  //As many categories you need.
        {
          name : 'Indians', //Will appear in the data.
          title : {
            media : {word : 'Indians'}, //Name of the category presented in the task.
            css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
            height : 4, //Height (because we need to know where to put the next item in the title)
            startStimulus : { 
            //If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
            media : {word : 'Amit, Raj, Vikram, Priya, Anjali, Kavita'}, 
              css : {color:'#31b404','font-size':'1em'}, 
              height : 2
            }
          }, 
          stimulusMedia : [ //Stimuli content as PIP's media objects
          {word : 'Amit'}, 
          {word : 'Raj'}, 
          {word : 'Vikram'}, 
          {word : 'Priya'}, 
          {word : 'Anjali'}, 
          {word : 'Kavita'}
          ], 
          //Stimulus css (style of the stimuli)
          stimulusCss : {color:'#31b404','font-size':'2em'}
        },  
        {
          name : 'Whites', 
          title : {
            media : {word : 'Whites'}, 
            css : {color:'#31b404','font-size':'1.8em'}, 
            height : 4,
            startStimulus : {
              media : {word : 'Todd, Neil, Geoffrey, Emily, Anne, Jill'},  
              css : {color:'#31b404','font-size':'1em'}, 
              height : 2
            }
          }, 
          stimulusMedia : [ //Stimuli content as PIP's media objects
          {word : 'Todd'}, 
          {word : 'Neil'}, 
          {word : 'Geoffrey'}, 
          {word : 'Emily'}, 
          {word : 'Anne'}, 
          {word : 'Jill'}
          ], 
          //Stimulus css
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
          stimulusMedia : [ //Stimuli content as PIP's media objects
          {word : 'Competent'}, 
          {word : 'Productive'}, 
          {word : 'Capable'}, 
          {word : 'Efficient'}
          ], 
          //Stimulus css
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
          stimulusMedia : [ //Stimuli content as PIP's media objects
          {word : 'Incompetent'}, 
          {word : 'Inadequate'}, 
          {word : 'Useless'}, 
          {word : 'Unskilled'}
          ], 
          //Stimulus css
          stimulusCss : {color:'#31b404','font-size':'2em'}
        }
      ],
      base_url : {//Where are your images at?
      image : 'https://baranan.github.io/minno-tasks/images/'
        
      } 
  });
});
