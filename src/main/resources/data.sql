INSERT INTO employee (name, bio, points, img) VALUES
  ('Michael Scott', 'Michael is the regional manager of Dunder Mifflin Paper Company in Scranton, Pennsylvania. Michael thinks of himself as an extremely capable boss who can handle any problem efficiently. In reality, Scott is ill-equipped to handle most of the problems that arise at Dunder Mifflin. Michael loves to host conference room meetings where typically very little is accomplished but he gets to be the center of attention.', 120, 'https://i2.wp.com/mtncatholic.com/wp-content/uploads/2016/10/6357600113572837231773916132_michael-scott-s-top-tantrums.png?fit=500%2C359'),
  ('Dwight Schrute', 'Dwight is unofficially the assistant (to the) regional manager at Dunder Mifflin. Dwight is extremely passionate about paper and is constantly trying to impress Michael. Dwight is also the leading salesman in the Scranton office. While Dwight displays many characteristics which lack social graces, he has a very good understanding of many economic concepts. In several of the clips on this site, he has a better understanding of arbitrage opportunities and gains from trade than most of the other characters on the program.', 20, 'https://pbs.twimg.com/profile_images/549268771484229632/WnatiHzT_400x400.jpeg'),
  ('Jim Halpert', 'Jim is also in sales and is considered to be one of the "heroes" of the show because of his laid back attitude and ability to get along with people. During the course of the series, Jim marries Pam Beasley and subsequently becomes quite motivated to succeed as a paper salesman. There are many instances in The Office where Jim spends very little time attempting to increase his paper sales instead spending considerable time trying to win the affections of Pam. Jim also spends an inordinate amount of time playing tricks on Dwight or entertaining his co-workers which he primarily does to entertain Pam. Several videos on the site demonstrate how Jim''s work ethic is reflected by the incentive structure the company has in place.', 70, 'https://pbs.twimg.com/profile_images/838818903933386752/rVy94Uu6_400x400.jpg'),
  ('Pam Beesly', 'Pam is the secretary at Dunder Mifflin and tries to keep Michael somewhat focused on work and being productive. Pam is unaware of Jim''s romantic interest in her during the early seasons of the show. Pam eventually becomes the office manager who demonstrates an understanding of budgets and cost constraints.', 0, 'http://wardrobeadvice.com/wp-content/uploads/2009/09/Pam-Beasley.jpg'),
  ('Stanley Hudson', 'Stanley is a fairly successful salesman who resents spending time in an office where he typically is not productive. Stanley tolerates Michael''s long and typically pointless conference room meetings by spending his time completing crossword puzzles.', 0, 'http://25.media.tumblr.com/b90831bede640b2951b7d1e8ce7963b4/tumblr_mfdf47Zy4A1r6eyi0o1_1280.png'),
  ('Angela Martin', 'Angela is one of the lead accountants in The Office who has a tremendous affection for cats and tends to be a bit judgmental. Her no nonsense approach to how things should be done in the office appeals to Dwight. In one of the clips, she informs Jim he has met his commission cap which discourages Jim from pursuing additional sales.', 0, 'https://i.pinimg.com/originals/e5/67/cc/e567cc9331491412a1e53e83c7766a1a.jpg'),
  ('Andy Bernard', 'Andy joined the sales staff at Dunder Mifflin after spending time at the Stamford Branch before it was closed due to downsizing. Andy had a short stint as manager of Dunder Mifflin but for most of the series he acts as a salesman who also makes some mistakes in understanding sales and markets. This also can provide teaching moments which are captured in some of the videos. The best example of this is when he sells his used car at a price well below equilibrium to Dwight.', 0, 'https://pbs.twimg.com/profile_images/754734712321613824/5FPd8AkG_400x400.jpg'),
  ('Toby Flenderson', 'Toby is the head of human resources and he and Michael do not get along well. Toby frequently tries (with little success) to prevent Michael from violating corporate policy. As a result, Michael develops a strong grudge against Toby.', 0, 'https://pbs.twimg.com/media/DYB67_8W4AIXY3d.jpg');

INSERT INTO meeting (title, about, img_url, presenter_id) VALUES
  ('Diversity Day', 'Michael explains in his talking head that it''s Diversity Day and that a guest speaker is at Dunder Mifflin Scranton to talk about diversity in the workplace. Michael claims that he''s wanted this for awhile. Corporate mandated it without Michael having to talk to them about it, though. But Michael still believes it''s very important.', 'https://i.kinja-img.com/gawker-media/image/upload/s--e1DMGN88--/c_scale,f_auto,fl_progressive,q_80,w_800/mmjmyiohc5klzmbghyec.jpg', 1),
  ('Prison', 'Michael soon calls an impromptu meeting in which he dons a do-rag and attempts to "scare you straight" as an ex-con character named "Prison Mike ". He speaks with a New York accent, calls Angela a bee-yoch, threatens to shove her up against a wall (and incites Dwight to politely come to her defense with the rest of the staff), says life "in the clink" is no picnic, alludes to violence and rape and singles out Ryan because, in prison, he would be "da belle of da ball", who responds "Michael, please." in total discomfort', 'https://ewedit.files.wordpress.com/2015/01/the-convict.jpg?w=612', 1),
  ('Beach Games', 'The activities begin with the employees oblivious to Michael''s true intentions. In an egg race, Jim tricks a blindfolded Karen into stepping into the nearby lake; Dwight is overly commanding of Ryan; Andy can''t stop Kelly from removing her blindfold; and Stanley sits out in his customary apathy. As Pam takes notes for him, Michael grows frustrated with the contestants'' failure to stick to his plans. He has Pam prepare a hot dog eating contest (giving her about 10 minutes to prepare eight hundred wieners), but when the employees balk, an exasperated Michael reveals his upcoming interview, and that the winner of the games would replace him. Realizing Michael''s seriousness, the four tribe leaders (except for Jim) decide to step up their efforts; even Stanley, since he would detest working for anyone else in the office. Andy wins the hot dog eating contest. Creed returns to the group after eating a raw fish which he caught with his bare hands, unaware that food was going to be provided by Michael.', 'https://coolpapaesreviews.files.wordpress.com/2010/12/the-office-beach-games-01.jpg', 1);

INSERT INTO endorsement (type, count, employee_id) VALUES
  ('Gave a great presentation!', 3, 1),
  ('Taught us a lot about diversity', 2, 1),
  ('Learned about prison life', 4, 1),
  ('Knows hit beets', 1, 2),
  ('Great at pranks', 6, 3);

INSERT INTO attendees (meeting_id, employee_id) VALUES
  (1, 2),
  (1, 3),
  (1, 4),
  (1, 5),
  (1, 6),
  (1, 7),
  (1, 8),
  (2, 2),
  (2, 3),
  (2, 4),
  (2, 5),
  (2, 6),
  (2, 7),
  (3, 2),
  (3, 3),
  (3, 4),
  (3, 5),
  (3, 6),
  (3, 7),
  (3, 8);