// // const btn= document.getElementsByClassName("talk")
// // const content=document.getElementsByClassName("content")
// // or we can do this by another method also.

// // const btn= document.querySelector('talk') (for class)
// //  const btn= document.querySelector('#talk') (for Id)
const btn = document.querySelector('.talk')
const content= document.querySelector('.content')

function gotolink(link){
console.log(link.value)
location.href='https://forms.gle/M3oKv6Wd7Zc6VLfF9', "_blank";
};



function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate =1;
    text_speak.volume = 1;
    text_speak.pitch =2;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();
    if( hour >=0 && hour<12){
        speak("Good Morning Sir...")
    }

    else if( hour>17 ){
        speak("Good Evening sir...")
    }

    else{
        speak("Good Afternoon sir ...")
    }
}

window.addEventListener('load',()=>{
 speak("Welcome to CALVIN...THE VOICE ASSISTANCE")
 wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})


function takeCommand(message){
    if (message.includes('hey')||message.includes('hello')){
        speak('hello sir, How may I help you?')
    }
    
    if (message.includes(' google.com')){
        window.open("https://google.com","_blank");
        speak("Opening google")
    }
    if (message.includes(' youtube.com')){
        window.open("https://Youtube.com","_blank");
        speak("Opening youtube")
    }
    if (message.includes('amazon.com')){
        window.open("https://amazon.com","_blank");
        speak("Opening amazon")
    }
    if (message.includes('flipkart.com')){
        window.open("https://flipkart.com","_blank");
        speak("Opening flipkart")
    }
    if (message.includes('open cardekho.com')){
        window.open("https://Cardekho.com","_blank");
        speak("Opening CarDekho")
    }
    else if (message.includes("where do you live")){
        const finalvoiceofcalvin ="  I live in your heart";
        speak(finalvoiceofcalvin);
    }
    else if (message.includes("what's your name")){
        const finalvoiceofcalvin =" my name is calvin";
        speak(finalvoiceofcalvin);
    }

    else if (message.includes("who made you")){
        const finalvoiceofcalvin ="  My owner name is Aashish Mishra";
        speak(finalvoiceofcalvin);
    }


   else if(message.includes('what is') || message.includes('who is') || message.includes('what are')){
    window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
    const finalvoiceofcalvin ="This is what I found on the intrnet for you" + message;
    speak(finalvoiceofcalvin);
   }


   else if(message.includes('wikipedia')){
    window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
    const finalvoiceofcalvin="This is what I found on the intrnet for " + message;
    speak(finalvoiceofcalvin);
   }

   else if(message.includes('time')){
    const time= new Date().toLocaleString(undefined,{hour: "numeric", minute:"numeric"}) ; 
    const finalvoiceofcalvin=time;
    speak(finalvoiceofcalvin);
   }

   else if(message.includes('date')){
    const date= new Date().toLocaleString(undefined,{month: "short", day: "numeric", year:"numeric"});
    const finalvoiceofcalvin = date;
    speak(finalvoiceofcalvin);
   }

  else if (message.includes('open spotify')){
    window.open('https://open.spotify.com/')
    const finalvoiceofcalvin =" sure Opening spotify"
    speak(finalvoiceofcalvin);
  }

  else if (message.includes('calendar' )){
    window.open('https://www.timeanddate.com/calendar/')
    const finalvoiceofcalvin ="Opening calender"
    speak(finalvoiceofcalvin);
  }
  else if (message.includes('calculator')){
    window.open('https://www.calculator.net/')
    const finalvoiceofcalvin ="opening calculator"
    speak(finalvoiceofcalvin);
  }

else if(message.include( 'thank you')){
    const finalvoiceofcalvin="Welcome, I am very glad to have you, Visit again";
    speak(finalvoiceofcalvin);
}


  else{
    window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank")
    const finalvoiceofcalvin ="Information that I found For " + message + "On google";
    speak(finalvoiceofcalvin);
  }
  
  
}
