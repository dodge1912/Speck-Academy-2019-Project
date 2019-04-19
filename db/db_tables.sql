CREATE TABLE halls (
	hall_id_uuid            UUID PRIMARY KEY NOT NULL,
	hall_name           VARCHAR(50) NOT NULL,
	hall_address        VARCHAR(70) NOT NULL,
	capacity            INTEGER NOT NULL,
	date_created        TIMESTAMP DEFAULT NOW(),     
	date_updated        TIMESTAMP DEFAULT NOW()
);


CREATE TABLE rezervation (
	reservation_status  INTEGER NOT NULL,
    reserved_from       TIMESTAMP,
    reserved_until      TIMESTAMP,
	hall_id             UUID REFERENCES halls ( hall_id_uuid )
);


CREATE TABLE users (
	user_id_uuid        UUID PRIMARY KEY NOT NULL,
	user_password       VARCHAR(50) NOT NULL,
	username            VARCHAR(50) NOT NULL,
	user_surname        VARCHAR(50) NOT NULL,
	user_email          VARCHAR(50),
	user_contact_number INTEGER NOT NULL,
    date_created        TIMESTAMP DEFAULT NOW(),     
	date_updated        TIMESTAMP DEFAULT NOW()
);


CREATE TABLE sessions (
	login_id            UUID PRIMARY KEY NOT NULL,
	login_session_id    VARCHAR(20),
	logged_in_time      TIMESTAMP DEFAULT NOW(),
	logged_out_time     TIMESTAMP DEFAULT NOW(),
    date_created        TIMESTAMP DEFAULT NOW(),     
	date_updated        TIMESTAMP DEFAULT NOW(),
	user_uid            UUID REFERENCES users (user_id_uuid)
);
