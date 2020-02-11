function x(f){
    var f=f+1;
    
    while(1)
    {
    var a=f;
    var sum=0;
    while(f!=0){
    sum=(sum*10)+(f%10);
    f=parseInt(f/10);
    
    }
    if(sum==a)
    {
    
    console.log(sum);
      break;
    }
    else
    {
    f=a;
    f++;
    
    }
    }
    }
    x(5647);