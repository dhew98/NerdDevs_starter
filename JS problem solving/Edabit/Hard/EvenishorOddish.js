function oddishOrEvenish(num) {

    let sum=0;
    while(num>0)
    {
        sum+=num%10;
        num= parseInt(mum/10);
    }
    if(sum%2==0)
    {
        return "Evenish";
    }
    else{
        return "Oddish";
    }
}