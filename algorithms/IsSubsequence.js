/*  which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
 In other words, the function should check whether the characters in the first string appear somewhere in the second string,  
 sing - sting = true
 abc - acb = false (order matters)
 */

function isSubsequence(wordOne, wordTwo) {
    let i = 0;
    
    for(let j = 0; j < wordTwo.length; j++){
        if(wordOne[i] == wordTwo[j]){
            i++;
        }
    }
    
    return i == wordOne.length;
}