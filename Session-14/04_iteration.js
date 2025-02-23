let salesData = [
    { product: "Laptop", price: 1200 },
    { product: "Smartphone", price: 800 },
    { product: "Headphones", price: 150 },
    { product: "Keyboard", price: 80 },
  ];

const totalSales = salesData.reduce((acc,sale)=> acc+sale.price,0)

console.log(totalSales);


// Items less than 50
let inventory = [
    { name: "Widget A", stock: 30 },
    { name: "Widget B", stock: 120 },
    { name: "Widget C", stock: 45 },
    { name: "Widget D", stock: 70 },
  ];

const lowStockItems = inventory.filter((item)=> item.stock<=50)
console.log(lowStockItems);

  // find most active user

let userActivity = [
    { user: "Alice", activityCount: 455 }, 
    { user: "Bob", activityCount: 1222 }, 
    { user: "Charlie", activityCount: 3  }, 
  ];
  
  const mostActiveUser= userActivity.reduce((maxUser,user)=>

        user.activityCount> maxUser.activityCount ? user : maxUser
     

  )

  console.log(mostActiveUser);
  