function urutAngka() {
    let numbers = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

    console.log('Sebelumnya : ' + numbers);

    function number() {
        console.log('Ascending : ' + numbers.sort());
        console.log('Descending: ' + numbers.reverse());
    }
    number();

    return numbers;
}
urutAngka();