  const array1 = [1, 2, 3, 4]

  const initialValue = 0

  const sumWithInitial = array1.reduce( (acc, curr) => acc + curr, initialValue )

  console.log(sumWithInitial); // outpit => 10


  const array2 = [1, 2, 3, 4]

  const myTotal = array2.reduce( function (acc, curr) {
    console.log(`acc: ${acc} and curr: ${curr}`);   // acc: 0 and curr: 1
                                                    // acc: 1 and curr: 2
                                                    // acc: 3 and curr: 3
                                                    // acc: 6 and curr: 4 
    return acc + curr
    
  },0 )


  const total = array2.reduce( (acc, curr) => (acc + curr),0 )

  console.log(total);
  

  console.log(myTotal);   


  const shoppingCart = [
    {
        itemName : "JS course",
        price : 5999
    },
    {
        itemName : "Web Dev course",
        price : 4999
    },
    {
        itemName : "Python course",
        price : 999
    },
    {
        itemName : "Java course",
        price : 1999
    },
    {
        itemName : "Mobile Dev course",
        price : 3999
    }
  ]


  const cartTotal = shoppingCart.reduce( (acc, item) => (acc +  item.price), 0 )

  console.log(cartTotal);
  
  
  
