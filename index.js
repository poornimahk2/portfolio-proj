const openI = false
var n
function openUp(elem) {
    if (openI) {
        if (elem === n) {
            n.classList.remove('answer-open')
            n = null
            openI = !openI
        }
        else {
            n.classList.remove('answer-open')
            elem.classList.add('answer-close')
            n = elem
        }
    }
    else {
        elem.classList.add('answer-open')
        n = elem
        openI = !openI
    }
}