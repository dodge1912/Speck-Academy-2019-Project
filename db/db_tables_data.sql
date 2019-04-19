INSERT INTO halls (hall_id, hall_name, hall_address, capacity)
VALUES(29cf96f9-b546-48eb-a56a-f42d4e41b4d5, Sportska dvorana, Kranceviceva 2, 2000),
      (dd4fe993-7133-468b-bd7a-a8b008df7397, Gradska knjižnica, Gunduliceva 17, 350),
      (9551a6a7-2adb-40c4-bb93-e1223f4bc168, Glazbena škola, Karane 21, 210)

INSERT INTO rezervation (reservation_status, reserved_from, reserved_until, hall_id)
VALUES(1, '2018-01-12 07:22:14', '2018-01-12 10:22:14', 29cf96f9-b546-48eb-a56a-f42d4e41b4d5),
      (0, '2018-01-12 07:22:14', '2018-01-12 10:22:14', dd4fe993-7133-468b-bd7a-a8b008df7397),
      (2, '2018-01-12 07:22:14', '2018-01-12 10:22:14', 9551a6a7-2adb-40c4-bb93-e1223f4bc168)

INSERT INTO users (user_id_uuid, user_password, username, user_surname, user_email, user_contact_number)
VALUES(7aeabe9b-9e16-447b-8581-1184026cd79d, AFGDFG, Marko, Gric, abc@sss, 0915545542),
      (ade0ee89-6eda-48e0-bb34-e346bda23fad, CQWCE3, Tomislav, Fulic, abc@ddd,0925545543),
      (8de8729c-532f-4698-9708-1eff11eb4542, GFDG56, Lara, Peric, abc@bbb, 0985545541 )

INSERT INTO sessions (login_id, login_session_id, logged_in_time, logged_out_time, user_uid)
VALUES(4d9bf865-065a-4787-b02c-fc042276405f, A, '2018-01-11 06:22:14', '2018-01-11 07:22:14', 7aeabe9b-9e16-447b-8581-1184026cd79d),
      (2b4e66e7-77ee-4952-8e2d-798367b64a6c, B, '2018-01-11 06:22:14', '2018-01-11 07:22:14', ade0ee89-6eda-48e0-bb34-e346bda23fad),
      (4affc4c0-89ec-49af-9c97-1500f7f944a1, C, '2018-01-11 06:22:14', '2018-01-11 07:22:14', 8de8729c-532f-4698-9708-1eff11eb4542)