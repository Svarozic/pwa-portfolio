# IT-portfolio

[firebase demo](https://it-portfolio.firebaseapp.com/)

![Preview image](/preview.png?raw=true "Preview image")

## Specialitky

#### Deploy na firebase

```
npm install -g firebase-tools
```

- Prepnem sa do usera a lognem sa

```
firebase login
```

- Vybuildujem projekt ale dam ho do sub priecinka pretoze firebase ocakava node applikcaiu a preto musim zadat public 
priecinok.
- Zmazat zbytocne prazdne foldre app / components / js / css
- Treba este v index.html nastavit protokol na tahanie google api fontu na https, pretoze firebase ma taky hosting a 
nemozem 
mixovat requesty na stranke.
- Struktura ROOT/public a v ROOT zadam prikazi.


```
firebase init
```

```
firebase deploy
```



#### HTTP server
http server si spustam cez [http-server](https://www.npmjs.com/package/http-server) package s tym ze mu davam home dir 
s vykompilovanym kodom

```
node node_modules/http-server/bin/http-server ./dist/ -a localhost
```

ale ak ho chcem pustat na osobitnom processe tak pouzijem [forever](https://www.npmjs.com/package/forever)

```
node_modules/forever/bin/forever start -p . -v -l server.log ./node_modules/http-server/bin/http-server ./dist/ -a localhost
```

napisany mam na to krasny BASH skript **start.sh**


#### Mensie obrazky

[TinyPng](https://tinypng.com/)

#### JsHint global premmenna

```
/* global $ */
```

#### Direktiva: controller / link / compile

Compile -> Controller -> Link  
V pripade projects sekcie sa mi vykona ako prvy *compile* ale iba **raz** 
a potom zbehnem **X krat** controller, nakonci sa vykona link.  
[Stackoverflow vysvetlenie](http://stackoverflow.com/questions/15676614/directive-link-vs-compile-vs-controller)


#### Event ukoncenia ng-repeat direktivy
on-last-repeat-event.js ako komponent, je to attr direktiva, ktora vyhodi event s menom podla jej hodnoty atributu
cez $scope si tento event chytam


#### JQueryScrollTo ako direktiva
scroll-to-directive.js ako komponent, je to attr direktiva s moznym delayom, je nutne mat 3rd kniznice aby fungovala. 
JQuery kod aplikuje na element v *link* funckii, ked je uz JQuery inicializovany


#### Efekt vnutorne zvacsovanie obrazky
section experiencies

