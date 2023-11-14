// SELECT PRODUCTOS SUPABASE
async function fetchProducts() {
  let response = await fetch(
    "https://cpkeeodtvoaxpnmbillo.supabase.co/rest/v1/productos?select=*",
    {
      method: "get",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwa2Vlb2R0dm9heHBubWJpbGxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2MzI2MDAsImV4cCI6MjAxNTIwODYwMH0.8AKwzEXUbrn-TGPFDAdketcWPVULnWuHktGGaBt_71M",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwa2Vlb2R0dm9heHBubWJpbGxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2MzI2MDAsImV4cCI6MjAxNTIwODYwMH0.8AKwzEXUbrn-TGPFDAdketcWPVULnWuHktGGaBt_71M",
      },
    }
  );
  let data = await response.json();
  return data;
}

fetchProducts().then((productos) => {
  for (let i = 0; i < productos.length; i++) {
    console.log(productos[i]);
  }
});

const car = {
  marca: "Citroen",
  modelo: "C4",
  anio: 2022,
  color: "Gris",
  precio: 25000,
};

// INSERTAR JSON EN SUPABASE
async function insertData(dato) {
  const response = await fetch(
    "https://cpkeeodtvoaxpnmbillo.supabase.co/rest/v1/coches",
    {
      method: "POST",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwa2Vlb2R0dm9heHBubWJpbGxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2MzI2MDAsImV4cCI6MjAxNTIwODYwMH0.8AKwzEXUbrn-TGPFDAdketcWPVULnWuHktGGaBt_71M",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwa2Vlb2R0dm9heHBubWJpbGxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2MzI2MDAsImV4cCI6MjAxNTIwODYwMH0.8AKwzEXUbrn-TGPFDAdketcWPVULnWuHktGGaBt_71M",
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({datos: dato}),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Datos obtenidos", data);
    })
    .catch((error) => {
      console.error("Error durente la solicitud", error);
    });
}

insertData(car);



