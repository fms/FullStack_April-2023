export const api = {
  getMovies: async () => {
    try {
      const response = await fetch('/api/films');
      const data = await response.json();
      console.log('API response:', data); // Add this line
      if (!data) {
        throw new Error('No data returned from API');
      }
      const actors = data.map((movie: { actor_ids: any[]; }) => {
        const actors = movie.actor_ids? movie.actor_ids.map((actorId) => ({
          actor_id: actorId,
          first_name: '',
          last_name: '',
        })) : [];
        return {...movie, actors };
      });
      return actors;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};
  
  export default api;