
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix ? matrix.reduce((acc, curr, index) => {
        index % 2 === 0 ? acc.push(curr) : acc.push(curr.reverse());
        return acc.flat();
    }, []) : [];
}
