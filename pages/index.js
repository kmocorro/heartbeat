import Layout from '../components/layout'
import useSwr from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())


export default function Home() {
  const { data, error } = useSwr('/api/trace', fetcher)
  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>
  
  console.log(data)
  
  return (
    <Layout traceData={data} />
  )
}
