A.Print odd numbers in an array

const numbers = [8, 19, 5, 6, 14, 9, 13];
const odds = [];
for (const num of numbers) {
  if (num % 2 === 1) {
    odds.push(num);
  }
}
console.log(odds);

               B
               
               
               function titleCase(str) {
                str = str.toLowerCase().split(' ');
                for (var i = 0; i < str.length; i++) {
                    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
                }
                return str.join(' ');
                }
  console.log(titleCase("GEEKS FOR GEEKS"));

              C


              
              var arr = [4, 8, 7, 13, 12]
              var sum = 0;
              for (let i = 0; i < arr.length; i++) {
                     sum += arr[i];
                 }
                  
                 console.log("Sum is " + sum)
 
                 D Problrm 4 
                 
                 
                const array = [-5, -3, -2, -1, ...Array(20).keys()]; 
                 // Array(20).keys() generates numbers from 0 to 19.
                 
                 function isPrime(num) {
                   for (let start = 2; num > start; start++) {
                     if (num % start == 0) {
                       return false;
                     }
                   }
                   return num > 1;
                 }
                 
                 console.log(array.filter(isPrime));


                 program 5
                 
                 
                 function isPalindrome(word) {
                  const firstHalf = word.slice(0, Math.ceil(word.length/2));
                  const secondHalfReversed = word.slice(Math.floor(word.length/2)).split('').reverse().join('');
          
                  return firstHalf === secondHalfReversed;
              }
          
              function getPalindromesFromArray(arr) {
                  return arr.filter(isPalindrome);
              }
          
              const wordsArr = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];
          
              console.log(getPalindromesFromArray(wordsArr));


              program 6
              
              var arr = ["apple", "mango", "apple", 
              "orange", "mango", "mango"];
        
      function removeDuplicates(arr) {
          return arr.filter((item, 
              index) => arr.indexOf(item) === index);
      }
        
      console.log(removeDuplicates(arr));

      problem 7
      
      
      function RightRotate(a, n, k)
      {
        
          
          k = k % n;
        
          for (let i = 0; i < n; i++) {
              if (i < k) {
        
                
                  document.write(a[n + i - k] + " ");
              }
              else {
        
                
                  document.write((a[i - k]) + " ");
              }
          }
          document.write("<br>");
      }
        
      let Array = [1, 2, 3, 4, 5];
      let N = Array.length;
      let K = 2;
        
      RightRotate(Array, N, K);



      programs in arrow functions.
      
      
      for (var i = 0; i <= 10; i++) {
        if (i % 2 != 0) {
          console.log(i)
        }
      }


             program 2


             function titleCase(str) {
              return str.toLowerCase().split(' ').map(function(word) {
                  return (word.charAt(0).toUpperCase() + word.slice(1));
              }).join(' ');
              }
              console.log(titleCase("converting string to titlecase"));


              program 3


              var arr = [4, 8, 7, 13, 12];
 
function sumArray(arr, index) {
    if (index === arr.length) {
        return 0;
    }
    return arr[index] + sumArray(arr, index + 1);
}
 
console.log("Sum is " + sumArray(arr, 0));

            program 4


            var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

            numArray = numArray.filter((number) => {
              for (var i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) return false;
              }
              return true;
            });
            
            console.log(numArray);

            problem 5
            
            
            let arr = ["foo", "racecar", "pineapple", "porcupine", "pineenip",'pap','aaaa'];
            let palindromes = arr.filter(w => {
              let len = w.length;
              for (let i = 0; i < len / 2; i++) {
                if (w[i] == w[len - i - 1]) {
                  return true;
                } else {
                  return false;
                }
              }
            });
            console.log(palindromes) 




            
            


 














              



                 


  