// // const square = function (x) {
// //     return x * x
// // }

// const square = (x) => {
//     return x * x
// }

// console.log(square(4))

const event = {
    name:"Opening ceremony",
    guestList: ['ram', 'harry'],
    printGuestList() {
        console.log("The event name " + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is atttending party ' + this.name)
        })
    }
}

event.printGuestList()