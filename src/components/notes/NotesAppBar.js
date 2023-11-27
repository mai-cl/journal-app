import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'
import { uiOpenSidebar } from '../../actions/ui'

export const NotesAppBar = () => {
  const dispatch = useDispatch()
  const { active } = useSelector(state => state.notes)

  const handleSave = () => {
    console.log(active)
    dispatch(startSaveNote(active))
  }

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click()
  }

  const handleFileChange = e => {
    const file = e.target.files[0]
    if (file) {
      dispatch(startUploading(file))
    }
  }

  const handleOpenSidebar = () => {
    dispatch(uiOpenSidebar())
  }

  return (
    <div className='notes__appbar'>
      <div className='btn btn-primary open-sidebar' onClick={handleOpenSidebar}>
        <i className='fa-solid fa-arrow-left'></i>
      </div>

      <span className='notes__appbar-date'>
        {moment(active.date).format('LL')}
      </span>

      <input
        id='fileSelector'
        type='file'
        name='file'
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      <div className='buttons-wrapper'>
        <button className='btn btn-primary' onClick={handlePictureClick}>
          Picture
        </button>
        <button className='btn btn-primary' onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  )
}
