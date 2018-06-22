$(function(){
    generate();

    $('#regen').on('click', function(){
        generate();
    });

    function generate(){
        let span = $('#poem');
        span.html('');

        for(let i = 0; i < verses.length; i++){
            let posVers = verses[i];
            let verse = posVers[Math.floor(Math.random()*posVers.length)];

            for(let word in words){
                while(true){
                    let newVerse = verse.replace('['+word+']', function(){
                        let replacements = words[word];
                        return replacements[Math.floor(Math.random()*replacements.length)];
                    });

                    if(newVerse !== verse){
                        verse = newVerse;

                    }
                    else{
                        break;
                    }
                }
            }

            verse = verse.substring(0, 1).toUpperCase()+verse.substring(1, verse.length);

            span.append('<p>'+verse+'</p>');
        }
    }
});