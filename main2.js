const a = function(){
    console.log('A')
}

const b = function (c) {
    console.log(c)
    c() //a 라는 함수를 대입했으므로 함수로 호출이 가능함
}

b(123)//123이 출력이 됨
b(a)// A가 출력이 됨

//형변환

const aa = 1
const bb = '1'
console.log( a == b) //동등 연산자 (형변환이 나타남 결과값 ture)
console.log( a === b)// 일치 연산자(type까지 비교 결과값 false)

const aa1 = 0
const bb1 = false
console.log(a == b) // 결과값 true 1과 true도 결과값 true


//참과 거짓 
//거짓이 출력되는 값들 1)0 2)false  3)null 4)undefined 5)NaN 6)'' 7)-0 8)bigInt(정수뒤에 n)

//데이터 확인 
console.log(typeof 'Hello' === 'string')
console.log(typeof null === 'object')
console.log(typeof [] === 'object')
console.log(typeof {} === 'object')
console.log([].constructor === Array) //Array전역함수로 나오게 됨 
console.log({}.constructor === Object) 
console.log(Object.prototype.toString.call(null).slice(8, -1)) // Null이 추출 


function checkType(data) {
    return Object.prototype.toString.call(data).slice(8, -1)
}
console.log(checkType(null)) // null
console.log(checkType([])) // Array
console.log(checkType('hello')) // string
