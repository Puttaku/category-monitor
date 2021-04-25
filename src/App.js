import './App.scss';
import {useEffect, useState} from "react"
import {fetchData} from "./fetch"

function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")

  // this useEffect is used to set data from fetchData() to state
  useEffect(() => {
    fetchData().then(res => setData(res))
  }, [])

  // this this the data that filter by input's value
  const filterData = data.filter(item => item.includes(search))

  // change search value when type input
  function handleChange(e){
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <table className="cateList">
        <tbody>
          {filterData.length ? filterData.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          )) : <p>Data not found</p>}
        </tbody>
      </table>
    </div>
  );
}

export default App;
