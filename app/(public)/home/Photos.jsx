export default function Photos() {
  return (
    <div className='accordian'>
      <label className='accordian-label peer'>
        PHOTOS
        <input className='accordian-ui' type='checkbox' />
      </label>
      <div className='accordian-content peer-has-[:checked]:block'>
        <p>COMING SOON</p>
      </div>
    </div>
  )
}
