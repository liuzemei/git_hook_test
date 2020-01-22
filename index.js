const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: 'token c1691741b7a644bed537733fb58f67152d4ae04e',
        'Content-Type': 'application/json; charset=utf-8'
    }
});1

(async () => {
    try {

        // let { data } = await instance.get('/user/repos')
        // let { data } = await instance.post('/repos/liuzemei/git_hook_test/hooks', {
        let { data } = await instance.patch('/repos/liuzemei/git_hook_test/hooks/176880231', {
            config: {
                url: 'http://118.24.121.133:9089/webhook',
                content_type: 'json',
                // secret: 
            }
        })
        console.log(data)
    } catch (e) {
        console.log(e)
    }
})()