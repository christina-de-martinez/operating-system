import React from 'react';
import { BrowserIframe } from './styled';

function Browser() {
    return (
        <BrowserIframe src="http://example.com/">{console.log('browser is being rendered')}</BrowserIframe>
    )
}

export default Browser;