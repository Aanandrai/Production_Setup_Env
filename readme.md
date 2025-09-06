## Learn the professional setup of the env file 

Build the env file schema in more then 2 file which in json
make the env.json file which hold the actual data

use convict and convict-file-with-validator to validate the env schema
fs for read directory and file
cjson to load and read json file with comment
lodash to merge the schemas

validate the data and schema then import it as config
to get the data use config.get(variable_name)


use seperate file for dev,test,prod
development.json for dev, 
test.json for test
production.json for prod
