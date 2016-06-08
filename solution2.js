var total = 0;

//start with the two beginning numbers in the sequence
var fab1 = 1; 
var fab2 = 2;

//keep the number below 4 million in the sequence
while (fab1 < 4000000 || fab2 < 4000000)
{
    if (fab1 > fab2) //check which number needs to be incremented
    {
        fab2 += fab1;
        
        if (fab2 % 2 === 0)
        {
            total += fab2;
        }
    }
    else if (fab2 > fab1)
    {
        fab1 += fab2;
        
        if (fab1 % 2 === 0)
        {
            total += fab1;
        }
    }
}

console.log (total);