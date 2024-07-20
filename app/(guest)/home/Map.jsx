import GoogleMap from './GoogleMap'

export default function Map() {
  return (
    <div className='accordian'>
      <label className='accordian-label peer'>
        MAP AND LOCATION
        <input className='accordian-ui' type='checkbox' />
      </label>
      <div className='accordian-content peer-has-[:checked]:block'>
        <p>The house is located at The Resort on Ocean Isle Beach.</p>
        <p>Turn right over the bridge onto E. First St. Go less than 1/2 mile and turn right on Shelby St. Turn left on E. Second St. and the house is the fourth one on the right.</p>
        <br />
        <p>Lot Location</p>
        <p>Lot #29 at The Resort Only a few homes have been built at The Resort, so you have unbelievable views of the entire island from the third floor deck, easy access to the ocean and an uncrowded pool!</p>
        <GoogleMap />
      </div>
    </div>
  )
}
