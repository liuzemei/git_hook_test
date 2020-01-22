const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: 'token fc747a7121a433bd45593cf4299e6c6c276809a3',
        'Content-Type': 'application/json; charset=utf-8'
    }
});

(async () => {
    try {

        // let { data } = await instance.get('/user/repos')
        // let { data } = await instance.post('/repos/liuzemei/git_hook_test/hooks', {
        let { data } = await instance.patch('/repos/liuzemei/git_hook_test/hooks/176880231', {
            config: {
                url: 'http://118.24.121.133:9089/webhook'
                // content_type: 'json'
            }
        })
        console.log(data)
    } catch (e) {
        console.log(e)
    }
})()