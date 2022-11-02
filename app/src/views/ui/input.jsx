const TextInput = ({ placeholder, onChange, value, name, required }) => {
  return (
    <input
      className=" w-full text-sm  px-4 py-3 bg-stone-50 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none"
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={value}
      required={required}
    />
  );
};

export default TextInput;
