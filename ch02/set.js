const s = new Set();
s.add(false); // add(요소)로 Set에 추가된다.
s.add(1);
s.add('1');
s.add(1); //중복이므로 무시됨
s.add(2);

console.log(s.size); //중복이 제거되어 4

//has(요소)로 요소 존재 여부를 확인
console.log(s.has(1)); //true

for(const a of s){
    console.log(a); // false 1 '1' 2
}

s.forEach((a) => {
    console.log(a);
});

s.delete(2); //delete(요소)로 요소를 제거
s.clear(); //clear()로 전부 제거

//중복 제거
const arr = [1, 3, 2, 7, 2, 6, 3, 5];

const set = new Set(arr);
const result = Array.from(set); //Set -> Array
console.log(result); // 1, 3, 2, 7, , 5

