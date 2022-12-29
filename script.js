// สูตรที่ 1
function result(rV,rn,rT){
    let total = (rn * 8.31 *rT) / rV ;
    return total
}

function resP(total){
    let rV=parseFloat(document.getElementById('rV').value);
    let rn=parseFloat(document.getElementById('rn').value);
    let rT=parseFloat(document.getElementById('rT').value);
    let rall=result(rV,rn,rT)
    document.getElementById('total').value=rall.toFixed(3);
}

// สูตรที่ 2
function result1(rV1,rN1,rT1){
    let total1 = ((rN1 * (1.38)**(-23) * rT1) / rV1) ;
    return total1
}

function resP1(total1){
    let rV1=parseFloat(document.getElementById('rV1').value);
    let rN1=parseFloat(document.getElementById('rN1').value);
    let rT1=parseFloat(document.getElementById('rT1').value);
    let rall1=result1(rV1,rN1,rT1)
    document.getElementById('total1').value=rall1.toFixed(3);
}