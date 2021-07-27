import React from 'react';
import { MapIframe } from './styled';

function Map() {
    return (
        <MapIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25625.166660755654!2d-4.516805614610788!3d36.59879660836552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72fcb76005e23f%3A0xcf24f3c3adf501a!2zQmVuYWxtw6FkZW5hLCBNw6FsYWdh!5e0!3m2!1sen!2ses!4v1627388209434!5m2!1sen!2ses" loading="lazy"></MapIframe>
    )
}

export default Map;