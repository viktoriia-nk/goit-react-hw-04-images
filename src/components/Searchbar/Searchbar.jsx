
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import { useState } from "react";

const Searchbar = ({onSubmit}) => {

   const [q, setQ] = useState('')

    const handleQueryChange = (e) =>{
        setQ(e.currentTarget.value.toLowerCase())
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (q.trim() === ""){
            alert("Введите поісковой запрос")
        }
        onSubmit(q)
        setQ('')
    }

   
    return (
        <header className={s.searchbar}>
  <form className={s.form} onSubmit={handleSubmit}>
    <button type="submit" className={s.button}>
      <span className={s.button__label}></span>
    </button>

    <input
      className={s.input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      name="q"
      value={q} 
      onChange = {handleQueryChange}
    />
  </form>
</header>
    )
   }


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Searchbar