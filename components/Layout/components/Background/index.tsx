import css from './style.module.css'
import clsx from 'clsx'

const Background = () => (
  <>
    <div className="fixed w-full h-full block top-0 right-0 left-0 bottom-0 z-[-1] bg-stars bg-black"></div>
    <div
      className={clsx(
        'fixed w-full h-full block top-0 right-0 left-0 bottom-0 z-[-1] bg-twinkling',
        css.twinkling
      )}
    ></div>
  </>
)

export default Background
