import axios from "axios";
import { useState } from "react"

function App() {

  const initialFormData = {
    author: "",
    title: "",
    body: "",
    public: false,
  }


  const [formData, setFormData] = useState(initialFormData);


  function handleFormData(event) {
    const value =
      event.target.type === 'checkbox' ?
        event.target.checked : event.target.value;

    setFormData((formData) => ({
      ...formData,
      [event.target.name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', formData)
      .then((res) => { console.log(res.data) })
    setFormData(initialFormData);

  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Autore:</label>
        <input type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleFormData}
          placeholder="Inserisci l'autore"
        />
        <hr />
        <label htmlFor="title">Titolo:</label>
        <input type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleFormData}
          placeholder="Inserisci il titolo"
        />
        <hr />
        <label htmlFor="body">Testo:</label>
        <input type="text"
          id="body"
          name="body"
          value={formData.body}
          onChange={handleFormData}
          placeholder="Inserisci contenuto"
        />
        <hr />
        <label htmlFor="public">Vuoi il post pubblico?</label>
        <input type="checkbox"
          id="public"
          name="public"
          checked={formData.public}
          onChange={handleFormData}
        />
        <hr />
        <button>Carica</button>
      </form>
    </>
  )
}

export default App
