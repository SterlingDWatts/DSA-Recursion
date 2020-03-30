const dsaRecursion = {
  countingSheep(numSheep) {
    if (numSheep === 1) {
      return console.log("All sheep jumped over the fence")
    }
    console.log(`${numSheep}: Another sheep jumps over the fence`)
    return this.countingSheep(numSheep - 1)
  },
  powerCalculator(baseInt, exponentInt) {
    if (exponentInt <= 0) {
      return console.log("Exponent should be greater than or equal to zero")
    } else if (exponentInt === 1) {
      return baseInt
    }
    return baseInt * this.powerCalculator(baseInt, exponentInt - 1)
  },
  reverseString(string) {
    if (string.length === 1) {
      return string
    }
    return this.reverseString(string.slice(1)) + string[0]
  },
  nthTriangularNumber(number) {
    if (number === 1) {
      return number
    }
    return number + this.nthTriangularNumber(number - 1)
  },
  stringSplitter(string, splitter) {
    if (!string.includes(splitter)) {
      return [string]
    }
    const firstInstance = string.indexOf(splitter)
    return [string.slice(0, firstInstance), ...this.stringSplitter(string.slice(firstInstance + 1), splitter)]
  },
  fibonacci(number) {
    if (number <= 0) {
      return []
    } else if (number === 1) {
      return [1]
    } else if (number === 2) {
      return [1, 1]
    }
    const fibSequenceWithoutNumber = this.fibonacci(number - 1)
    const currentFibNumber = fibSequenceWithoutNumber[0] + fibSequenceWithoutNumber[1]
    return [currentFibNumber, ...fibSequenceWithoutNumber]
  },
  factorial(number) {
    if (number <= 0) {
      return 0
    } else if (number === 1) {
      return 1
    }
    return number * this.factorial(number - 1)
  },
  mazeNavigator(mazeArray, xLoc = 0, yLoc = 0, directions = []) {
    if (mazeArray[yLoc][xLoc] === "e") {
      return directions
    } else if (!mazeArray[yLoc][xLoc] || mazeArray[yLoc][xLoc] == "*") {
      return 
    }
  }
}

module.exports =  dsaRecursion;