function House(bedrooms, bathrooms, numSqft){
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.numSqft = numSqft
}

var firstHouse = House(2,2,1000)
console.log(firstHouse) //undefined