# AirBnB_clone - The console


This major aim of this project is to deploy on a server a simple copy of the [AirBnB website](https://www.airbnb.com). It consists of the following:

*	A command interpreter to manipulate data without a visual interface, like in a Shell (perfect for development and debugging)
*	A website (the front-end) that shows the final product to everybody: static and dynamic
*	A database or files that store data (data = objects)
*	An API that provides a communication interface between the front-end and your data (retrieve, create, delete, update them)

## The Console
It is the command line interpreter that enables data model creation. Using the console, one can manage (``create``, ``update``, ``destroy``, etc) objects. The console equally facilitates the storage of objects to a JSON file and their subsequent reuse.

It equally employs the help of a powerful storage system that gives an abstraction between objects and how they are stored and persisted. This means: from the console code (the command interpreter) and from the front-end and RestAPI, one won't have to pay attention to how objects are stored anymore. This abstraction will help one to change the type of storage easily without updating all of the codebase.

The console will be a tool to validate this storage engine.

<details>

<summary>Execution: How to use the console</summary>

The console could work like this in the interactive mode:

	$ ./console.py
	(hbnb) help

	Documented commands (type help <topic>):
	========================================
	EOF help quit

	(hbnb)
	(hbnb)
	(hbnb) quit
	$

But also in non-interactive mode:

	$ echo "help" | ./console.py
	(hbnb)

	Documented commands (type help <topics>):
	=========================================
	EOF help quit
	(hbnb)
	$
	$ cat test_help
	help
	$
	$ cat test_help | ./console.py
	(hbnb)

	Documented commands (type help <topics>):
	=========================================
	EOF help quit
	(hbnb)
	$

</details>

<details>

<summary>Commands: Available commands for manipulating objects</summary>

* **create** - create an object
```
Usage: create <class name>
```

* **show** - display an object based on class name and id
```
Usage: show <class name> <id>
```

* **destroy** - destroy an object and totally remove it from storage
```
Usage: destroy <class name> <id>
```

* **all** - display all objects based on class name or not
```
Usage(0): all
Usage(1): all <class name>
```

* **update** - update an object based on class name and id
```
Usage: update <class name> <id> <attribute> "<attribute value>"
```

* **reset** - Delete all objects and clear the storage
```
Usage: reset
```

* **quit/EOF** - exit the console
```
Usage(0): quit
Usage(1): <CTRL + D>
```

* **help** - see description of commands
```
Usage: help
```

</details>

<details>

<summary>Supported classes: The classes for objects</summary>

* BaseModel
* User
* State
* City
* Amenity
* Place
* Review

</details>

## Web Static
This houses the HTML application and template of each object

## MySQL storage
The MySQL storage will replace the file storage by a Database storage. It will map the models to a table in database using O.R.M.

## Web framework - templating
This is were we create the web server in Python. We will make static HTML file dynamic by using objects in a file or database

## RESTful API
This goal of this sub-project is to expose all the objects stored via a JSON web interface and manipulate these objects via a RESTful API

## Web dynamic
With knowledge in JQuery, we will load objects from the client side using our own RESTful API


## Authors
*	Ebube Gideon - [146392@holbertonschoo.com](mailto:onwutaebubegideon1555@gmail.com) / [Twitter](https://twitter.com/EbubeStar)
*	Alexa Orrico - [Github](https://github.com/alexaorrico) / [Twitter](https://twitter.com/alexa_orrico)  
*	Jennifer Huang - [Github](https://github.com/jhuang10123) / [Twitter](https://twitter.com/earthtojhuang)  
*	Jhoan Zamora - [Github](https://github.com/jzamora5) / [Twitter](https://twitter.com/JhoanZamora10)  
*	David Ovalle - [Github](https://github.com/Nukemenonai) / [Twitter](https://twitter.com/disartDave)

Second part of Airbnb: Joann Vuong
## License
Public Domain. No copy write protection. 
