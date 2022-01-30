export const notFound = (req, res, next)=>{
  const error = new Error()
  res.status(400).json(`This url(${req.originalUrl}) does not exist on this server, check and try again`)
  next(error)
}
