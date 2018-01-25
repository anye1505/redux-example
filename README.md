Para ejecutar esta aplicación es necesario la instalación de las siguientes
dependencias y con las mismas versiones:

npm install --save react@15.4.0
npm install --save redux@3.6.0
npm install --save react-bootstrap@0.30.7
npm install --save react-dom@15.4.2
npm install --save react-scripts@0.8.5

Luego agregar estas lines de Scrips en el archivo: Package.json

"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
}

Seguidamente escribir el comando:

npm start
