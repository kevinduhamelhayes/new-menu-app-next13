import baseService from "./baseService";

const ProductService = {
    getProduct: async (id) => baseService.httpGet(`/api/products/${id}`),
    getProducts: async () => baseService.httpGet('/api/products'),
    createProduct: async (body) => baseService.httpPost('/api/products', body),
    editProduct: async (id, body) => baseService.httpPut(`/api/products/${id}`, body ),
    deleteProduct: async (id) => baseService.httpDelete(`/api/products/${id}`),
}

export default ProductService
