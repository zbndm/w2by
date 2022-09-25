import "./console.js"

// export const onRequest = async ({ next }) => {
// 	const response = await next();
// 	response.headers.set("x-custom", "header value");
// 	return response;
// };



async function errorHandler(context) {

  try {
    
    // wait for the next function to finish
    return await context.next()
  } catch (err) {
    console.warn(err)
    // catch and report and errors when running the next function
    return new Response( { status: 200 })
  }
}


export const onRequest = errorHandler;