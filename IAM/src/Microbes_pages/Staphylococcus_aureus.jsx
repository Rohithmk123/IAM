import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const Staphylococcus_aureus = () => {
  const [latLonData, setLatLonData] = useState([]);

  useEffect(() => {
    // Fetch CSV data from the provided URL
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/Rohithmk123/IAM/main/Acinetobacter_metadata.csv'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch CSV data');
        }

        const csvText = await response.text();

        Papa.parse(csvText, {
          complete: (result) => {
            // Extract "lat_lon" column until the 37th row
            const extractedData = result.data
              .slice(0, 37)
              .map((row) => row.lat_lon);

            // Split "lat_lon" into separate lat and lon variables
            const processedData = extractedData.map((item) => {
              const [lat, latDirection, lon, lonDirection] = item.split(' ');

              // Convert lat and lon to numbers
              const latNumeric = parseFloat(lat);
              const lonNumeric = parseFloat(lon);

              // Determine the sign of lat and lon based on direction
              const latSign = latDirection === 'N' ? 1 : -1;
              const lonSign = lonDirection === 'E' ? 1 : -1;

              // Calculate final lat and lon values
              const finalLat = latNumeric * latSign;
              const finalLon = lonNumeric * lonSign;

              return { lat: finalLat, lon: finalLon };
            });

            // Set the processed data in the state
            setLatLonData(processedData);
          },
          header: true, // Set to true if the CSV file has headers
        });
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  // Store latLonData in a variable if needed for further processing
  const extractedLatLonData = latLonData;

  // You can use extractedLatLonData as needed in your application

  return (
    <div>
      <h2>CSV Reader</h2>
      {/* You can render other components or UI elements as needed */}
      
    </div>
  );
};






export default Staphylococcus_aureus;











