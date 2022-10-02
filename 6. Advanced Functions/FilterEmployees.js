function filter(...input){
    let data = JSON.parse(input[0]);
    let criteria = input[1];
    


    printResult();

    function printResult(){
        let property = criteria.split('-')[0];
        let result;
        if(property != 'all'){
            let value = criteria.split('-')[1];
            result = data.filter(x=> x[property] == value);
        }
        else{
            result = data;
        }
        

        for(i=0; i < result.length; i++){
            console.log(`${i}. ${result[i].first_name} ${result[i].last_name} - ${result[i].email}`)

        }
    }
 

}


filter(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'all'

)


