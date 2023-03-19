
const phonePrice=1100;
const casrPrice=50;
const phoneTK=parseInt(document.getElementById("Phone_price").innerText);
const caseTK=parseInt(document.getElementById("case_price").innerText);
const button_phonePLuse=document.getElementById("phone_plus");
const button_phoneMinus=document.getElementById('phone_minus');
const button_casePlus=document.getElementById('case_plus');
const button_caseMinus=document.getElementById('case_minus');
const caseInput=parseInt(document.getElementById("case_input").value);
const phoneInputvalue=parseInt(document.getElementById("phone_input").value)
const inPut=document.getElementsByTagName('input')


button_phonePLuse.addEventListener('click',function(){
    const phoneInput=parseInt(document.getElementById("phone_input").value)
    const phoneTK=parseInt(document.getElementById("Phone_price").innerText)
   let totalquantity=phoneInput+1

   document.getElementById("phone_input").value=totalquantity
   let showPhntk=phoneTK +phonePrice
   document.getElementById("Phone_price").innerText=showPhntk
   let subtotal =parseInt(document.getElementById("sutotal").innerText)
   let tex=document.getElementById("sutotal").innerText=subtotal+phonePrice
    tax=tex *.10
   console.log(tax)
   document.getElementById('tax').innerText=tax
  document.getElementById('grand_total').innerHTML=tex+ tax
  let doubletax=tex+ tax
});

  

button_phoneMinus.addEventListener('click',function(){
    const phoneInput=parseInt(document.getElementById("phone_input").value);
    const phoneTK=parseInt(document.getElementById("Phone_price").innerText);
    let totalquantity=phoneInput-1
    document.getElementById("phone_input").value=totalquantity
    let showPhntk=phoneTK -phonePrice
    document.getElementById("Phone_price").innerText=showPhntk
    let  subtotal =parseInt(document.getElementById("sutotal").innerText)
    let tex=document.getElementById("sutotal").innerText=subtotal-phonePrice
    tax=tex *.10
    console.log(tax)
    document.getElementById('tax').innerText=tax
let granTotal=parseInt(document.getElementById('grand_total').innerHTML)
let doubletax=tex+tax
document.getElementById('grand_total').innerHTML=tex+ tax
});


button_casePlus.addEventListener("click",function(){
    const caseInput=parseInt(document.getElementById("case_input").value);
    let newInputvalue=caseInput+1
    document.getElementById("case_input").value=newInputvalue
    let casetk=parseInt(document.getElementById('case_price').innerText)
    let showcaseTK=casetk +casrPrice
    document.getElementById('case_price').innerText=showcaseTK
    let  subtotal =parseInt(document.getElementById("sutotal").innerText)
    let tex = document.getElementById("sutotal").innerText=subtotal+casrPrice

   tax=tex *.10
    console.log(tax)
    document.getElementById('tax').innerText=tax
    document.getElementById('tax').innerText=tax
    document.getElementById('grand_total').innerHTML=tex+ tax
});

button_caseMinus.addEventListener('click',function(){
    const caseInput=parseInt(document.getElementById("case_input").value);
    let newInputvalue=caseInput-1
    document.getElementById("case_input").value=newInputvalue
    let casetk=parseInt(document.getElementById('case_price').innerText)
    let showcaseTK=casetk -casrPrice
    document.getElementById('case_price').innerText=showcaseTK
    let  subtotal =parseInt(document.getElementById("sutotal").innerText)
    let tex = document.getElementById("sutotal").innerText=subtotal-casrPrice
    document.getElementById('tax').innerText=tax
    let granTotal=parseInt(document.getElementById('grand_total').innerHTML)
    let doubletax=tex+ tax
    document.getElementById('grand_total').innerHTML=granTotal-doubletax
    tax=tex *.10
    console.log(tax)
    document.getElementById('tax').innerText=tax
    document.getElementById('tax').innerText=tax
    document.getElementById('grand_total').innerHTML=tex+ tax
})



