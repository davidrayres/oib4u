import Image from 'next/image'
import floorplan1 from '@/assets/images/floorplan1.png'
import floorplan2 from '@/assets/images/floorplan2.png'

export default function Floorplan() {
  const imageUrl = '@/assets/images/floorplan1.png'
  return (
    <div className='accordian'>
      <label className='accordian-label peer'>
        FLOOR PLAN
        <input className='accordian-ui' type='checkbox' />
      </label>
      <div className='accordian-content peer-has-[:checked]:block'>
        <p>This home has 5 bedrooms, each with an adjoining bath and accessibility to the porches.</p>
        <br />
        <p>It sleeps 18 people with two masters with king size beds; two rooms with 2 queen beds in each room; and a bunk room with a full-over-full bunk and a twin-over-twin bunk.</p>
        <br />
        <div className='flex gap-12'>
          <div className='w-1/2 text-center'>
            <h3 className='mb-1'>FIRST FLOOR</h3>
            <Image src={floorplan1} alt='img' />
          </div>
          <div className='w-1/2 text-center'>
            <h3 className='mb-1'>SECOND FLOOR</h3>
            <Image src={floorplan2} alt='img' />
          </div>
        </div>
      </div>
    </div>
  )
}
