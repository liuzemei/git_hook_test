const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: 'token da267af6f5ae0952dc7cb35b9e0e795e88ba3406',
        'Content-Type': 'application/json; charset=utf-8'
    }
});

(async () => {
    try {
        let secret = '1417856569'
        // let { data } = await instance.get('/user/repos')
        let { data } = await instance.post('/repos/liuzemei/test2/hooks', {
            // let { data } = await instance.patch('/repos/liuzemei/git_hook_test/hooks/176880231', {
            config: {
                url: 'http://118.24.121.133:9089/webhook',
                content_type: 'json',
                secret
            }
        })
        console.log(data)
    } catch (e) {
        console.log(e)
    }
})()

function hashCode(str) {
    var h = 0;
    var len = str.length;
    var t = 2147483648;
    for (var i = 0; i < len; i++) {
        h = 31 * h + str.charCodeAt(i);
        if (h > 2147483647) h %= t;
    }
    return h;
}

function randomWord(randomFlag, min, max) {
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < range; i++) {
        pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }
    return str;
}
//获取hashcode
function gethashcode() {
    var timestamp = (new Date()).valueOf();
    var myRandom = randomWord(false, 6);
    var hashcode = hashCode(myRandom + timestamp.toString());
    return hashcode;
}