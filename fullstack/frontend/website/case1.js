


var initial; 
    
    switch (initial)  
    { 
       case 0: 
       value=10;
       initial=initial+value;
           console.log("add",+value); 
           break; 
       case 10:
           if(initial==10)
       value=-10;
       initial=initial-(value);

           console.log("sub.",+value); 
           break; 
       case 20:
        if(initial==20) 
       value=20; 
       initial=initial*value;
           console.log("mul.",+value); 
           break; 
      
    }
