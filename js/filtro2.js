const negro = document.getElementById ('button-color-negro');

fetch ("stock.json") 
    .then (res => res.json())
    .then (data => {
        console.log(data);
    })