class ValidationError extends Error {
  constructor(message, field) {
    super(message)
    this.field = field
  }
}

class MathUtils {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new ValidationError('Numbers param could not be empty.', 'params')
    }

    let total = 0
    for (const num of numbers) {
      total += num
    }
    return total
  }
}

try {
  console.log(MathUtils.sum())
  console.info("Try block")
} catch (error) {
  if (error instanceof ValidationError) {
    console.info(`Error: (${error.field}) ${error.message}`)
  } else {
    console.info(error)
  }
} finally {
  console.info("End")
}

