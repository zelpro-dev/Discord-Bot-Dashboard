import { useState } from 'react';

export default function AnimeForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    watchUrl: ''
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3080/dashboard/animes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setFormData({ name: '', description: '', watchUrl: '' });
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 5000);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="flex justify-center items-center mt-6">
      {showNotification && (
        <div className="w-full p-8 fixed bottom-0 left-0 right-0 flex justify-center mb-4 animate-pulse">
          <div role="alert" className="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Se ha enviado tu recomendación!</span>
          </div>
        </div>
      )}
      <form className="w-full max-w-lg bg-base-200 border border-base-300 p-4 rounded-box" onSubmit={handleSubmit}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend font-bold text-xl">Sube tu recomendación</legend>
          <fieldset className="fieldset mt-4">
            <legend className="fieldset-legend text-lg">¿Cuál es el anime?</legend>
            <input
              type="text"
              name="name"
              className="input w-full text-lg"
              placeholder="Escribe el título del anime"
              value={formData.name}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="fieldset mt-4">
            <legend className="fieldset-legend text-lg">¿De qué trata ese anime?</legend>
            <textarea
              name="description"
              className="textarea w-full h-24 text-lg"
              placeholder="Escribe una breve descripción"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </fieldset>
          <fieldset className="fieldset mt-4">
            <legend className="fieldset-legend text-lg">¿Dónde se puede ver este anime?</legend>
            <input
              type="text"
              name="watchUrl"
              className="input w-full text-lg"
              placeholder="Enlace para verlo"
              value={formData.watchUrl}
              onChange={handleChange}
            />
          </fieldset>
          <button type="submit" className="btn btn-neutral w-full mt-4">Enviar</button>
        </fieldset>
      </form>
    </div>
  );
}