import Tour from "../models/Tour.js";
import Review from "../models/Review.js";


export const createReview =  async(req,res)=>{

    const tourId = req.params.tourId
    const newReview = new Review({...req.body})
    try{
        const savedReview = await newReview.save()

        await Tour.findByIdAndUpdate(tourId,{
            $push:{reviews:savedReview._id}
        })
        res.status(200).json({success:true,message:"Review submitted",data:savedReview})

    }catch(err){
        res.status(500).json({success:false,message:"failed to submit"});
    }
}


export const count = async (req, res) => {
    try {
        const tourId = req.params.tourId;
        const rating = req.body.rating + 1; 
        // Assuming your Review model has a structure and validation
        const newReview = new Review({
            tourId,
            rating,
            // Add other properties from req.body as needed
        });

        const savedReview = await newReview.save();

        res.status(200).json({
            success: true,
            message: "Review submitted successfully",
            data: savedReview,
        });
    } catch (err) {
        console.error(err); 

        res.status(500).json({
            success: false,
            message: "Failed to submit review",
        });
    }
};

