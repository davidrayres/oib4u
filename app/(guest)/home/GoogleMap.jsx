'use client'

import {APIProvider, Map, AdvancedMarker} from '@vis.gl/react-google-maps'

export default function GoogleMap() {
  const house = {lat: 33.886556, lng: -78.444329}
  const centerpoint = {lat: 33.886179, lng: -78.444788}
  const pool = {lat: 33.885151, lng: -78.445301}
  const mapId = process.env.NEXT_PUBLIC_MAP_ID

  return (
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
  )
}