import { useState } from "react";

export const AddCategory = ({ onAddNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    
    if (inputValue.trim().length <= 1) return;
    /* setCategories( categories => [inputValue , ...categories]); */
    onAddNewCategory(inputValue.trim());
    setInputValue("");
  }

  return (
    <>
      <form onSubmit={ onSubmit }>
        <input
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};
