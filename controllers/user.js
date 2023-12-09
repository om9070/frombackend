const User = require("../models/user")
const country=require("../models/event")


exports.postFormData = async function (req, res) {
    try {
       const formData=req.body;
        const user = new User({ ...formData});
        await user.save();

        res.status(201).json({ message: 'form created successfully',status:1 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

exports.country = async (req, res) => {
    try {
        const SearchName=req.query.name;
        let data=[]
        if(!SearchName=="country"||!SearchName=="state"||!SearchName=="city"){
            return res.status(400).json({ message: 'your query is incorrect',status:0});
        }
        const countryData = await country.findOne();
        if(SearchName=="country"){
            data=countryData.country
        }else if(SearchName=="state"){
            data=countryData.state
        }else{
            data=countryData.city
        }
        res.status(200).json({ message: 'Get All Form Data  successful',status:1,data:data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getFormData=async(req,res)=>{
    try {
        const user = await User.find();
        res.status(200).json({ message: 'Get All Form Data  successful',status:1,data:user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}