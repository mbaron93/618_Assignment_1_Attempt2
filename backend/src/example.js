import {initDB} from './db/initdb.js';
import { Post } from './db/models/post.js';

await initDB();

const post = new Post({
    title: 'My first post',
    author: 'Baron',
    contents: 'This is my first post',
    tags: ['introduction', 'welcome'],
});
await post.save()

const posty = await Post.find()
console.log(posty)