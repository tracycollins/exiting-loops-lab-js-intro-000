function breakOut(array, changeValue, stopValue) {
  array.forEach((element,index, array) => {
    if (element === stopValue){
      break
    }
      array[index] = changeValue
  })
  return array
}

function keepGoing(array, changeValue, skipValue) {

}

function findBy(array, findFn) {

}
