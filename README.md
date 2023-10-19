### Tienda Virtual OZARU

Esta es una tienda virtual, inspirada por y para coleccionistas los cuales estan en busca de los mejores productos para agregar a sus vitrinas.

La tienda pretende poner al alcance de los coleccionistas todos los articulos que ellos necesitan. Entre estos estan las figuras coleccionables, funkos y cards.
#Este Proyecto esta hecho con REACT:

[![react](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/React-Symbol.png?alt=media&token=ff323651-3db0-48f1-a66b-5af1057081e0 "react")](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/React-Symbol.png?alt=media&token=ff323651-3db0-48f1-a66b-5af1057081e0 "react")
**Para realizar esta proyecto se utilizaron las siguientes herramientas:** 
# Editor.md
**Para editar el  readme.md** (https://pandao.github.io/editor.md/en.html#OZARU%20Tienda%20Virtual)

![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)

![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)

#Bootstrap
[![bootstrap icon](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/Bootstrap-200px.png?alt=media&token=a2356eb5-7709-4f03-9664-e7ffe3f58097 "bootstrap icon")](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/Bootstrap-200px.png?alt=media&token=a2356eb5-7709-4f03-9664-e7ffe3f58097 "bootstrap icon")

======================================================

**NavBar - OZARU**

Para este proyecto se utilizo el Bootstrap en el *Navbar.js*  ya que te permite hacer responsivo el mismo y ya viene con una guia definida de estilos los cuales se modificaron levemente para dar con el color de la marca OZARU.

[![Ozaru Navbar](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/NavbarOzaru.PNG?alt=media&token=0aa6ffd4-551f-4175-afc8-62a6b362429a "Ozaru Navbar")](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/NavbarOzaru.PNG?alt=media&token=0aa6ffd4-551f-4175-afc8-62a6b362429a "Ozaru Navbar")

**Carrousel - OZARU**

Para el componente *Carrousel.js* se utilizo Bootstrap para agilizar el desarrollo y la visualizacion de imagenes en el slide. Para este caso en particular se utilizaron los componentes de la variante Autoplaying carousels de bootstrap.

[![Carrousel](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/carrousel.PNG?alt=media&token=12c87b23-76ba-40a8-b063-501b82f62390 "Carrousel")](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/carrousel.PNG?alt=media&token=12c87b23-76ba-40a8-b063-501b82f62390 "Carrousel")

#React-Bootstrap
[![react-bootstrap](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/reactbootstrap-200px.png?alt=media&token=9c6989db-7bc1-452f-846d-41b2a5e28840 "react-bootstrap")](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/reactbootstrap-200px.png?alt=media&token=9c6989db-7bc1-452f-846d-41b2a5e28840 "react-bootstrap")

=======================================================
**Item - OZARU**

[![Item](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/Item%20Card.PNG?alt=media&token=e2dac67d-f684-42c2-9efe-51721d181be8 "Item")](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/Item%20Card.PNG?alt=media&token=e2dac67d-f684-42c2-9efe-51721d181be8 "Item")

 Se utilizo React-Bootstrap en el componente Item.js por su versatilidad y su vista en grid.

```html
import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Item.css'

const Item = ({ item }) => {
	  return (
   		 <Card style={{ width: '18rem' }}>
			  <Card.Img variant="top" src={item.img} />
			  <Card.Body>
					<Card.Title>{item.name}</Card.Title>
						<Card.Text>
							  Precio: {item.price}
						</Card.Text>
						<Card.Text>
						  		Stock Disponible: {item.stock}
						</Card.Text>
						<Button variant="primary">
							  <Link to={"/item/" + item.id} className='Option' >
									Ver Detalle
							  </Link>
					</Button>
			  </Card.Body>
    </Card>
  )
}

export default Item;
```
#REACT-ROUTER-DOM

Agregar React-Router-Dom al proyecto mediante NPM>
```html
npm i -D react-router-dom
```

[![REACT-ROUTER-DOM](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/react%20router%20dom.PNG?alt=media&token=1f1494e3-d2bb-48ef-a687-700d44dfe3c8 "REACT-ROUTER-DOM")](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/react%20router%20dom.PNG?alt=media&token=1f1494e3-d2bb-48ef-a687-700d44dfe3c8 "REACT-ROUTER-DOM")

#DEPLOY - REACT EN GITHUB PAGES
[![gh-pages](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/GHPAGES.PNG?alt=media&token=605c6cf6-ebf9-4dfd-9344-4919f1f18ebe "gh-pages")](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/GHPAGES.PNG?alt=media&token=605c6cf6-ebf9-4dfd-9344-4919f1f18ebe "gh-pages")
**1. Install the gh-pages npm package**

1.1. Install the [gh-pages](https://github.com/tschaub/gh-pages "gh-pages") npm package and designate it as a development dependency:

```html
$ npm install gh-pages --save-dev
```
At this point, the gh-pages npm package is installed on your computer and the React app's dependence upon it is documented in the React app's package.json file.

**2. Add a homepage property to the package.json file**

2.1. Open the package.json file in a text editor.

```html
$ vi package.json
```
In this tutorial, the text editor I'll be using is vi. You can use any text editor you want; for example, Visual Studio Code.

2.2. Add a homepage property in this format*:

https://{username}.github.io/{repo-name}

> * For a project site, that's the format. For a user site, the format is: https://{username}.github.io. You can read more about the homepage property in the "GitHub Pages" section of the create-react-app documentation.

```html
{
  "name": "my-app",
  "version": "0.1.0",
+ "homepage": "https://gitname.github.io/react-gh-pages",
  "private": true,
```
At this point, the React app's package.json file includes a property named homepage.

**3. Add deployment scripts to the package.json file**
Open the package.json file in a text editor (if it isn't already open in one).

```html
$ vi package.json
```
Add a predeploy property and a deploy property to the scripts object:

```html
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```
At this point, the React app's package.json file includes deployment scripts.

**4. Add a "remote" that points to the GitHub repository**
Add a "remote" to the local Git repository.

You can do that by issuing a command in this format:

```html
$ git remote add origin https://github.com/{username}/{repo-name}.git
```
To customize that command for your situation, replace {username} with your GitHub username and replace {repo-name} with the name of the GitHub repository you created in Step 1.

In my case, I'll run:

```html
$ git remote add origin https://github.com/gitname/react-gh-pages.git
```
> That command tells Git where I want it to push things whenever I—or the gh-pages npm package acting on my behalf—issue the $ git push command from within this local Git repository.That command tells Git where I want it to push things whenever I—or the gh-pages npm package acting on my behalf—issue the $ git push command from within this local Git repository.

At this point, the local repository has a "remote" whose URL points to the GitHub repository you created in Step 1.

**5. Push the React app to the GitHub repository**

Push the React app to the GitHub repository

```html
$ npm run deploy
```

> That will cause the predeploy and deploy scripts defined in package.json to run.

Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist.

By default, the new commit on the gh-pages branch will have a commit message of "Updates". You can specify a custom commit message via the -m option, like this:

```html
$ npm run deploy -- -m "Deploy React app to GitHub Pages"
```

At this point, the GitHub repository contains a branch named gh-pages, which contains the files that make up the distributable version of the React app. However, we haven't configured GitHub Pages to serve those files yet.

**6. Configure GitHub Pages**

1. Navigate to the GitHub Pages settings page
		I. In your web browser, navigate to the GitHub repository
		II. Above the code browser, click on the tab labeled "Settings"
		III. In the sidebar, in the "Code and automation" section, click on "Pages"
2. Configure the "Build and deployment" settings like this:
		Source: Deploy from a branch
		Branch:
			Branch: gh-pages
			Folder: / (root)
3. Click on the "Save" button

That's it! The React app has been deployed to GitHub Pages! 🚀

At this point, the React app is accessible to anyone who visits the homepage URL you specified in Step 4. For example, the React app I deployed is accessible at https://gitname.github.io/react-gh-pages.




#FIREBASE -FIRESTORE
[![FIREBASE LOGO](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/1280px-Firebase_Logo.svg.png?alt=media&token=7a49016c-add8-42c4-81d1-27df4e690653 "FIREBASE LOGO")](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/1280px-Firebase_Logo.svg.png?alt=media&token=7a49016c-add8-42c4-81d1-27df4e690653 "FIREBASE LOGO")

**Estorage en Firebase - OZARU**

Firebase Realtime Database es una base de datos NoSQL alojada en la nube que te permite almacenar y sincronizar datos entre tus usuarios en tiempo real. NUEVO: Cloud Firestore te permite almacenar, sincronizar y buscar datos de app a escala global.

Para este proyecto concretamente se utilizo *FIRESTORE*, que nos sirve para almacenar la informacion de nuestros productos asi como la de los pedidos en la coleccion orders :

[![firestore](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/firestore.PNG?alt=media&token=5b835faa-8abc-4339-b252-cd719c77dea8 "firestore")](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/firestore.PNG?alt=media&token=5b835faa-8abc-4339-b252-cd719c77dea8 "firestore")

# REACT DEFAUTLS

[![react](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/React-Symbol.png?alt=media&token=ff323651-3db0-48f1-a66b-5af1057081e0 "react")](https://firebasestorage.googleapis.com/v0/b/imagenes-6b1dc.appspot.com/o/React-Symbol.png?alt=media&token=ff323651-3db0-48f1-a66b-5af1057081e0 "react")

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
