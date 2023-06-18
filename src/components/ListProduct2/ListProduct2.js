import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import AddCommentIcon from '@mui/icons-material/AddComment';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
export default function ListProduct2({handleSubmitComents, setaddComments ,addComments ,handleDeleteComment ,handleEdit, handleDelete, sortedList,
    handleCloseModal, handleOpenModal, setOpen, open, handleOpen, handleClose, handleAddToCart}) {
  return (
    
    <div className='List__container'>
    {sortedList.length ? (
        <ul className="container-ul">
            {sortedList.map((item) => (
    <li className="product-container" key={item.id}>
     
    <Card sx={{ maxWidth: 3445 }}>
      <CardMedia
        sx={{ height: 170 }}
        image={item.image}
        title={item.item}
      />
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.item}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.description}
        </Typography>
        <Typography variant="body1" color="text.secondary">
        Count: {item.count}
        </Typography>
        <Typography variant="body6" color="text.secondary">
        Weigth: {item.weigth} {"G"}
        </Typography>
        <Typography variant="body6" color="text.secondary">
        <form className='form__comments' action="" onSubmit={(e) => handleSubmitComents(e, item.id)}>
              {/* Текстове поле додання коментарів для продукту */}
                  <TextField
                label={'Comments product'}
                id={`comments-${item.id}`}
                onChange={(e) => setaddComments(e.target.value)}
                variant="standard"
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
        </Typography>
      </CardContent>
      <CardActions>
        <Button type='button' onClick={() => handleEdit(item)} size="small">Change</Button>
        <Button type='button' onClick={handleOpen} size="small">Delete</Button>
        <Button type='button' onClick={() => handleAddToCart(item)} size="small">Add to basket</Button>
        
        
        <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Видалення продукту</DialogTitle>
              <DialogContent>Did you want delete product?</DialogContent>
              <DialogActions>
                <Button onClick={() => handleDelete(item.id)} color="secondary">
                Delete
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                  No
                </Button>
              </DialogActions>
            </Dialog>
      </CardActions>
    </Card>
    
    </li>
    ))}
    </ul>
       ) : (
        <p>List is empty</p>
      )}
    </div>
  );
}