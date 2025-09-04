import mongoose from 'mongoose' 
import { describe, expect, test, beforeEach } from '@jest/globals'
import { createPost, getPostById, listAllPosts, listPostsByAuthor, listPostsByTag, deletePost, updatePost } from '../services/posts.js' 
import { Post } from '../db/models/post.js'

//Add in example posts

//create a before each function that adds in all posts from the sample posts

//create a test that lists all posts and verifies they are uploaded

//create a test that filters by tag

describe('creating posts', () => {

    test('should return the full post', async () => { 
        const post = await getPostById(createdSamplePosts[0]._id) 
        expect(post.toObject()).toEqual(createdSamplePosts[0].toObject()) 
    })

     test('should fail if the id does not exist', async () => { 
        const post = await getPostById('000000000000000000000000')  
        expect(post).toEqual(null)   })
     

    test('create a post successfully', async () => {
        const post = {       title: 'Hello Mongoose!',  
            author: 'Daniel Bugl', 
            contents: 'This post is stored in a MongoDB database using Mongoose.',
            tags: ['mongoose', 'mongodb']} 
        const createdPost = await createPost(post)
        expect(createdPost._id).toBeInstanceOf(mongoose.Types.ObjectId)
    const foundPost = await Post.findById(createdPost._id)  
    expect(foundPost).toEqual(expect.objectContaining(post))
    expect(foundPost.createdAt).toBeInstanceOf(Date)
    expect(foundPost.updatedAt).toBeInstanceOf(Date)
    })

    test('without title should fail', async () => {    
     const post = { 
        author: 'Daniel Bugl', 
        contents: 'Post with no title',
        tags: ['empty']}
        try { 
            await createPost(post) 
        } catch (err) { 
            expect(err).toBeInstanceOf(mongoose.Error.ValidationError) 
            expect(err.message).toContain('`title` is required')
        } 
    })

    test('with minimal parameters should succeed', async () => { 
        const post = { 
            title: 'Only a title', 
        } 
        const createdPost = await createPost(post) 
        expect(createdPost._id).toBeInstanceOf(mongoose.Types.ObjectId) 
    }) 
})