export const getUserLocation = async (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords: [number, number] = [
          position.coords.longitude,
          position.coords.latitude,
        ];
        resolve(coords);
      },
      (error) => {
        alert(
          "Unable to retrieve your location. Please allow location access in your browser settings."
        );
        console.error("Error getting user location:", error);
        reject(error);
      }
    );
  });
};
