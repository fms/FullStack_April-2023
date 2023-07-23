function  operation    (a : number , b : number , op : number ) :any

   
{

    



    if ( op === 1 )

  
    return a+b 
    

    
    else if ( op === 2 )
    
    return a-b 


    else if ( op === 3 )
    
    return a*b 


    else if ( op === 4 )
    
    return a/b 
    

    else if ( op < 1 || op > 4  )
    
    return "try again"
    
}



console.log(`if op = 1 then 5 + 4, the calculated number is: ${operation(5 , 4 , 1 )}`);
console.log(`if op = 2 then 8 - 3, the calculated number is: ${operation(8 , 3 , 2 )}`);
console.log(`if op = 3 then 8 * 3, the calculated number is: ${operation(8 , 3 , 3 )}`);
console.log(`if op = 4 then 16 / 8, the calculated number is: ${operation(16 , 8 , 4 )}`);
console.log(`if op < 1  then return: ${operation(16 , 8 , -5 )}`);
console.log(`if op > 4 or ap > 4 then return: ${operation(16 , 8 , 9 )}`);