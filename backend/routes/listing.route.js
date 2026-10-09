import express from "express"
import isAuth from "../middleware/isAuth.js"
import upload from "../middleware/multer.js"
import {addListing, deleteListing, getListing, findListing, updateListing, ratingListing, search} from "../controllers/listing.controller.js"
import isAdmin from "../middleware/isAdmin.js";

let listingRouter = express.Router()


listingRouter.post("/add",isAuth,isAdmin,upload.fields([
    {name:"image1",maxCount:1},
    {name:"image2",maxCount:1},
    {name:"image3",maxCount:1}
]),addListing)


listingRouter.get("/get",getListing)
listingRouter.get("/findlistingbyid/:id",isAuth,findListing)
listingRouter.delete("/delete/:id",isAuth,isAdmin,deleteListing)
listingRouter.post("/ratings/:id",isAuth,ratingListing)
listingRouter.get("/search",search)


listingRouter.post("/update/:id",isAuth,isAdmin,upload.fields([
    {name:"image1",maxCount:1},
    {name:"image2",maxCount:1},
    {name:"image3",maxCount:1}
]),updateListing)

export default listingRouter