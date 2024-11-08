export function getHtmlContent(latitude, longitude) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Map</title>
        <script src="https://js.arcgis.com/4.18/"></script>
        <style>
          html, body, #viewDiv {
            padding: 0;
            margin: 0;
            height: 100%;
            width: 100%;
          }
        </style>
      </head>
      <body>
        <div id="viewDiv"></div>
        <script async>
          require(["esri/Map", "esri/views/MapView", "esri/Graphic"], function(Map, MapView, Graphic) {
            const map = new Map({
              basemap: "hybrid"
            });

            const view = new MapView({
              container: "viewDiv",
              map: map,
              center: [${longitude}, ${latitude}],
              zoom: 15
            });

            // Create a marker graphic
            const marker = new Graphic({
              geometry: {
                type: "point",
                longitude: ${longitude},
                latitude: ${latitude}
              },
              symbol: {
                type: "simple-marker",
                color: "blue", // Main color of the marker
                size: "16px", // Size of the marker
                outline: {
                  color: "white", // Color of the marker's outline
                  width: 2 // Thickness of the outline
                },
                style: "circle", // Can be "square", "diamond", "cross", etc.
                shadowColor: "rgba(0, 0, 0, 0.3)", // A slight shadow effect
                shadowOffsetX: 2,
                shadowOffsetY: 2
              }
            });

            view.graphics.add(marker);

            // Set marker to the clicked location on the map
            view.on("click", function(event) {
              marker.geometry = event.mapPoint;

              // Send new coordinates to React Native
              window.ReactNativeWebView.postMessage(JSON.stringify({
                latitude: event.mapPoint.latitude,
                longitude: event.mapPoint.longitude
              }));
            });
          });
        </script>
      </body>
    </html>
  `;
}
