import useSWR from 'swr'

export function fetchApiDataWithPromise(url, parseResp) {
  new Promise((good, bad) => {
    const {data, err} = fetchApiData(url, parseResp);
    if (err) bad(err)
    if (data) good(data);
  })

}

// TODO: update this to axios
export default function fetchApiData(apiUrl, parseResp) {
  const fetcher = (url) => fetch(url).then(parseResp)
  return useSWR(apiUrl, fetcher)
}
