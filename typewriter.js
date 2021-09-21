let delay = 0
const sentence = (str) => {  
  for (let i=0; i < str.length; i++) { 
   delay += 50;
    setTimeout(() => {
      process.stdout.write(str[i]);      
    },delay)    
  } 
  // process.stdout.write('\n');
}
setTimeout(() => {
  console.log('')      
},delay)   


sentence("hello there from lighthouse labs\n");
sentence("Another line of code");


  //console.log(char);  // prints each in new line using in-built \n
  // process.stdout.write(char);  // prints each in same line 

