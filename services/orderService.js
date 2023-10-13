import baseService from "./baseService";

const OrderService = {
    getOrder: async (id) => baseService.httpGet(`/api/orders/${id}`),
    getOrders: async () => baseService.httpGet('/api/orders'),
    createOrder: async (body) => baseService.httpPost('/api/orders', body),
    editOrder: async (id, body) => baseService.httpPut(`/api/orders/${id}`, body ),
    deleteOrder: async (id) => baseService.httpDelete(`/api/orders/${id}`),
}

export default OrderService
