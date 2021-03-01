import request from '@/utils/request';


export function getProducts(params) {
    return request({
        method: "get",
        url: '/api/products',
        params
    })
}
export function getProductDetail(id) {
    return request({
        method: "get",
        url: `/api/products/${id}`
    })
}
export function getManual(id) {
    return request({
        url: `/api/manuals/${id}`,
        method: 'get'
    })
}