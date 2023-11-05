#!/usr/bin/python3
"""
This module sets some instance in the database for a fresh start

Execution:
    HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd
    HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db
    HBNB_TYPE_STORAGE=db HBNB_ENB=test ./prog_name.py
"""
import models
from models import storage
from models.user import User
from models.place import Place
from models.state import State
from models.city import City
from models.review import Review
from models.amenity import Amenity


state_1 = State(name='America')
state_1.save()

city_1 = City(name="San Francisco", state_id=state_1.id)
city_1.save()

city_2 = City(name="San Jose", state_id=state_1.id)
city_2.save()

user_1 = User()
user_1.email = 'onwutaebubegideon@gmail.com'
user_1.first_name = 'Ebube'
user_1.last_name = 'Onwuta'
user_1.password = 'ebube133pwd'
user_1.save()

user_2 = User()
user_2.email = "bob@hbtn.io"
user_2.password = 'bobpwd'
user_2.first_name = "Bob"
user_2.last_name = "Dylan"
user_2.save()

user_3 = User()
user_3.email = 'memy@gmail.com'
user_3.password = 'memypwd'
user_3.first_name = 'Memy'
user_3.last_name = 'Porker'
user_3.save()

user_4 = User()
user_4.email = 'krin@hbtn.io'
user_4.password = 'krin@pwd'
user_4.first_name = 'Krinko'
user_4.last_name = 'Puthapa'
user_4.save()

user_5 = User()
user_5.email = 'nikky@hbtnio.io'
user_5.password = 'quikser@ka.com'
user_5.first_name = 'Quiker'
user_5.last_name = 'Shika'
user_5.save()

place_1 = Place()
place_1.city_id = city_1.id
place_1.user_id = user_1.id
place_1.name = 'Lovely place'
place_1.number_rooms = 3
place_1.number_bathrooms = 1
place_1.max_guest = 6
place_1.price_by_night = 120
place_1.latitude = 37.773972
place_1.longitude = 122.431297
place_1.description = """This is a lovely 1 bedroom and 1 bathroom apartment \
that can accomodate 2 people. It locates at the center of Shanghai and next \
to subway line 1. 1 stop to People Square, 2 stops to Bund, 3 stops to \
Jingan Temple."""
place_1.save()

place_2 = Place()
place_2.city_id = city_2.id
place_2.user_id = user_2.id
place_2.name = 'BrainSpark Hub'
place_2.number_rooms = 10
place_2.number_bathrooms = 5
place_2.max_guest = 20
place_2.price_by_night = 4000
place_2.latitude = 45.065
place_2.longitude = 50.523
place_2.description = """Well ventilated environment located close to the \
beach. Equipped with ultramodern technology and robots to assist with \
daily tasks.
"""
place_2.save()

review_1 = Review()
review_1.place_id = place_1.id
review_1.user_id = user_1.id
review_1.text = "Amazing place, huge kitchen"
review_1.save()

review_2 = Review()
review_2.place_id = place_2.id
review_2.user_id = user_2.id
review_2.text = "Great for tech events and programmes"
review_2.save()

amenity_1 = Amenity()
amenity_1.name = "Wifi"
amenity_1.save()

amenity_2 = Amenity()
amenity_2.name = "Pets"
amenity_2.save()

amenity_3 = Amenity()
amenity_3.name = "Tv"
amenity_3.save()

amenity_4 = Amenity()
amenity_4.name = "Air conditioning"
amenity_4.save()

amenity_5 = Amenity()
amenity_5.name = "Pool"
amenity_5.save()

amenity_6 = Amenity()
amenity_6.name = "Bar"
amenity_6.save()

amenity_7 = Amenity()
amenity_7.name = "Garage"
amenity_7.save()

amenity_8 = Amenity()
amenity_8.name = "Cinema"
amenity_8.save()

amenity_9 = Amenity()
amenity_9.name = "Garden"
amenity_9.save()

amenity_10 = Amenity()
amenity_10.name = "Library"
amenity_10.save()

amenity_11 = Amenity()
amenity_11.name = "Park"
amenity_11.save()

amenity_13 = Amenity()
amenity_13.name = "Cafe"
amenity_13.save()


amenity_15 = Amenity()
amenity_15.name = "Telescope"
amenity_15.save()

place_1.amenities.append(amenity_1)
place_1.amenities.append(amenity_3)
place_1.save()

place_2.amenities.append(amenity_2)
place_2.amenities.append(amenity_4)
place_2.save()

# Second state

state_2 = State(name='Nigeria')
state_2.save()

city_3 = City(name="Enugu", state_id=state_2.id)
city_3.save()

city_4 = City(name="Lagos", state_id=state_2.id)
city_4.save()

place_3 = Place()
place_3.city_id = city_3.id
place_3.user_id = user_1.id
place_3.name = 'Dnashe lounge'
place_3.number_rooms = 10
place_3.number_bathrooms = 10
place_3.max_guest = 10
place_3.price_by_night = 500
place_3.latitude = 12.314
place_3.longitiude = 10.410
place_3.description = """An exquisite umpire for the elites."""
place_3.amenities.append(amenity_1)
place_3.amenities.append(amenity_2)
place_3.amenities.append(amenity_3)
place_3.amenities.append(amenity_4)
place_3.save()

place_4 = Place()
place_4.city_id = city_4.id
place_4.user_id = user_2.id
place_4.name = 'Haux brothel'
place_4.number_rooms = 15
place_4.number_bathrooms = 8
place_4.max_guest = 15
place_4.price_by_night = 45
place_4.latitude = 42.213
place_4.longitude = 24.245
place_4.description = "A place to have fun!!! On y va!!!"
place_4.amenities.append(amenity_3)
place_4.amenities.append(amenity_4)
place_4.save()

review_3 = Review()
review_3.place_id = place_3.id
review_3.user_id = user_1.id
review_3.text = "So classic!"
review_3.save()

review_4 = Review()
review_4.place_id = place_4.id
review_4.user_id = user_2.id
review_4.text = "Fun all along! The beers are hot!!"
review_4.save()

review_5 = Review()
review_5.place_id = place_3.id
review_5.user_id = user_4.id
review_5.text = 'Uniquely designed'
review_5.save()

review_6 = Review()
review_6.place_id = place_4.id
review_6.user_id = user_5.id
review_6.text = 'A place for the elites'
review_6.save()

# Third state
state_3 = State(name="France")
state_3.save()

city_5 = City(name="Lyon", state_id=state_3.id)
city_5.save()

city_6 = City(name="Gabon", state_id=state_3.id)
city_6.save()

city_7 = City(name="Paris", state_id=state_3.id)
city_7.save()

place_5 = Place()
place_5.city_id = city_3.id
place_5.user_id = user_1.id
place_5.name = 'Arc de Triomphe'
place_5.number_rooms = 21
place_5.number_bathrooms = 10
place_5.max_guest = 20
place_5.price_by_night = 1500
place_5.latitude = 52.42
place_5.longitiude = 76.532
place_5.description = """An amazing site for tourism, with unique designs"""
place_5.amenities.append(amenity_5)
place_5.amenities.append(amenity_1)
place_5.amenities.append(amenity_3)
place_5.amenities.append(amenity_4)
place_5.save()

storage.save()

# for obj in storage.all().values():
#     print(obj)
print("OK")
