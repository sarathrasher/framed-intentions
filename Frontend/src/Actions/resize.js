
let resizableOptions = {
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },
  
    // keep the edges inside the parent
    restrictEdges: {
      outer: 'parent',
      endOnly: true,
    },
  
    // minimum size
    restrictSize: {
      min: { width: 100, height: 50 },
    },
  
    inertia: true,
  onmove: (event) => {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);
    target.style.zIndex = '1';
    // update the element's style
    target.style.width  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';
  
    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;
  
    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';  
  },
  // onend: event => {
  //   const target = event.target;
  //   target.style.zIndex = '0';
  // }
}


export default resizableOptions;