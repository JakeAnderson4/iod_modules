{
    "company": {
      "name": "Tech Innovators Inc.",
      "departments": [
        {
          "name": "Engineering",
          "employees": [
            {
              "name": "Alice Johnson",
              "position": "Software Engineer",
              "projects": [
                {
                  "name": "Project Alpha",
                  "deadline": "2024-12-01"
                },
                {
                  "name": "Project Beta",
                  "deadline": "2025-03-15"
                }
              ]
            },
            {
              "name": "Bob Smith",
              "position": "DevOps Engineer",
              "projects": [
                {
                  "name": "Infrastructure Upgrade",
                  "deadline": "2024-10-20"
                }
              ]
            }
          ]
        },
        {
          "name": "Marketing",
          "employees": [
            {
              "name": "Carol White",
              "position": "Marketing Manager",
              "projects": [
                {
                  "name": "Product Launch Campaign",
                  "deadline": "2024-09-30"
                }
              ]
            },
            {
              "name": "David Brown",
              "position": "SEO Specialist",
              "projects": [
                {
                  "name": "Website SEO Optimization",
                  "deadline": "2024-08-15"
                }
              ]
            }
          ]
        },
        {
          "name": "Sales",
          "employees": [
            {
              "name": "Eve Black",
              "position": "Sales Representative",
              "projects": [
                {
                  "name": "Client Outreach Program",
                  "deadline": "2024-11-05"
                }
              ]
            }
          ]
        }
      ]
    }
  }
  
  
  //Quick way
companyData?.company?.departments?.forEach(department => {
    console.log(`Department: ${department.name}`);
    department?.employees?.forEach(employee => {
      employee?.projects?.forEach(project => {
        console.log(`  Project Name: ${project.name}, Deadline: ${project.deadline}`);
      });
    });
  });
  
  
  const company = companyData?.company ? companyData.company : null;
  const departments = company?.departments ? company.departments : [];
  departments.forEach((department) => {
    console.log(`Department: ${department.name}`);
    const employeeArr = department?.employees ? department?.employees : [];
    employeeArr.forEach((employee) => {
      const projectArr = employee?.projects ? employee.projects : [];
      projectArr.forEach((project) => {
        console.log(`  Project Name: ${project.name}, Deadline: ${project.deadline}`);
      });
    });
  });
  
  
  
  const users = [
    {id: 1, name: 'Alice', age: 25},
    {id: 2, name: 'Bob', age: 30},
    {id: 3, name: 'Charlie', age: 25},
    {id: 4, name: 'David', age: 30}
  ];
  
  const groupBy(array, key) {
    return array.reduce((result, currentValue) => {

    }
)
  }
  
  
  let result = {};
  for(let i = 0; i < users.length ; i++)
  {
    if(result[users[i]?.age])
  }
  
  
  const orders = [
    { id: 1, items: [{ productId: 1, quantity: 2 }, { productId: 2, quantity: 1 }] },
    { id: 2, items: [{ productId: 1, quantity: 1 }, { productId: 3, quantity: 4 }] }
  ];
  
  const totalQuantity = orders.reduce((total, order) => {
    const orderTotal = order.items.reduce((sum, item) => sum += item.quantity, 0);
    return total + orderTotal;
  }, 0);
  
  console.log(totalQuantity);
  
  Output: 8
  
  
  
  
  