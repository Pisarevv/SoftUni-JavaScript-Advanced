function createSortAndReturnTickets(ticketsInput, sortCriteria) {
    let boughtTickets = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for(let ticket of ticketsInput){
        let destination = ticket.split("|")[0];
        let price = Number(ticket.split("|")[1]);
        let status = ticket.split("|")[2];
        let newTicket = new Ticket(destination,price,status);
        boughtTickets.push(newTicket);
    }

    let sortedTickets = boughtTickets.sort((a,b) => compare(a,b,sortCriteria));

    console.log(sortedTickets)
    return sortedTickets;
    


    function compare(a,b,criteria){
        if ( a[criteria] < b[criteria]){
            return -1;
          }
          if ( a[criteria] > b[criteria] ){
            return 1;
          }
          return 0;
    }



}



createSortAndReturnTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
)