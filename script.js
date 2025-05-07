let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
//let arr= Array.from(buttons);
buttons.forEach(button =>{
    button.addEventListener('click',(e) =>{
        const value=e.target.innerHTML;
        if (value === '=') {
            try {
        /*if(e.target.innerHTML =='='){
            String=eval(string);
            input.value = string;

        }

        else if(e.target.innerHTML=='Ac'){
            string ="";
            input.value=string;

        }
        else if (e.target.innerHTML=='DEL'){
            string= string.substring(0, string.length-1);
            input.value=string;

        }

        else{

            string +=e.target.innerHTML;
            input.value = string;
        }

    })
})*/
string = Function('"use strict";return (' + string + ')')();
input.value = string;
} catch {
input.value = "Error";
string = "";
}
} else if (value === 'Ac') {
string = "";
input.value = "";
} else if (value === 'DEL') {
string = string.slice(0, -1);
input.value = string;
} else {
string += value;
input.value = string;
}
});
});






