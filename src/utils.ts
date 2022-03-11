import qs from 'qs'

const apiUrl = 'http://192.168.68.36:8081/mes/'

interface Config extends RequestInit {
    data?: object;
}

export const http = async (endpoint: string, {data, headers, ...customConfig}: Config = {}) => {
    const config = {
        method: 'GET',
        headers: {
            token: 'aca17eb8dee081eb9bff01cb1e0e2504',
            'ContentType': data ? 'application/json' : ''
        },
        ...customConfig
    }
    if (config.method.toUpperCase() === 'GET') {
        endpoint += `?${qs.stringify(data)}`
    } else {
        config.body = JSON.stringify(data || {})
    }
    return window.fetch(`${apiUrl}/${endpoint}`, config).then(
        async response => {
            const data = await response.json()
            if (response.ok) {
                return data
            } else {
                return Promise.reject(data)
            }
        }
    )
}
