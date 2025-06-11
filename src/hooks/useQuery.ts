import { useState, useEffect, useCallback } from 'react'

export interface QueryResult<TData, TError = unknown> {
  data: TData | null
  isLoading: boolean
  isError: boolean
  error: TError | null
}

export function useQuery<TData, TError = unknown>(
  url: string,
  options?: RequestInit
): QueryResult<TData, TError> {
  const [data, setData] = useState<TData | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const [error, setError] = useState<TError | null>(null)

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    setIsError(false)
    setError(null)
    try {
      const response = await fetch(url, options)

      if (!response.ok) {
        let errorBody: unknown
        try {
          errorBody = await response.json()
        } catch (_parseError) {
          errorBody = {
            status: response.status,
            statusText: response.statusText,
            message: `Erreur HTTP ${response.status}: ${response.statusText}`
          }
        }

        throw errorBody as TError
      }

      const jsonResponse: TData = await response.json()
      setData(jsonResponse)
    } catch (err: unknown) {
      setIsError(true)
      setError(err as TError)
      console.error('Erreur lors de la récupération des données :', err)
    } finally {
      setIsLoading(false)
    }
  }, [url, options])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, isLoading, isError, error }
}
