import axios from 'axios'

export default function request(params:any){
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            timeout: 30 * 1000
        })

        instance.interceptors.request.use(
            (config:any) => {
                return config;
            },
            (error: any) => {
                return Promise.reject(error)
            }
        )
        instance(params).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}