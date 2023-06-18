import React from 'react'
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
const EditFormProduct = ({handleCancelEdit,editItemValue, setEditItemValue, editItemDescription, setEditItemDescription,
    editItemCount, setEditItemCount, editItemWeight, setEditItemWeight, editItemImage, setEditItemImage,
    handleSaveEdit, openDialog, currencies
 }) => {
    
  return (
    <div>
      {/* Створення форми для модального вікна, також додання подій відкриття
      модального вікна, й закриття його за дпомогою функці handleCancelEdit,
      яка описана в компоненнті HomeWork*/}
      <Dialog className='menu' open={openDialog} onClose={handleCancelEdit}>
    <DialogTitle>Edit Product</DialogTitle>
    
      {/* Створення текстового поля для зміни назви продукту */}
      <div className="formProduct modal-content">
      <TextField
        label="Product Name"
        value={editItemValue}
        onChange={(e) => setEditItemValue(e.target.value)}
      />
      {/* Створення текстового поля для зміни опису продукту */}
      <TextField
        label="Product Description"
        value={editItemDescription}
        onChange={(e) => setEditItemDescription(e.target.value)}
      />
      {/* Створення текстового поля для зміни кількості продукту */}
      <TextField
        label="Product Count"
        value={editItemCount}
        onChange={(e) => setEditItemCount(e.target.value)}
      />
      {/* Створення текстового поля для зміни маси продукту */}
      <TextField
        label="Product Weight"
        value={editItemWeight}
        onChange={(e) => setEditItemWeight(e.target.value)}
      />
      {/* Створення текстового поля для зміни зображення продукту */}

      <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue=""
          helperText="Please select your image product"
          onChange={(e) => setEditItemImage(e.target.value)
          }
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
    <DialogActions>
      {/* Створення кнопок для закриття модального вікна й закриття відповідно */}
      <Button onClick={handleSaveEdit}>Save</Button>
      <Button onClick={handleCancelEdit}>Cancel</Button>
    </DialogActions>
  </Dialog>
    </div>
  )
}

export default EditFormProduct
