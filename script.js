const nums = document.querySelectorAll(".num");
const counter = document.querySelector(".countdown-count");
const counterMessage = document.querySelector(".countdown-message");
const replay = document.querySelector(".countdown-message-replay");

nums.forEach((num) => {
    num.addEventListener("animationend", (e) => {
        if(e.animationName == "state1" && e.target.nextElementSibling){
            e.target.className = "num state-2";
        }else if(e.animationName == "state2" && e.target.nextElementSibling){
            e.target.className = "num";
            e.target.nextElementSibling.className = "num state-1";
        }else{
            counterMessage.classList.remove("hidden");
            counter.classList.add("hidden");
            e.target.className = "num";
            nums[0].className = "num state-1";
        }
    })
})

replay.addEventListener("click", (e) => {
    counterMessage.classList.add("hidden");
    counter.classList.remove("hidden");
})