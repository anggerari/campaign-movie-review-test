# README #

Hi friends, this is a test for junior backend developer. 

Please follow the steps and goal to be successfull candidate.

### What to make? ###

* Use nodejs as the main language
* Please refer to this images (https://imgur.com/a/OchYihl)
* Task details : 
* 1 Given two entity movies and cast. Entity movies has one to many relationship with cast ( actor / actress )
* 2 Make two table in database using mysql, preferable if can use ORM like typeorm / sequelize
* 3 Movie entity properties (columns) :
     * id ; type bigint, primary key, auto increment 
     * name ; type varchar(100)
     * language (e.g : english, indonesia etc ) ; type varchar(30)
     * status (e.g :started, ended, ongoing etc ) ; type varchar (10)
     * rating ( e.g : 3, 4, 5 etc ) range 1 - 5 ; type int
* 4 Cast entity properties (columns) :  
     * id ; type bigint, primary key, auto increment
     * name ; type varchar(100)
     * birthday ; type timestamp
     * deadday ; type timestamp
     * rating ( e.g : 3, 4, 5 etc ) range 1 - 5
* 5 Movie Cast entity to hold relation between movie and cast properties : 
     * id ; type bigint, primary key, auto increment 
     * movie_id ; type bigint
     * cast_id ; type bigint
* 6 Web services API for :
     * Movie ( must return cast object also from number 5 above ) e.g : [{ id: 1, name: 'avenger end game', casts:[{name:'',birthday:'',deadday:''}]}]
     * Cast

### NOTE ###

If you are having internship and applying to us you must us nestjs as the framework.
     
     
### How to submit? ###

* Use this bitbucket repository as a place for your submission
* Create a new branch with this format : be-junior-test-<insert-your-name>. e.g : be-junior-budierwanto
* Push your code to that branch 

### Deadline ###

* 7 days from the test given

