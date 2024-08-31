 class ControllerTables{
    constructor(){
    }
    public index(req:any,res:any):void{
        return res.json({
            message:"hellow"
        });
    }

}

export default new ControllerTables