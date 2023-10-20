const m = new Map();

m.set('a', 'b'); //set(키, 값)으로 Map 속성 추가
m.set(3, 'c'); //문자열이 아닌 값을 키로 사용 가능
const d = {};
m.set(d, 'e'); //객체도 키로 가용 가능

//get(키)로 속성값 조회
console.log(m.get(d)); // e

// size로 속성 개수 조회
console.log(m.size); //3

for(const [k, v] of m){ //반복문에 바로 넣어 사용 가능
    console.log(k, v);  // 'a', 'b', 3, 'c', {}, 'e'
} //속성 간 순서 보장

m.forEach((v, k) => { //forEach도 사용 가능
    console.log(k, v);
})
// has(키)로 속성 존재 여부 확인
console.log(m.has(d)); // true
m.delete(d); // delete(키)로 속성을 삭제
m.clear(); // clear()로 전부 제거
console.log(m.size); //0