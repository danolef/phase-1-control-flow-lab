function scuberGreetingForFeet(distanace){
  // Write your code here!
  if (distanace <= 400) {
    return 'This one is on me!'
  } else if (distanace > 2500) {
    return 'No can do.'
  } else if (distanace > 2000) {
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
 return city ==="NYC"? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
  // Write your code here!
}