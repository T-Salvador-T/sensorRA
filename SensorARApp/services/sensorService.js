export const getSensorData = async () => {
    try {
      // Cambia esta URL por la de tu API real
      const response = await fetch('https://{orgId}.iot.masdomain.com/{base_URL}'); // Asegúrate de que el servidor esté corriendo
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.statusText);
      }
      const data = await response.json();
      return data; // Devuelve los datos obtenidos
    } catch (error) {
      console.error('Error al obtener datos de sensores:', error);
      return null; // Devuelve null en caso de error
    }
  };