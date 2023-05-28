import React, { useState } from 'react';
import { connect } from 'react-redux';

import SearchHomework from '../SearchHomework/SearchHomework';
import { addItem, deleteItem, editItem, addItemComments,deleteItemComments } from '../../controllerRedux/actions/actions';

import FormProduct from '../FormProduct/FormProduct';
import ListProduct from '../ListProduct/ListProduct';
import EditFormProduct from '../EditFormProduct/EditFormProduct';
const HomeWork = ({ newOwn, addItem, deleteItem, editItem, addItemComments, deleteItemComments }) => {
  const [newInput, setNewInput] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [search, setSearch] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newCount, setNewCount] = useState('');
  const [newWeight, setnewWeight] = useState('');
  const [sortAscending, setSortAscending] = useState(true);
  const [sortQuantityAscending, setSortQuantityAscending] = useState(true);
  const [editItemId, setEditItemId] = useState(null);
  const [editItemValue, setEditItemValue] = useState('');
  const [editItemDescription, setEditItemDescription] = useState('');
  const [editItemImage, setEditItemImage] = useState('');
  const [editItemCount, setEditItemCount] = useState('');
  const [editItemWeight, setEditItemWeight] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [addComments, setaddComments] = useState('')

 /*  функція handleDelete видаляє елемент зі списку, оновлює стан 
  у Redux за допомогою відповідної дії та оновлює локальне сховище з оновленим списком елементів. */
  const handleDelete = (id) => {
    const updatedList = newOwn.filter((item) => item.id !== id);
    deleteItem(id);
    localStorage.setItem('list', JSON.stringify(updatedList));
  };
/*   функція handleSubmit виконує додавання нового елемента до списку, очищає поля форми та готує їх до наступного введення */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newInput) return;
    addItem(newInput, newDescription, newImage, newCount, newWeight,addComments);
    setNewInput('');
    setNewDescription('');
    setNewCount('');
    setNewImage('');
    setnewWeight('');

    setaddComments('')
  };
/*   функція handleSubmitComents виконує додавання 
  нового коментаря до відповідного елемента списку, 
  очищає поле введення коментаря та готує його до наступного введення. */
  const handleSubmitComents = (e, id) => {
    e.preventDefault();
    if (!addComments) return;
    addItemComments(id, addComments);
    setaddComments('');
  };
 /*  функція toggleSortOrder виконує зміну порядку сортування списку
   шляхом зміни значення стану sortAscending. 
   Наприклад, якщо список був сортований у висхідному порядку, 
   після виклику функції він буде сортуватись у низхідному порядку. */
  const toggleSortOrder = () => {
    setSortAscending(!sortAscending);
  };
/*   функція toggleSortQuantityOrder виконує зміну порядку сортування 
  списку за кількістю шляхом зміни значення стану sortQuantityAscending */
  const toggleSortQuantityOrder = () => {
    setSortQuantityAscending(!sortQuantityAscending);
  };
 /*  функція handleEdit виконує підготовку до редагування певного елемента 
  списку шляхом встановлення відповідних значень стану, які будуть використовуватись для відображення значень елемента у діалоговому вікні редагування */
  const handleEdit = (item) => {
    setEditItemId(item.id);
    setEditItemValue(item.item);
    setEditItemDescription(item.description);
    setEditItemImage(item.image);
    setEditItemCount(item.count);
    setOpenDialog(true);
    setEditItemWeight(item.weigth)
  };
  /* функція handleSaveEdit виконує збереження внесених змін до редагованого 
  елемента списку шляхом виклику функції editItem та закриває діалогове вікно редагування. */
  const handleSaveEdit = () => {
    editItem(editItemId, editItemValue, editItemDescription, editItemImage, editItemCount, editItemWeight);
    setOpenDialog(false);
  };
/*   функція handleCancelEdit виконує скасування редагування елемента списку шляхом 
  закриття діалогового вікна редагування. Зміни, внесені до елемента перед скасуванням, не зберігаються. */
  const handleCancelEdit = () => {
    setOpenDialog(false);
  };
  /* функція handleDeleteComment виконує видалення коментаря з елемента списку шляхом виклику функції deleteItemComments */
  const handleDeleteComment = (deleteItemId, commentIndex) => {
    deleteItemComments(deleteItemId, commentIndex);
  };

  
/*   фрагмент коду виконує фільтрацію списку елементів newOwn на основі 
  пошукового запиту search і повертає новий масив filteredList, 
  який містить елементи, що задовольняють умови фільтрації */

  const filteredList = Array.isArray(newOwn)
  ? newOwn.filter((item) => {
      const itemText = item.item || ''; // Значення за замовчуванням, якщо item.item має значення undefined
      const searchText = search || ''; // Значення за замовчуванням, якщо search має значення undefined
      return itemText.toLowerCase().includes(searchText.toLowerCase());
    })
  : [];

 /*  фрагмент коду виконує сортування списку filteredList на основі значення sortQuantityAscending. 
  Якщо sortQuantityAscending має значення true, то список сортується 
  за зростанням значення властивості count. 
  Якщо sortQuantityAscending має значення false, то список сортується за спаданням значення властивості count. */

  const sortedList = filteredList.sort((a, b) => {
    if (sortQuantityAscending) {
      return a.count - b.count;
    } else {
      return b.count - a.count;
    }
  });

  return (
    <div className="container-form">
      {/* Компонент FormProduct , відповідає відображення форми заповнення й додання продукту*/}
      <FormProduct
        handleSubmit={handleSubmit}
        toggleSortOrder= {toggleSortOrder}
        toggleSortQuantityOrder = {toggleSortQuantityOrder}
        sortQuantityAscending= {sortQuantityAscending}
        sortAscending ={sortAscending}
        newInput = {newInput}
        setNewInput= {setNewInput}
        newImage = {newImage}
        newCount = {newCount}
        newDescription = {newDescription}
        setNewDescription  ={setNewDescription}
        setnewWeight ={setnewWeight}
        newWeight= {newWeight}
        setNewImage ={setNewImage}
        setNewCount = {setNewCount}/> 
        <div className='search-center'>   
{/* Компонент SearchHomework , відповідає за пошук продуктів  */}
        <SearchHomework 
      search={search}
      setSearch={setSearch}/></div>
      
 
    {/* Компонент ListProduct, відповідає за зміну візуалізацію днаих про продукт  */}
        <ListProduct
        handleSubmitComents = {handleSubmitComents}
         setaddComments = {setaddComments}
         addComments = {addComments}
         handleDeleteComment = {handleDeleteComment}
         handleEdit = {handleEdit}
         handleDelete ={handleDelete}
         sortedList ={ sortedList}


         />
{/* Компонент EditFornProduct, відповідає за зміну характеристики продукту  */}
      <EditFormProduct
    handleCancelEdit ={handleCancelEdit}
    editItemValue ={editItemValue}
    setEditItemValue = {setEditItemValue}
    editItemDescription ={editItemDescription}
    setEditItemDescription = {setEditItemDescription}
    editItemCount = {editItemCount}
    setEditItemCount = {setEditItemCount}
    editItemWeight = {editItemWeight}
    setEditItemWeight = {setEditItemWeight}
    editItemImage = {editItemImage}
    setEditItemImage = {setEditItemImage}
    handleSaveEdit = {handleSaveEdit}
    setOpenDialog = {setOpenDialog}
    openDialog = {openDialog}
    />

    </div>
  );
};
// newOwn компонет, який використовує цю функцію mapStateToProps, отримає значення з state.newOwn Redux-стору.
const mapStateToProps = (state) => ({
  newOwn: state.newOwn,
});
// об'єкт mapDispatchToProps містить дві властивості: addItem і deleteItem. Кожна властивість відповідає дії (action) в Redux.
const mapDispatchToProps = {
  addItem,
  deleteItem,
  editItem,
  addItemComments,
  deleteItemComments,
};
// Цей рядок коду використовує функцію connect з бібліотеки react-redux для зв'язку компонента HomeWork з Redux-стором
export default connect(mapStateToProps, mapDispatchToProps)(HomeWork);