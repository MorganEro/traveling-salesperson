const weeklyMiles = [11, 15, 12, 11, 9, 5, 4]
let totalMiles = 0

for (mileage of weeklyMiles) {
    totalMiles += mileage
}

const averageMiles = totalMiles / weeklyMiles.length
    
console.log(`I average ${averageMiles} miles each weak.`)
console.log(`I have driven a total of ${totalMiles} miles.`)