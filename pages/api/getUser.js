import useNoHelp from "sapsar/use/useNoHelp"
useNoHelp("api/getUser")

export default function(req, res){
    res.json({
        name: "John Doe",
        age: 20,
        email: "e@nitlix.pro"
    })
}