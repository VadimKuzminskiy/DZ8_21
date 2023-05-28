function generateList(array) {
    let result = '<ul>';

    for (let i = 0; i < array.length; i++) {
        result += '<li>';

        if(Array.isArray(array[i])) {
            result += generateList(array[i]);
        } else {
            result += array[i];
        }
        result += '</li>';
    }
        result += '</ul>';
        return result;
}

const list = generateList([1, 2, [1.1, 1.2, 1.3], 3]);
// console.log(list);
document.getElementById('container').innerHTML = list;