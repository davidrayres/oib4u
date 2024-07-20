import Image from 'next/image'
import pool1 from '@/public/images/pool/pool-1.png'
import pool2 from '@/public/images/pool/pool-2.png'
import pool3 from '@/public/images/pool/pool-3.png'
import pool4 from '@/public/images/pool/pool-4.png'

export default function Pool() {
  return (
    <div className='accordian'>
      <label className='accordian-label peer'>
        POOL AND CLUBHOUSE
        <input className='accordian-ui' type='checkbox' />
      </label>
      <div className='accordian-content peer-has-[:checked]:block'>
        <div className='flex justify-around'>
          <Image className='object-none' src={pool1} alt='img' />
          <Image className='object-contain w-64 h-auto' src={pool2} alt='img' />
          <Image className='object-none' src={pool3} alt='img' />
          <Image className='object-none' src={pool4} alt='img' />
        </div>
        <br />
        <p>The Ocean Front Beach Club offers a pool, bathrooms, outdoor showers, a grilling area with picnic tables and a stylish commons room, perfect for social gatherings or parties.</p>
        <p>If you would like to escape the salt and sand of the beach and lounge by the large pool, have an afternoon barbeque, or just socialize with friends and family, you have a multitude of options.</p>
      </div>
    </div>
  )
}
