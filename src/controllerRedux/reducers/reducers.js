// reducers.js
/* код встановлює значення newOwn в об'єкті initialState на основі даних, збережених у локальному сховищі під ключем 'list'. 
Якщо немає збережених даних або вони недоступні, то значення newOwn буде порожнім масивом []. */
const initialState = {
  newOwn: JSON.parse(localStorage.getItem('list')) || [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
/*     коли виконується дія 'ADD_ITEM', редуктор додає новий елемент до списку newOwn та оновлює його у локальному сховищі, 
    а потім повертає оновлений стан з оновленим списком */
    case 'ADD_ITEM':
      const id = state.newOwn.length ? state.newOwn[state.newOwn.length - 1].id + 1 : 1;
      const newItem = {
        id,
        checked: false,
        item: action.payload.item,
        description: action.payload.description,
        weigth: parseInt(action.payload.weigth, 10),
        image: action.payload.image ,
        count: parseInt(action.payload.count, 10),
        comments: [], // Initialize comments as an empty array
      };
      const updatedListAdd = [...state.newOwn, newItem];
      localStorage.setItem('list', JSON.stringify(updatedListAdd));
      return { ...state, newOwn: updatedListAdd };
/*     коли виконується дія 'DELETE_ITEM', редуктор видаляє елемент із списку newOwn та оновлює його у локальному сховищі, 
    а потім повертає оновлений стан з оновленим списком */
    case 'DELETE_ITEM':
      const updatedListDelete = state.newOwn.filter((item) => item.id !== action.payload);
      localStorage.setItem('list', JSON.stringify(updatedListDelete));
      return { ...state, newOwn: updatedListDelete };
         /*     коли виконується дія 'EDIT_ITEM', редуктор змінює елемент із списку newOwn та оновлює його у локальному сховищі, 
    а потім повертає оновлений стан з оновленим списком */
    case 'EDIT_ITEM':
   
      const updatedListEdit = state.newOwn.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            item: action.payload.newItem.item || item.item,
            description: action.payload.newItem.description || item.description,
            image: action.payload.newItem.image || item.image,
            count: parseInt(action.payload.newItem.count) || item.count,
            weigth: parseInt(action.payload.newItem.weigth, 10) || item.weigth,
          };
        }
        return item;
      });
      localStorage.setItem('list', JSON.stringify(updatedListEdit));
      return { ...state, newOwn: updatedListEdit };
   /*    коли виконується дія 'ADD_COMMENT', редуктор додає новий коментар до відповідного елемента списку newOwn за його id. 
      Це забезпечує оновлення стану з оновленим списком, що містить новий коментар. */
      case 'ADD_COMMENT':
  const { itemId, comment } = action.payload;
  const updatedListWithComment = state.newOwn.map((item) => {
    if (item.id === itemId) {
      return {
        ...item,
        comments: [...item.comments, comment],
      };
    }
    return item;
  });
  localStorage.setItem('list', JSON.stringify(updatedListWithComment));
  return { ...state, newOwn: updatedListWithComment };
 /*  коли виконується дія 'DELETE_COMMENT', редуктор видаляє коментар з відповідного елемента списку newOwn 
  за його id та індексом коментаря. Це забезпечує оновлення стану з оновленим списком та збереженням його у локальному сховищі */
        case 'DELETE_COMMENT':
          const { deleteItemId, commentIndex } = action.payload;
          const updatedListWithoutComment = state.newOwn.map((item) => {
            if (item.id === deleteItemId && Array.isArray(item.comments)) {
              const updatedComments = item.comments.filter((comment, index) => index !== commentIndex);
              return { ...item, comments: updatedComments };
            }
            return item;
          });
          localStorage.setItem('list', JSON.stringify(updatedListWithoutComment));
          return { ...state, newOwn: updatedListWithoutComment };  
    default:
      return state;
  }
};

export default rootReducer;
