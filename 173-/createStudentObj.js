let createStudentObj = (firstName, lastName) => ({firstName: firstName, lastName: lastName})

let result = createStudentObj('Mike', 'Zheng')
console.log(result, typeof result) // { firstName: 'Mike', lastName: 'Zheng' } object