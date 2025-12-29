import { useEffect, useState } from "react"


export const useFetch = (url) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    const fetchUserDetails = async (signal) => {
        try {
            setLoading(true)
            const response = await fetch(url, { signal })
            if (response.ok) {
                const result = await response.json()
                setData(result)
            } else {
                setError("Something went wrong!")
            }
        } catch (error) {
            if (error.name === "AbortError") {
                console.log('Fetch aborted')
            } else {
                setError("Something went wrong!")
            }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {

        const controller = new AbortController()
        const signal = controller.signal
        fetchUserDetails(signal)

        return () => controller.abort()
    }, [url])

    return { data, loading, error }
}