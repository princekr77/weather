const selectState = document.querySelector("select.state");
const selectDistrict = document.querySelector("select.district");
const temp = document.querySelector("p.temp");
const about = document.querySelector("p.about");
const icon = document.querySelector("img.icon");
const speed = document.querySelector("p.speed");
const quantity = document.querySelector("p.quantity");
const pressure = document.querySelector("p.value");
const uv = document.querySelector("p.result");
const date = document.querySelector("p.update");


for (const count of state) {
    let newOption = document.createElement("option");
    newOption.value = count;
    newOption.innerText = count;
    selectState.append(newOption);
}

const distoptions = (val)=>{
    for (i in district){
        if (district[i].state==val){
            for (const count1 of district[i].districts) {
                let newOption = document.createElement("option");
                newOption.value = count1;
                newOption.innerText = count1;
                selectDistrict.append(newOption);

            }
        }
    }
}

const content = (data)=>{
    temp.textContent=data.current.temp_c;
    about.textContent=data.current.condition.text;
    icon.src=data.current.condition.icon;
    speed.textContent=data.current.wind_kph;
    quantity.textContent=data.current.humidity;
    pressure.textContent=data.current.pressure_mb;
    uv.textContent=data.current.uv;
    date.textContent=data.current.last_updated;
}

async function mainprogram(value){
    let url=`https://api.weatherapi.com/v1/current.json?key=34ddaf7156824bcf907171359241912&q=${value}&aqi=no`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    content(data);
}

selectState.addEventListener("change",(eve)=>{
    distoptions(eve.target.value);
    console.log(eve.target.value);
})
// console.log(eve.target.value): Inside the event handler, this line logs the value of the currently selected option to the console.

// eve.target: Refers to the element that triggered the event (in this case, the select element).
// .value: This property retrieves the value of the currently selected option from the dropdown.

selectDistrict.addEventListener("change",(eve)=>{
    mainprogram(eve.target.value);
    // console.log(eve.target.value);
})