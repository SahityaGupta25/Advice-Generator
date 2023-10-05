// let adviceEl = document.getElementById("Advice")
// function advice() {
//     const url = `https://api.adviceslip.com/advice`
//     let result = fetch(url).then((res)=>res.json())
//     console.log(result);
    
// }
// let number = document.getElementById("count")
count = 2
async function fetchRandomAdvice() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
    //   console.log(data.slip.advice);
    //   let advice = (data.slip.advice);
      let radvice = document.getElementById("Advice").innerHTML = data.slip.advice;
      let number = document.getElementById("count")
      number.innerHTML = count
      count++
      
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
