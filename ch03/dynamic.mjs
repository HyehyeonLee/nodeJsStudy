//const a = false; -> 안 됨
const a = true;

if(a){
    //import './func.mjs'; -> 안 됨
    const m1 = await import('../func.mjs');
    console.log(m1);
    const m2 = await import('../var.mjs');
    console.log(m2);
}
//console.log('성공');