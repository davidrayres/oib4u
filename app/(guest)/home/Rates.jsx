export default function Rates() {
  return (
    <div className='accordian'>
      <label className='accordian-label peer'>
        RATES
        <input className='accordian-ui' type='checkbox' />
      </label>
      <div className='accordian-content peer-has-[:checked]:block'>
        <p>Nighly...</p>
        <p>Weekly...</p>
        <p>Monthly...</p>
      </div>
    </div>
  )
}