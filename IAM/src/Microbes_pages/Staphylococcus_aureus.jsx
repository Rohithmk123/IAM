import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const Staphylococcus_aureus = () => {
  const [latLonData, setLatLonData] = useState([]);

  useEffect(() => {
    const fetchCSVData = async () => {
      try {
        // Replace 'YOUR_CSV_FILE_URL' with the actual URL of your CSV file
        const response = await fetch('IAM/src/Microbes_pages/ABCoordinatesNEW.csv');

        if (!response.ok) {
          throw new Error('Failed to fetch CSV data');
        }

        const csvText = await response.text();

        Papa.parse(csvText, {
          complete: (result) => {
            // Process the parsed data as needed
            setLatLonData(result.data);
          },
          header: true, // Set to true if the CSV file has headers
        });
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCSVData();
  }, []);

  return (
    <div>
      {/* Render the fetched CSV data or display loading/error messages */}
      {latLonData.map((row, index) => (
        <div key={index}>
          <p>{row.lat}</p>
          <p>{row.lon}</p>
          {/* Add more rows/columns as needed */}
        </div>
      ))}
    </div>
  );
};

export default Staphylococcus_aureus;
