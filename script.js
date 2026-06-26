let selectedDate = ""; 
let selectedTime = "";
let selectedFood = "";

function nextScreen(number){

    document
        .querySelector(".active")
        .classList
        .remove("active");

    document
        .getElementById("screen"+number)
        .classList
        .add("active");
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("click", ()=>{

    const x = Math.random()*150-75;
    const y = Math.random()*150-75;

    noBtn.style.transform =
        `translate(${x}px,${y}px)`;

});

function saveDateTime(){ 

    selectedDate = document.getElementById("date").value;
    selectedTime = document.getElementById("time").value;

    if(selectedDate === "" || selectedTime === ""){
        alert("Выбери дату и время 😊");
        return;
    }

    nextScreen(4);

}

function chooseFood(food) { 

    selectedFood = food;

    document.getElementById("customFood").value = "";

    document.querySelectorAll(".food button").forEach(btn => {
        btn.classList.remove("selected");
    });

    event.target.classList.add("selected");
}

function saveCustomFood(){ 

    const custom = document.getElementById("customFood").value.trim();

    if(custom !== ""){
        selectedFood = custom;
    }

    if(selectedFood === ""){
        alert("Выбери блюдо или напиши свой вариант 😊");
        return;
    }

    document.getElementById("result").innerHTML = `
        📅 <b>Дата:</b> ${selectedDate}<br><br>

        ⏰ <b>Время:</b> ${selectedTime}<br><br>

        🍽️ <b>Еда:</b> ${selectedFood}<br><br>

        Уже жду наше свидание ❤️
        <br>Ну а сегодня мы идем есть сладкое?)))</br> 
    `;

    nextScreen(5);
}

    



