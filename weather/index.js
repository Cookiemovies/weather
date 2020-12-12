module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function Weather processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    let response = "";

    if (name) {
        response = "Hello " + name;
    }
    else {
        response = "Please enter an argument like ?name=Martin";
    }
    
    context.res = {
        body: response
    };
}