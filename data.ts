import { RuleSection } from './types';

export const ruleData: RuleSection[] = [
  {
    id: "registration",
    title: "I. Registration",
    category: "Administrative",
    content: [
      "Girls must play at their age level, unless otherwise approved by the Board.",
      "A parent may request that one particular manager not draft his/her child with reasonable cause and explanation.",
      "All information is confidential (1989)."
    ],
    subSections: [
      {
        title: "B. Eligibility",
        items: [
          "Division eligibility is determined by the player's age on September 1 of the current year.",
          "T-Ball: Ages 4 & 5",
          "6U: Age 6",
          "8U: Ages 7 & 8",
          "IOU: Ages 9 & 10",
          "12U: Ages 11 & 12",
          "14U: Ages 13 & 14"
        ]
      },
      {
        title: "C. League Eligibility",
        items: [
          "Players interested in playing on a travel ball team, another recreational league, or a hardball league during the Hilltoppers season require Board approval based on commitment."
        ]
      },
      {
        title: "D. Assessments",
        items: [
          "Players will attend assessment events for drills to allow managers to observe skills for drafts.",
          "Pitchers: 3-5 pitches from age division mound distance.",
          "Catchers: Catch 3-5 pitches and throw to second base.",
          "General: Batting (3-5 pitches), sprint to first, fielding pop-ups at second, fielding grounders at shortstop."
        ]
      },
      {
        title: "E. Division Eligibility",
        items: [
          "Requesting to move divisions is not guaranteed and requires Board approval.",
          "Playing Down: Allowed for new players for safety/acclimation. If playing down, not eligible for Select or All-Stars.",
          "Playing Up: Must assess in both divisions. Forfeits All-Star eligibility in younger division."
        ]
      }
    ]
  },
  {
    id: "draft",
    title: "II. Player Draft Procedures",
    category: "Team Formation",
    content: [
      "All players will be in the open draft for 8U-14U divisions.",
      "The draft is a closed event for only team designees and Board members.",
      "Teams will have one (1) draft pick per round in a snake order (1-10, 10-1)."
    ],
    subSections: [
      {
        title: "Special Draft Rules",
        items: [
          "Blind Draft: Registered players who miss tryouts are selected blindly via card selection.",
          "Pitching Pool: Managers with A or B rated daughters/pitchers are restricted in the first round.",
          "Sister Options: Sisters must be drafted to the same team unless requested otherwise. Non-selected sisters drafted 4 rounds apart."
        ]
      },
      {
        title: "Divisions",
        items: [
          "Drafted: 8U, IOU, 12U, 14U",
          "Undrafted: T-Ball/6U (Teams formed by the Board to ensure balance)."
        ]
      }
    ]
  },
  {
    id: "all-stars",
    title: "III. All Stars",
    category: "Team Formation",
    content: [
      "Players must have played 75% of current season's league games.",
      "Must commit 100% to the entire All-Star season (practices, friendlies, tournaments).",
      "No participation in travel ball allowed during the All-Star season."
    ],
    subSections: [
      {
        title: "Selection Process",
        items: [
          "Voted on by division managers.",
          "Top 10 vote-getters selected automatically.",
          "Manager selects 2 players from nomination list plus alternates.",
          "1 discretionary player with executive board approval."
        ]
      }
    ]
  },
  {
    id: "select",
    title: "V. League Select Teams",
    category: "Team Formation",
    content: [
      "Select players must play 75% of the recreational program to be eligible.",
      "Must attend minimum 1 rec practice and 1 rec game per week.",
      "100% commitment required; no travel ball allowed."
    ]
  },
  {
    id: "general-rules",
    title: "VI. Overall League Rules",
    category: "Gameplay",
    content: [
      "Official USA Softball rules apply unless superseded by local rules.",
      "An adult woman must be present at all team functions.",
      "Practice Limits: Teams >4 girls can only meet 3 times a week (includes games/batting cages).",
      "Warm-ups may not start earlier than 60 minutes prior to game."
    ],
    subSections: [
      {
        title: "Field Preparation",
        items: [
          "First game managers: Line field 15 mins prior.",
          "Last game managers: Clean up mound, bases, rakes.",
          "All managers: Clean dugouts."
        ]
      },
      {
        title: "Game Timing",
        items: [
          "Game starts when umpire indicates time or scoreboard clock starts.",
          "Forfeit if less than 8 players after 10 min grace period.",
          "New inning begins when 3rd out is called."
        ]
      },
      {
        title: "Mercy/Run Rules",
        items: [
          "T-Ball: Whole lineup bats.",
          "6U/8U: 3 runs per inning.",
          "10U/12U: 4 runs per inning.",
          "14U: 5 runs per inning.",
          "Catch Up Rule: Team behind by max runs allowed may score enough to tie."
        ]
      }
    ]
  },
  {
    id: "discipline",
    title: "VII. Discipline & Conduct",
    category: "Conduct",
    content: [
      "Zero tolerance for bullying.",
      "Social media must be used appropriately; no negative remarks about players/officials.",
      "No alcohol/tobacco/drugs allowed at fields or dugouts."
    ],
    subSections: [
      {
        title: "Parent Conduct",
        items: [
          "Shall not 'coach' or 'officiate' from sidelines.",
          "Will not question an umpire's call.",
          "Violations result in removal from team or league."
        ]
      },
      {
        title: "Umpire Imposed Violations",
        items: [
          "Ejection = suspended for that game + 2 additional games.",
          "Second offense = 2 game suspension + possible removal from league."
        ]
      }
    ]
  },
  {
    id: "uniforms",
    title: "XI. Uniforms",
    category: "Administrative",
    content: [
      "League supplied jersey is the only authorized jersey for sanctioned events.",
      "Last names allowed on back if uniform across team.",
      "No 'Team Personalized' uniforms allowed.",
      "Decisions on shorts vs pants must be majority vote."
    ]
  },
  {
    id: "tball-rules",
    title: "XIII. T-Ball Division Rules",
    category: "Specific Divisions",
    content: [
      "Instructional and fun focus. All players play defensive positions.",
      "Score and standings are not kept.",
      "Game length: 1 hour drop dead."
    ],
    subSections: [
      {
        title: "Gameplay",
        items: [
          "Batter hits off Tee. 4 strikes = out (swing and miss is strike).",
          "No walks, no sliding, no stealing.",
          "Ball must pass 10-foot arc to be fair.",
          "Mid-season: Coach may pitch up to 3 pitches. If missed, Tee is used."
        ]
      }
    ]
  },
  {
    id: "6u-rules",
    title: "6U Rules",
    category: "Specific Divisions",
    content: [
      "Ball: 10-inch Rif 1 soft dot.",
      "Game: 6 innings or 1 hour drop dead.",
      "Batting: Round robin.",
      "Pitching Distance: 30 feet."
    ],
    subSections: [
      {
        title: "Pitching/Batting",
        items: [
          "Coach Pitch: 4 pitches max. If not hit, use Tee.",
          "No base stealing.",
          "Dead Ball: When ball breaks plane of pitching circle.",
          "Second Half Season: 4 coach pitches. If fouled on 4th, get 1 more. No Tee allowed."
        ]
      }
    ]
  },
  {
    id: "8u-rules",
    title: "8U Rules",
    category: "Specific Divisions",
    content: [
      "Pitching Distance: 30 feet. Bases: 60 feet.",
      "Ball: 10-inch soft stitch.",
      "10 defensive players allowed (4 outfielders).",
      "One adult coach allowed in outfield."
    ],
    subSections: [
      {
        title: "Pitching Mechanics",
        items: [
          "Player Pitch: Max 3 innings per game.",
          "Coach Pitch (First Round): After 2 walks/HBP, coach pitches 1 pitch.",
          "Stealing: One base per batter. No stealing home. No double stealing."
        ]
      }
    ]
  },
  {
    id: "10-14u-rules",
    title: "10U-14U Rules",
    category: "Specific Divisions",
    content: [
      "9 players on field.",
      "Dropped third strike is in effect.",
      "Infield Fly rule is in effect.",
    ],
    subSections: [
      {
        title: "Pitching Distances",
        items: [
          "IOU: 35 feet",
          "12U: 40 feet",
          "14U: 43 feet"
        ]
      },
      {
        title: "Stealing (10U)",
        items: [
          "Leave base when ball leaves pitcher's hand.",
          "Home is open.",
          "One base per pitch per player."
        ]
      },
      {
        title: "Mercy/Run Limits",
        items: [
          "Max 4 runs per inning (10U/12U).",
          "Max 5 runs per inning (14U).",
          "Continuation Play is in effect for 12U/14U."
        ]
      }
    ]
  }
];
