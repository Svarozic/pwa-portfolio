# PWA portfolio

Progresive Web Application created by [create-react-app](https://github.com/facebookincubator/create-react-app) that represents my personal web portfolio. 
Built with `nodejs v7.10.0` and `npm v4.2.0`


![Preview image](/preview.jpg?raw=true "Preview image")
   

## Deployment

> Temporary process to create PWA with CeeVee template resources

- `yarn run build:deploy` - builds create-react-app, backups `service-worker.js` as ORIGINAL, generates new `service-worker.js` with external resource in public on cache array definition.
- append `precacheConfig` var into original created service-worker, delete new one, rname old one back and deploy