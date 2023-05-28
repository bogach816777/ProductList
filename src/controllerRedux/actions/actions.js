/* addItem: Ця функція є action creator (створювачем дії) для додавання нового елемента до списку. Вона приймає параметри item, 
description, image, count, weigth та comments і повертає об'єкт з типом 
'ADD_ITEM' і полем payload, яке містить значення переданих параметрів. */
export const addItem = (item, description, image, count, weigth, comments) => ({
    type: 'ADD_ITEM',
    payload: { item, description, image, count, weigth,comments },
  });
  /* deleteItem: Ця функція є action creator для видалення елемента зі списку за його ідентифікатором. 
  Вона приймає параметр id і 
  повертає об'єкт з типом 'DELETE_ITEM' і полем payload, яке містить значення переданого ідентифікатора. */
  export const deleteItem = (id) => ({
    type: 'DELETE_ITEM',
    payload: id,
  });
/*   editItem: Ця функція є action creator для редагування елемента списку. Вона приймає параметри
   id, item, description, image, count та weigth і повертає об'єкт з типом 
   'EDIT_ITEM' і полем payload, яке містить об'єкт з ідентифікатором id 
   та оновленими значеннями item, description, image, count та weigth */
  export const editItem = (id, item, description, image, count, weigth) => {
    return {
      type: 'EDIT_ITEM',
      payload: { id, newItem: { item, description, image, count, weigth } },
    };
  };
 /*  addItemComments: Ця функція є action creator для додавання коментаря до елемента списку 
  за його ідентифікатором. Вона приймає параметри itemId і comment і повертає 
  об'єкт з типом 'ADD_COMMENT' і полем payload, яке містить значення переданих параметрів. */
  export const addItemComments = (itemId, comment) => ({
    type: 'ADD_COMMENT',
    payload: { itemId, comment },
  });
 /*  deleteItemComments: Ця функція є action creator для видалення коментаря з елемента списку
   за його ідентифікатором та індексом коментаря. Вона приймає параметри deleteItemId
    і commentIndex і повертає об'єкт з типом 'DELETE_COMMENT' і полем payload, яке містить значення переданих параметрів. */
  export const deleteItemComments = (deleteItemId, commentIndex) => {
    return {
      type: 'DELETE_COMMENT',
      payload: {
        deleteItemId,
        commentIndex,
      },
    };
  };
  
