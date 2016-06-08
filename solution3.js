var isPrime = function (number) //function to check if a number is prime
{
    for (var i = 2; i < number; i++)
    {
        if (number % i === 0)
        {
            return false;
        }
    }
    return true;
}

var num = 948;
var factors = [];
var count = 0;

for (var x = 2; x < num; x++)
{
    if (num % x === 0 && isPrime (x))
    {
        factors[count] = x; //if it's a prime number it adds it to the array
        count++;    //increments the array
    }
}

var max = Math.max.apply (null, factors); //finds the max number in the array

console.log (max);