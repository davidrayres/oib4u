import Link from 'next/link'

export default function Amenities() {
  return (
    <div className='accordian'>
      <label className='accordian-label peer'>
        AMENITIES
        <input className='accordian-ui' type='checkbox' />
      </label>
      <div className='accordian-content peer-has-[:checked]:block'>
        <ul className='ml-5 list-disc'>
          <li>Inverted floor plan with family room, kitchen and dining room on top level for better views</li>
          <li>Oceanfront Pool and Clubhouse with restrooms & covered picnic area</li>
          <li>Elevator</li>
          <li>Upstairs and downstairs living rooms with large smart TV's</li>
          <li>22" TVs and DVD players in each bedroom</li>
          <li>Stereo with CD player and ipod docking station</li>
          <li>Wireless internet</li>
          <li>Washer/Dryer</li>
          <li>Stand-alone ice-maker</li>
          <li>Wine fridge</li>
          <li>Blender, crock pot, electric griddle, 2 coffee makers</li>
          <li>Outdoor grill</li>
          <li>Outside shower with changing room</li>
          <li>Beach gear: & beach chairs, cooler, 2 umbrellas, 4 adult bikes, 2 children's bikes, boogie boards, skim board, beach wagon, pool noodles and sand toys for kids 2 tandem kayaks with life jackets</li>
          <li>Ping-pong table and corn hole game</li>
          <li>Baby gear: pack-n-play, baby sound monitor, 2 high chairs, baby safety gates for interior stairs, infant carrier (similar to a Baby Bjorn)</li>
          <li>Single jogging stroller Small single stroller with snack tray and umbrella top</li>
          <li>Bike trailer for two small children that converts to double stroller</li>
          <li>Bed rail on one of the queen beds (pulls out)</li>
          <li>Hair dryers in each bathroom</li>
          <li>Alarm clocks in each bedroom</li>
          <li>Board games, books & magazines</li>
        </ul>
        <br />
        <p>There are an abundance of conveniences making it feel more like a luxury home than a rental property.</p>
        <br />
        <p>
          *You must bring your own linens (sheets, pillow cases, bath towels, washcloths, beach towels and dish towels) or rent from{' '}
          <Link href='https://angieslinenservice.com' passHref legacyBehavior>
            <a className='text-blue-600 underline' target='_blank'>
              Angie's Linens
            </a>
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
