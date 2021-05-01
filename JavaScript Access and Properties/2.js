function printName() {
    console.log(this.firstname + ' ' + this.lastname)
}

var me = {
    firstname: 'Rishwi',
    lastname: 'Prakash',
}

printName.call(me)

var arr = [1, 2, 3, 4, 5]

console.log(Math.max.apply(null, arr))
