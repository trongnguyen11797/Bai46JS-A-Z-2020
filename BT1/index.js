/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */
function done() {
    console.log('Happy new year');
}
function countDown(x) {
    let a = setInterval(() => {
        if(x < 0) {
            clearInterval(a);
            done();
        }
        else console.log(x--);
    }, 1000)
}

countDown(5);