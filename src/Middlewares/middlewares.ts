
export default async (req:any, res:any, next:object) => {

    
    const { authorization } = req.headers;
    if(!authorization) {
        return res.status(401).json({
            errors: ['Login required'],
        })
    }


}