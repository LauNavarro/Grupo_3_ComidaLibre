const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/products'))
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_productImage${path.extname(file.originalname)}`)
    }
})

const uploadImg = multer({ storage })

module.exports = uploadImg;