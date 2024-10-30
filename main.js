const string1 = "Hello"
const string2 = 'Hello'
const string3 = `Hello ${string1} ?!` //템플릿 리터럴 
console.log(string3)

const number = 123
const number1 = -123
const pi = .14
const pi1 = 3.14 
console.log(typeof(number + undefined)) // => NaN으로 나옴 
//Typeof는 문자의 타입을 알려준다.

const a = 0.1
const b = 0.2 
console.log(Number((a + b).toFixed(1))) // 그냥 a + b를 하면 0.300000004가 나오게 된다 toFixed를 통해 0.3으로 소수 첫째자리 고정(문자 데이터로 바꿈)


let age = null  // null이 출력 
setTimeout(function() {
    age =85
    console.log(age)
},1000) // 이렇게 값을 넣을 수 있음

let age1 = undefined // 직접 값을 할당하지 않음 암시적 

//객체데이터 생성 
const user = {
    name: "jsu",
    age: 85,
    age: 22
}

const user2 = {
    name: "jsu",
    age: 85,
    parent : user 
}

console.log(user2.parent.name)//user 객체가 그대로 나옴(name의 값)
console.log(user2['parent']['name'])


const users = [user, user2]
console.log(users[0]['name'])



//age가 반복되면 나중에 작성한 수가 값이 된다
const key = 'name'

console.log(user.name)
console.log(user['key'])// 이렇게 추출도 가능함

//배열 

const fruits = new Array('Apple','banana','Cherry') 
const fruit = ['Apple','banana','Cherry'] //배열 리터럴 방식
console.log(fruit[1]) 

//object(객체) 생성자 형태

const man = new Object()
man.name = 'hi' // (key):(value) 키벨류 형태

//함수로 객체데이터 만들기
function User() {
    this.name ='hi'
    this.age =85
}

const uu = new User()
console.log(uu)




