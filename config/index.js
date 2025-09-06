const convict=require("convict")
const convictWithValidator =require("convict-format-with-validator")
const _ = require('lodash')

const cjson =require("cjson")
const fs=require("fs")
const path=require("path")

convict.addFormats(convictWithValidator)

const schemaDir=path.join(__dirname,"schema")
const schemaFiles=fs.readdirSync(schemaDir).filter(file=>file.endsWith(".json"))

let mergeSchema ={}

schemaFiles.forEach((file)=>{
    filepath=path.join(schemaDir,file)

    f=cjson.load(filepath)
   
    mergeSchema=_.merge(mergeSchema,f)
})


const config=convict(mergeSchema)

config.loadFile(path.join(__dirname,"development.json"))

config.validate({allowed:"strict"})

module.exports=config