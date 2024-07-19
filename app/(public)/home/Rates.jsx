export default function Rates() {
  return (
    <div className='accordian'>
      <label className='accordian-label peer'>
        RATES
        <input className='accordian-ui' type='checkbox' />
      </label>
      <div className='accordian-content peer-has-[:checked]:block'>
        <p>Set on a small island, Ocean Isle is an excellent vacation Spot. With an uncrowded beach, great restaurants, free live concerts throughout the summer, miniature golf, charter boat fishing, kayaking, bicycling and much more, this is one place you'll love. Myrtle Beach, South Carolina and Wilmington, North Carolina are both within 45 minutes driving distance, and good shopping is just on the Carolina mainland.</p>
      </div>
    </div>
  )
}