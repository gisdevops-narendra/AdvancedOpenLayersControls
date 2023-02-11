const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-0.12755, 51.507222]),
        zoom: 10
    })
});
const popup = new Popup({
    header: 'Openlayers Attribute',
    content: '',
    saveButtonId: 'attributeSave',
    inputType: [{
        tagName: 'input',
        type: 'text',
        id: 'name',
        className: 'input-field',
        attributes: {
            placeholder: 'text'
        }
    }, {
        tagName: 'input',
        type: 'checkbox',
        className: 'input-field',
        attributes: {
            placeholder: 'checkbox'
        }
    }, {
        tagName: 'input',
        type: 'color',
        className: 'input-field',
        attributes: {
            placeholder: 'color'
        }
    }, {
        tagName: 'input',
        type: 'time',
        className: 'input-field',
        attributes: {
            placeholder: 'time'
        }
    }, {
        tagName: 'input',
        type: 'email',
        className: 'input-field',
        attributes: {
            placeholder: 'email'
        }
    }, {
        tagName: 'input',
        type: 'file',
        className: 'input-field',
        attributes: {
            placeholder: 'file'
        }
    }, {
        tagName: 'input',
        type: 'search',
        className: 'input-field',
        attributes: {
            placeholder: 'search'
        }
    }]
});
const attributeSave = document.getElementById('attributeSave');
attributeSave.addEventListener('click', () => {
    var name = document.getElementById('name').value;
    console.log(name)
});
const showPopupBtn = document.getElementById('showPopupBtn');
const open = false;
showPopupBtn.addEventListener('click', () => {
    open ? popup.hide() : popup.show();
    open = !open;
});