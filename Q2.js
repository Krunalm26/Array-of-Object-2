
let employees = [
    { name: "Krunal", position: "Manager", salary: 65000 },
    { name: "Deep", position: "Developer", salary: 55000 },
    { name: "Chetan", position: "Designer", salary: 70000 }
  ];
  
  employees.forEach(employee => {
    if (employee.salary > 60000) {
      console.log(employee.name);
    }
  });
  