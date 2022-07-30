// console.log("Hello")
const counter = document.querySelectorAll(".counter");
// console.log(container);
counter.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target"); /*+ is to identify the value as a number like casting*/
        // console.log(typeof(target));
        const count = +counter.innerHTML; // should be 0 at the start
        const increase = target / 200;
        if (count < target) {
            counter.innerText = `${Math.ceil(count + increase)}`; // to get flat value not decimal
            setTimeout(updateCounter, 2);
        }
        else {
            counter.innerText = target;
        }
        
    };
    updateCounter();

})