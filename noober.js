// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  // 1. Create a well-named variable for each data point in the Object. 

  let passengerFirstName= ride.passengerDetails.first
  let passengerLastName= ride.passengerDetails.last
  let passengerPhoneNumber= ride.passengerDetails.phoneNumber
  let passengerAddress= ride.pickupLocation.address
  let passengerCity= ride.pickupLocation.city
  let passengerState= ride.pickupLocation.state
  let passengerZip= ride.pickupLocation.zip

  // 2. Create an output variable of the object in a readable format
  let sentence = `${passengerFirstName} ${passengerLastName} - ${passengerPhoneNumber}. Pick up at ${passengerAddress}, ${passengerCity}, ${passengerState} ${passengerZip}`

  // 3 . Output the object with diffenent levels of service given different conditions

  if (ride.purpleRequested == true){
    console.log(`Noober Purple Passenger: ${sentence}`)
  } else if (ride.numberOfPassengers > 3){
    console.log(`Noober XL Passenger: ${sentence}`)
  } else {
    console.log(`Noober X Passenger: ${sentence}`)
  }
   
  // 🔥 YOUR CODE ENDS HERE 🔥
})
