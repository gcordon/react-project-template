import request from 'src/api/utils/request'

console.log("request", request)

export const GetList = () => {
    return request({
        url: "/mock/api/list",
        method: 'get'
    })
}


export const GetDetail = (id: string) => {
    return request({
        url: `/request/api/detail/${id}`,
        method: 'get'
    })
}
