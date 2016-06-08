var total = 0; //give a total that can be added to

for (var i = 0; i <= 1000; ++i)
{
	if (i % 3 === 0) //check for remainders from 3
  {
  	total += i;
  }
  else if (i % 5 === 0) //check for remainders from 5
  {
  	total += i;
  }
}

console.log (total);