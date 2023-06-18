import React from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import MenuItem from '@mui/material/MenuItem';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
const FormProduct = ({handleSubmit,toggleSortOrder, toggleSortQuantityOrder, sortQuantityAscending, sortAscending
    ,newInput,setNewInput, newImage, newCount, setNewCount, newDescription, setNewDescription,
    setnewWeight, newWeight, setNewImage, handleOpenModal, handleCloseModal, modalOpen, currencies
}) => {
  
        
  return (
    <div className='modal-buttons'>
      <h1 className="title-main">Product List</h1>
      
        {/* Ствворення форми заповнення продукту */}
        <Dialog  open={modalOpen} onClose={handleCloseModal}>
    <DialogTitle>Add Product</DialogTitle>
  
        
        <div className="modal-content">
          <form className="formProduct" onSubmit={handleSubmit}>
            <TextField
              label={'Product Name'}
              id="margin-none"
              onChange={(e) => setNewInput(e.target.value)}
              value={newInput}
            />
            <TextField
              label={'Product Description'}
              id="margin-none"
              onChange={(e) => setNewDescription(e.target.value)}
              value={newDescription}
            />
            <TextField
              label={'Product Count'}
              id="margin-none"
              onChange={(e) => setNewCount(e.target.value)}
              value={newCount}
            />
            <TextField
              label={'Product Weight'}
              id="margin-none"
              onChange={(e) => setnewWeight(e.target.value)}
              value={newWeight}
            />
            
             <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue=""
          helperText="Please select your image product"
          onChange={(e) => setNewImage(e.target.value)}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
             <DialogActions>
            <div className="modal-buttons">
              <Button className='' type="submit" variant="contained" color="success">
                Add Product
              </Button>
              <Button variant="contained" color="error" onClick={handleCloseModal}>
                Cancel
              </Button>
            </div>
            </DialogActions>
          </form>
        </div>
       
      </Dialog>

      {/* Кнопка для відкриття модального вікна */}
      <Button variant="contained" onClick={handleOpenModal}>
        Add Product
      </Button>
        {/* Додання фільтру, додання події onClick на кнопку, й переключення
        значення фільтру */}
        <div className="filter_cnt">
          <button className="btn-filter" onClick={toggleSortQuantityOrder}>
            {sortQuantityAscending ? 'Sort Quantity Descending' : 'Sort Quantity Ascending'}
            <FilterAltIcon />
          </button>
        </div>
      
    </div>
  )
}

export default FormProduct
