import { HeadingSecondary as H2 } from '../heading-secondary/heading-secondary';
import './book.css';

export function Book() {
  return (
    <section className='section-book'>
      <div className='book'>
        <H2>Start booking now</H2>
        <div className='book__form'>
          <form className='form'>
            <div className='form__group'>
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
            </div>
            <div className='form__group'>
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
            </div>

            <div className='form__group form__group-radio'>
              <input
                className='form__radio-input'
                type='radio'
                name='group-size'
                id='small'
              />
              <label className='form__radio-label' htmlFor='small'>
                <span className='radio-btn'></span>
                Small tour group
              </label>
            </div>
            <div className='form__group form__group-radio'>
              <input
                className='form__radio-input'
                type='radio'
                name='group-size'
                id='large'
              />
              <label className='form__radio-label' htmlFor='large'>
                <span className='radio-btn'></span>
                Large tour group
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
