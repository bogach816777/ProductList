import React from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { TextField, Button} from '@mui/material';
const FormProduct = ({handleSubmit,toggleSortOrder, toggleSortQuantityOrder, sortQuantityAscending, sortAscending
    ,newInput,setNewInput, newImage, newCount, setNewCount, newDescription, setNewDescription,
    setnewWeight, newWeight, setNewImage
}) => {
        
  return (
    <div>
      <h1 className="title-main">Product List</h1>
        {/* Ствворення форми заповнення продукту */}
      <form className="formProduct" action="" onSubmit={handleSubmit}>
          {/* Створення текстового поля для вводу ім'я продукту, також передання
          вводу в setNewInput */}
        <TextField
          label={'Product Name'}
          id="margin-none"
          onChange={(e) => setNewInput(e.target.value)}
          value={newInput}
        />
         {/* Створення текстового поля для вводу опису продукту, також передання
          вводу в setNewDescription */}
        <TextField
          label={'Product Description'}
          id="margin-none"
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
        />
          {/* Створення текстового поля для вводу кількості продукту, також передання
          вводу в setNewCount */}
        <TextField
          label={'Product Count'}
          id="margin-none"
          onChange={(e) => setNewCount(e.target.value)}
          value={newCount}
        />
         {/* Створення текстового поля для вводу маси продукту, також передання
          вводу в setnewWeight */}
        <TextField
          label={'Product Weight'}
          id="margin-none"
          onChange={(e) => setnewWeight(e.target.value)}
          value={newWeight}
        />
          {/* Створення текстового поля для вводу пислання зображення продукту, також передання
          вводу в setNewImage */}
        <TextField
          label={'Product Image'}
          id="margin-none"
          onChange={(e) => setNewImage(e.target.value)}
          value={newImage}
        />
        <Button type="submit" variant="contained" color="success">
          Success
        </Button>
        {/* Додання фільтру, додання події onClick на кнопку, й переключення
        значення фільтру */}
        <div className="filter_cnt">
          <button className="btn-filter" onClick={toggleSortQuantityOrder}>
            {sortQuantityAscending ? 'Sort Quantity Descending' : 'Sort Quantity Ascending'}
            <FilterAltIcon />
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormProduct
