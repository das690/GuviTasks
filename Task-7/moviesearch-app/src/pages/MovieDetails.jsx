import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await fetchMovieDetails(id);
        if (data.Response === 'True') {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [id]);

  if (loading) return <div className="text-center mt-10 text-xl">Loading Details...</div>;
  if (error) return <div className="text-center mt-10 text-xl text-red-400">{error}</div>;
  if (!movie) return null;

  return (
    <div className="max-w-5xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-lg p-6 md:p-10 mt-8">
      <Link to="/" className="text-yellow-400 hover:underline mb-6 inline-block">
        &larr; Back to Search
      </Link>
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600?text=No+Poster'}
          alt={movie.Title}
          className="w-full md:w-1/3 rounded-lg shadow-md object-cover"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">{movie.Title}</h1>
          <p className="text-gray-400 text-sm mb-6">
            {movie.Year} • {movie.Rated} • {movie.Runtime} • {movie.Genre}
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Plot</h3>
            <p className="text-gray-300 leading-relaxed">{movie.Plot}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <span className="font-bold text-gray-400">Director:</span> {movie.Director}
            </div>
            <div>
              <span className="font-bold text-gray-400">Cast:</span> {movie.Actors}
            </div>
            <div>
              <span className="font-bold text-gray-400">Box Office:</span> {movie.BoxOffice}
            </div>
            <div>
              <span className="font-bold text-gray-400">Awards:</span> {movie.Awards}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Ratings</h3>
            <div className="flex flex-wrap gap-4">
              {movie.Ratings.map((rating, index) => (
                <div key={index} className="bg-gray-700 px-4 py-2 rounded-lg text-sm">
                  <span className="font-bold text-yellow-400 block">{rating.Source}</span>
                  {rating.Value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;