
const showCurrentTime = ()=>{
   
    setInterval(()=>{
        let date = new Date();
        let second = date.getSeconds();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        const ampm = date.getHours() < 12 ? 'AM' : 'PM';
        console.log(`${hour} : ${minutes} : ${second} ${ampm}`);
    },1000);
}
showCurrentTime()