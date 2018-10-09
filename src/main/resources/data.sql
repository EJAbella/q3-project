INSERT INTO employee (name, bio, points) VALUES
  ('Elijah', 'Bio about Elijah here', 0),
  ('Jimmy', 'Bio about James McGill', 0),
  ('Chuck', 'Some bio about Chuck McGill', 10);

INSERT INTO meeting (title, about, img_url, presenter_id) VALUES
  ('Intro to some coding stuff', 'Teaching some stuff about basic JS and HTML and CSS', 'https://cdn1-www.dogtime.com/assets/uploads/2010/12/puppies.jpg', 1),
  ('More Stuff', 'Gonna teach some more stuff in this meeting', 'https://cdn1-www.dogtime.com/assets/uploads/2010/12/puppies.jpg', 2),
  ('Coding and more Coding', 'Lets learn about coding and then learn about more coding', 'https://cdn1-www.dogtime.com/assets/uploads/2010/12/puppies.jpg', 2),
  ('And Even Mode Coding', 'And then learn about even more coding', 'https://cdn1-www.dogtime.com/assets/uploads/2010/12/puppies.jpg', 1);

INSERT INTO endorsement (type, count, employee_id) VALUES
  ('Active Engagement', 4, 1),
  ('Active Engagement', 2, 2),
  ('Gave Presentation', 1, 1),
  ('Helped Explain Concepts', 3, 2),
  ('Brought Food :D', 5, 1);

INSERT INTO attendees (meeting_id, employee_id) VALUES
  (1, 1),
  (1, 2),
  (2, 2),
  (3, 1),
  (3, 2),
  (4, 1),
  (4, 2);