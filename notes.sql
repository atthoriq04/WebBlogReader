-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 26, 2023 at 05:23 AM
-- Server version: 5.7.24
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notes`
--

-- --------------------------------------------------------

--
-- Table structure for table `notecategory`
--

CREATE TABLE `notecategory` (
  `categoryId` int(11) NOT NULL,
  `Category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `notecategory`
--

INSERT INTO `notecategory` (`categoryId`, `Category`) VALUES
(1, 'Sientific'),
(2, 'Notes/Opinion'),
(3, 'Technology'),
(4, 'Astrology'),
(5, 'Science-Fiction'),
(6, 'Fantasy'),
(7, 'Comedy'),
(8, 'Romance'),
(9, 'Adult');

-- --------------------------------------------------------

--
-- Table structure for table `thenotes`
--

CREATE TABLE `thenotes` (
  `id` int(4) NOT NULL,
  `userId` int(4) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `notes` longtext NOT NULL,
  `createdAt` varchar(300) NOT NULL,
  `modifiedAt` varchar(300) NOT NULL,
  `isPrivate` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `thenotes`
--

INSERT INTO `thenotes` (`id`, `userId`, `categoryId`, `title`, `notes`, `createdAt`, `modifiedAt`, `isPrivate`) VALUES
(2, 4, 5, 'Quantum Move', 'In the distant future, humankind has unlocked the secrets of quantum physics, enabling them to traverse dimensions and explore alternate realities. The Quantum Expeditionary Force, a team of brilliant scientists and intrepid explorers, embarks on a daring mission to a parallel universe. Equipped with state-of-the-art technology, including dimensional stabilizers and interdimensional communication devices, they venture into uncharted territories. As they navigate through the shimmering rift, they are astounded by the vast array of landscapes and civilizations that exist beyond their own reality.\r\n\r\nWithin this new realm, the laws of physics are subtly different, presenting both challenges and opportunities. The team encounters a civilization that has mastered telepathic communication, allowing them to share thoughts and emotions effortlessly. The scientists are fascinated by this phenomenon and collaborate with the locals to study the intricacies of this telepathic network. As they delve deeper, they make astonishing discoveries about the interconnectedness of consciousness and the potential for unlocking untapped human capabilities.\r\n\r\nHowever, their expedition takes an unexpected turn when they stumble upon a parallel Earth plagued by an imminent cataclysm. The planets core is unstable, causing devastating earthquakes and volcanic eruptions. The team races against time to find a solution, combining their scientific expertise with the knowledge of the local inhabitants. With relentless determination, they devise a plan to stabilize the core, utilizing advanced quantum technology and harnessing the energy of the surrounding dimensions. In a breathtaking climax, they succeed, saving the parallel Earth from destruction and forever altering the course of both realities.\r\n\r\nAs the Quantum Expeditionary Force returns to their home dimension, they bring with them a wealth of knowledge and experiences that redefine the boundaries of science. Their discoveries inspire a new era of exploration and understanding, as the world eagerly awaits the next frontier of scientific breakthroughs. The interplay between science and imagination continues to drive humanity forward, unlocking the mysteries of the universe one dimension at a time.', '1686387783', '1686387783', 0),
(3, 1, 2, 'MotoGP MEN', 'In the world of MotoGP, the smell of burning rubber fills the air as fearless riders prepare to take on the most challenging race circuits on Earth. The deafening roar of engines echoes through the stadium, sending a wave of excitement through the crowd. The tension is palpable as the riders, clad in their vibrant racing gear, mount their sleek machines and wait for the signal to begin.\r\n\r\nAs the race commences, the riders unleash their skills, maneuvering their powerful motorcycles with precision and agility. The speed at which they navigate the tight corners and straightaways is awe-inspiring, pushing the limits of human capability. The rivalry between the riders intensifies, each one determined to secure victory and claim the coveted championship title.\r\n\r\nWith every lap, the crowd erupts in cheers and gasps as the riders display incredible bravery and skill. The track becomes a battleground where strategic overtakes and daring maneuvers separate the champions from the rest. The high-speed battles continue until the checkered flag is waved, signaling the end of the race. The podium awaits, ready to honor the triumphant riders who have conquered the challenges of MotoGP and etched their names into the annals of motorcycle racing history.', '1686465414', '1686465414', 0),
(4, 5, 5, 'Tragedy', 'John was a passionate and fearless racer, always seeking the thrill of speed on the racetrack. He lived for the adrenaline rush and the competition, pushing himself and his motorcycle to the limits. But one fateful day, during a high-stakes race, disaster struck. As John sped around a sharp corner, his bike skidded out of control, causing a devastating crash that left him unconscious and critically injured.\r\n\r\nIn the hospital, Johns loved ones anxiously gathered, fearing the worst. The doctors worked tirelessly to stabilize him, their efforts a race against time. As John lay motionless, his life hung in the balance, and the racing community held its breath, praying for his recovery.\r\n\r\nDays turned into weeks, and against all odds, John gradually emerged from the depths of his coma. It was a miracle. His body was battered, his bones broken, but his spirit remained unbroken. With unwavering determination, John embarked on a long and arduous journey of rehabilitation. The road to recovery was painful and filled with setbacks, but he refused to give up. His love for racing and his indomitable spirit became his driving force.\r\n\r\nMonths later, against everyones expectations, John made a triumphant return to the racetrack. He was a changed man, both physically and mentally, and his near-death experience had instilled in him a newfound appreciation for life. With every turn of the throttle, he raced with caution and respect, cherishing each moment he spent on the track. Johns story became an inspiration to fellow racers, reminding them of the fragility of life and the resilience of the human spirit.\r\n\r\nIn the years that followed, John became more than just a skilled racer; he became an advocate for safety in motorsports. He dedicated himself to raising awareness about the importance of protective gear and responsible racing practices. Johns accident had taught him the value of life and the significance of taking calculated risks. His story served as a reminder that even in the face of tragedy, one can rise above, learn from the experience, and come back stronger than ever before.', '1686465641', '1686465641', 0),
(5, 5, 8, 'Loved Ones', 'Mark was a man who appeared to have it all—a successful career, a loving family, and a comfortable lifestyle. However, beneath the facade, he was silently battling his own demons. Mental health issues had plagued him for years, making it increasingly challenging to find the motivation to live and work.\r\n\r\nEvery morning, Mark would wake up with a heavy heart, overwhelmed by a sense of hopelessness. Simple tasks felt insurmountable, and even the thought of stepping foot into his workplace sent waves of anxiety crashing over him. His mind became a constant battleground, filled with self-doubt and negative thoughts that eroded his self-esteem.\r\n\r\nAs the days turned into weeks and then months, Marks mental struggle took its toll on his professional life. He found it difficult to concentrate, frequently making mistakes and missing deadlines. Colleagues and superiors began to notice his declining performance, and the pressure to meet expectations only intensified his inner turmoil.\r\n\r\nMark knew he needed help. With the support of his loved ones, he sought therapy and started a journey of self-discovery. Through counseling sessions, he began to unravel the deep-seated issues that had contributed to his mental distress. It was a slow and arduous process, filled with tears, but he persevered.\r\n\r\nGradually, with therapy and self-care practices, Mark started to rebuild his life. He learned coping mechanisms to manage his anxiety and depression, developing a support system that provided him with the strength to carry on. Along the way, he discovered a renewed sense of purpose, recognizing that his struggles had given him a unique perspective on mental health.\r\n\r\nInspired by his own journey, Mark decided to open up about his mental health challenges at his workplace. He hoped to break the stigma surrounding mental health and create an environment of understanding and support. To his surprise, his vulnerability was met with empathy and compassion. Colleagues rallied around him, offering encouragement and sharing their own stories.\r\n\r\nFrom that point on, Marks workplace became a space of healing and growth. With newfound understanding, his superiors adjusted his workload and provided flexible work arrangements to accommodate his mental health needs. Marks journey, once filled with darkness, became a beacon of hope for others struggling silently within their own battles.\r\n\r\nMarks mental struggle was far from over, but he had learned to embrace the ebb and flow of life. He discovered that his mental health was just as important as his physical well-being, and he vowed to prioritize self-care and advocate for mental health awareness wherever he went. Through his own resilience, he had found a renewed sense of purpose—to live authentically and to help others navigate the labyrinth of mental health challenges, one step at a time.', '1686465996', '1686465996', 0),
(6, 5, 2, 'World Hunger', 'World hunger, an issue that has plagued humanity for generations, remains an urgent and devastating crisis in our modern world. Despite significant advancements in various fields, the fact that millions of people continue to suffer from malnutrition and food insecurity is an undeniable reality. The pervasiveness of hunger is a stain on our collective conscience, a stark reminder of the inequities that persist in our global society.\r\n\r\nAt its core, world hunger is a multifaceted problem with complex causes and far-reaching consequences. Poverty, conflict, climate change, and inadequate access to resources all contribute to the perpetuation of this crisis. In developing countries, particularly in sub-Saharan Africa and parts of Asia, the lack of infrastructure, limited agricultural practices, and unstable political environments exacerbate the problem, trapping communities in a vicious cycle of hunger and poverty.\r\n\r\nAddressing world hunger requires a comprehensive and holistic approach. Efforts must focus not only on short-term relief measures but also on sustainable solutions that address the root causes of food insecurity. Enhancing agricultural productivity, investing in rural development, promoting equitable access to land and resources, and supporting small-scale farmers are just some of the strategies that can make a tangible difference in alleviating hunger. Additionally, fostering international cooperation, increasing funding for humanitarian aid, and empowering local communities are crucial steps towards creating a world where no one goes to bed hungry.\r\n\r\nAs we confront the harsh reality of world hunger, it becomes evident that resolving this crisis demands our collective attention, compassion, and action. The future of humanity depends on our ability to come together as a global community and prioritize the eradication of hunger. By harnessing the power of innovation, collaboration, and empathy, we can work towards a world where every individual has access to nutritious food, a basic human right that should never be compromised.', '1686499659', '1686499659', 0),
(8, 1, 6, 'Frustration', 'Frico\'s heart raced as he approached his race engineer, Alex, in the pit lane. The intense adrenaline from the just-concluded Grand Prix still pulsed through his veins, but it was quickly replaced by anger and frustration. How could Alex have made such a critical error in strategy? Frico couldn\'t hold back his fury any longer.\r\n\r\n&quot;Frico, congratulations on a strong drive out there,&quot; Alex greeted him, unaware of the brewing storm within his star driver. &quot;I know we didn\'t secure the win, but we were close.&quot;\r\n\r\n&quot;Close? Close isn\'t good enough, Alex!&quot; Frico snapped, his voice trembling with anger. &quot;You made a mess of our pit strategy. We had a comfortable lead, and you gambled it all away with that ill-timed pit stop!&quot;\r\n\r\nAlex\'s face paled, realizing the gravity of his mistake. &quot;I thought the fresh tires would give us an advantage in the final laps, Frico. I wanted to secure the victory for you.&quot;\r\n\r\n&quot;Securing the victory means making informed decisions, Alex,&quot; Frico shot back, his voice dripping with disappointment. &quot;We had a solid strategy in place, but you deviated from it without considering the consequences. You let the team down.&quot;\r\n\r\nAlex lowered his gaze, unable to meet Frico\'s piercing stare. &quot;I\'m truly sorry, Frico. I was just trying to give us the best chance at victory.&quot;\r\n\r\n&quot;Sorry doesn\'t cut it, Alex,&quot; Frico said, his voice softer but filled with disappointment. &quot;We work as a team, and we trust each other\'s judgment. But today, that trust was shattered. You need to own up to your mistake and learn from it. We can\'t afford these lapses if we want to be champions.&quot;\r\n\r\nA heavy silence hung in the air as the weight of the moment settled on both men. Frico knew that anger and blame wouldn\'t solve the problem, but he also understood the importance of holding his team accountable. With a sigh, he finally spoke, his tone more compassionate.\r\n\r\n&quot;Let\'s learn from this, Alex. Let\'s analyze our mistakes, work on our communication, and come back stronger. We have the talent and the potential to be champions, but we must be a well-oiled machine, not a collection of individuals. Can you promise me that, Alex?&quot;\r\n\r\nAlex nodded, his eyes filled with remorse. &quot;I promise, Frico. I will do everything in my power to earn your trust again and make better decisions moving forward.&quot;\r\n\r\nFrico extended a hand towards his race engineer, a glimmer of hope shining through his disappointment. &quot;Then let\'s get back to work, Alex. We have a championship to win, and we\'ll do it together.&quot;\r\n\r\nAs they shook hands, a renewed determination sparked within Frico\'s eyes. He knew that setbacks were inevitable, but it was how they rebounded from them that defined true champions. And in that moment, he was more determined than ever to prove that he and Alex were a force to be reckoned with on the racetrack.', '1686748363', '1686748363', 0),
(9, 1, 8, 'Bastard Love Story', 'Kato\'s heart raced as he boarded the subway, his eyes scanning the crowded train car. And there, amidst the sea of strangers, he saw her—the girl who would forever change his life. It was love at first sight, as cliché as it sounded. He couldn\'t tear his eyes away from her captivating presence, but fear gripped him, rendering him unable to muster the courage to approach her.\r\n\r\nDay after day, Kato found himself on the same subway, hoping to catch another glimpse of her. He became an expert at stealing glances, studying the way her eyes sparkled with life, and how her smile illuminated the world around her. He yearned to speak to her, to unravel the mysteries hidden behind her enchanting gaze, but self-doubt held him back.\r\n\r\nOne fateful day, their paths diverged, and they parted ways without her ever knowing Kato\'s presence. It was a bittersweet farewell, the ache of missed opportunity lingering in his heart. Kato carried the memory of her with him, fueling his daydreams and filling his mind with &quot;what ifs.&quot;\r\n\r\nMonths passed, and Kato embarked on a new chapter in his life—his first job. As he entered the office on his first day, his eyes widened in disbelief. There she was, the girl from the subway, standing confidently, her eyes locking with his. Recognition flickered in her gaze, and Kato\'s heart skipped a beat.\r\n\r\nShe approached him, a smile tugging at the corners of her lips. &quot;You... You were on the subway, right?&quot; she asked, a hint of excitement in her voice.\r\n\r\nKato nodded, a mixture of surprise and joy flooding his senses. &quot;Yes, I couldn\'t forget that day. It\'s amazing to see you again.&quot;\r\n\r\nShe laughed, a melodious sound that echoed in his ears. &quot;Fate has a funny way of bringing people together, doesn\'t it?&quot;\r\n\r\nAs they spent time working together, Kato discovered that beyond her captivating beauty, she possessed a heart of gold. Their conversations flowed effortlessly, their connection growing stronger with each passing day. The initial spark that ignited on the subway bloomed into a flame of love, fueled by shared laughter, stolen glances, and genuine moments of connection.\r\n\r\nTogether, they explored the city, navigating its streets hand in hand. Kato marveled at how their chance encounter had blossomed into a love story worthy of a fairy tale. He cherished every stolen moment, knowing that fate had guided him to the love of his life, even when he doubted himself.\r\n\r\nAnd as they looked back on that serendipitous meeting on the subway, Kato and the girl, now his beloved, understood that sometimes, the best things in life are worth waiting for. Their love story was a testament to the power of destiny, reminding them that even in a crowded subway car, true love can find a way to make its presence known.', '1687264924', '1687264924', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `isAdmin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `username`, `name`, `password`, `isAdmin`) VALUES
(1, 'kirako', 'Kira Masumoto', '$2y$10$h7Oap7GgYI4CL2jbibCmpexokwHwV3jBHLFS81Kzjg6ePyQ.eWIiS', 1),
(2, 'attgg', 'attgg', '$2y$10$aLuOlPibLymDv8tC11wWmuwPGpsrYprjNgOGe9y0Ayp7JEDuCCY76', 1),
(3, 'atthoriq', 'atthoriq', '$2y$10$NiI7XaD9Kfr1C63fwvNISOyKUBqiUOeCeNlHaDnvIMXZh/02Ba2Pi', 1),
(4, 'Diamante', 'Diamante Ananda', '$2y$10$yJIPd1oxw63Opsjqxbm6pOvkDeKTtdmdcv5JLUz6ctzUS06SXWnsS', 0),
(5, 'Azuki', 'Azuki', '$2y$10$c22zJIhhX0255mEh3E9Jr.sgRRqLtRd5r0halJHP9WAbyn//v1.PO', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notecategory`
--
ALTER TABLE `notecategory`
  ADD PRIMARY KEY (`categoryId`);

--
-- Indexes for table `thenotes`
--
ALTER TABLE `thenotes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notecategory`
--
ALTER TABLE `notecategory`
  MODIFY `categoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `thenotes`
--
ALTER TABLE `thenotes`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
