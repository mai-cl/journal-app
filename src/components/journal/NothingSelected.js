import { useDispatch } from 'react-redux'
import { uiOpenSidebar } from '../../actions/ui'

export const NothingSelected = () => {
  const dispatch = useDispatch()
  const handleOpenSidebar = () => {
    dispatch(uiOpenSidebar())
  }

  return (
    <div className='nothing__main-content'>
      <p>
        Select something
        <br />
        or create an entry!
      </p>

      <div className='nothing__open-sidebar' onClick={handleOpenSidebar}>
        <i className='fa-solid fa-pen fa-4x mt-md'></i>
      </div>
    </div>
  )
}
