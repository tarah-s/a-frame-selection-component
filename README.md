## aframe-selection-component

A Selection component for [A-Frame](https://aframe.io).

### API

| Property | Description                   | Default Value |
| -------- | ----------------------------- | ------------- |
| on       |  Copies the settings          | click         |
| asset    |  Model from assets            | model         |
| size     |  Sets the size of the model   | 1             |


### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.2.0/aframe.min.js"></script>
  <script src="https://rawgit.com//master/dist/aframe-selection-component.min.js"></script>
</head>

<body>
  <a-scene>
     <a-assets>
        <a-asset-item id="model" src="assets/model.dae"></a-asset-item>
     </a-assets>
     <a-entity picker="on: click; asset: model; size: 1"></a-entity>
     <a-entity class="generate"></a-entity>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-selection-component
```

Then register and use.

```js
require('aframe');
require('aframe-selection-component');
```
