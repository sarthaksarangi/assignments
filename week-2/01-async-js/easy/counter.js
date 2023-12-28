function counter(){
    let x =0;
    setInterval(()=>{
        x++;
        console.log(x+ " seconds");
    },1000)
}
counter();

function count() {
    let count = 0;
  
    function display() {
      console.log(count);
      count++;
      setTimeout(display, 1000);
    }
  
    display();
  }
  
  // Example: Count from 0 to 5
 count();
  
