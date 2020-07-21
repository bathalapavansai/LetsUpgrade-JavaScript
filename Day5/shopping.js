var shoppingList = ['milk','snacks','eggs','vegetables'];
var shoppingBasket=[];
document.getElementById("shoppingList").innerHTML="Shopping List : " +shoppingList;
document.getElementById('shoppingBasket').innerHTML="Shopping Basket : empty"
function copyList()
{
    shoppingBasket=[shoppingList];
    document.getElementById("shoppingBasket").innerHTML="Shopping Basket : "+shoppingBasket;
}
function addItem()
{
    x=document.getElementById("item").value;
    shoppingBasket.push(x);
    document.getElementById("shoppingBasket").innerHTML="Shopping Basket : "+shoppingBasket;

}   