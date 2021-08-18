import './Button.css';

function Button({ color = 'blue', children, onClick, className ='' }) {
  const classNames = `Button ${color} ${className}`; // 삼항연산자
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
