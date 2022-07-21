const express=require('express')
const route=express.Router();
const blogController=require('../controllers/blogController')
//Post Request
route.post('/',blogController.blog_create_post)
//create
route.get('/create', blogController.blog_create_get);
//route paraeters
route.get("/:id",blogController.blog_details)
// delete request
route.delete('/:id',blogController.blog_delete)
// All Blogs page
route.get('/',blogController.blog_index)

module.exports = route;