function requestValidator(inputObject){

    const validMethods = ['GET','POST','DELETE','CONNECT'];
    const validURIRegex = /^[\w.]+$/g;
    const validVersions =['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const notAllowedCharectes = [`<`, `>`, `\\`, `&`, `'`, `"`];

   
        if(!inputObject.hasOwnProperty("method") || !validMethods.includes(inputObject.method)){
            throw new Error(`Invalid request header: Invalid Method`);
        }
    
        if(!inputObject.hasOwnProperty("uri") || (!((inputObject.uri).match(validURIRegex)) && inputObject.uri !== '*') || inputObject.uri ==''){
            throw new Error('Invalid request header: Invalid URI');
        }
    
        if(!inputObject.hasOwnProperty("version")|| !validVersions.includes(inputObject.version)){
            throw new Error(`Invalid request header: Invalid Version`);
        }
    
        if(!inputObject.hasOwnProperty("message")) {
            throw new Error(`Invalid request header: Invalid Message`);
        }

        for(let ch of inputObject.message){
            if(notAllowedCharectes.includes(ch)){
                throw new Error(`Invalid request header: Invalid Message`);
            }
        }
    
        return inputObject;
   
}


requestValidator({
    method: 'CONNECT',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: "a&"
  }
  );