# docker build and run

$ docker build -t graphql .

$ docker run -p3000:3000 graphql


# graphql run and start

npm install
npm run start

# graphql query Usage
{
  films(limit:3,offset:0){
    id,
    title
  } 
}


# create graphql database
mysql> 
CREATE TABLE MasterFilm (id VARCHAR(20), title VARCHAR(20), synopsis VARCHAR(20));

CREATE TABLE Showtime (id VARCHAR(20));

CREATE TABLE CinemaChain (id VARCHAR(20), name VARCHAR(20));

# populate graphql database

INSERT INTO MasterFilm (id, title, synopsis) VALUES ('1', 'The Martian', 'quux');
INSERT INTO MasterFilm (id, title, synopsis) VALUES ('2', 'Bobiverse', 'qux');
INSERT INTO MasterFilm (id, title, synopsis) VALUES ('3', 'Ready Player One', 'foobar');

INSERT INTO CinemaChain (id, name) VALUES ('1', 'Regal');
INSERT INTO CinemaChain (id, name) VALUES ('2', 'Hoyts');
INSERT INTO CinemaChain (id, name) VALUES ('3', 'Event');
