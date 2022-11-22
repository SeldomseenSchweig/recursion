/** product: calculate the product of an array of numbers. */

function product(nums) {

  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}




/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if(words.length === 1) return words[0].length
      if(words[0].length > words[1].length){
        let oldWords = words.splice(1,1)
        
      return longest(words)
    }else{

      let oldwords = words.splice(0,1)

      return longest(words)
    }




}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  if (idx >= str.length) return newStr;
  newStr += str[idx];
  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  if (str.length === 0 || str.length === 1){
    return true
  }else if(str[0] === str[str.length-1]){
    str = str.split('')
    str.splice(0,1)
    str.splice(str.length-1,1)
    str = str.join('')
    return isPalindrome(str)  
  }else{
    return false
  }
  //   let leftIdx = idx;
  // let rightIdx = str.length - idx - 1;
  // if (leftIdx >= rightIdx) return true;
  // if (str[leftIdx] !== str[rightIdx]) return false;
  // return isPalindrome(str, idx + 1);

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  
  if(i === arr.length ){
    return -1};

   

   if( arr[i] === val ){
    return i;

   }
    
    return findIndex(arr, val, i+1);

  }
    
    
 



/** revString: return a copy of a string, but in reverse. */

function revString(str, copy="", i = -1) {
  
  if(str.length === copy.length) return copy;
  if(i < 0){
    i = str.length-1
  }
  let letter = str[i]
  copy = copy + letter 
  return revString(str,copy,i-1)


}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = []

  for (let key in obj) {
  if(typeof(obj[key]) === "string") arr.push(obj[key])
  if(typeof(obj[key]) === "object") arr.push(...gatherStrings(obj[key]))
}
return arr
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, i=0) {
          console.log(arr[i], val)

        if(i === arr.length ){
          console.log(arr[i], val)

        return -1
      }
       

       if( arr[i] === val ){
        console.log(arr[i], val)
        return i

       }
        
        return binarySearch(arr, val, i+1);

    
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
