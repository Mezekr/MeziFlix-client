import { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import MovieView from '../MovieView/MovieView';

const MainView = () => {
	const [movies, setMovies] = useState([
		{
			_id: 1,
			Title: 'The Secret Garden',
			Description: 'A young girl discovers a hidden, magical garden.',
			Genre: {
				Name: 'Family',
				Description: 'Movies suitable for all ages.',
			},
			Director: {
				Name: 'Marc Webb',
				Bio: 'An American film director known for his work in both indie and blockbuster films.',
				Birth: '1974-08-31',
				Death: null,
			},
			Actors: ['Dakota Fanning', 'Colin Firth', 'Julie Walters'],
			ImagePath:
				'https://imgs.search.brave.com/Pws-WI45UXyN27RcnIRnLSaVVWMfAZNOPFeUxMHSPJA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFRaERIamVBREwu/anBn',
			Featured: true,
			ReleaseYear: '2020',
			Rating: 7.5,
		},
		{
			_id: 2,
			Title: 'Inception',
			Description:
				'A thief who enters the dreams of others to steal their secrets.',
			Genre: {
				Name: 'Thriller',
				Description: 'Movies that thrill and captivate.',
			},
			Director: {
				Name: 'Christopher Nolan',
				Bio: 'A visionary filmmaker known for his mind-bending narratives.',
				Birth: '1970-07-30',
				Death: null,
			},
			Actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
			ImagePath:
				'https://imgs.search.brave.com/rfLlz8adTYV7r_ULmGj3O5mcvaEOVcbeOBHnqjThX0M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pcnMu/d3d3Lndhcm5lcmJy/b3MuY29tL2tleWFy/dC1qcGVnL2luY2Vw/dGlvbl9rZXlhcnQu/anBn',
			Featured: true,
			ReleaseYear: '2010',
			Rating: 8.8,
		},
		{
			_id: 3,
			Title: 'The Lord of the Rings: The Fellowship of the Ring',
			Description:
				'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
			Genre: {
				Name: 'Fantasy',
				Definition:
					'Fantasy is a genre that uses magic and other supernatural phenomena as a primary plot element, theme, or setting.',
			},
			Director: {
				Name: 'Peter Jackson',
				Bio: 'Sir Peter Robert Jackson is a New Zealand film director, producer, and screenwriter.',
				Birth: new Date('1961-10-31'),
				Death: null,
			},
			Actors: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
			ImagePath:
				'https://imgs.search.brave.com/B1BBto3kaRG04gDcb0yd2t_fdUQP3ihdADlICULmbIE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pcnMu/d3d3Lndhcm5lcmJy/b3MuY29tL2tleWFy/dC1qcGVnL21vdmll/cy9tZWRpYS9icm93/c2VyL2xvcmRfb2Zf/dGhlX3JpbmdzX2Zl/bGxvd3NoaXBfb2Zf/dGhlX3JpbmdfMjAw/MHgzMDAwLmpwZw',
			Featured: true,
			ReleaseYear: '2001-12-19',
			Rating: 8.8,
		},
		{
			_id: 4,
			Title: 'Gladiator',
			Description:
				'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
			Genre: {
				Name: 'Action',
				Definition:
					'Action movies typically involve high-energy physical stunts, chases, fights, and explosions.',
			},
			Director: {
				Name: 'Ridley Scott',
				Bio: 'Sir Ridley Scott is an English film director and producer.',
				Birth: new Date('1937-11-30'),
				Death: null,
			},
			Actors: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'],
			ImagePath:
				'https://imgs.search.brave.com/vhVcVyPfRf5jGt1x6SH0lRUJuGsHsaDaVCraUUL_vrc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1EbGlNbU5o/TkRFdE9EVXlPUzAw/TWpObExUZ3hPREV0/TjJVM056SXhNR1Zr/WlRBMUwybHRZV2Rs/WGtFeVhrRnFjR2Rl/UVhWeU5qVTBPVFEw/T1RZQC5qcGc',
			Featured: true,
			ReleaseYear: '2000-05-05',
			Rating: 8.5,
		},
	]);

	const [selectedMovie, setSelectedMovie] = useState(null);

	if (selectedMovie)
		return (
			<MovieView
				movie={selectedMovie}
				onBackClick={() => setSelectedMovie(null)}
			/>
		);

	return (
		<div>
			{movies?.length <= 0 ? (
				<h2 className="empty"> Movies List is Empty.😣</h2>
			) : (
				<div className="movie-container">
					{movies.map((movie) => {
						return (
							<MovieCard
								key={movie._id}
								movie={movie}
								OnMovieClick={(newSelectedMovie) =>
									setSelectedMovie(newSelectedMovie)
								}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};
export default MainView;
