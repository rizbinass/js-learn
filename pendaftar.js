let pendaftar = [];


let tambahPendaftar = function(namaPendaftar, pendaftar){
    if(pendaftar.length === 0){
        pendaftar.push(namaPendaftar);
        return pendaftar;
    }else{
        for(let i = 0; i < pendaftar.length; i++){
            if(pendaftar[i] == undefined){
                pendaftar[i] = namaPendaftar;
                return pendaftar;
            }else if(pendaftar[i] == namaPendaftar){
                console.log(`${namaPendaftar} sudah mendaftar`)
                return pendaftar;
            }else if(i == pendaftar.length -1){
                pendaftar.push(namaPendaftar);
                return pendaftar;
            }
        }
    }
}

let hapusPendaftar = function (namaPendaftar, pendaftar){
    if(pendaftar.length === 0){
        console.log(`Belum ada yang mendaftar.`);
    }else{
        for(let i = 0; i < pendaftar.length; i++){
            if(pendaftar[i] == namaPendaftar){
                pendaftar[i] = undefined;
                return pendaftar;
            }else if(i = pendaftar.length -1){
                console.log(`${namaPendaftar} belum mendaftar.`);
            }
        }
    }
    return pendaftar;
}