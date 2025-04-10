// src/components/ARView.js

import React, { useEffect, useState } from 'react';
import { ViroARScene, ViroText } from 'react-viro';
import { getSensorData } from '../services/sensorService'; // Importa la función

const ARView = () => {
  const [sensorData, setSensorData] = useState({ temperature: 0, humidity: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSensorData(); // Llama a la función para obtener datos
      if (data) {
        setSensorData(data); // Actualiza el estado con los datos obtenidos
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Actualiza cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <ViroARScene>
      <ViroText
        text={`Temperatura: ${sensorData.temperature}°C`}
        position={[0, 0, -1]}
        style={{ fontSize: 20, color: 'white' }}
      />
      <ViroText
        text={`Humedad: ${sensorData.humidity}%`}
        position={[0, -0.5, -1]}
        style={{ fontSize: 20, color: 'white' }}
      />
    </ViroARScene>
  );
};

export default ARView;