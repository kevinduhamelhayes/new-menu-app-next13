import { createContext, useEffect, useState } from 'react'

const ClientContext = createContext({
    client: null,
    setClient: () => {},
}) 

const ClientProvider = ({ children }) => {
    const [client, setClient] = useState(null)
    const [loading, setLoading] = useState(true)
    const values={ client, setClient, loading }

    useEffect(() => {
        const hostnameParts = window.location.hostname.split('.')
        const hasSubdomain = (hostnameParts.length > 2 && hostnameParts[0] !== 'www') || hostnameParts[1] === 'localhost'
        if (!hasSubdomain) {
          setLoading(false)
          return
        }

        fetch('/api/clients')
        .then((response) => response.json())
        .then((data) => {
            const listSubdomain = data.data.map((client) => client.attributes.subdomain)
            const foundSubdomains = listSubdomain.includes(hostnameParts[0])
            const dataClient = data.data.find(client => client.attributes.subdomain === hostnameParts[0])
            if(foundSubdomains) {
                setClient(dataClient.attributes)
            }
        })
        .finally(() => setLoading(false))
    }, [])
    
    return (
        <ClientContext.Provider value={values}>
            { children }
        </ClientContext.Provider>
    )
}

export { ClientContext, ClientProvider }