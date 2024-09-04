import './text-button.css';

export function TextButton(props) {
  const { children, ...restProps } = props;

  return (
    <a className='btn-text' {...restProps}>
      {children}
    </a>
  );
}
