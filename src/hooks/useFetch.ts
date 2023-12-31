import { useEffect, useState } from "react"

export const useFetch = (url: string) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  })


  useEffect(() => {
    const getFetch = async () => {
      setState({ ...state, isLoading: true })
      const resp = await fetch(url);
      const data = await resp.json();
      setState({ data, isLoading: false, hasError: null })
    }
    getFetch();
  }, [url])


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}