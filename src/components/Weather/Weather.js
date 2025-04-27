import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Weather() {
    const [states, setStates] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiKey = 'BoMfcmBaNhREEZGC1CIgTFZvijVRy4R1';

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await axios.get(
                    "https://dataservice.accuweather.com/locations/v1/adminareas/IN?apikey=${apiKey}"
                );
                setStates(response.data);
            }
             catch (error) {
                console.error('Error fetching states:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStates();
    }, []);

    if (loading) {
        return <div>Loading states...</div>;
    }
    return (
        <div>
            <h1>Indian States (AccuWeather API)</h1>
            <ul>
                {states.map((state) => (
                    <li key={state.ID}>
                        {state.EnglishName} ({state.ID})
                    </li>
                ))}
            </ul>
        </div>
    );
};


// const AccuweatherStates = () => {
//   const [states, setStates] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const apiKey = 'BoMfcmBaNhREEZGC1CIgTFZvijVRy4R1';

//   useEffect(() => {
//     const fetchStates = async () => {
//       try {
//         const response = await axios.get(
//           https://dataservice.accuweather.com/locations/v1/adminareas/IN?apikey=${apiKey}
//         );
//         setStates(response.data);
//       } catch (error) {
//         console.error('Error fetching states:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStates();
//   }, []);

//   if (loading) {
//     return <div>Loading states...</div>;
//   }

//   return (
//     <div>
//       <h1>Indian States (AccuWeather API)</h1>
//       <ul>
//         {states.map((state) => (
//           <li key={state.ID}>
//             {state.EnglishName} ({state.ID})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AccuweatherStates;
