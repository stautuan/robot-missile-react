function Form({ onSubmit, inputValue, onSetInputValue }) {
  return (
    <form className='form container flex' onSubmit={onSubmit} autoFocus>
      <span>&gt;</span>
      <input
        type='text'
        className='input'
        value={inputValue}
        onChange={(e) => onSetInputValue(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default Form;
