const apiUrl = process.env.NEXT_PUBLIC_API_URL

const validate = async (response) => {
  if (response.status >= 400) {
    throw response
  }
  return response.json()
}

const getBody = (body) => JSON.stringify(body)

export const buildUrl = (url, params = {}) => {
  const queries = Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
    )
    .join('&')

  return queries.length ? `${apiUrl}${url}?${queries}` : `${apiUrl}${url}`
}

const baseService = {
  httpGet: async (url, params = {}) => {
    try {
      const response = await fetch(buildUrl(url, params), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      return validate(response)
    } catch (e) {
      console.error(e)
    }
  },
  httpPost: async (url, body = {}) => {
    const response = await fetch(buildUrl(url), {
      method: 'POST',
      body: getBody(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return validate(response)
  },
  httpPostFiles: async (url, formData) => {
    const response = await fetch(buildUrl(url), {
      method: 'POST',
      body: formData,
      headers: {
      },
    })
    return validate(response)
  },
  httpPut: async (url, body = {}, params = {}) => {
    const response = await fetch(buildUrl(url, params), {
      method: 'PUT',
      body: getBody(body),
      headers: {
        'Content-Type': 'application/json',
        accept: ' */*',
      },
    })

    return validate(response)
  },
  httpDelete: async (url, body = {}, params = {}) => {
    const response = await fetch(buildUrl(url, params), {
      method: 'DELETE',
      body: getBody(body),
      headers: {
        'Content-Type': 'application/json',
        accept: ' */*',
      },
    })

    return validate(response)
  },
}

export default baseService
