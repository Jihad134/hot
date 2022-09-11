const API_KEY='6e8ad7e7959f872099e3664e61a97982'
const loadData=(city)=>{
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
fetch(url)
.then(res => res.json())
.then(data =>displyShow(data))
}
const displyShow=data=>{
    SetByTEXT("temperature",data.main.temp)
    SetByTEXT("condition",data.weather[0].main)
    SetByTEXT("city",data.name)
//    console.log(data.name)
}
const SetByTEXT=(id,text)=>{
    const textData=document.getElementById(id)
    textData.innerText=text
}

document.getElementById("btn").addEventListener("click",function(){
    const inputTdext=document.getElementById("city-name")
    const city=inputTdext.value;
    loadData(city)
})
loadData('');