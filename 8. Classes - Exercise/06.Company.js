class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!this.departments[department]) {
            this.departments[department] = {
                totalSalary: 0,
                averageSalary: 0,
                employees: []
            }
        }
        if (!name || !salary || salary < 0 || !position || !department) {
            throw new Error("Invalid input!");
        }
        let currentDepartment = this.departments[department];

        let newEmployee = { name, salary, position };

        currentDepartment.totalSalary += Number(salary);
        currentDepartment.employees.push(newEmployee);
        currentDepartment.averageSalary = currentDepartment.totalSalary / currentDepartment.employees.length;

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment(){
        let sortedBestDepartment = Object.entries(this.departments).sort((a,b) => (this._compare(a,b,"averageSalary")))[0];
        sortedBestDepartment[1].employees.sort((a,b) => this._compare(b,a,"salary") || (a.name).localeCompare(b.name));
        let buffer = `Best Department is: ${sortedBestDepartment[0]}` + `\n`;
        buffer += `Average salary: ${sortedBestDepartment[1].averageSalary.toFixed(2)}` + `\n`;
        let employees = [];
        for(let employe of sortedBestDepartment[1].employees){
            let currentEmployee = `${employe.name} ${employe.salary} ${employe.position}`
            employees.push(currentEmployee);

        }
        buffer += employees.join('\n');
        return buffer;

    }

     _compare(a,b,criteria){
        if ( a[criteria] < b[criteria]){
            return -1;
          }
          if ( a[criteria] > b[criteria] ){
            return 1;
          }
          return 0;
          
    }



}

    


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
