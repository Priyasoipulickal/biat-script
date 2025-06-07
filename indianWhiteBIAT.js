define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/qualtrics/qbiat6.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

    return iatExtension({
        practiceCategory1 : 
            {
                name : 'Good', //Will appear in the data.
                title : {
                    media : {word : 'Good'}, //Name of the category presented in the task.
                    css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
                    height : 4, //Height (because we need to know where to put the next item in the title)
                    startStimulus : { 
                    //If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
                        media : {word : 'Wonderful, Pleasant, Beautiful, Excellent'}, 
                        css : {color:'#31b404','font-size':'1em'}, 
                        height : 2
                    }
                }, 
                stimulusMedia : [ //Stimuli content as PIP's media objects
                    {word : 'Wonderful'}, 
                    {word : 'Pleasant'}, 
                    {word : 'Beautiful'}, 
                    {word : 'Excellent'},
                    {word : 'Amazing'},
                    {word : 'Fantastic'}
                ], 
                //Stimulus css (style of the stimuli)
                stimulusCss : {color:'#31b404','font-size':'2em'}
            },	
            practiceCategory2 : 
            {
                name : 'Bad', 
                title : {
                    media : {word : 'Bad'}, 
                    css : {color:'#31b404','font-size':'1.8em'}, 
                    height : 4,
                    startStimulus : {
                        media : {word : 'Terrible, Unpleasant, Awful, Horrible'}, 
                        css : {color:'#31b404','font-size':'1em'}, 
                        height : 2
                    }
                }, 
                stimulusMedia : [ //Stimuli content as PIP's media objects
                    {word : 'Terrible'}, 
                    {word : 'Unpleasant'}, 
                    {word : 'Awful'}, 
                    {word : 'Horrible'},
                    {word : 'Disgusting'},
                    {word : 'Nasty'}
                ], 
                //Stimulus css
                stimulusCss : {color:'#31b404','font-size':'2em'}
            },
            categories : [  //As many categories you need.
                {
                    name : 'Indian Names', //Will appear in the data.
                    title : {
                        media : {word : 'Indian Names'}, //Name of the category presented in the task.
                        css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
                        height : 4, //Height (because we need to know where to put the next item in the title)
                        startStimulus : { 
                        //If you're using a startStimulus, set here. If not, set the parameter showStimuliWithInst to false (see later below)
                        media : {word : 'Rajesh, Priya, Amit, Kavya'}, 
                            css : {color:'#31b404','font-size':'1em'}, 
                            height : 2
                        }
                    }, 
                    stimulusMedia : [ //Stimuli content as PIP's media objects
                    {word : 'Rajesh'}, 
                    {word : 'Priya'}, 
                    {word : 'Amit'}, 
                    {word : 'Kavya'}, 
                    {word : 'Deepak'}, 
                    {word : 'Anita'},
                    {word : 'Suresh'},
                    {word : 'Meera'}
                    ], 
                    //Stimulus css (style of the stimuli)
                    stimulusCss : {color:'#31b404','font-size':'2em'}
                },	
                {
                    name : 'White Names', 
                    title : {
                        media : {word : 'White Names'}, 
                        css : {color:'#31b404','font-size':'1.8em'}, 
                        height : 4,
                        startStimulus : {
                            media : {word : 'John, Sarah, Michael, Emily'},  
                            css : {color:'#31b404','font-size':'1em'}, 
                            height : 2
                        }
                    }, 
                    stimulusMedia : [ //Stimuli content as PIP's media objects
                    {word : 'John'}, 
                    {word : 'Sarah'}, 
                    {word : 'Michael'}, 
                    {word : 'Emily'}, 
                    {word : 'David'}, 
                    {word : 'Jessica'},
                    {word : 'Robert'},
                    {word : 'Amanda'}
                    ], 
                    //Stimulus css
                    stimulusCss : {color:'#31b404','font-size':'2em'}
                }
            ]
    });
});
