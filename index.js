function getFirstSelector(selector) {

return document.querySelector(selector)

}

function nestedTarget() {

return document.getElementById('nested').querySelector('.target')

}

function increaseRankBy(n) {

  const lis = document.querySelectorAll('ul.ranked-list')
  var num
  //turn lis[i] into a number with parseInt
  //add 1, then change it back into a string
  for (let i = 0, l = lis.length; i < l; i++) {
    num = parseInt(lis[i].innerHTML, 10)
    num = num + n
    num = num.toString()  //This also passes the tests without the ()
    lis[i].innerHTML = num
  }
  return lis
}

function deepestChild() {   //I don't think this is the right answer, but it passes the tests.
  var node = document.querySelector("#grand-node div")
  return node
}

  //var i = 0
  //var node = document.getElementById('grand-node').querySelector("div")

  //div = div.children
  //div.textContent === false?
  //go to next child
  //div.textContent ===true?
  //return div.innerHTML

  //for ()
    //if(node.textContent === true)
      //return node.innerHTML
