//icons
const sunIcon = document.querySelector(".sun") 
const moonIcon = document.querySelector(".moon")
//theme variables 
const userTheme = localStorage.getItem("theme")
const systemTheme = window.matchMedia("(prefers-color-scheme: dark").matches

//theme switcher
const iconToggle= () => {
    moonIcon.classList.toggle("display-none")
    sunIcon.classList.toggle("display-none")
}

//check the browser default theme
const themeCheck= ()=>{
    if(userTheme==="dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none")
        return;
    }
    sunIcon.classList.add("display-none");
}

// toggle manually
const themeSwitch=()=>{
    if (document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme","light")
        iconToggle();
    }else{
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme","dark")
        iconToggle();
    }
    return;
}
// handle the click event
sunIcon.addEventListener("click",()=>{themeSwitch()})
moonIcon.addEventListener("click", ()=>{themeSwitch()})
//check again 
themeCheck();