/* eslint-disable array-callback-return */

function gradingStudents (grades) {
  const gradingRound = grades.map(grade => {
    if (grade <= 37) return grade

    const axi = grade

    grade = Math.ceil(+(grade + 'e' + -1))

    grade = +(grade + 'e' + 1)

    const round = grade - axi > 5 ? axi + (5 - (axi % 5)) : grade

    if ((round - axi) >= 3) return axi

    if ((grade - axi) > 5 && (grade - axi) > 0) return axi + (5 - (axi % 5))

    if ((grade - axi) < 5) return grade

    return axi
  })

  return gradingRound
}
const two = gradingStudents([73, 67, 38, 33, 37, 95, 74])

console.log(two)
