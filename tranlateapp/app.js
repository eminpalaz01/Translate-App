const request = new MyRequest();
const ui = new UI();


//  URL gönderme kodu bu detect

// const encodedParams = new URLSearchParams();
// encodedParams.append("q", "English is hard, but detectably so");

//  URL gönderme kodu bu translate 

// const encodedParams = new URLSearchParams();
// encodedParams.append("q", "Hello, world!");
// encodedParams.append("target", "es");
// encodedParams.append("source", "en"); 




    
// URL ler. 
const translateApiUrl = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
const getLanguagesApiUrl ='https://google-translate1.p.rapidapi.com/language/translate/v2/languages?target=en';
const detectLanguageApiUrl ='https://google-translate1.p.rapidapi.com/language/translate/v2/detect';

// Options default
const getLanguagesOptions = {
	method: 'GET',
	headers: {
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': 'key',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	}
};

const postDetectOptions = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': 'key',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body:null
};

const postTranslateOptions = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': 'key',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body:null
    
};






// Elements is importing app.js
const selectElement = document.querySelector("#languages");
const translatingSelectElement = document.querySelector("#translating-languages");
const willTranslateElement = document.querySelector("#will-translating-text");
const translateButton = document.querySelector("#click-to-me");




// Events
function eventListeners(){
document.addEventListener("DOMContentLoaded",getLanguages);
translateButton.addEventListener("click",run); 
willTranslateElement.addEventListener("keyup",run);
}

// Events is activated
eventListeners();



// translate with button
function run(e){
const encodedParams = new URLSearchParams();

encodedParams.append("q", willTranslateElement.value);
encodedParams.append("target", translatingSelectElement.value);
encodedParams.append("source", selectElement.value); 

const options = {
    method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': 'key',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body:encodedParams
};

request.sendRequest(translateApiUrl,options)
.then(data => ui.showTheTranslatingText(data.data.translations[0].translatedText))// data.translations.0.translatedText
.catch(function(err){
    console.log(err);
    alert("Doğru dil seçeneklerini seçtiğinizden emin olunuz.");  
});
  
}



// Languages is get to in Select
function getLanguages(e){

      
    const options = {
        method: 'GET',
        headers: {
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'key',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
       
    };
    
    // 
    request.sendRequest(getLanguagesApiUrl,options)
        .then(data => console.log(data))
        .catch(err => console.log(err));

}











