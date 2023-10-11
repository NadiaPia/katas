function updateLight(current) {

    const obj = {
        "green": "yellow",
        "yellow": "red",
        "red": "green"
    }
    return obj[current];
}
console.log(updateLight("yellow"));