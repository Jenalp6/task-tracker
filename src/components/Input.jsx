const Input = (type, id, label, placeholder, value, onChange) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
};

export default Input;
