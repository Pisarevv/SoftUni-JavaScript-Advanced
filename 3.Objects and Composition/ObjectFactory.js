function ComposeObjects(libraries,orders){

    let result = [];

    for(let order of orders){
       let {name} = order.template;
       let {parts} = order;

       let currentObject = CreateObject(name,parts);

       result.push(currentObject);        
    }

    return result;


    function CreateObject(name,parts){
       let result = {name:name};
       for(let part of parts){
         result[part] = libraries[part];
       }
       return result;
    }
    
}



const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
  

const product = ComposeObjects(library,orders);

