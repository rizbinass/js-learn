var n = '';

for(var p = 1; p < 12;p++){
    for(var l = 10;l >= p;l--){
        n += ' ';
    }
    for(var h = 0; h < p;h++){
        n += '*';
    }
    for(var i = 0;i < p;i++){
        n += '*';
    }

    n += '\n';
}
console.log(n);