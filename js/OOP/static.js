class MathUtils {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error('Numbers param could not be empty.')
    }

    let total = 0
    for (const num of numbers) {
      total += num
    }
    return total
  }
}

const res = MathUtils.sum()
console.log(`sum: ${res}`)
