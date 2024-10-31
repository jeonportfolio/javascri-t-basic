 const n = 0 

const num1 =  n || 7
console.log(num1) //7

//Nullish 병합 연산자를 사용한 경우 

const num2 = n ?? 7
console.log(num2) // 0 null, undefined만 제외하고 모든 값 
console.log(undefined ?? 2) // 2가 출력 
console.log(null ?? undefined) // undefined 출력 (반환되는 값이 없어서 마지막값으로)

//전개 연산자 
const a = [1,2,3]

console.log(...a) // 1 2 3으로 출력
console.log(1,2,3) // 1 2 3 똑같은 결과

const c = a.concat(b)
console.log(c) //[1,2,3,4,5,6]
const d = [...a, ...b] //[1,2,3,4,5,6]

const a1 = {x:1, y:2}
const b1 = {y:3, z:4}

const c1 = Object.assign({},a,b) 
console.log(c1)//{x:1,y:3,z:4}

const d1 = {...a , ...b}
console.log(d1) // {x:1,y:3,z:4}

//구조 분해 할당 

const arr  = [1,2,3]; //배열을 선언하고 ;찍어준다.
[,b,c] //arr에 맞게 구조를 맞춰줘야 b와 c에 2,3이 들어간다

const arr1 = [1,2,3]
const [aa, rest] = arr
console.log(aa,rest) //1,2 출력 

const obj = {
    a:1,
    b:2,
    c:3,
    x:7
}
const { x = 4, a:int, y: ten = 10 } = obj
const {...rest1} = obj
console.log(rest1)/// 1,2,3,7 
console.log(x,int, ten ) // 7, 1 ,10 이 추출된다.

//선택적 체이닝

const user = undefined
console.log(user?.name) //원래 에러가 나오는데 이렇게 하면 undefined가 나오게 됨 


const userA = {
    name:'HI',
    age: 85,
    address: {
        country:'korea',
        city:'seoul'
    }
}

function getcity(user) {
    return user.address.city 
}
console.log(getcity(userA)) //seoul 출력

function getcity1(user) {
    return user.address?.duty || '의무 없음'
}// 의무없음 출력


//switch문 

switch (조건) {
    case 값1:
        //조건이 값1일때 실행 
        break
    case 값2:
        break
    default:
        //  조건이 값1도 값2도 아닐 때 실행
}


// for 반복문 

for (초기화; 조건; 증감) {

}

for (let i = 9; i > -1; i -= 1) {
    if(i < 4) {
        break
    }
    console.log(i)
}// 9,8,7,6,5,4 

for (let i = 9; i > -1; i -= 1) {
    if(i % 2 === 0) {
        continue
    }
    console.log(i)
}// 9,7,5,3,1

const fruits = ['Apple', 'Bannana', 'cherry']

for (const a of fruits) {
    console.log(a)
}// apple,bannana,cherry가 전부 나오게 됨 

const userd = {
    name : 'hi',
    age:85,
    inValid:true,
    email:"22@22.com"
}

//객체데이터에서는 in을 쓴다 
for (const key in userd) {
    console.log(key) // name, age,invalid,email
    console.log(user[key]) // name ,hi , age,85, invalid, true, email, 22@22.com
}


// Do while문

let m = 0

while(m) {
    console.log(m)
} // 0은 false이므로 실행 불가

do {
    console.log(m)
     m += 1
} while(m < 4)   
//참거짓을 보지 않고 일단 do문을 실행한다.
//0,1,2,3출력  