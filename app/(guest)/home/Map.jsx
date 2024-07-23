'use client'
import {APIProvider, Map, AdvancedMarker} from '@vis.gl/react-google-maps'

export default function GoogleMap() {
  const house = {lat: 33.886556, lng: -78.444329}
  const centerpoint = {lat: 33.886179, lng: -78.444788}
  const pool = {lat: 33.885151, lng: -78.445301}
  const mapId = process.env.NEXT_PUBLIC_MAP_ID

  return (
    <div className='accordian'>
      <label className='accordian-label peer'>
        MAP AND LOCATION
        <input className='accordian-ui' type='checkbox' />
      </label>
      <div className='accordian-content peer-has-[:checked]:block'>
        <p>The house is located at The Resort on Ocean Isle Beach. Just a short stroll from the private pool, clubhouse and beach.</p>
        <br />
        <p>Turn right over the bridge onto E. First St. Go less than 1/2 mile and turn right on Shelby St. Turn left on E. Second St. and the house is the fourth one on the right.</p>
        <br />
        <div style={{width: '100%', height: '70vh'}}>
          <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <Map defaultZoom={17.75} defaultCenter={centerpoint} mapId={mapId} mapTypeId='roadmap'>
              <AdvancedMarker position={house}>
                <div className='map-marker'>House</div>
              </AdvancedMarker>

              <AdvancedMarker position={pool}>
                <div className='map-marker'>Pool</div>
              </AdvancedMarker>
            </Map>
          </APIProvider>
        </div>
      </div>
    </div>
  )
}
