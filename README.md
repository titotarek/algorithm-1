# algorithm

 <b>You Can find all master class algorithm here ... , </b>
 If you find some other solution to solve the algorithm , I will be happy to share it with me . 
 
 <hr>
 
 <a href="https://github.com/shayanzarei/master-class-algorithms/tree/main/01JsBasic"><h3> 01 JS Basic </h3></a>
 <ol>
 <li>Print 1 - 135</li>
 <li>Print Odd Numbers 1 - 135</li>
 <li>Sum of Printed Numbers</li>
 <li>Print the elements of an array</li>
 <li>Find Max</li>
 <li>Get Average</li>
 <li>Eliminate the Negatives</li>
 <li>Number to String</li>
 </ol>
 
 <hr>
 
 <a href="https://github.com/shayanzarei/master-class-algorithms/tree/main/02JsIntermediate"><h3> 02 JS Intermediate </h3></a>
 <ol>
 <li>Addition</li>
 <li>Shift the Values</li>
 <li>FizzBuzz</li>
 <li>Fibonacci</li>
 <li>Remove the Negative</li>
 <li>Communist Censorship</li>
 </ol>
 
 <hr>
 
 <a href="https://github.com/shayanzarei/master-class-algorithms/tree/main/03Factorialize"><h3> 03 Factorialize! </h3></a>
   Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.</br>
   If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.</br>
   Factorials are often represented with the shorthand notation n!</br>
   For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 
 <hr>
 
 <a href="https://github.com/shayanzarei/master-class-algorithms/tree/main/04PalindromeChecker"><h3> 04 Palindrome Checker </h3></a>
 Declare a function isPalindrome(str) that takes a string as an input.<br>
 Return true if the given string is a palindrome. Otherwise, return false.<br>
 A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
 
 <hr>
 
 <a href="https://github.com/shayanzarei/master-class-algorithms/tree/main/05thirdHighestNumberInArray"><h3> 05 3rd Highest Number in Array </h3></a>
 Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).<br>
Example:<br>
Using the array [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31], the correct answer is : 11
 
 <hr>
 
 <a href="https://github.com/shayanzarei/master-class-algorithms/tree/main/06LargestNumberinArrays"><h3> 06 Largest Number in Arrays </h3></a>
 Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.<br>
 Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
 
 <hr>
 
 <a href="https://github.com/shayanzarei/master-class-algorithms/tree/main/07FindTheLongestWordInAString"><h3> 07 Find the longest Word in a String </h3></a>
 Return the length of the longest word in the provided sentence.<br>
 Your response should be a number. For these algorithms you are allowed to use the split() method.<br>
 findLongestWord("The quick brown fox jumped over the lazy dog")should return a number.<br>
 findLongestWord("The quick brown fox jumped over the lazy dog")should return 6.<br>
 findLongestWord("May the force be with you") should return 5.
 
 <hr>
 
 <a href="https://github.com/shayanzarei/master-class-algorithms/tree/main/08TitleCaseASentence"><h3> 08 Title Case a Sentence </h3></a>
 Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.<br>

For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".<br>

For this algorithm, you can use the split() method.
 
 <hr>
 
 <a href="https://github.com/shayanzarei/master-class-algorithms/tree/main/09SumAllNumbersInARange"><h3> 09 Sum All Numbers in a Range </h3></a>
 We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.<br>

The lowest number will not always come first. <br>

sumAll([1, 4]) should return a number.<br>
sumAll([1, 4]) should return 10.<br>
sumAll([4, 1]) should return 10.<br>
sumAll([5, 10]) should return 45.
 
 <hr>
 
 <a href="https://github.com/shayanzarei/master-class-algorithms/tree/main/10FibonacciSequence"><h3> 10 FFibonacci Sequence </h3></a>
 A great friend of yours, Fibonacci, just came up with a sequence of numbers that is really easy to compute. However, his time allows him to calculate by hand only the first 10-15 terms of the sequence; of course, he is busy trying to come up with some other interesting sequence. So he gives you the first terms and asks you to write an algorithm that will return the n-th term in the sequence.<br>

His sequence looks like this: 1 1 2 3 5 8 13 21 34 ...<br>

Immediately you find the pattern: setting the first two terms to be 1, any other term is the sum of the two previous terms. 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13 and so on.<br>

In this way, if n would be equal to 4 your result should be 3; but if n is 7, then the result is 13.<br>

But these are small numbers, which can be computed by hand. What about bigger numbers? Let's see what results you will get for the following n's:<br>

n = 43 -> x <br>

n = 101 -> x <br>

n = 227 -> x <br>

n = 491 -> x <br>

n = 881 -> x <br>
 
 <hr>
 
 <a href="https://github.com/shayanzarei/master-class-algorithms/tree/main/11GameOf3s"><h3> 11 Game of 3s </h3></a>
 We want to play a "Game of 3s". Here's how you play it:<br>

First, you pick a random number. Then, repeatedly do the following:<br>

If the number is divisible by 3, divide it by 3.<br>
If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.<br>
The game stops when you reach "1".<br>

Challenge Description<br>
The input is a single number: the number at which the game starts. Write a program that plays the 3s game, and outputs a valid sequence of steps you need to take to get to 1. Each step should be output as the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.<br>

Input Description<br>
The input is a single number: the number at which the game starts.<br>

gameOfThree(100);<br>
Output Description<br>
The output is a list of valid steps that must be taken to play the game. Each step is represented by the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.<br>

//OUTPUT:<br>
100 -1<br>
33 0<br>
11 1<br>
4 -1<br>
1
 
 <hr>
 
 <a href="https://github.com/shayanzarei/master-class-algorithms/tree/main/12MagicSquares"><h3> 12 Magic Squares </h3></a>
 A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15. Here's an example:<br>

8 1 6 <br>
3 5 7 <br>
4 9 2 <br>

The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4.<br>

Write a function that, given a grid containing the numbers 1-9, determines whether it's a magic square. Use whatever format you want for the grid, such as a 2-dimensional array, or a 1-dimensional array of length 9, or a function that takes 9 arguments. You do not need to parse the grid from the program's input, but you can if you want to. You don't need to check that each of the 9 numbers appears in the grid: assume this to be true.<br>

Example inputs/outputs<br>
[8, 1, 6, 3, 5, 7, 4, 9, 2] => true<br>
[2, 7, 6, 9, 5, 1, 4, 3, 8] => true<br>
[3, 5, 7, 8, 1, 6, 4, 9, 2] => false<br>
[8, 1, 6, 7, 5, 3, 4, 9, 2] => false
 
 <hr>
 
 <a href="https://github.com/shayanzarei/master-class-algorithms/tree/main/13WSearch%26Replace"><h3> 13 Search and Replace </h3></a>
 Perform a search and replace on the sentence using the arguments provided and return the new sentence.<br>

First argument is the sentence to perform the search and replace on.<br>

Second argument is the word that you will be replacing (before).<br>

Third argument is what you will be replacing the second argument with (after).<br>

 <hr>
 
 <a href="https://github.com/shayanzarei/master-class-algorithms/tree/main/14SumAllPrimes"><h3> 14 Sum All Primes </h3></a>
 Sum all the prime numbers up to and including the provided number.<br>

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.<br>

The provided number may not be a prime.<br>

sumPrimes(10) should return a number. <br>
sumPrimes(10) should return 17. <br>
sumPrimes(977) should return 73156. <br>
 
 <hr>
 
 <a href="https://github.com/shayanzarei/master-class-algorithms/tree/main/15SumAllOddFibonacci"><h3> 15 Sum All Odd Fibonacci</h3></a>
 Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.<br>

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.<br>

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.<br>
