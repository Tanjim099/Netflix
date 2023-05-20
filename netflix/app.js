const accordionItems = document.querySelectorAll(".accordion_item");
Array.from(accordionItems).forEach(item=>{
    const accordionTitles = item.querySelector(".accordion_title");
    accordionTitles.addEventListener("click", ()=>{
        item.classList.toggle("active")
    })
});


// const homePageEmailid = document.getElementById("hero_inputbox").Value;
const homePageGetStartBtn = document.getElementsByClassName("homepagegetstartedbtn")[0];

homePageGetStartBtn.addEventListener("click", ()=>{
    const homePageEmailid = document.getElementsByClassName("homepageemail")[0].value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailPattern.test(homePageEmailid)){
        location = "https://www.netflix.com/signup/password?locale=en-IN";
    }
})