import './text-button.css';

export function TextButton(props) {
  const { children, cls, ...restProps } = props;

  return (
    <a className={`btn-text ${cls}`} {...restProps}>
      {children}
    </a>
  );
}
