import './App.css';
import { useState, useEffect } from 'react';
import { getApi, deleteApi, postApi, patchApi } from './Service';

function App() {
  const [datas, setData] = useState([]);
  const [newData, setNewData] = useState({
    title: '',
    body: '',
  })
  const [newPatchData, setPatchData] = useState({
    title: ''
  })
  useEffect(() => {
    getApi()
      .then(response => {
        console.log("Success in getapi")
        setData(response.data)
        console.log(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    deleteApi(id)
      .then((response) => {
        console.log("Success in deleteapi")
        console.log(response.data)
        setData((prevData) => prevData.filter((datas) => datas.id !== id));
      })
      .catch(err => console.log(err))
  }

  const handlePost = () => {
    postApi(newData)
      .then((response) => {
        console.log("Success in postapi")
        console.log(response.data)
        setData((prevData) => [...prevData, response.data]);
        setNewData({ title: '', body: '' });
      })
      .catch(err => console.log(err))
  }

  const handlePatch = (id) => {
    console.log(newPatchData)
    patchApi(id, newPatchData)
      .then((response) => {
        console.log("Success in patchapi")
        console.log(response.data)
        setData((prevData) =>
          prevData.map((data) =>
            data.id === id ? { ...data, title: response.data.title } : data
          )
        );
        setPatchData({ title: '' })
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <div>
        <h2>Add New Post:</h2>
        <label>
          Title:
          <input
            type="text"
            value={newData.title}
            onChange={(e) => setNewData({ ...newData, title: e.target.value })}
          />
        </label>
        <br />
        <label>
          Body:
          <textarea
            value={newData.body}
            onChange={(e) => setNewData({ ...newData, body: e.target.value })}
          />
        </label>
        <br />
        <button onClick={handlePost}>Add Post</button>
      </div>
      
       Change Title using Patch: <input type="text"
        value={newPatchData.title}
        onChange={(e) => setPatchData({ ...newPatchData, title: e.target.value })} />
      {datas.map((e) => (
        <div key={e.id} className='lists'>
          {e.id}
          <h4>Title : {e.title}</h4>
          <h5>Body : {e.body}</h5>

          <button onClick={() => handleDelete(e.id)}>Delete</button><br></br>

          <button onClick={() => handlePatch(e.id)}>Patch</button>
        </div>
      ))}
    </>
  );
}

export default App;




