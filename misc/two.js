

/*

    Write a function that can be use multiple times to find certain data from a string. 
    The data to be separated starts with an S and ends with an E. 
    Any strings in between S and E that do not have this characters are to be 
    included in the data collection string.


*/


/*
   
    Given a bunch of events each with a starting and ending time, 
    construct a schedule for which I am 'not busy'.

*/

/*

    Given a string, find the first occurring unique character.

*/

/*
    Are two words anagrams of each other
*/


/*
    Candy crush words - removing letters that appear at least 3 times in a row
    (ABCCCBB => ABBB => A)

    similar to candy crush. If you get a string 'crush' any characters that occurs 3 or more times in a row. keep doing this until there cant be any more candies 'crushed'
    'abbbaa' => 'aaa' => ''
    'abnnnnke' => 'abke'
    - optimal solution is to use a 2d stack, so you can get it in O(n) time.  In that you hold the char and the the second index is how many times it occurs. if you get to a new char check the previous entry in the stack if is has more than 3 in a row pop it off. increment the top element in the stack if it is the same char if not add a new one. then at the end build the new string out of the stack.

*/

/*
    variation on two sum but needed to count all the same pairs as well with many repeating numbers in the array.
*/

/*
    Almost identical to leetcode #200
    Given grid(2d array) with "0" - sky and "1" - cloud, return count of the clouds.
    
*/


/*
    Design a phone book (OOP)
*/


/*
    Object-oriented programming question about designing an Order class from an apparel store.
*/

/*
    LeetCode Merge Intervals 
*/

/*
    LeetCode Design Underground System
*/


/*
    given a string return the number of times each character appears. 
    followed up with what if we return the counts of each word in the string. 
    How does the time complexity differ for each approach.
    
*/


/*
    given two arrays return a new array consisting of values that appear in both arrays.
    At first the arrays are not sorted.
    Given two sorted arrays how would you refactor your code.
    How would you ensure our answer array doesn't have repeating elements.

*/


/*

    Given a string s, find the length of the longest substring without repeating characters.
    followed up with:
    - Can we do better than O(n2) time
    - what if we want the string to be a minimum length of k
    - what if we want the string to contain each letter at least k time
    
*/

/*

    Write a method that takes a number and use the Collatz conjecture to figure out how 
    many steps it takes to turn it into the number one. This was pretty straight forward. 
    just have a counter and add to it every time you modify the current number you are at

*/

/*
    validate a binary search tree (leetcode #98)
*/

/*
    given an array of integers and a target integer return the number of pairs 
    in the array that sum to the target number. 
    repeats of the same number count as separate integers
*/

/*
    Given a sorted array of integers, return count number of triplets from the array that are a valid triangle
    [2, 3, 5, 7] => [3,5,7] => count = 1
*/


/*

    was given a root node of a tree that is a lattice (so nodes can have many children, 
    and they all point back to a single leaf node/ the tree collapses back down to 1). 
    apparently lattices are often viewed flipped upside down, where the leaf is level 0. 
    and the parent is the highest level. Assuming that the node class has a level property, 
    I needed to write a function that set that level property on the nodes. 

*/

/*
    Given a list of integers and a desired sum, write a function that calculates a threshold number x
    such that when summing up the list of integers everything greater than x can be substituted with x
    to give the desired sum. For example, if given a list [1, 2, 5] and a desired sum of 6. a threshold of
    3 once applied to the list can yield the desired sum (i.e. 1 + 2 + 3 = 6) If there
    are multiple of such thresholds we'd like to find the lowest one.
    [1, 2, 5], 6 -> 3
    [40, 20, 10, 30], 70  -> 20
    [40, 20, 30, 10], 71  -> 20.5
    [40, 20, 10, 30], 100 -> 40
*/


/*
 LeetCode questions (including: #117, #1396, #146, #394)
*/


/*
    Given two linked lists that are in reverse order, add them together and return the sum in the correct order
    ex.
    l1 = 1 - 2 -3 = 321
    l2 = 4 - 5 -6 = 654
    answer 9 -> 7 -> 5
    return the head (9)
*/


/*

    Write a function that takes in a base and a n and returns the result of the base 
    to the power of n. Optimize for time complexity.   

*/

/*

    Given a string of words separated by spaces, write a function that will 
    return the words in reverse, maintaining the same number of 
    spaces between words as in the original string

*/

/*

    given an array of integers and a target integer return the number of pairs in 
    the array that sum to the target number. repeats of the same number count as separate integers

*/

/*

    Given a 2D board and a word, find if the word exists in the grid.
    The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
    Example:
    board =
    [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
    ]
    Given word = "ABCCED", return true.
    Given word = "SEE", return true.
    Given word = "ABCB", return false.
*/

/*
    given sorted array, make a balanced BST.    
*/

/*
    Given an array of integers which may or may not have duplicates. 
    Return array of all numbers that occur with highest frequency. 
*/

/*

    Design a system that takes in a randomly ordered stream of integers from 1..k. 
    Print numbers in sequential order as they come in. Ex [1,2,4,5,3] -> 
    Print 1 and 2 immediately, store 4 and 5 in a set and wait next expected integer (3).
     When 3 arrives, print it and the 4 and 5 that have been saved.

*/


/*
    populating-next-right-pointers-in-each-node/

     https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
    Use queue and BFS approach to connect nodes to their right neighbors

*/

/*
    Print each level in a binary tree
*/

/*
    Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

    Example 1:
    Input: [[0, 30],[5, 10],[15, 20]]
    Output: 2

    Example 2:
    Input: [[7,10],[2,4]]
    Output: 1
*/

/*

    Given two, unsorted arrays (which may or may not be empty, consisting only of 
    non-negative integers), return a single, sorted array containing all the elements of the two input arrays.

*/

/*
    Given a string of digits, return all the combinations of letters those numbers represent on a  phone's touchpad:

    e.g.
    2 => [ 'a', 'b', 'c' ]

    phoneNumberToString("23") => [ ad, ae, af, bd, be, bf, cd, ce, cf ]
*/


/*
    Design a raffle system that has the functionality to addPlayer(email), 
    removePlayer(email), and pickWinner(), all in constant time.
*/
/*

*/
