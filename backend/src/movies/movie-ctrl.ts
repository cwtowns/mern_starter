import { MovieModel } from './movie-model';
import { Request, Response } from 'express';


export function createMovie(req: Request, res: Response) {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            error: 'You must provide a movie',
        })
    }

    const movie = new MovieModel(body)

    if (!movie) {
        return res.status(400);
    }

    movie
        .save()
        .then(() => {
            return res.status(201).json({
                id: movie._id,
                message: 'Movie created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Movie not created!',
            })
        })
};


export function getMovies(req: Request, res: Response) {
    MovieModel.find({}).then(movies => {
        if (!movies.length) {
            return res
                .status(404)
                .json({ error: `Movie not found` })
        }
        return res.status(200).json({ data: movies })
    }, err => {
        return res.status(400).json({ error: err });
    }).catch(err => console.log(err));
};
