class MyRequest{

    async sendRequest(url,options){
    
         let response = await fetch(url,options);
         let responseData = await response.json();

           return responseData;

    }

    



    
}

// url trans api 
//  'https://google-translate1.p.rapidapi.com/language/translate/v2'

// options translate api

// get languages
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'Accept-Encoding': 'application/gzip',
// 		'X-RapidAPI-Key': '779b9404d1msh3e1a4cb5afdb654p1e15e5jsn622fc6548ac3',
// 		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
// 	}
// };

// post detect
// const postDetectOptions = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'Accept-Encoding': 'application/gzip',
// 		'X-RapidAPI-Key': '779b9404d1msh3e1a4cb5afdb654p1e15e5jsn622fc6548ac3',
// 		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
// 	},
// 	body: data   //kaynakta encodedParams
// };

// post translate
// const postTranslateOptions = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'Accept-Encoding': 'application/gzip',
// 		'X-RapidAPI-Key': '779b9404d1msh3e1a4cb5afdb654p1e15e5jsn622fc6548ac3',
// 		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
// 	},
// 	body: data   //kaynakta encodedParams
// };


