import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { startNewNote } from '../../actions/notes'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
  const dispatch = useDispatch()

  const {
    auth: { name },
    ui: { showSidebar },
  } = useSelector(state => state)

  const handleLogout = () => {
    dispatch(startLogout())
  }

  const handleAddNew = () => {
    dispatch(startNewNote())
  }

  return (
    <aside className={'journal__sidebar ' + (showSidebar && 'show')}>
      <div className='journal__sidebar-navbar'>
        <h3>
          <i className='fa-regular fa-user'></i>
          <span> {name}</span>
        </h3>
        <button className='btn btn-secondary' onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className='journal__new-entry' onClick={handleAddNew}>
        <i className='far fa-calendar-plus fa-5x' />
        <p className='mt-md'>New entry</p>
      </div>
      <JournalEntries />
    </aside>
  )
}
