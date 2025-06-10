define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/BIAT/qualtrics/qbiat6.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

    return iatExtension({
        practiceCategory1 : {
            name : 'Animals', //Will appear in the data.
            title : {
                media : {word : 'Animals'}, //Name of the category presented in the task.
                css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
                height : 4, //Height (because we need to know where to put the next item in the title)
                startStimulus : { 
                    //Practice stimuli examples
                    media : {word : 'Dog, Cat, Lion, Tiger'}, 
                    css : {color:'#31b404','font-size':'1em'}, 
                    height : 2
                }
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word : 'Dog'}, 
                {word : 'Cat'}, 
                {word : 'Lion'}, 
                {word : 'Tiger'},
                {word : 'Elephant'},
                {word : 'Horse'}
            ], 
            //Stimulus css (style of the stimuli)
            stimulusCss : {color:'#31b404','font-size':'2em'}
        },	
        practiceCategory2 : {
            name : 'Objects', 
            title : {
                media : {word : 'Objects'}, 
                css : {color:'#31b404','font-size':'1.8em'}, 
                height : 4,
                startStimulus : {
                    media : {word : 'Chair, Table, Book, Pencil'}, 
                    css : {color:'#31b404','font-size':'1em'}, 
                    height : 2
                }
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word : 'Chair'}, 
                {word : 'Table'}, 
                {word : 'Book'}, 
                {word : 'Pencil'},
                {word : 'Computer'},
                {word : 'Phone'}
            ], 
            //Stimulus css
            stimulusCss : {color:'#31b404','font-size':'2em'}
        },
        categories : [  //Main test categories
            {
                name : 'Indian Names', //Will appear in the data.
                title : {
                    media : {word : 'Indian Names'}, //Name of the category presented in the task.
                    css : {color:'#31b404','font-size':'1.8em'}, //Style of the category title.
                    height : 4, //Height (because we need to know where to put the next item in the title)
                    startStimulus : { 
                        media : {word : 'Raj, Priya, Amit, Deepika'}, 
                        css : {color:'#31b404','font-size':'1em'}, 
                        height : 2
                    }
                }, 
                stimulusMedia : [ //Indian names - clearly identifiable
                    {word : 'Rajesh'}, 
                    {word : 'Priya'}, 
                    {word : 'Amit'}, 
                    {word : 'Deepika'}, 
                    {word : 'Arjun'}, 
                    {word : 'Kavya'},
                    {word : 'Vikram'},
                    {word : 'Ananya'},
                    {word : 'Rohit'},
                    {word : 'Shreya'},
                    {word : 'Kiran'},
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
                stimulusMedia : [ //White names - clearly identifiable
                    {word : 'John'}, 
                    {word : 'Sarah'}, 
                    {word : 'Michael'}, 
                    {word : 'Emily'}, 
                    {word : 'David'}, 
                    {word : 'Jessica'},
                    {word : 'Christopher'},
                    {word : 'Ashley'},
                    {word : 'Matthew'},
                    {word : 'Amanda'},
                    {word : 'Andrew'},
                    {word : 'Jennifer'}
                ], 
                //Stimulus css
                stimulusCss : {color:'#31b404','font-size':'2em'}
            }
        ],
        
        // Define the attribute categories (Competent vs Incompetent)
        attribute1 : {
            name : 'Competent',
            title : {
                media : {word : 'Competent'}, 
                css : {color:'#0000FF','font-size':'1.8em'}, 
                height : 4,
                startStimulus : {
                    media : {word : 'Capable, Skilled, Effective'}, 
                    css : {color:'#0000FF','font-size':'1em'}, 
                    height : 2
                }
            }, 
            stimulusMedia : [
                {word : 'Capable'},
                {word : 'Skilled'},
                {word : 'Effective'},
                {word : 'Competent'},
                {word : 'Talented'},
                {word : 'Proficient'},
                {word : 'Accomplished'},
                {word : 'Expert'},
                {word : 'Qualified'},
                {word : 'Able'},
                {word : 'Intelligent'},
                {word : 'Successful'}
            ], 
            stimulusCss : {color:'#0000FF','font-size':'2em'}
        },
        
        attribute2 : {
            name : 'Incompetent',
            title : {
                media : {word : 'Incompetent'}, 
                css : {color:'#0000FF','font-size':'1.8em'}, 
                height : 4,
                startStimulus : {
                    media : {word : 'Incapable, Unskilled, Ineffective'}, 
                    css : {color:'#0000FF','font-size':'1em'}, 
                    height : 2
                }
            }, 
            stimulusMedia : [
                {word : 'Incapable'},
                {word : 'Unskilled'},
                {word : 'Ineffective'},
                {word : 'Incompetent'},
                {word : 'Untalented'},
                {word : 'Inadequate'},
                {word : 'Unqualified'},
                {word : 'Amateur'},
                {word : 'Inept'},
                {word : 'Unable'},
                {word : 'Unsuccessful'},
                {word : 'Inefficient'}
            ], 
            stimulusCss : {color:'#0000FF','font-size':'2em'}
        },

        // Optional: Customize instructions
        showStimuliWithInst : true, // Show example stimuli in instructions
        
        // Block configuration (you can customize these)
        trialsInPracticeBlock : 8, // Number of practice trials
        trialsInEachOfTheFirstTwoBlocks : 20, // Trials in first two blocks
        trialsInCriticalBlocks : 20, // Trials in critical test blocks
        
        // Response keys
        rightkey : 'i', // Key for right response
        leftkey : 'e', // Key for left response
        
        // Error feedback
        errorCorrection : true, // Show error correction
        
        // Base URL (not needed since we're using words only)
        base_url : {
            image : ''
        }
    });
});
