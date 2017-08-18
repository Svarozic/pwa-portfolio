/**
 * Created by GryfonN on 18.8.2017.
 */


const mixpanel = window.mixpanel;

export default class UtilMixpanel {
    static trackDownloadCV() {
        if (isProduction && mixpanel)
            mixpanel.track('DownloadCV');
    }

    static trackPlaygroundSearch(searchString) {
        if (isProduction && mixpanel)
            mixpanel.track('PlaygroundSearch', {'searchString': searchString});
    }
}

function isProduction() {
    return process.env.NODE_ENV === 'production';
}

