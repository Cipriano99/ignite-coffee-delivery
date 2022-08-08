import axios from 'axios'

export const userData = async (): Promise<{
  type: 'location' | 'all-data' | 'error'
  data: any
}> => {
  const thereIsData = localStorage.getItem('@coffee-delivery:user-data-0.0.1')

  if (thereIsData?.length) {
    const data = JSON.parse(thereIsData)
    return {
      type: 'all-data',
      data,
    }
  }

  const apiURL = 'https://ipgeolocation.abstractapi.com/v1/'
  const apiKey = '1b0e8d0cb3c24c839716567c708ba74f'

  try {
    const { data } = await axios.get(`${apiURL}?api_key=${apiKey}`)
    return { type: 'location', data }
  } catch (error) {
    return { type: 'error', data: null }
  }
}
