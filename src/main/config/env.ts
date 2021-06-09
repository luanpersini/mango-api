export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/clean-node-api',
  // mongoUrl: process.env.MONGO_URL || '"mongodb://localhost:27017/clean-node-api",{useNewUrlParser: true, useUnifiedTopology: true}',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'tj67O==5H'
}
