function func() {
    this.x = 10
    this.y = 20
}

func.prototype.z = 30

func.prototype.hello = () => {
    console.log('hello')
}

var obj = new func()

console.log(obj.x, obj.y, obj.z)
obj.hello()
