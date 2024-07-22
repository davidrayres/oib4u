import PhotoCard from '@/app/components/PhotoCard'

export default function Photos() {
  const roomPhotos = [
    {category: 'floor2', room: 'den', label: 'Den'},
    {category: 'floor2', room: 'kitchen', label: 'Kitchen / Dining'},
    {category: 'floor2', room: 'mbed', label: 'Main Bedroom'},
    {category: 'floor2', room: 'gbed', label: 'Guest Bedroom'},
    {category: 'floor1', room: 'den', label: 'Den'},
    {category: 'floor1', room: 'kitchen', label: 'Kitchenette'},
    {category: 'floor1', room: 'mbed', label: 'Main Bedroom'},
    {category: 'floor1', room: 'gbed', label: 'Guest Bedroom'},
    {category: 'floor1', room: 'bunk', label: 'Bunkroom'},
    {category: 'exterior', room: 'house', label: 'House'},
    {category: 'exterior', room: 'carport', label: 'Carport'},
    {category: 'exterior', room: 'pool', label: 'Pool & Clubhouse'},
  ]

  return (
    <div className='accordian'>
      <label className='accordian-label peer'>
        PHOTOS
        <input className='accordian-ui' type='checkbox' />
      </label>
      {/* FLOOR 2 */}
      <div className='accordian-content peer-has-[:checked]:flex flex-col gap-4'>
        <section className='shadow-md rounded border-gray border w-full'>
          <div className='font-bold mb-2 rounded-t px-2 bg-slate-200'>Second Floor</div>

          <div className='photos-container'>
            {roomPhotos
              .filter(photo => photo.category === 'floor2')
              .map((photo, index) => (
                <PhotoCard key={index} photo={photo} />
              ))}
          </div>
        </section>
      </div>

      {/* FLOOR 1 */}
      <div className='accordian-content peer-has-[:checked]:flex flex-col gap-4'>
        <section className='shadow-md rounded border-gray border w-full'>
          <div className='font-bold mb-2 rounded-t px-2 bg-slate-200'>First Floor</div>

          <div className='photos-container'>
            {roomPhotos
              .filter(photo => photo.category === 'floor1')
              .map((photo, index) => (
                <PhotoCard key={index} photo={photo} />
              ))}
          </div>
        </section>
      </div>

      {/* EXTERIOR */}
      <div className='accordian-content peer-has-[:checked]:flex flex-col gap-4'>
        <section className='shadow-md rounded border-gray border w-full'>
          <div className='font-bold mb-2 rounded-t px-2 bg-slate-200'>Exterior</div>

          <div className='photos-container'>
            {roomPhotos
              .filter(photo => photo.category === 'exterior')
              .map((photo, index) => (
                <PhotoCard key={index} photo={photo} />
              ))}
          </div>
        </section>
      </div>
    </div>
  )
}
