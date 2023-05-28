import React from 'react'
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { TextField } from '@mui/material';
import AddCommentIcon from '@mui/icons-material/AddComment';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const ListProduct = ({handleSubmitComents, setaddComments ,addComments ,handleDeleteComment ,handleEdit, handleDelete, sortedList
}) => {
  return (
   
    <div className='List__container'>
{sortedList.length ? (
      <ul className="container-ul">
        {/* Додання елементів опису продукту на сторінку */}
          {sortedList.map((item) => (
            <li className="product-container" key={item.id}>
              <div>
                <span className="title-product">{item.item}</span>
              </div>
              <div>
                <span className="title-desc">{item.description}</span>
              </div>
              <div>
                <span className="title-desc">Count: {item.count}</span>
              </div>
              <div>
                <span className="title-desc">Weigth: {item.weigth} {"G"}</span>
              </div>
              <div>
                <img className="image-product" src={item.image} alt={item.item} />
              </div>
              {/* Форма для додання коментарів для продукту */}
            <form className='form__comments' action="" onSubmit={(e) => handleSubmitComents(e, item.id)}>
              {/* Текстове поле додання коментарів для продукту */}
                  <TextField
                label={'Comments product'}
                id={`comments-${item.id}`}
                onChange={(e) => setaddComments(e.target.value)}
          

                value={addComments}
              />
              
          <button className='btn-no-style' type='submit'><AddCommentIcon/></button>
        
            </form>
            <div className='container-center'>
              {/* Цей код генерує список коментарів (item.comments) у вигляді елементів списку <li> */}
            <ul>
            {Array.isArray(item.comments) &&
              item.comments.map((comment, commentIndex) => (
                <li key={commentIndex} style={{ maxWidth: '200px', border: '1px solid grey', padding: '10px', marginBottom: '10px' }}>
                  <div style={{ marginBottom: '5px' }}>{comment}</div>
                  <button className="btn-no-style" type="button" onClick={() => handleDeleteComment(item.id, commentIndex)}>
                    <DeleteOutlineIcon />
                  </button>
                </li>
              ))}
          </ul>
          </div>
          {/* Кнопка для виклику функції зміни форми продукту */}
              <FaEdit
              role="button"
              onClick={() => handleEdit(item)}
              tabIndex="0"
              className='btn-edit'
            >
              Edit
            </FaEdit>
            {/* Кнопка для виклику функції видалення продукту */}
              <FaTrashAlt
                role="button"
                onClick={() => handleDelete(item.id)}
                tabIndex="0"
                className="btn-delete"
              >
                Delete
              </FaTrashAlt>
            </li>
          ))}
        </ul>
          ) : (
            <p>List is empty</p>
          )}
    </div>
  
  
  )
}

export default ListProduct
