
let data = [
    {id : 1 ,name : "Vasu" , age: 21 , salary : 1200000},
    {id : 2 ,name : "Avinash" , age: 23 , salary : 1100000},
    {id : 3 ,name : "Yash" , age: 25 , salary : 100000},
    {id : 4 ,name : "Hitesh" , age: 26 , salary : 300000},
    {id : 5 ,name : "Harshit" , age: 29 , salary : 200000}
];

// @desc  Get all data
// @ Route GET/api/data

export const getData = (req,res,next) => {
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0){
        return res.status(200).json(data.slice(0,limit));
    }
    res.status(200).json(data);
};

// @desc    Get single/data
// @route   GET /api/data/:id

export const getInData = (req,res,next) => {  // Retrieve data for any individual
    const id = parseInt(req.params.id);
    const individualData = data.find((d) => d.id === id);

    if(!individualData){
        const error = new Error(`A Data with id ${id} was not found`);
        error.status(404);
        return next(error);
    }
    res.status(201).json( individualData);
};


// @desc    Create new Data
// @route   POST /api/data

export const PostData = (req,res,next) => { 
    const {name,age,salary} = req.body;
    if(!name || !age || !salary){
        const error = new Error(`Please add name , age , salary`);
        res.status(404);
        return next(error);
    }
    const newId = data.length === 0 ? 1 : data[data.length - 1].id + 1;
    const newEntry = {id : newId , name , age , salary};
    data.push(newEntry);
    res.status(201).json(newEntry);
};

// @desc Put data
// @route PUT/api/data/:id

export const putData = (req,res,next) => {
    const id = parseInt(req.params.id);
    const ExistingData = data.find((items) => items.id === id);

    if(!ExistingData){
        const error = new Error(`A Data with id: ${id} is not found please enter a valid id number`);
        error.status(404);
        return next(error);
    }
    const {name , age , salary} = req.body;
    
    ExistingData.name = name !== undefined ? name : ExistingData.name;
    ExistingData.age = age !== undefined ? age : ExistingData.age;
    ExistingData.salary = salary !== undefined ? salary : ExistingData.salary;

    res.status(200).json(data);
};

// @desc Delete data
// @route Delete/api/data/:id

export const DeletePost = (req,res,next) => {
    const id = parseInt(req.params.id);
    const ExistingData = data.find((Items) => Items.id === id);

    if (!ExistingData) {
        const error = new Error(`A Data with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }
   data = data.filter((Items) => Items.id !== id);
   res.status(201).json(data);
}


