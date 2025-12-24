export interface ReconciliationStory {
  id: string;
  title: string;
  book: string;
  chapters: string;
  summary: string;
  keyLessons: string[];
  mainVerses: Array<{
    reference: string;
    text: string;
    version: string;
  }>;
  themes: string[];
  image?: string;
}

export const reconciliationStories: ReconciliationStory[] = [
  {
    id: "prodigal-son",
    title: "The Prodigal Son",
    book: "Luke",
    chapters: "15:11-32",
    summary: "A young man demands his inheritance from his father, squanders it in reckless living, and returns home destitute. His father welcomes him back with open arms, demonstrating God's unconditional love and forgiveness toward repentant sinners.",
    keyLessons: [
      "God's love is unconditional and waiting for us",
      "True repentance leads to restoration",
      "Celebration follows reconciliation",
      "God's mercy extends to all who return to Him"
    ],
    mainVerses: [
      {
        reference: "Luke 15:20",
        text: "But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.",
        version: "NIV"
      },
      {
        reference: "Luke 15:24",
        text: "For this son of mine was dead and is alive again; he was lost and is found.' So they began to celebrate.",
        version: "NIV"
      }
    ],
    themes: ["Forgiveness", "Repentance", "God's Love", "Restoration"],
    image: "🦌"
  },
  {
    id: "joseph-brothers",
    title: "Joseph and His Brothers",
    book: "Genesis",
    chapters: "37, 39-50",
    summary: "Joseph is betrayed by his jealous brothers, sold into slavery, and rises to power in Egypt. Years later, when famine brings his brothers to Egypt seeking food, Joseph chooses forgiveness over revenge, demonstrating divine reconciliation and God's sovereign plan.",
    keyLessons: [
      "God can turn evil into good for His purposes",
      "Forgiveness breaks the cycle of hurt",
      "Reconciliation requires vulnerability and courage",
      "God's plans are bigger than human betrayal"
    ],
    mainVerses: [
      {
        reference: "Genesis 45:5",
        text: "And now, do not be distressed and do not be angry with yourselves for selling me here, because it was to save lives that God sent me ahead of you.",
        version: "NIV"
      },
      {
        reference: "Genesis 50:20",
        text: "You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.",
        version: "NIV"
      }
    ],
    themes: ["Forgiveness", "God's Sovereignty", "Restoration", "Family Healing"],
    image: "👑"
  },
  {
    id: "david-saul",
    title: "David and Saul",
    book: "1 Samuel",
    chapters: "24, 26",
    summary: "King Saul relentlessly pursues David to kill him out of jealousy. David has multiple opportunities to kill Saul but chooses mercy and reconciliation instead, trusting God to vindicate him. This story shows reconciliation even with enemies.",
    keyLessons: [
      "Reconciliation doesn't always require friendship",
      "Respect for God's anointed brings blessing",
      "Mercy toward enemies reflects God's character",
      "God honors those who seek peace"
    ],
    mainVerses: [
      {
        reference: "1 Samuel 24:10",
        text: "This day you have seen with your own eyes how the LORD delivered you into my hands in the cave. Some urged me to kill you, but I spared you; I said, 'I will not lay my hand on my lord, because he is the LORD's anointed.'",
        version: "NIV"
      },
      {
        reference: "1 Samuel 26:23",
        text: "The LORD rewards everyone for their righteousness and faithfulness. The LORD delivered you into my hands today, but I would not lay a hand on the LORD's anointed.",
        version: "NIV"
      }
    ],
    themes: ["Mercy", "Respect", "God's Justice", "Peace"],
    image: "⚔️"
  },
  {
    id: "peter-restoration",
    title: "Peter's Restoration",
    book: "John",
    chapters: "21:15-19",
    summary: "After denying Jesus three times during His trial, Peter is devastated. Jesus appears to him after the resurrection and restores him with three questions and commands to 'feed my sheep,' showing complete reconciliation and commissioning.",
    keyLessons: [
      "Jesus restores those who fail Him",
      "True love is shown through service",
      "Past failures don't disqualify us from service",
      "Jesus' love persists through our denial"
    ],
    mainVerses: [
      {
        reference: "John 21:15",
        text: "When they had finished eating, Jesus said to Simon Peter, 'Simon son of John, do you love me more than these?' 'Yes, Lord,' he said, 'you know that I love you.' Jesus said, 'Feed my lambs.'",
        version: "NIV"
      },
      {
        reference: "John 21:17",
        text: "The third time he said to him, 'Simon son of John, do you love me?' Peter was hurt because Jesus asked him the third time, 'Do you love me?' He said, 'Lord, you know all things; you know that I love you.' Jesus said, 'Feed my sheep.'",
        version: "NIV"
      }
    ],
    themes: ["Restoration", "Service", "Love", "Commission"],
    image: "🐟"
  },
  {
    id: "woman-adultery",
    title: "The Woman Caught in Adultery",
    book: "John",
    chapters: "8:1-11",
    summary: "Religious leaders bring a woman caught in adultery to Jesus, hoping to trap Him. Jesus responds with wisdom and mercy, challenging the accusers and offering the woman reconciliation instead of condemnation.",
    keyLessons: [
      "Jesus offers mercy over judgment",
      "We are all sinners in need of grace",
      "True righteousness confronts sin but extends mercy",
      "Jesus is the friend of sinners"
    ],
    mainVerses: [
      {
        reference: "John 8:7",
        text: "When they kept on questioning him, he straightened up and said to them, 'Let any one of you who is without sin be the first to throw a stone at her.'",
        version: "NIV"
      },
      {
        reference: "John 8:10-11",
        text: "Jesus straightened up and asked her, 'Woman, where are they? Has no one condemned you?' 'No one, sir,' she said. 'Then neither do I condemn you,' Jesus declared. 'Go now and leave your life of sin.'",
        version: "NIV"
      }
    ],
    themes: ["Mercy", "Non-judgment", "Grace", "Sin"],
    image: "👥"
  },
  {
    id: "good-samaritan",
    title: "The Good Samaritan",
    book: "Luke",
    chapters: "10:25-37",
    summary: "Jesus tells a parable about a man beaten by robbers and left for dead. A priest and Levite pass by, but a despised Samaritan stops to help, showing that true reconciliation crosses cultural and religious boundaries.",
    keyLessons: [
      "Love extends beyond cultural boundaries",
      "True reconciliation requires action",
      "Mercy is shown through practical help",
      "Enemies can become neighbors through love"
    ],
    mainVerses: [
      {
        reference: "Luke 10:33-34",
        text: "But a Samaritan, as he traveled, came where the man was; and when he saw him, he took pity on him. He went to him and bandaged his wounds, pouring on oil and wine. Then he put the man on his own donkey, brought him to an inn and took care of him.",
        version: "NIV"
      },
      {
        reference: "Luke 10:37",
        text: "The expert in the law replied, 'The one who had mercy on him.' Jesus told him, 'Go and do likewise.'",
        version: "NIV"
      }
    ],
    themes: ["Mercy", "Love", "Action", "Cultural Barriers"],
    image: "🩹"
  },
  {
    id: "zacchaeus",
    title: "Zacchaeus",
    book: "Luke",
    chapters: "19:1-10",
    summary: "Zacchaeus, a corrupt tax collector despised by the Jewish people, climbs a tree to see Jesus. Jesus invites Himself to Zacchaeus' home, and the tax collector repents, demonstrating reconciliation between Jesus and those society rejects.",
    keyLessons: [
      "Jesus seeks out the lost and rejected",
      "True repentance brings restitution",
      "Jesus values relationship over reputation",
      "Salvation brings joy and transformation"
    ],
    mainVerses: [
      {
        reference: "Luke 19:5",
        text: "When Jesus reached the spot, he looked up and said to him, 'Zacchaeus, come down immediately. I must stay at your house today.'",
        version: "NIV"
      },
      {
        reference: "Luke 19:8-9",
        text: "But Zacchaeus stood up and said to the Lord, 'Look, Lord! Here and now I give half of my possessions to the poor, and if I have cheated anybody out of anything, I will pay back four times the amount.' Jesus said to him, 'Today salvation has come to this house, because this man, too, is a son of Abraham.'",
        version: "NIV"
      }
    ],
    themes: ["Repentance", "Restitution", "Salvation", "Transformation"],
    image: "🌳"
  },
  {
    id: "lost-sheep-coin",
    title: "The Lost Sheep and Lost Coin",
    book: "Luke",
    chapters: "15:1-10",
    summary: "Jesus tells two parables about a shepherd who leaves 99 sheep to find one lost sheep, and a woman who searches diligently for one lost coin. These stories illustrate God's relentless pursuit of reconciliation with lost sinners.",
    keyLessons: [
      "God values every individual soul",
      "Heaven celebrates reconciliation",
      "God actively seeks the lost",
      "No one is too insignificant for God's attention"
    ],
    mainVerses: [
      {
        reference: "Luke 15:4",
        text: "Suppose one of you has a hundred sheep and loses one of them. Doesn't he leave the ninety-nine in the open country and go after the stray until he finds it?",
        version: "NIV"
      },
      {
        reference: "Luke 15:7",
        text: "I tell you that in the same way there will be more rejoicing in heaven over one sinner who repents than over ninety-nine righteous persons who do not need to repent.",
        version: "NIV"
      },
      {
        reference: "Luke 15:10",
        text: "In the same way, I tell you, there is rejoicing in the presence of the angels of God over one sinner who repents.",
        version: "NIV"
      }
    ],
    themes: ["God's Love", "Seeking", "Value", "Joy"],
    image: "🐑"
  },
  {
    id: "jacob-esau",
    title: "Jacob and Esau",
    book: "Genesis",
    chapters: "25, 27, 32-33",
    summary: "Jacob deceives his brother Esau to steal his blessing, causing years of separation and hostility. After wrestling with God and experiencing transformation, Jacob seeks reconciliation with Esau, who forgives him, showing familial reconciliation after deep betrayal.",
    keyLessons: [
      "Transformation precedes reconciliation",
      "Humility opens the door to forgiveness",
      "God works in our struggles for good",
      "Family reconciliation brings blessing"
    ],
    mainVerses: [
      {
        reference: "Genesis 32:26",
        text: "Then the man said, 'Let me go, for it is daybreak.' But Jacob replied, 'I will not let you go unless you bless me.'",
        version: "NIV"
      },
      {
        reference: "Genesis 33:4",
        text: "But Esau ran to meet Jacob and embraced him; he threw his arms around his neck and kissed him. And they wept.",
        version: "NIV"
      }
    ],
    themes: ["Transformation", "Humility", "Family", "Blessing"],
    image: "🤝"
  },
  {
    id: "paul-conversion",
    title: "Paul's Conversion",
    book: "Acts",
    chapters: "9:1-19",
    summary: "Saul (later Paul) violently persecutes Christians until a blinding encounter with Jesus on the road to Damascus. This radical conversion turns a persecutor into one of Christianity's greatest ambassadors, showing God's power to reconcile even the most hardened enemies.",
    keyLessons: [
      "No one is beyond God's reach",
      "Radical conversion is possible",
      "God can use our past for His glory",
      "Reconciliation changes everything"
    ],
    mainVerses: [
      {
        reference: "Acts 9:4-5",
        text: "He fell to the ground and heard a voice say to him, 'Saul, Saul, why do you persecute me?' 'Who are you, Lord?' Saul asked. 'I am Jesus, whom you are persecuting,' he replied.",
        version: "NIV"
      },
      {
        reference: "Acts 9:15-16",
        text: "But the Lord said to Ananias, 'Go! This man is my chosen instrument to proclaim my name to the Gentiles and their kings and to the people of Israel. I will show him how much he must suffer for my name.'",
        version: "NIV"
      }
    ],
    themes: ["Conversion", "Grace", "Purpose", "Transformation"],
    image: "⚡"
  },
  {
    id: "ruth-naomi",
    title: "Ruth and Naomi",
    book: "Ruth",
    chapters: "1-4",
    summary: "After losing everything in a famine, Naomi's family moves to Moab where her husband and sons die. Her daughter-in-law Ruth chooses to stay with her despite having the option to return home. Ruth's loyalty leads to redemption and restoration through Boaz, showing how faithfulness and kindness bring reconciliation and hope.",
    keyLessons: [
      "Loyalty in hardship brings blessing",
      "God redeems broken situations",
      "Kindness crosses cultural boundaries",
      "Reconciliation often comes through unexpected paths"
    ],
    mainVerses: [
      {
        reference: "Ruth 1:16-17",
        text: "But Ruth replied, 'Don't urge me to leave you or to turn back from you. Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God. Where you die I will die, and there I will be buried. May the LORD deal with me, be it ever so severely, if even death separates you and me.'",
        version: "NIV"
      },
      {
        reference: "Ruth 4:14-15",
        text: "The women said to Naomi: 'Praise be to the LORD, who this day has not left you without a guardian-redeemer. May he become famous throughout Israel! He will renew your life and sustain you in your old age.'",
        version: "NIV"
      }
    ],
    themes: ["Loyalty", "Redemption", "Faithfulness", "Hope"],
    image: "🌾"
  },
  {
    id: "job-restoration",
    title: "Job's Restoration",
    book: "Job",
    chapters: "1-2, 42",
    summary: "Job loses everything - his wealth, children, and health - through devastating trials. Despite his wife's urging to curse God and his friends' accusations, Job maintains his integrity. God ultimately restores Job with even greater blessings, demonstrating that suffering can lead to deeper reconciliation with God.",
    keyLessons: [
      "God allows suffering but restores abundantly",
      "Integrity through trials brings blessing",
      "Friends' advice isn't always wise",
      "God's purposes are beyond our understanding"
    ],
    mainVerses: [
      {
        reference: "Job 1:21",
        text: "Naked I came from my mother's womb, and naked I will depart. The LORD gave and the LORD has taken away; may the name of the LORD be praised.",
        version: "NIV"
      },
      {
        reference: "Job 42:10",
        text: "After Job had prayed for his friends, the LORD restored his fortunes and gave him twice as much as he had before.",
        version: "NIV"
      }
    ],
    themes: ["Suffering", "Restoration", "Integrity", "Blessing"],
    image: "🌩️"
  },
  {
    id: "canaanite-woman",
    title: "The Canaanite Woman",
    book: "Matthew",
    chapters: "15:21-28",
    summary: "A Canaanite woman begs Jesus to heal her demon-possessed daughter. Jesus initially seems to reject her request, testing her faith. Her persistent, humble response leads to Jesus healing her daughter, showing that faith and humility bring reconciliation and inclusion across cultural boundaries.",
    keyLessons: [
      "Persistence in prayer brings breakthrough",
      "Humility opens doors to blessing",
      "God's mercy extends to all people",
      "Faith overcomes cultural barriers"
    ],
    mainVerses: [
      {
        reference: "Matthew 15:22-23",
        text: "A Canaanite woman from that vicinity came to him, crying out, 'Lord, Son of David, have mercy on me! My daughter is demon-possessed and suffering terribly.' Jesus did not answer a word. So his disciples came to him and urged him, 'Send her away, for she keeps crying out after us.'",
        version: "NIV"
      },
      {
        reference: "Matthew 15:27-28",
        text: "'Yes it is, Lord,' she said. 'Even the dogs eat the crumbs that fall from their master's table.' Then Jesus said to her, 'Woman, you have great faith! Your request is granted.' And her daughter was healed at that moment.",
        version: "NIV"
      }
    ],
    themes: ["Faith", "Persistence", "Humility", "Inclusion"],
    image: "🧎‍♀️"
  },
  {
    id: "ten-lepers",
    title: "The Ten Lepers",
    book: "Luke",
    chapters: "17:11-19",
    summary: "Jesus heals ten lepers who cry out for mercy. All ten are healed physically, but only one returns to thank Jesus. This Samaritan leper's gratitude leads to Jesus declaring him fully healed - both body and soul. The story teaches that true reconciliation involves both receiving healing and giving thanks.",
    keyLessons: [
      "Gratitude completes the healing process",
      "Thankfulness brings spiritual wholeness",
      "Many receive blessings but few are truly grateful",
      "Reconciliation includes relationship with the healer"
    ],
    mainVerses: [
      {
        reference: "Luke 17:14-15",
        text: "When he saw them, he said, 'Go, show yourselves to the priests.' And as they went, they were cleansed. One of them, when he saw he was healed, came back, praising God in a loud voice.",
        version: "NIV"
      },
      {
        reference: "Luke 17:18-19",
        text: "Has no one returned to give praise to God except this foreigner?' Then he said to him, 'Rise and go; your faith has made you well.'",
        version: "NIV"
      }
    ],
    themes: ["Gratitude", "Healing", "Faith", "Wholeness"],
    image: "🤲"
  },
  {
    id: "widows-offering",
    title: "The Widow's Offering",
    book: "Mark",
    chapters: "12:41-44",
    summary: "Jesus observes people giving offerings at the temple. While wealthy people give large amounts from their abundance, a poor widow gives two small coins - all she had to live on. Jesus teaches that true giving comes from the heart, not from excess, showing that reconciliation with God values sincerity over show.",
    keyLessons: [
      "God values sincerity over spectacle",
      "True giving costs something personal",
      "God sees what others miss",
      "Reconciliation involves sacrificial giving"
    ],
    mainVerses: [
      {
        reference: "Mark 12:41-42",
        text: "Jesus sat down opposite the place where the offerings were put and watched the crowd putting their money into the temple treasury. Many rich people threw in large amounts. But a poor widow came and put in two very small copper coins, worth only a few cents.",
        version: "NIV"
      },
      {
        reference: "Mark 12:43-44",
        text: "Calling his disciples to him, Jesus said, 'Truly I tell you, this poor widow has put more into the treasury than all the others. They all gave out of their wealth; but she, out of her poverty, put in everything—all she had to live on.'",
        version: "NIV"
      }
    ],
    themes: ["Giving", "Sacrifice", "Sincerity", "Value"],
    image: "💰"
  },
  {
    id: "paralytic-healing",
    title: "The Healing of the Paralytic",
    book: "Mark",
    chapters: "2:1-12",
    summary: "Four friends carry a paralyzed man to Jesus through a crowded house, lowering him through the roof. Jesus not only heals the man's physical paralysis but also forgives his sins, demonstrating that true reconciliation involves both spiritual and physical restoration. The religious leaders' reaction shows the challenge this brings.",
    keyLessons: [
      "Friends can help bring us to Jesus",
      "Jesus heals both body and soul",
      "Spiritual healing is foundational",
      "True reconciliation addresses root causes"
    ],
    mainVerses: [
      {
        reference: "Mark 2:4-5",
        text: "Since they could not get him to Jesus because of the crowd, they made an opening in the roof above Jesus by digging through it and then lowered the mat the man was lying on. When Jesus saw their faith, he said to the paralyzed man, 'Son, your sins are forgiven.'",
        version: "NIV"
      },
      {
        reference: "Mark 2:10-11",
        text: "But I want you to know that the Son of Man has authority on earth to forgive sins. So he said to the man, 'I tell you, get up, take your mat and go home.' He got up, took his mat and walked out in full view of them all.",
        version: "NIV"
      }
    ],
    themes: ["Healing", "Faith", "Forgiveness", "Authority"],
    image: "🛏️"
  },
  {
    id: "workers-vineyard",
    title: "The Workers in the Vineyard",
    book: "Matthew",
    chapters: "20:1-16",
    summary: "A landowner hires workers throughout the day, paying all of them the same wage regardless of hours worked. Those hired first complain about the fairness, but the owner explains his right to be generous. This parable shows that God's grace and reconciliation aren't about earning but about receiving God's generosity equally.",
    keyLessons: [
      "God's grace isn't earned, it's given",
      "Jealousy destroys relationships",
      "God's generosity extends to all",
      "Reconciliation celebrates others' blessings"
    ],
    mainVerses: [
      {
        reference: "Matthew 20:13-14",
        text: "'But he answered one of them, 'I am not being unfair to you, friend. Didn't you agree to work for a denarius? Take your pay and go. I want to give the one who was hired last the same as I gave you.'",
        version: "NIV"
      },
      {
        reference: "Matthew 20:15-16",
        text: "'Don't I have the right to do what I want with my own money? Or are you envious because I am generous?' So the last will be first, and the first will be last.",
        version: "NIV"
      }
    ],
    themes: ["Grace", "Generosity", "Fairness", "Jealousy"],
    image: "🍇"
  }
];

export function getReconciliationStories(): ReconciliationStory[] {
  return reconciliationStories;
}

export function getStoryById(id: string): ReconciliationStory | undefined {
  return reconciliationStories.find(story => story.id === id);
}

export function getStoriesByTheme(theme: string): ReconciliationStory[] {
  return reconciliationStories.filter(story =>
    story.themes.some(t => t.toLowerCase().includes(theme.toLowerCase()))
  );
}
