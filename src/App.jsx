import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header'
import data from './data/data.json'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('')
  const url = new URL('https://63d304794abff88834170d21.mockapi.io/ss')
  url.searchParams.append('title', search)

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Response id error reques')
        }
        return response.json()
      })
      .then(dataa => {
        setData(dataa)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [search])

  if (loading) {
    return 'loading ....'
  }

  return (
    <div className="App">
      <Header />

      <input onChange={(e) => setSearch(e.target.value)} type="text" />

      <div className='container'>
        {
          data?.map((item) =>
            <Card
              key={item.id}
              price={item.price}
              oldPrice={item.oldPrice}
              description={item.description}
              title={item.title}
              img={item.image}
            />)
        }
      </div>
    </div>
  );
}

export default App;