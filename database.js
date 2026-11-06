// FORMAT: [ "Question", "Correct", "Wrong1", "Wrong2", "Wrong3" ]
const fullTriviaDB = [
    // NARUTO
    ["What is the name of the nine-tailed fox sealed inside Naruto?", "Kurama", "Shukaku", "Matatabi", "Gyuki"],
    ["Who was Naruto's first teacher at the Ninja Academy?", "Iruka Umino", "Kakashi Hatake", "Jiraiya", "Ebisu"],
    ["What is Sasuke Uchiha's signature lightning technique?", "Chidori", "Rasengan", "Amaterasu", "Raikiri"],
    ["Which village does Gaara come from?", "Hidden Sand", "Hidden Leaf", "Hidden Mist", "Hidden Cloud"],
    ["Who is the Fifth Hokage of the Hidden Leaf Village?", "Tsunade", "Jiraiya", "Orochimaru", "Minato"],
    ["What color is the classic Akatsuki cloud symbol?", "Red", "Black", "Purple", "White"],
    ["What is the name of Naruto's signature shadow clone technique?", "Shadow Clone Jutsu", "Mirror Clone Jutsu", "Illusion Clone", "Multi-Body Jutsu"],
    ["What food is Naruto completely obsessed with eating?", "Ramen", "Dumplings", "Sushi", "Barbecue"],
    ["Who was the Jonin leader of Team 7?", "Kakashi Hatake", "Might Guy", "Asuma Sarutobi", "Kurenai Yuhi"],
    ["(Hard) What was the name of the giant toad Jiraiya summoned to fight Gaara's Shukaku?", "Gamabunta", "Gamahiro", "Gamakichi", "Gamatatsu"],
    
    // BLEACH
    ["What is the name of Ichigo Kurosaki's Zanpakuto?", "Zangetsu", "Senbonzakura", "Kyoka Suigetsu", "Hyorinmaru"],
    ["Who gave Ichigo his Soul Reaper powers in the first episode?", "Rukia Kuchiki", "Orihime Inoue", "Yoruichi Shihoin", "Rangiku Matsumoto"],
    ["What is the name of the stuffed lion mascot that houses a Mod Soul?", "Kon", "Don", "Pon", "Ron"],
    ["What is the name of the Quincy who fights alongside Ichigo?", "Uryu Ishida", "Ryuken Ishida", "Jugram Haschwalth", "As Nodt"],
    ["What is the hollow realm called?", "Hueco Mundo", "Soul Society", "Rukongai", "Seireitei"],
    ["What division does Captain Byakuya Kuchiki lead?", "6th Division", "11th Division", "1st Division", "10th Division"],
    ["Who is Ichigo's childhood friend with healing powers?", "Orihime Inoue", "Tatsuki Arisawa", "Rukia Kuchiki", "Yuzu Kurosaki"],
    ["What is the ultimate release state of a Soul Reaper's sword called?", "Bankai", "Shikai", "Kido", "Resurreccion"],
    ["What is the name of the shopkeeper who trains Ichigo?", "Kisuke Urahara", "Tessai Tsukabishi", "Isshin Kurosaki", "Ryuken Ishida"],
    ["(Hard) What is the release command for Byakuya's Zanpakuto?", "Scatter", "Roar", "Bloom", "Pierce"],

    // ATTACK ON TITAN
    ["What is the name of the outermost wall protecting humanity?", "Wall Maria", "Wall Rose", "Wall Sina", "Wall Titan"],
    ["Who is Eren Yeager's fiercely loyal adopted sister?", "Mikasa Ackerman", "Sasha Braus", "Historia Reiss", "Annie Leonhart"],
    ["What military branch does Eren join to fight the Titans?", "The Scout Regiment", "The Military Police", "The Garrison", "The Cadet Corps"],
    ["What is the name of the massive Titan that breached Shiganshina?", "The Colossal Titan", "The Armored Titan", "The Beast Titan", "The Attack Titan"],
    ["Who is the commander of the Scout Regiment for most of the early series?", "Erwin Smith", "Levi Ackerman", "Hange Zoe", "Keith Shadis"],
    ["What is Sasha Braus's famous nickname?", "Potato Girl", "Meat Girl", "Bread Girl", "Hungry Girl"],
    ["Which character is known as humanity's strongest soldier?", "Levi Ackerman", "Eren Yeager", "Mikasa Ackerman", "Erwin Smith"],
    ["What does ODM stand for in ODM gear?", "Omni-Directional Mobility", "Offensive Defense Mechanism", "Outer Dimension Movement", "Over-Drive Motor"],
    ["What color is the signal flare used to indicate a Titan has been spotted?", "Red", "Green", "Black", "Yellow"],
    ["(Hard) What is the name of Eren's father?", "Grisha Yeager", "Zeke Yeager", "Kenny Ackerman", "Grice Yeager"],

    // JUJUTSU KAISEN
    ["What cursed object does Yuji Itadori swallow to save his friends?", "Sukuna's Finger", "A cursed womb", "A demon's eye", "A cursed talisman"],
    ["Who is the blindfolded, overpowered teacher at Jujutsu High?", "Satoru Gojo", "Kento Nanami", "Suguru Geto", "Masamichi Yaga"],
    ["What weapon does Nobara Kugisaki use to fight curses?", "A hammer and nails", "A cursed katana", "A spiked bat", "A sniper rifle"],
    ["What kind of animal is Panda?", "A cursed corpse panda", "A demon bear", "A shape-shifting human", "A summoned shikigami"],
    ["Who is known as the 'King of Curses'?", "Ryomen Sukuna", "Mahito", "Jogo", "Suguru Geto"],
    ["What is Megumi Fushiguro's cursed technique based on?", "Shadow Shikigami", "Blood Manipulation", "Cursed Speech", "Fire Manipulation"],
    ["Who uses cursed speech by speaking ingredients for rice balls?", "Toge Inumaki", "Maki Zenin", "Yuta Okkotsu", "Kento Nanami"],
    ["What is the highest rank a Jujutsu Sorcerer can achieve?", "Special Grade", "Grade 1", "Supreme Grade", "Master Grade"],
    ["What color is Satoru Gojo's cursed technique reversal?", "Red", "Blue", "Purple", "White"],
    ["(Hard) What is Aoi Todo's innate technique that swaps places with things?", "Boogie Woogie", "Switcheroo", "Clap Trap", "Spatial Shift"],

    // DRAGON BALL Z
    ["Who is Goku's first son?", "Gohan", "Goten", "Trunks", "Raditz"],
    ["What alien warrior race is Goku from?", "Saiyan", "Namekian", "Truffle", "Frieza Force"],
    ["What prince of all Saiyans becomes Goku's greatest rival?", "Vegeta", "Nappa", "Raditz", "Broly"],
    ["How many Dragon Balls must be gathered to summon Shenron?", "Seven", "Five", "Nine", "Ten"],
    ["Who killed Krillin on Planet Namek, triggering Goku's Super Saiyan transformation?", "Frieza", "Cell", "Majin Buu", "Captain Ginyu"],
    ["What is the name of the green Namekian warrior in the Z-Fighters?", "Piccolo", "Kami", "Dende", "Nail"],
    ["What is Goku's signature blue energy attack?", "Kamehameha", "Galick Gun", "Special Beam Cannon", "Spirit Bomb"],
    ["Who created the Androids and Cell?", "Dr. Gero", "Dr. Briefs", "Bulma", "Babidi"],
    ["What heavy item does Goku often wear to train?", "Weighted clothing", "Iron boots", "Gravity cuffs", "Lead armor"],
    ["(Hard) What gravity multiplier does Goku train at on his spaceship to Namek?", "100x", "50x", "300x", "10x"],

    // CHAINSAW MAN
    ["What is the name of Denji's chainsaw dog companion?", "Pochita", "Denji Jr", "Chainsaw Dog", "Makima"],
    ["Who recruits Denji into the Public Safety Devil Hunters?", "Makima", "Aki", "Himeno", "Kishibe"],
    ["What is the name of the Blood Fiend who lives with Denji?", "Power", "Reze", "Kobeni", "Himeno"],
    ["What devil does Aki Hayakawa summon using a hand gesture mimicking a canine?", "The Fox Devil", "The Dog Devil", "The Wolf Devil", "The Curse Devil"],
    ["What object does Denji pull on his chest to transform into Chainsaw Man?", "A ripcord", "A starter button", "A key", "A zipper"],
    ["What is Power's favorite pet cat named?", "Meowy", "Snowball", "Kitty", "Blood"],
    ["What fear fuels the Bat Devil?", "Fear of bats", "Fear of the dark", "Fear of vampires", "Fear of flying"],
    ["What does Denji want to touch as his first major goal in life?", "Boobs", "A million dollars", "A steak", "A sports car"],
    ["Who is the eyepatch-wearing devil hunter who partners with Aki?", "Himeno", "Kobeni", "Makima", "Quanxi"],
    ["(Hard) What specific division of Public Safety does Makima lead?", "Special Division 4", "Division 1", "Anti-Devil Squad 7", "Central Command 2"],

    // DEMON SLAYER
    ["What is the name of Tanjiro's demon sister?", "Nezuko", "Kanao", "Shinobu", "Mitsuri"],
    ["What breathing style does Zenitsu primarily use?", "Thunder Breathing", "Lightning Breathing", "Flash Breathing", "Sound Breathing"],
    ["Who wears a hollowed-out boar's head?", "Inosuke Hashibira", "Genya Shinazugawa", "Tengen Uzui", "Sanemi Shinazugawa"],
    ["Who is the progenitor and creator of all demons?", "Muzan Kibutsuji", "Kokushibo", "Akaza", "Douma"],
    ["What color does Tanjiro's Nichirin sword turn?", "Black", "Red", "Blue", "White"],
    ["What is the highest rank in the Demon Slayer Corps?", "Hashira", "Kinoe", "Mizunoto", "Pillar Master"],
    ["What flower is famously poisonous to demons?", "Wisteria", "Spider Lily", "Cherry Blossom", "Lotus"],
    ["What is the name of the Water Hashira who saves Tanjiro in episode 1?", "Giyu Tomioka", "Kyojuro Rengoku", "Tengen Uzui", "Sakonji Urokodaki"],
    ["What pattern is on Tanjiro's signature haori jacket?", "Green and black checkers", "Yellow triangles", "Pink floral", "Red flames"],
    ["(Hard) Which Hashira uses Insect Breathing?", "Shinobu Kocho", "Mitsuri Kanroji", "Kanae Kocho", "Kanao Tsuyuri"],

    // MY HERO ACADEMIA
    ["What is Izuku Midoriya's hero name?", "Deku", "Kacchan", "All Might Jr", "Green Flash"],
    ["Who passes their quirk, One For All, to Midoriya?", "All Might", "Endeavor", "Gran Torino", "Best Jeanist"],
    ["What is Katsuki Bakugo's quirk?", "Explosion", "Fireball", "Spark", "Nitro Sweat"],
    ["What prestigious high school do the main characters attend?", "U.A. High School", "Shiketsu High", "Ketsubutsu Academy", "Heroics Prep"],
    ["Who is the tired-looking homeroom teacher for Class 1-A?", "Shota Aizawa", "Present Mic", "Midnight", "Cementoss"],
    ["What is Shoto Todoroki's quirk?", "Half-Cold Half-Hot", "Fire and Ice", "Thermal Manipulation", "Frostburn"],
    ["What is the name of the villain organization led by Tomura Shigaraki?", "League of Villains", "Meta Liberation Army", "Eight Precepts of Death", "Vanguard Action Squad"],
    ["What is All Might's famous catchphrase?", "I am here!", "Plus Ultra!", "Never give up!", "Justice prevails!"],
    ["Who is the main villain that possesses the All For One quirk?", "All For One", "Tomura Shigaraki", "Overhaul", "Stain"],
    ["(Hard) What is the name of the zero-gravity hero student?", "Ochaco Uraraka", "Tsuyu Asui", "Momo Yaoyorozu", "Kyoka Jiro"],

    // DEATH NOTE
    ["What is the name of the Shinigami who drops his Death Note into the human world?", "Ryuk", "Rem", "Gelus", "Sidoh"],
    ["Who picks up the Death Note and uses it to kill criminals?", "Light Yagami", "Teru Mikami", "L", "Soichiro Yagami"],
    ["What alias does the mysterious, sweet-loving detective go by?", "L", "N", "M", "K"],
    ["What must you picture in your mind when writing a name in the Death Note?", "The person's face", "The way they will die", "Their birthday", "The Shinigami"],
    ["What fruit does Ryuk love to eat in the human world?", "Apples", "Bananas", "Strawberries", "Grapes"],
    ["What is Light Yagami's public alter ego known as by the world?", "Kira", "Zero", "God", "The Judge"],
    ["Who is the second Kira, a famous blonde pop idol?", "Misa Amane", "Kiyomi Takada", "Naomi Misora", "Sayu Yagami"],
    ["What deal can a human make with a Shinigami to see names and lifespans?", "The Shinigami Eye Deal", "The Blood Pact", "The Half-Life Deal", "The Reaper's Bargain"],
    ["What happens if the cause of death is not specified in the notebook?", "Heart attack", "Traffic accident", "Choking", "Spontaneous combustion"],
    ["(Hard) What is the name of L's successor who loves eating chocolate bars?", "Mello", "Near", "Matt", "Watari"]
];

function getRandom30Questions() {
    // Clone and shuffle the main array
    let shuffled = [...fullTriviaDB].sort(() => 0.5 - Math.random());
    // Return exactly 30 questions
    return shuffled.slice(0, 30);
}