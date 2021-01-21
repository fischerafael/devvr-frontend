import { useEffect, useState } from 'react';

const useGetPosition = () => {
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);

	useEffect(() => {
		getLocation();
	}, []);

	function getLocation() {
		navigator.geolocation.getCurrentPosition(
			function (position: any) {
				setLatitude(position.coords.latitude);
				setLongitude(position.coords.longitude);
			},
			function (err) {
				alert('Erro ao carregar posição do usuário');
				console.log(err);
				setLatitude(0);
				setLongitude(0);
			}
		);
	}

	return { latitude, longitude, setLatitude, setLongitude };
};

export default useGetPosition;
