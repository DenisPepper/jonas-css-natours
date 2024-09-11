import { HeadingSecondary as H2 } from '../heading-secondary/heading-secondary';
import './book.css';

export function Book() {
  return (
    <section className='section-book'>
      <div className='book'>
        <H2>Start booking now</H2>
        <div className='book__form'>
          <form className='form'>
            <fieldset className='form__group'>
              <input
                className='form__input'
                type='text'
                name='fullname'
                id='fullname'
                placeholder='Full Name'
                required
              />
              <label className='form__label' htmlFor='fullname'>
                Full Name
              </label>
            </fieldset>
            <fieldset className='form__group'>
              <input
                className='form__input'
                type='email'
                name='email'
                id='email'
                placeholder='Email Adress'
                required
              />
              <label className='form__label' htmlFor='email'>
                Email Adress
              </label>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
}
