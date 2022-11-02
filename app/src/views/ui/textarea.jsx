const Textarea = ({ placeholder, onChange, value, name, rows, required }) => {
  return (
    <textarea
      className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
      placeholder={placeholder}
      name={name}
      rows={rows}
      required={required}
      onChange={onChange}
      defaultValue={value}
    />
  );
};

export default Textarea;
