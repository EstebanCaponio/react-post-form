import { useState } from "react"


function App() {

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });


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
          value={formData.public}
          onChange={handleFormData}
        />
        <hr />
        <button>Carica</button>
      </form>
    </>
  )
}

export default App
