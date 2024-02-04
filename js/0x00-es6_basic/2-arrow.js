/* Rewrite the following standard function
to use ES6’s arrow syntax of the function add
(it will be an anonymous function after) */

/* export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
} */

/* export default function GetNeighborhoodsList () {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square']

  const self = this
  let add
  this.addNeighborhood = add = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood)
    return self.sanFranciscoNeighborhoods
  }
} */

export default function GetNeighborhoodsList () {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square']

  const self = this
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood)
    return self.sanFranciscoNeighborhoods
  }
}
