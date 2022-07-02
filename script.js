//Dichiarazione e assegnazione variabili
const textArea = document.querySelector('textarea');
const playButton = document.querySelector('button');
const pitchBar = document.querySelector('input');
const duckFigure = document.querySelector('figure');

//Aggiunta Evento pulsante button
playButton.addEventListener('click', function(){

    //istruzioni in caso di click
    const textLength = textArea.value.trim().length;

    if (textLength > 0) {
        talk();
    }
    });

    //Funzione per far parlare la paperella
    function talk(){
        const text = textArea.value;
        const pitch = pitchBar.value;
        
        const utterance = new SpeechSynthesisUtterance(text);
    
    //parametri della variabile utterance    
        utterance.volume=1;
        utterance.rate=1;
        utterance.pitch= pitch;

        speechSynthesis.speak(utterance);
    
    //Quando la paperella inizia a parlare
    utterance.addEventListener('start', function(){
        textArea.disable=true;
        playButton.disable=true;
        pitchBar.disable=true;
        
        duckFigure.classList.add('talking');
    });

    //Quando la paperella smette di parlare
    utterance.addEventListener('end', function(){
        textArea.disable=false;
        playButton.disable=false;
        pitchBar.disable=false;

        duckFigure.classList.remove('talking');
    })
    }