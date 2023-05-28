import React from 'react'
import { TextField } from '@mui/material'
const SearchHomework = ({search, setSearch}) => {

  return (
    /* цей код відображає форму з полем введення тексту (TextField),
     яке дозволяє вводити пошуковий запит. Він використовує функцію-обробник, 
     щоб запобігти стандартному поведінці форми та оновлює значення поля введення search при зміні */
    <>
    <form onSubmit={((e)=> e.preventDefault())}>

      <TextField id="filled-basic" label="Search" variant="filled"
      value={search}
      className='textSearch'
      onChange={(e)=> setSearch(e.target.value)} />
    </form>
    
    </>
    
  )
}

export default SearchHomework
