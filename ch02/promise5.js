const promise1 = Promise.resolve('성공1');
const promise2 = Promise.reject('실패2');
const promise3 = Promise.resolve('성공3');
Promise.allSettled([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
        // [
        //     {status : 'fulfilled', value : '성공1'},
        //     {status : 'rejected', reason : '실패2'},
        //     {status : 'fulfilled', value : '성공3'}
        // ]
    })
    .catch((error) => {
        console.error(error);
    });

// Node 16 버전부터는 reject된 Promise에 catch를 달지 않으면 UnhandledPromiseRejection 에러가 발생
try{
    Promise.reject('에러');
}catch(e){
    console.error(e);
}

Promise.reject('에러').catch(() => {
    // catch 메서드를 붙이면 에러가 발생하지 않음
})