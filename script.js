

const app = document.getElementById("app");
const row = document.createElement("div");
row.setAttribute("class", "row gap-3 justify-content-center")


const maxNum = 100;
const three = "Fizz";
const five = "Buzz";

app.append(row);
for(i=1; i<=maxNum; i++){
    console.log(i)

    if(i % 3 === 0 && i % 5 === 0){
        const myDiv = document.createElement("div");
        myDiv.innerHTML= three+five;
        myDiv.setAttribute("class", "col-1 box three-five")
        row.append(myDiv); 

    }else if(i % 3 === 0){
        const myDiv = document.createElement("div");
        myDiv.innerHTML=three;
        myDiv.setAttribute("class", "col-1 box three")
        row.append(myDiv);

    }else if(i % 5 === 0)
    {
        const myDiv = document.createElement("div");
        myDiv.innerHTML=five;
        myDiv.setAttribute("class", "col-1 box  five")
        row.append(myDiv);
    }else{
        const myDiv = document.createElement("div");
        myDiv.innerHTML=i;
        myDiv.setAttribute("class", "col-1 box common-number")
        row.append(myDiv);  
    }


    

}