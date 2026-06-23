const Button = ({ onClick, children, classesList, type }) => {
  return (
    <button type={type} className={`${classesList}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
