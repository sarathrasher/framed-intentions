
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
}


export default resizableOptions;