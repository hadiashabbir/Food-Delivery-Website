import menu from '../models/menu.js';
import mongoose from 'mongoose';

export const addProduct = async (req, res) => {
    const post = req.body;
    const newPost = new menu(post);

    console.log(newPost);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const fetchProducts = async (req, res) => {
    const {page} = req.query;
    try {
        const LIMIT = 6;
        const startIndex = (Number(page) - 1) * LIMIT;
        const total = await menu.countDocuments({});

        const posts = await menu.find().sort({_id: -1}).limit(LIMIT).skip(startIndex);
        res.status(200).json({data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)})
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const updateProducts = async (req, res) => {
    const id = req.params.id;
    const post = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    try {
        await menu.findByIdAndUpdate(id, post, {new: true});
        res.json(post);
    } catch (error) {
        res.status(409).send(error.message);
    }
}

export const deleteProducts = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    try {
        await menu.findByIdAndRemove(id);

        res.json(`post remove with id: ${id}`);
    } catch (error) {
        res.status(409).send(error.message);
    }
}

export const fetchProduct = async (req, res) => {
    const id = req.params.id;

    try {
        const post = await menu.findById(id);
        res.status(200).json(post);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}