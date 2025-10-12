--
-- PostgreSQL database dump
--

-- Dumped from database version 16.9
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: expense_manager; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA expense_manager;


ALTER SCHEMA expense_manager OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: category; Type: TABLE; Schema: expense_manager; Owner: postgres
--

CREATE TABLE expense_manager.category (
    category_id character varying(255) NOT NULL,
    category_name character varying(255),
    category_type character varying(255),
    delete_flag boolean NOT NULL,
    image_path character varying(255)
);


ALTER TABLE expense_manager.category OWNER TO postgres;

--
-- Name: transaction; Type: TABLE; Schema: expense_manager; Owner: postgres
--

CREATE TABLE expense_manager.transaction (
    transaction_id character varying(255) NOT NULL,
    amount double precision,
    date date,
    source character varying(255),
    transaction_category character varying(255)
);


ALTER TABLE expense_manager.transaction OWNER TO postgres;

--
-- Data for Name: category; Type: TABLE DATA; Schema: expense_manager; Owner: postgres
--

COPY expense_manager.category (category_id, category_name, category_type, delete_flag, image_path) FROM stdin;
\.


--
-- Data for Name: transaction; Type: TABLE DATA; Schema: expense_manager; Owner: postgres
--

COPY expense_manager.transaction (transaction_id, amount, date, source, transaction_category) FROM stdin;
\.


--
-- Name: category category_pkey; Type: CONSTRAINT; Schema: expense_manager; Owner: postgres
--

ALTER TABLE ONLY expense_manager.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (category_id);


--
-- Name: transaction transaction_pkey; Type: CONSTRAINT; Schema: expense_manager; Owner: postgres
--

ALTER TABLE ONLY expense_manager.transaction
    ADD CONSTRAINT transaction_pkey PRIMARY KEY (transaction_id);


--
-- PostgreSQL database dump complete
--

