const billAmount = document.getElementById("bill")

const numberOfPeople = document.getElementById("numOfPeople")

const tipPerc= document.getElementsByClassName("tipInputPercentage")

const totalTipPerPerson = document.getElementById("totalTip")

const totalPerPerson = document.getElementById("totalPerPerson")

const sectionContainer = document.getElementById("sectionContainer")

const reset = document.getElementById("reset")

//variables
let billAmountVar=0;
let tipPercVar=5;
let tipValue=0;
let numberOfPeopleVar=1;
let totalTipPerPersonVar=0;
let totalPerPersonVar=0;

const tips=[].slice.call(tipPerc)

const getTipValue = (tipValue) => { 
    tipPercVar=parseFloat(tipValue.target.value);

}

const getNumberOfPeople = (people)=> { 
    numberOfPeopleVar=parseFloat(people.target.value);
}


const getBillAmount = (bill)=> { 
    billAmountVar =parseFloat(bill.target.value);

}

const calculate = ()=> { 

    tipValue = (billAmountVar*tipPercVar)/100;
    totalTipPerPersonVar=tipValue/numberOfPeopleVar
    totalPerPersonVar = (billAmountVar+tipValue)/numberOfPeopleVar;


    if((!billAmountVar && billAmountVar!=0) || !numberOfPeopleVar) { 
        totalTipPerPerson.style.fontSize="1.5rem"
        totalPerPerson.style.fontSize="1.5rem"
        if(!billAmountVar) { 
          
            totalTipPerPerson.value = "No bill"
            totalPerPerson.value = "No bill"
        }
        else { 
            totalTipPerPerson.value = "no people"
            totalPerPerson.value = "No people"
           
        }

}
else { 

    totalTipPerPerson.value=`$${(totalTipPerPersonVar.toFixed(2))}` ;
    totalPerPerson.value=`$${(totalPerPersonVar.toFixed(2))}` ;
}




}

tips.forEach(tip => {
    tip.addEventListener("input", tipValue=> getTipValue(tipValue))
});

numberOfPeople.addEventListener("input",people=> getNumberOfPeople(people))
   
billAmount.addEventListener("input", bill =>getBillAmount(bill))



sectionContainer.addEventListener("input", calculate)

reset.addEventListener("click", e=> { 
    let billAmountVar=0;
let tipPercVar=5;
let tipValue=0;
let numberOfPeopleVar=1;
let totalTipPerPersonVar=0;
let totalPerPersonVar=0;
})