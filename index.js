const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: 'token 539b70bec4bcf2f458aca5378ef7288a37111f41',
        'Content-Type': 'application/json; charset=utf-8'
    }
});

(async () => {

    // let { data } = await instance.get('/user/repos')
    // let { data } = await instance.post('/repos/liuzemei/git_hook_test/hooks', {
    let { data } = await instance.patch('/repos/liuzemei/git_hook_test/hooks/176880231', {
        config: {
            url: 'http://118.24.121.133:9089/webhook'
        }
    })
    console.log(data)
})()