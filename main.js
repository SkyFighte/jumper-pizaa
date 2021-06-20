var name_of_pizzas_array=[];
function sumbit()
{
    var name_1=document.getElementById("name_of_pizza").value;

    var name_2=document.getElementById("name_of_pizza_2").value;

    var name_3=document.getElementById("name_of_pizza_3").value;

    var name_4=document.getElementById("name_of_pizza_4").value;

    var name_5=document.getElementById("name_of_pizza_5").value;

name_of_pizzas_array.push(name_of_pizza);

name_of_name_of_pizzas_array.push(name_of_pizza_2);

name_of_pizzas_array.push(name_of_pizza_3);

name_of_pizzas_array.push(name_of_pizza_4);

name_of_pizzas_array.push(name_of_pizza_5);
console.log(name_of_pizzas_array);
document.getElementById("display_name").innerHTML=name_of_pizzas_array;
document.getElementById("sumbit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting()
{
name_of_pizzas_array.sort();
console.log(name_of_pizzas_array);
document.getElementById("display_name").innerHTML=name_of_pizzas_array;


}