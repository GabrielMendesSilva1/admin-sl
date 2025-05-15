// import { useEffect, useState } from 'react';
// import { getSegurados } from '../../services/SeguradoService';

// export const useSegurado = () => {
//   const [segurados, setSegurados] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getSegurados().then(data => {
//       setSegurados(data);
//       setLoading(false);
//       console.log(data)
//     });
//   }, []);

//   return { segurados, loading };
// };
