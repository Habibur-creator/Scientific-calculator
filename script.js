function addChar(input, character) {
    if (input.value == null || input.value == "0") {
        input.value = character;
    } 
    else {
        input.value += character;
    }
}
function sin(form) {
    form.display.value = Math.sin(degToRad(parseFloat(form.display.value)));
}

function cos(form) {
    form.display.value = Math.cos(degToRad(parseFloat(form.display.value)));
}

function tan(form) {
    form.display.value = Math.tan(degToRad(parseFloat(form.display.value)));
}

function degToRad(deg) {
    return deg * (Math.PI / 180);
}

function sqrt(form) {
    form.display.value = Math.sqrt(form.display.value);
}
function ln(form) {
    form.display.value = Math.log(form.display.value);
}
function exp(form) {
    let expr = form.display.value.replace(/\^/g, '**');
    expr = insertImplicitMultiplication(expr);
    form.display.value = eval(expr);
}
function deleteChar(input) {
    input.value = input.value.substring(0, input.value.length - 1);
}
var val = 0.0;
function percent(input) {
    val = input.value; 
    input.value = input.value + "%"; 
}
function changeSign(input) {
    if (input.value.substring(0, 1) == "-") {
        input.value = input.value.substring(1, input.value.length);
    } 
    else {
        input.value = "-" + input.value;
    }
}
function insertImplicitMultiplication(expr) {
    return expr
        .replace(/(\d)\s*\(/g, '$1*(')   
        .replace(/\)\s*(\d)/g, ')*$1')   
        .replace(/\)\s*\(/g, ')*(');     
}

function compute(form) {
    let expr = form.display.value;
    expr = expr.replace(/\^/g, '**');
    expr = insertImplicitMultiplication(expr);
    form.display.value = eval(expr);
}
function square(form) {
    form.display.value = eval(form.display.value) * eval(form.display.value);
}
function checkNum(str) {
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (ch < "0" || ch > "9") {
            if (
                ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "." &&
                ch != "(" && ch != ")" && ch != "%" && ch != "^"
            ) {
                alert("Invalid entry!");
                return false;
            }
        }
    }
    return true;
}