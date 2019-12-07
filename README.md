# Data_Visual_backend
##
Airbnb and 311 Service API Usage
http://data-visual-api.herokuapp.com/


###
@GET Endpoint to fetch a specific borough's airbnb data.

http://data-visual-api.herokuapp.com/borough/{$borough_name}

Example:
```
http://data-visual-api.herokuapp.com/borough/Manhattan
```
Will return data of Airbnbs in Manhattan.



###
@GET Endpoint to fetch a specific borough's 311 service data

http://data-visual-api.herokuapp.com/service/{$borough_name}

Example:
```
http://data-visual-api.herokuapp.com/service/Manhattan
```
Will return data of 311 service calls  in Manhattan.

###
@GET Endpoint to fetch total number of 311 service calls in each neighbourhood

http://data-visual-api.herokuapp.com/service/count



###
@POST Endpoint to allow users to add to 311 service data

http://data-visual-api.herokuapp.com/report

This endpoint expects the following example body (description is optional): 

```
"severity": "High",
"description": "House robbery",
"latitude": 40.12,
"longitude": 30.98
```


