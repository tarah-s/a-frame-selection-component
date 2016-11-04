
/**
 * Selection and generate component for A-Frame.
 * generate component modified from dmarcos a-invaders spawner https://github.com/dmarcos/a-invaders/blob/master/js/components/spawner.js
 */
AFRAME.registerComponent('picker', {

  schema: {
    on: { default: 'click' },
    asset: { default: 'item'},
    width: { default: '1' }
  },

  update: function (oldData) {
    var el = this.el;
    var pick = this.pick.bind(this);
    el.addEventListener(this.data.on, pick);
  },

  pick: function () {
    var ID = this.data.asset;
    var size = this.data.width;
    var items = document.querySelectorAll('.generate');

    console.log(size);

    if (checkClass(ID === ID)) {
      this.add(ID,items,size);
    }
  },

  add: function (ID,items,size) {
    items.forEach(function(element) {
      element.setAttribute('generate','img: '+ ID +'; on: click; size:' + size);
    });
  }

});


/**
 * Check class
 */
function checkClass (entity, cls) {
 return (' ' + entity.className + ' ').indexOf(' ' + cls + ' ') > -1;
}


AFRAME.registerComponent('generate', {

  schema: {
    on: { default: 'click' },
    img: { default: '' },
    size: { default: '1' }
  },

  update: function () {
    var el = this.el;
    var generate = this.generate.bind(this);
    if (this.on === this.data.on) { return; }
    el.removeEventListener(this.on, generate);
    el.addEventListener(this.data.on, generate);
    this.on = this.data.on;
  },

  generate: function () {
    var el = this.el;
    var size = this.data.size;
    var matrixWorld = el.object3D.matrixWorld;
    var position = new THREE.Vector3();
    position.setFromMatrixPosition(matrixWorld);

    // Reset Y to bottom of plane
    var posY = size/2;
    position.setY(posY);

    var entity = document.createElement('a-image');
    entity.setAttribute('position', position);
    entity.setAttribute('src', "#" + this.data.img);
    entity.setAttribute('width', size);
    entity.setAttribute('height', size);

    // All objects to look at camera
    entity.setAttribute('look-at', '#camera');

    if (checkClass(el, 'generate')) {
      el.sceneEl.appendChild(entity);
    }

  }
});
