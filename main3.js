// 부장 비교 연산자 
console.log(!0) // true
console.log(!!0) // false 
console.log(!!!0) // true
console.log(!null)//true
console.log(!NaN)//true
console.log(!undefined)//ture
console.log(!{}) //false

//논리연산자 
console.log(1 && 2 && 0) //0이 나온다 무조건true false만 나온는게 아님  
console.log(1 && 0 && 2 )//0이 나온다 0이 false이기 때문에 0만 도출
console.log('A' && 'B' && 'C') // C가 나온다 모두가 참이면 마지막으로 참인값 
console.log('A' && 'B' && '') // 공백이 나옴 false의 값 

//or 연산자 
console.log(false || true) //true
console.log(0 || 1) //1
console.log(false || 0 || {}) // {}가 나옴
console.log(false || [] || null) // [] 가 나옴 
// function(){} 함수 데이터도 true이다 
console.log(false || 0 || NaN) // NaN이 출력된다 false의 제일 마지막 값