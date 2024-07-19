'use client'

import {useEffect, useState} from 'react'
import {APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMapsLibrary} from '@vis.gl/react-google-maps'

export default function GoogleMap() {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <Geocoding />
    </APIProvider>
  )
}

//https://www.youtube.com/watch?v=cOSw0Vmi3uQ&t=305s
function Geocoding() {
  const [address, setAddress] = useState('86 West Second, Ocean Isle Beach')
  const [open, setOpen] = useState(false)

  const geocodingApiLoaded = useMapsLibrary('geocoding')
  const [geocodingService, setGeocodingService] = useState()
  const [geocodingResult, setGeocodingResult] = useState()

  useEffect(() => {
    if (!geocodingApiLoaded) return
    setGeocodingService(new window.google.maps.Geocoder())
  }, [geocodingApiLoaded])

  useEffect(() => {
    if (!geocodingService || !address) return
    geocodingService.geocode({address}, (results, status) => {
      if (results && status === 'OK') {
        console.log(results)
        setGeocodingResult(results[0])
      }
    })
  }, [geocodingService, address])

  if (!geocodingService) return <div>Loading...</div>
  if (!geocodingResult) return <div>Running Geocode...</div>
  const position = {lat: geocodingResult.geometry.location.lat(), lng: geocodingResult.geometry.location.lng()}

  return (
    <div style={{width: '100%', height: '35vh'}}>
      <Map defaultZoom={17.5} defaultCenter={position} mapId={process.env.NEXT_PUBLIC_MAP_ID} mapTypeId='hybrid'>
        <AdvancedMarker position={position} onClick={() => setOpen(true)}>
          <Pin background={'red'} borderColor={'red'} glyphColor={'white'} />
        </AdvancedMarker>

        {open && (
          <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
            <p>Beach Villa</p>
          </InfoWindow>
        )}
      </Map>
    </div>
  )
}
