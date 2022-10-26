let car = {
    drivers: [
        { id: 1, name: 'Ivan', age: 23 },
        { id: 2, name: 'John', age: 36 },
        { id: 45, name: 'Alex', age: 66 },
        { id: 211, name: 'Dmitriy', age: 45 },
        { id: 23, name: 'Max', age: 21 }
    ],

    getDriverInfo: function(nameDriver) {
        for (let i = 0; i < this.drivers.length; i++) {
              if (nameDriver === this.drivers[i].name) {
                console.log(`Имя водителя: ${this.drivers[i].name}. Возраст: ${this.drivers[i].age} лет. Идентификационный номер: ${this.drivers[i].id}.`)
            }
        }        
    }
}

car.getDriverInfo('Ivan')