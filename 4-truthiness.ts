//Truthiness might not be a word you’ll find in the dictionary, but it’s very much something you’ll hear about in JavaScript.

//In JavaScript, we can use any expression in conditionals, &&s, ||s, if statements, Boolean negations (!), and more. As an example, if statements don’t expect their condition to always have the type boolean.

function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
      return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
  }

/*
In JavaScript, constructs like if first “coerce” their conditions to booleans to make sense of them, and then choose their
branches depending on whether the result is true or false. Values like

0
NaN
"" (the empty string)
0n (the bigint version of zero)
null
undefined

all coerce to false, and other values get coerced true. You can always coerce values to booleans by running them through the Boolean function, or 
by using the shorter double-Boolean negation. (The latter has the advantage that TypeScript infers a narrow literal boolean type true, while 
    inferring the first as type boolean.)
*/

function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }