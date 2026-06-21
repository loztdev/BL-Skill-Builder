window.BL_DATA = window.BL_DATA || {};
window.BL_DATA.wonderlands = {
  gameId: "wonderlands",
  gameName: "Tiny Tina's Wonderlands",
  characters: [
    /* ===================== BRR-ZERKER ===================== */
    {
      id: "brrzerker",
      name: "Brr-Zerker",
      title: "",
      trees: [
        {
          id: "brrzerker_tree",
          name: "Brr-Zerker",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "brrzerker_action_skill",
              name: "Feral Surge / Dreadwind",
              tier: 0,
              col: 0,
              maxPoints: 1,
              type: "action",
              description: "Action Skills: leap and slam down dealing Frost damage, or spin in place slashing nearby enemies with your melee weapon.",
              ranks: [
                "Feral Surge: Leap forward and slam into the ground, dealing Frost Melee Damage to nearby enemies. Dreadwind: Spin in place, continuously dealing Melee Damage to nearby enemies with your equipped melee weapon for a few seconds. Activating an Action Skill triggers the Class Feat, Rage of the Ancients, causing you to become Enraged and deal Bonus Frost Damage with all damage sources for 15 seconds. Enrage Duration does not deplete while an Action Skill is active and ends early if you enter Save Your Soul. Activating an Action Skill while already Enraged restores roughly a third of the Enrage timer."
              ]
            },
            {
              id: "brrzerker_ancestral_frost",
              name: "Ancestral Frost",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increases your Frost Damage.",
              ranks: [
                "Increase Frost Damage dealt by 4%.",
                "Increase Frost Damage dealt by 8%.",
                "Increase Frost Damage dealt by 12%.",
                "Increase Frost Damage dealt by 16%.",
                "Increase Frost Damage dealt by 20%."
              ]
            },
            {
              id: "brrzerker_savagery",
              name: "Savagery",
              tier: 1,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increases melee damage and Enrage duration.",
              ranks: [
                "Increase Melee Damage by 4% and Enrage Duration by 1 second.",
                "Increase Melee Damage by 8% and Enrage Duration by 2 seconds.",
                "Increase Melee Damage by 12% and Enrage Duration by 3 seconds.",
                "Increase Melee Damage by 16% and Enrage Duration by 4 seconds.",
                "Increase Melee Damage by 20% and Enrage Duration by 5 seconds."
              ]
            },
            {
              id: "brrzerker_unyielding",
              name: "Unyielding",
              tier: 1,
              col: 2,
              maxPoints: 3,
              type: "passive",
              description: "Regenerate missing health over time. The effect is doubled while Enraged.",
              ranks: [
                "Regenerate 1% of missing Health per second. Doubled to 2% per second while Enraged.",
                "Regenerate 2% of missing Health per second. Doubled to 4% per second while Enraged.",
                "Regenerate 3% of missing Health per second. Doubled to 6% per second while Enraged."
              ]
            },
            {
              id: "brrzerker_icebreaker",
              name: "Icebreaker",
              tier: 2,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increases damage dealt to Slowed and Frozen enemies.",
              ranks: [
                "Deal 4% increased damage to Slowed and Frozen enemies.",
                "Deal 8% increased damage to Slowed and Frozen enemies.",
                "Deal 12% increased damage to Slowed and Frozen enemies.",
                "Deal 16% increased damage to Slowed and Frozen enemies.",
                "Deal 20% increased damage to Slowed and Frozen enemies."
              ]
            },
            {
              id: "brrzerker_the_old_ways",
              name: "The Old Ways",
              tier: 2,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increases damage reduction and damage dealt, with the bonus increasing the closer you are to enemies.",
              ranks: [
                "Gain up to 3% Damage Reduction and 3% increased Damage dealt based on proximity to enemies.",
                "Gain up to 6% Damage Reduction and 6% increased Damage dealt based on proximity to enemies.",
                "Gain up to 9% Damage Reduction and 9% increased Damage dealt based on proximity to enemies.",
                "Gain up to 12% Damage Reduction and 12% increased Damage dealt based on proximity to enemies.",
                "Gain up to 15% Damage Reduction and 15% increased Damage dealt based on proximity to enemies."
              ]
            },
            {
              id: "brrzerker_instinct",
              name: "Instinct",
              tier: 2,
              col: 2,
              maxPoints: 3,
              type: "passive",
              description: "Increases reload speed and weapon swap speed. The effect is doubled while Enraged.",
              ranks: [
                "Increase Reload Speed and Weapon Swap Speed by 6%, doubled to 12% while Enraged.",
                "Increase Reload Speed and Weapon Swap Speed by 12%, doubled to 24% while Enraged.",
                "Increase Reload Speed and Weapon Swap Speed by 18%, doubled to 36% while Enraged."
              ]
            },
            {
              id: "brrzerker_cold_snap",
              name: "Cold Snap",
              tier: 3,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increases movement speed and Frost ability efficiency. The effect is doubled while Enraged.",
              ranks: [
                "Increase Movement Speed and Frost Ability Efficiency by 2%, doubled while Enraged.",
                "Increase Movement Speed and Frost Ability Efficiency by 4%, doubled while Enraged.",
                "Increase Movement Speed and Frost Ability Efficiency by 6%, doubled while Enraged.",
                "Increase Movement Speed and Frost Ability Efficiency by 8%, doubled while Enraged.",
                "Increase Movement Speed and Frost Ability Efficiency by 10%, doubled while Enraged."
              ]
            },
            {
              id: "brrzerker_unarmored_defence",
              name: "Unarmored Defence",
              tier: 3,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Reserves a portion of your Ward to instead increase your maximum Health.",
              ranks: [
                "Reserve 4% of your Ward capacity to increase Max Health by the same amount.",
                "Reserve 8% of your Ward capacity to increase Max Health by the same amount.",
                "Reserve 12% of your Ward capacity to increase Max Health by the same amount.",
                "Reserve 16% of your Ward capacity to increase Max Health by the same amount.",
                "Reserve 20% of your Ward capacity to increase Max Health by the same amount."
              ]
            },
            {
              id: "brrzerker_blood_frenzy",
              name: "Blood Frenzy",
              tier: 3,
              col: 2,
              maxPoints: 3,
              type: "passive",
              description: "Kill Skill: restores a percentage of your Enrage timer and Health when you get a kill.",
              ranks: [
                "Kill Skill: Killing an enemy restores 10% of your Enrage timer and 5% of your missing Health.",
                "Kill Skill: Killing an enemy restores 20% of your Enrage timer and 10% of your missing Health.",
                "Kill Skill: Killing an enemy restores 30% of your Enrage timer and 15% of your missing Health."
              ]
            },
            {
              id: "brrzerker_ancient_fury",
              name: "Ancient Fury",
              tier: 4,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increases maximum Health and Splash Damage.",
              ranks: [
                "Increase Max Health by 4% and Splash Damage by 3%.",
                "Increase Max Health by 8% and Splash Damage by 6%.",
                "Increase Max Health by 12% and Splash Damage by 9%.",
                "Increase Max Health by 16% and Splash Damage by 12%.",
                "Increase Max Health by 20% and Splash Damage by 15%."
              ]
            },
            {
              id: "brrzerker_relentless_rage",
              name: "Relentless Rage",
              tier: 4,
              col: 1,
              maxPoints: 1,
              type: "passive",
              description: "Damaging an enemy while in Save Your Soul extends its duration, and killing an enemy while in Save Your Soul triggers Enrage.",
              ranks: [
                "While in Save Your Soul, dealing damage to an enemy extends its remaining duration (the amount of extension granted decreases the more times it is triggered). Killing an enemy while in Save Your Soul immediately makes you Enraged."
              ]
            },
            {
              id: "brrzerker_blast_chill",
              name: "Blast Chill",
              tier: 5,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Melee damage has a chance to release a Frost Nova.",
              ranks: [
                "Melee hits have a 4% chance to release a Frost Nova, dealing Frost Ability Damage to nearby enemies.",
                "Melee hits have a 8% chance to release a Frost Nova, dealing Frost Ability Damage to nearby enemies.",
                "Melee hits have a 12% chance to release a Frost Nova, dealing Frost Ability Damage to nearby enemies.",
                "Melee hits have a 16% chance to release a Frost Nova, dealing Frost Ability Damage to nearby enemies.",
                "Melee hits have a 20% chance to release a Frost Nova, dealing Frost Ability Damage to nearby enemies."
              ]
            },
            {
              id: "brrzerker_iron_squall",
              name: "Iron Squall",
              tier: 5,
              col: 1,
              maxPoints: 3,
              type: "passive",
              description: "Increases fire rate and melee attack speed. The effect is doubled while Enraged.",
              ranks: [
                "Increase Fire Rate and Melee Attack Speed by 4%, doubled while Enraged.",
                "Increase Fire Rate and Melee Attack Speed by 8%, doubled while Enraged.",
                "Increase Fire Rate and Melee Attack Speed by 12%, doubled while Enraged."
              ]
            },
            {
              id: "brrzerker_blood_of_the_fallen",
              name: "Blood of the Fallen",
              tier: 5,
              col: 2,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone Kill Skill: reduces your Action Skill cooldown when you kill an enemy, or extends the Action Skill's duration if it is already active.",
              ranks: [
                "Kill Skill: Killing an enemy reduces your active Action Skill's cooldown by a large amount. If your Action Skill is currently active, killing an enemy instead extends its remaining duration."
              ]
            }
          ]
        }
      ]
    },

    /* ===================== CLAWBRINGER ===================== */
    {
      id: "clawbringer",
      name: "Clawbringer",
      title: "",
      trees: [
        {
          id: "clawbringer_tree",
          name: "Clawbringer",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "clawbringer_action_skill",
              name: "Cleansing Flames / Storm Dragon's Judgment",
              tier: 0,
              col: 0,
              maxPoints: 1,
              type: "action",
              description: "Action Skills: summon a spectral hammer to slam the ground in fire, or hurl it to strike enemies with lightning.",
              ranks: [
                "Cleansing Flames: Summon a Hammer and slam it into the ground, dealing Melee Damage to enemies in the impact area and creating a Fire Nova that deals Fire Ability Damage to nearby enemies. Storm Dragon's Judgment: Throw the Hammer in a target direction, dealing Lightning Ability Damage to all enemies it passes through before returning to you. Your Class Feat, Wyvern Companion, grants you a Wyvern that flies through the environment, periodically swooping in to attack enemies with its claws and Fire Breath, and grants you and nearby allies increased Elemental Damage while inside its Dragon Aura."
              ]
            },
            {
              id: "clawbringer_oath_of_fire",
              name: "Oath of Fire",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Grants Bonus Fire Damage to your guns and your Wyvern Companion.",
              ranks: [
                "Gain 4% Bonus Fire Damage with guns and your Wyvern Companion deals 4% Bonus Fire Damage.",
                "Gain 8% Bonus Fire Damage with guns and your Wyvern Companion deals 8% Bonus Fire Damage.",
                "Gain 12% Bonus Fire Damage with guns and your Wyvern Companion deals 12% Bonus Fire Damage.",
                "Gain 16% Bonus Fire Damage with guns and your Wyvern Companion deals 16% Bonus Fire Damage.",
                "Gain 20% Bonus Fire Damage with guns and your Wyvern Companion deals 20% Bonus Fire Damage."
              ]
            },
            {
              id: "clawbringer_radiance",
              name: "Radiance",
              tier: 1,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increases your maximum Ward capacity.",
              ranks: [
                "Increase Max Ward by 4%.",
                "Increase Max Ward by 8%.",
                "Increase Max Ward by 12%.",
                "Increase Max Ward by 16%.",
                "Increase Max Ward by 20%."
              ]
            },
            {
              id: "clawbringer_oath_of_thunder",
              name: "Oath of Thunder",
              tier: 1,
              col: 2,
              maxPoints: 3,
              type: "passive",
              description: "Grants Bonus Lightning Damage to your melee attacks and your Wyvern Companion.",
              ranks: [
                "Gain 6% Bonus Lightning Damage with melee attacks and your Wyvern Companion deals 6% Bonus Lightning Damage.",
                "Gain 12% Bonus Lightning Damage with melee attacks and your Wyvern Companion deals 12% Bonus Lightning Damage.",
                "Gain 18% Bonus Lightning Damage with melee attacks and your Wyvern Companion deals 18% Bonus Lightning Damage."
              ]
            },
            {
              id: "clawbringer_dragon_aura",
              name: "Dragon Aura",
              tier: 2,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Surrounds you with a Dragon Aura that grants you and allies within it increased Elemental Damage.",
              ranks: [
                "You and allies within your Dragon Aura gain 4% increased Elemental Damage.",
                "You and allies within your Dragon Aura gain 8% increased Elemental Damage.",
                "You and allies within your Dragon Aura gain 12% increased Elemental Damage.",
                "You and allies within your Dragon Aura gain 16% increased Elemental Damage.",
                "You and allies within your Dragon Aura gain 20% increased Elemental Damage."
              ]
            },
            {
              id: "clawbringer_dedication",
              name: "Dedication",
              tier: 2,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increases your Action Skill cooldown rate, scaling with your current Ward.",
              ranks: [
                "Increase Action Skill Cooldown Rate by 4%, with a greater bonus the higher your current Ward.",
                "Increase Action Skill Cooldown Rate by 8%, with a greater bonus the higher your current Ward.",
                "Increase Action Skill Cooldown Rate by 12%, with a greater bonus the higher your current Ward.",
                "Increase Action Skill Cooldown Rate by 16%, with a greater bonus the higher your current Ward.",
                "Increase Action Skill Cooldown Rate by 20%, with a greater bonus the higher your current Ward."
              ]
            },
            {
              id: "clawbringer_rebuke",
              name: "Rebuke",
              tier: 2,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Reduces damage taken from all sources; allies near you gain a chance to deflect incoming attacks back as Lightning Damage.",
              ranks: [
                "Reduce damage taken by 2%. Nearby allies gain a small chance to deflect attacks back at attackers as Lightning Damage.",
                "Reduce damage taken by 4%. Nearby allies gain an increased chance to deflect attacks back as Lightning Damage.",
                "Reduce damage taken by 6%. Nearby allies gain an increased chance to deflect attacks back as Lightning Damage.",
                "Reduce damage taken by 8%. Nearby allies gain an increased chance to deflect attacks back as Lightning Damage.",
                "Reduce damage taken by 10%. Nearby allies gain a high chance to deflect attacks back as Lightning Damage."
              ]
            },
            {
              id: "clawbringer_blasthamuts_favor",
              name: "Blasthamut's Favor",
              tier: 3,
              col: 1,
              maxPoints: 3,
              type: "passive",
              description: "Kill Skill: killing an enemy with a gun summons a homing Fire Orb; killing an enemy with melee summons a homing Lightning Orb.",
              ranks: [
                "Kill Skill: Killing an enemy with a gun has a chance to summon a Fire Orb that seeks out a nearby enemy and explodes for Fire Damage. Killing an enemy with melee has a chance to summon a Lightning Orb that seeks out a nearby enemy and explodes for Lightning Damage.",
                "Kill Skill: Increased chance to summon Fire and Lightning Orbs on gun and melee kills respectively.",
                "Kill Skill: Further increased chance to summon Fire and Lightning Orbs on gun and melee kills respectively."
              ]
            },
            {
              id: "clawbringer_fire_bolt",
              name: "Fire Bolt",
              tier: 4,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increases gun damage; your Wyvern Companion occasionally fires bolts of fire at enemies.",
              ranks: [
                "Increase Gun Damage by 3%. Your Wyvern Companion occasionally shoots a Fire Bolt at an enemy, dealing Fire Damage.",
                "Increase Gun Damage by 6%. Increased frequency of Wyvern Fire Bolts.",
                "Increase Gun Damage by 9%. Increased frequency of Wyvern Fire Bolts.",
                "Increase Gun Damage by 12%. Increased frequency of Wyvern Fire Bolts.",
                "Increase Gun Damage by 15%. Increased frequency of Wyvern Fire Bolts."
              ]
            },
            {
              id: "clawbringer_friend_to_flame",
              name: "Friend To Flame",
              tier: 4,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increases your Wyvern Companion's damage.",
              ranks: [
                "Wyvern Companion deals 8% increased damage.",
                "Wyvern Companion deals 16% increased damage.",
                "Wyvern Companion deals 24% increased damage.",
                "Wyvern Companion deals 32% increased damage.",
                "Wyvern Companion deals 40% increased damage."
              ]
            },
            {
              id: "clawbringer_storm_breath",
              name: "Storm Breath",
              tier: 4,
              col: 2,
              maxPoints: 1,
              type: "passive",
              description: "Increases damage reduction; your Wyvern Companion occasionally uses a Lightning Breath attack that arcs between enemies.",
              ranks: [
                "Gain increased Damage Reduction. Your Wyvern Companion occasionally breathes a bolt of Lightning damage that arcs from enemy to enemy."
              ]
            },
            {
              id: "clawbringer_awe",
              name: "AWE",
              tier: 5,
              col: 0,
              maxPoints: 3,
              type: "passive",
              description: "Dealing Fire Damage increases your Critical Hit Damage; dealing Lightning Damage increases your Critical Hit Chance.",
              ranks: [
                "Dealing Fire Damage grants a stacking buff that increases Critical Hit Damage. Dealing Lightning Damage grants a stacking buff that increases Critical Hit Chance.",
                "Increased Critical Hit Damage and Critical Hit Chance bonuses from Fire and Lightning Damage respectively.",
                "Further increased Critical Hit Damage and Critical Hit Chance bonuses from Fire and Lightning Damage respectively."
              ]
            },
            {
              id: "clawbringer_indomitable",
              name: "Indomitable",
              tier: 5,
              col: 1,
              maxPoints: 1,
              type: "passive",
              description: "When you would be downed, instead refill your Ward and deal Bonus Lightning Damage for a short time.",
              ranks: [
                "The first time you would be downed, instead fully refill your Ward and gain Bonus Lightning Damage with all damage sources for a short duration. Has a long cooldown before it can trigger again."
              ]
            },
            {
              id: "clawbringer_storm_smite",
              name: "Storm Smite",
              tier: 5,
              col: 2,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: activating an Action Skill calls down elemental bolts that strike all enemies on screen with Fire or Lightning Damage.",
              ranks: [
                "Activating an Action Skill calls down a barrage of elemental bolts, striking all nearby enemies with either Fire or Lightning Ability Damage."
              ]
            }
          ]
        }
      ]
    },

    /* ===================== GRAVEBORN ===================== */
    {
      id: "graveborn",
      name: "Graveborn",
      title: "",
      trees: [
        {
          id: "graveborn_tree",
          name: "Graveborn",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "graveborn_action_skill",
              name: "Dire Sacrifice / Reaper of Bones",
              tier: 0,
              col: 0,
              maxPoints: 1,
              type: "action",
              description: "Action Skills: sacrifice your own Health for a burst of Dark Magic damage, or empower yourself with Dark Magic and Leech at the cost of draining Health over time.",
              ranks: [
                "Dire Sacrifice: Sacrifice 40% of your Current Health to deal a burst of Dark Magic Damage and apply Dark Magic Status Effects to all nearby enemies; deals bonus damage proportional to the Health sacrificed. Reaper of Bones: Fully heal yourself, gain increased Leech efficiency, and deal Bonus Dark Magic Damage with all damage sources for a duration, but lose an ever-increasing amount of Health per second while it is active. Your Class Feat, Demi-Lich Companion, grants a floating Demi-Lich that targets enemies at range with Dark Magic Damage; whenever you cast a Spell, the Demi-Lich also casts Hellish Blast, a homing projectile of your Spell's element that damages nearby enemies on impact."
              ]
            },
            {
              id: "graveborn_mortal_vessel",
              name: "Mortal Vessel",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increases maximum Health and Leech efficiency.",
              ranks: [
                "Increase Max Health and Leech Efficiency by 3%.",
                "Increase Max Health and Leech Efficiency by 6%.",
                "Increase Max Health and Leech Efficiency by 9%.",
                "Increase Max Health and Leech Efficiency by 12%.",
                "Increase Max Health and Leech Efficiency by 15%."
              ]
            },
            {
              id: "graveborn_essence_drain",
              name: "Essence Drain",
              tier: 1,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Kill Skill: killing an enemy increases your Spell Cooldown Speed for a short time.",
              ranks: [
                "Kill Skill: Killing an enemy grants 5% increased Spell Cooldown Speed for 12 seconds.",
                "Kill Skill: Killing an enemy grants 10% increased Spell Cooldown Speed for 12 seconds.",
                "Kill Skill: Killing an enemy grants 15% increased Spell Cooldown Speed for 12 seconds.",
                "Kill Skill: Killing an enemy grants 20% increased Spell Cooldown Speed for 12 seconds.",
                "Kill Skill: Killing an enemy grants 25% increased Spell Cooldown Speed for 12 seconds."
              ]
            },
            {
              id: "graveborn_faithful_thralls",
              name: "Faithful Thralls",
              tier: 1,
              col: 2,
              maxPoints: 3,
              type: "passive",
              description: "Deal bonus damage for each companion you have active, and your companions respawn faster after dying.",
              ranks: [
                "Deal 3% Bonus Damage for each active companion and increase companion respawn rate by 15%.",
                "Deal 6% Bonus Damage for each active companion and increase companion respawn rate by 30%.",
                "Deal 9% Bonus Damage for each active companion and increase companion respawn rate by 45%."
              ]
            },
            {
              id: "graveborn_sanguine_sacrament",
              name: "Sanguine Sacrament",
              tier: 2,
              col: 0,
              maxPoints: 3,
              type: "passive",
              description: "Regenerate Health whenever you cast a Spell.",
              ranks: [
                "Casting a Spell regenerates 2% of your missing Health.",
                "Casting a Spell regenerates 4% of your missing Health.",
                "Casting a Spell regenerates 6% of your missing Health."
              ]
            },
            {
              id: "graveborn_dark_pact",
              name: "Dark Pact",
              tier: 2,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increases your Dark Magic Damage.",
              ranks: [
                "Increase Dark Magic Damage by 4%.",
                "Increase Dark Magic Damage by 8%.",
                "Increase Dark Magic Damage by 12%.",
                "Increase Dark Magic Damage by 16%.",
                "Increase Dark Magic Damage by 20%."
              ]
            },
            {
              id: "graveborn_harvest",
              name: "Harvest",
              tier: 2,
              col: 2,
              maxPoints: 3,
              type: "passive",
              description: "Whenever you get a kill, your companions deal Bonus Dark Magic Damage for a time.",
              ranks: [
                "Killing an enemy grants your companions 8% Bonus Dark Magic Damage for a short duration.",
                "Killing an enemy grants your companions 16% Bonus Dark Magic Damage for a short duration.",
                "Killing an enemy grants your companions 24% Bonus Dark Magic Damage for a short duration."
              ]
            },
            {
              id: "graveborn_dread_covenant",
              name: "Dread Covenant",
              tier: 3,
              col: 0,
              maxPoints: 1,
              type: "passive",
              description: "Redirects a portion of damage you take to your Demi-Lich; if you would die, the Demi-Lich dies in your place instead.",
              ranks: [
                "A portion of damage you take is redirected to your Demi-Lich Companion instead. If you would reach zero Health while your Demi-Lich is active, it is destroyed and you survive at a small amount of Health instead."
              ]
            },
            {
              id: "graveborn_stain_of_the_soul",
              name: "Stain of the Soul",
              tier: 3,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Your Spells deal Bonus Dark Magic Damage.",
              ranks: [
                "Spells deal 4% Bonus Dark Magic Damage.",
                "Spells deal 8% Bonus Dark Magic Damage.",
                "Spells deal 12% Bonus Dark Magic Damage.",
                "Spells deal 16% Bonus Dark Magic Damage.",
                "Spells deal 20% Bonus Dark Magic Damage."
              ]
            },
            {
              id: "graveborn_dark_hydra",
              name: "Dark Hydra",
              tier: 3,
              col: 2,
              maxPoints: 3,
              type: "passive",
              description: "After getting a kill, you have a chance to summon a temporary Dark Hydra companion that deals Dark Magic Damage to enemies.",
              ranks: [
                "Killing an enemy has a 10% chance to summon a Dark Hydra that attacks enemies with Dark Magic Damage for a short time.",
                "Killing an enemy has a 20% chance to summon a Dark Hydra that attacks enemies with Dark Magic Damage for a short time.",
                "Killing an enemy has a 30% chance to summon a Dark Hydra that attacks enemies with Dark Magic Damage for a short time."
              ]
            },
            {
              id: "graveborn_ascension",
              name: "Ascension",
              tier: 4,
              col: 0,
              maxPoints: 3,
              type: "passive",
              description: "After getting a kill, gain increased maximum Health and Spell Damage for a long duration; this buff can stack.",
              ranks: [
                "Killing an enemy grants a stacking buff for a long duration that increases Max Health and Spell Damage by 3% per stack.",
                "Killing an enemy grants a stacking buff for a long duration that increases Max Health and Spell Damage by 6% per stack.",
                "Killing an enemy grants a stacking buff for a long duration that increases Max Health and Spell Damage by 9% per stack."
              ]
            },
            {
              id: "graveborn_punishment",
              name: "Punishment",
              tier: 4,
              col: 1,
              maxPoints: 1,
              type: "passive",
              description: "When your Demi-Lich casts Hellish Blast, it has a chance to immediately cast it again.",
              ranks: [
                "Whenever your Demi-Lich Companion casts Hellish Blast, it has a chance to cast Hellish Blast a second time immediately afterward."
              ]
            },
            {
              id: "graveborn_lord_of_edges",
              name: "Lord of Edges",
              tier: 5,
              col: 0,
              maxPoints: 1,
              type: "passive",
              description: "Gain increased damage dealt and damage reduction the lower your current Health is.",
              ranks: [
                "Gain increased Damage Dealt and Damage Reduction that scales up the lower your current Health percentage is, reaching its maximum effect at critically low Health."
              ]
            },
            {
              id: "graveborn_blast_gasp",
              name: "Blast Gasp",
              tier: 5,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Dealing Spell Damage has a chance to create an elemental explosion of the same element, dealing Ability Damage. This explosion cannot critically hit.",
              ranks: [
                "Dealing Spell Damage has a 4% chance to create an elemental explosion of the Spell's element, dealing Ability Damage. Cannot critically hit.",
                "Dealing Spell Damage has an 8% chance to create an elemental explosion of the Spell's element, dealing Ability Damage. Cannot critically hit.",
                "Dealing Spell Damage has a 12% chance to create an elemental explosion of the Spell's element, dealing Ability Damage. Cannot critically hit.",
                "Dealing Spell Damage has a 16% chance to create an elemental explosion of the Spell's element, dealing Ability Damage. Cannot critically hit.",
                "Dealing Spell Damage has a 20% chance to create an elemental explosion of the Spell's element, dealing Ability Damage. Cannot critically hit."
              ]
            },
            {
              id: "graveborn_morhaims_blessing",
              name: "Morhaim's Blessing",
              tier: 5,
              col: 2,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: casting a Spell triggers all of your skills that normally trigger on a kill.",
              ranks: [
                "Casting a Spell triggers all skills that are normally triggered by getting a kill, in addition to their normal kill triggers."
              ]
            }
          ]
        }
      ]
    },

    /* ===================== SPELLSHOT ===================== */
    {
      id: "spellshot",
      name: "Spellshot",
      title: "",
      trees: [
        {
          id: "spellshot_tree",
          name: "Spellshot",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "spellshot_action_skill",
              name: "Ambi-Hextrous / Polymorph",
              tier: 0,
              col: 0,
              maxPoints: 1,
              type: "action",
              description: "Action Skills: equip a Spell into your Action Skill slot for an extra cast, or transform an enemy into a harmless Skeep.",
              ranks: [
                "Ambi-Hextrous: Equip a second Spell into your Action Skill slot, allowing you to cast it in addition to your normal Spell slot. Polymorph: Turn a targeted enemy into a Skeep for several seconds, rendering it harmless. If the enemy is immune to Polymorph, you instead instantly cast a free Spell on them and gain two stacks of Spellweaving. While an enemy is Polymorphed, anyone who damages the Skeep has a chance to cast a free Spell. Your Class Feat, Spellweaving, grants a stack of Spell Damage whenever you cast a Spell or reload a weapon."
              ]
            },
            {
              id: "spellshot_spell_sniper",
              name: "Spell Sniper",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increases your Spell Critical Hit Chance.",
              ranks: [
                "Increase Spell Critical Hit Chance by 4%.",
                "Increase Spell Critical Hit Chance by 8%.",
                "Increase Spell Critical Hit Chance by 12%.",
                "Increase Spell Critical Hit Chance by 16%.",
                "Increase Spell Critical Hit Chance by 20%."
              ]
            },
            {
              id: "spellshot_magic_bullets",
              name: "Magic Bullets",
              tier: 1,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "A portion of bonus damage that applies to your Spells also applies to your gun damage.",
              ranks: [
                "20% of bonus Spell Damage modifiers also apply to Gun Damage.",
                "40% of bonus Spell Damage modifiers also apply to Gun Damage.",
                "60% of bonus Spell Damage modifiers also apply to Gun Damage.",
                "80% of bonus Spell Damage modifiers also apply to Gun Damage.",
                "100% of bonus Spell Damage modifiers also apply to Gun Damage."
              ]
            },
            {
              id: "spellshot_prestidigitation",
              name: "Prestidigitation",
              tier: 1,
              col: 2,
              maxPoints: 3,
              type: "passive",
              description: "Increases reload speed for all of your guns.",
              ranks: [
                "Increase Reload Speed by 6%.",
                "Increase Reload Speed by 12%.",
                "Increase Reload Speed by 18%."
              ]
            },
            {
              id: "spellshot_font_of_mana",
              name: "Font of Mana",
              tier: 2,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Improves the recharge time of your Spells and Action Skill.",
              ranks: [
                "Increase Spell and Action Skill Cooldown Rate by 4%.",
                "Increase Spell and Action Skill Cooldown Rate by 8%.",
                "Increase Spell and Action Skill Cooldown Rate by 12%.",
                "Increase Spell and Action Skill Cooldown Rate by 16%.",
                "Increase Spell and Action Skill Cooldown Rate by 20%."
              ]
            },
            {
              id: "spellshot_just_warming_up",
              name: "Just Warming Up",
              tier: 2,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increases weapon Fire Rate for each stack of Spellweaving you have.",
              ranks: [
                "Gain 1% increased Fire Rate per stack of Spellweaving.",
                "Gain 2% increased Fire Rate per stack of Spellweaving.",
                "Gain 3% increased Fire Rate per stack of Spellweaving.",
                "Gain 4% increased Fire Rate per stack of Spellweaving.",
                "Gain 5% increased Fire Rate per stack of Spellweaving."
              ]
            },
            {
              id: "spellshot_mage_armor",
              name: "Mage Armor",
              tier: 2,
              col: 2,
              maxPoints: 3,
              type: "passive",
              description: "Regenerate a portion of your Ward each time you gain a stack of Spellweaving.",
              ranks: [
                "Gaining a stack of Spellweaving regenerates 2% of your Max Ward.",
                "Gaining a stack of Spellweaving regenerates 4% of your Max Ward.",
                "Gaining a stack of Spellweaving regenerates 6% of your Max Ward."
              ]
            },
            {
              id: "spellshot_glass_cannon",
              name: "Glass Cannon",
              tier: 3,
              col: 1,
              maxPoints: 3,
              type: "passive",
              description: "Your Ward no longer regenerates, but your Spell Damage is greatly increased.",
              ranks: [
                "Ward Regeneration is disabled. Increase Spell Damage by 10%.",
                "Ward Regeneration is disabled. Increase Spell Damage by 20%.",
                "Ward Regeneration is disabled. Increase Spell Damage by 30%."
              ]
            },
            {
              id: "spellshot_high_thread_count",
              name: "High Thread Count",
              tier: 4,
              col: 0,
              maxPoints: 3,
              type: "passive",
              description: "Increases your maximum number of Spellweaving stacks.",
              ranks: [
                "Increase Max Spellweaving Stacks by 3.",
                "Increase Max Spellweaving Stacks by 6.",
                "Increase Max Spellweaving Stacks by 9."
              ]
            },
            {
              id: "spellshot_war_caster",
              name: "War Caster",
              tier: 4,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Kill Skill: killing an enemy has a chance to instantly reload your equipped weapon; chance increases with each Spellweaving stack.",
              ranks: [
                "Kill Skill: 4% chance to instantly reload your weapon on a kill, increased per stack of Spellweaving.",
                "Kill Skill: 8% chance to instantly reload your weapon on a kill, increased per stack of Spellweaving.",
                "Kill Skill: 12% chance to instantly reload your weapon on a kill, increased per stack of Spellweaving.",
                "Kill Skill: 16% chance to instantly reload your weapon on a kill, increased per stack of Spellweaving.",
                "Kill Skill: 20% chance to instantly reload your weapon on a kill, increased per stack of Spellweaving."
              ]
            },
            {
              id: "spellshot_imbued_weapon",
              name: "Imbued Weapon",
              tier: 4,
              col: 2,
              maxPoints: 1,
              type: "passive",
              description: "Casting a Spell causes your guns to deal Bonus Damage of the Spell's element for a short time.",
              ranks: [
                "Casting a Spell imbues your guns with the Spell's element, dealing Bonus Elemental Damage of that type with gunfire for a short duration."
              ]
            },
            {
              id: "spellshot_double_knot",
              name: "Double Knot",
              tier: 5,
              col: 0,
              maxPoints: 1,
              type: "passive",
              description: "Spell Critical Hits deal Bonus Damage equal to your equipped gun's element.",
              ranks: [
                "When a Spell lands a Critical Hit, deal additional Bonus Damage of your currently equipped gun's element."
              ]
            },
            {
              id: "spellshot_one_slot_one_kill",
              name: "One Slot, One Kill",
              tier: 5,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increases Gun Damage for each stack of Spellweaving you have.",
              ranks: [
                "Gain 1% increased Gun Damage per stack of Spellweaving.",
                "Gain 2% increased Gun Damage per stack of Spellweaving.",
                "Gain 3% increased Gun Damage per stack of Spellweaving.",
                "Gain 4% increased Gun Damage per stack of Spellweaving.",
                "Gain 5% increased Gun Damage per stack of Spellweaving."
              ]
            },
            {
              id: "spellshot_sever_the_thread",
              name: "Sever The Thread",
              tier: 5,
              col: 2,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Gun Critical Hits have a chance to reset the cooldowns of all your Spells.",
              ranks: [
                "Critical Hits with guns have a chance to instantly reset the cooldowns of all of your equipped Spells."
              ]
            }
          ]
        }
      ]
    },

    /* ===================== SPORE WARDEN ===================== */
    {
      id: "sporewarden",
      name: "Spore Warden",
      title: "",
      trees: [
        {
          id: "sporewarden_tree",
          name: "Spore Warden",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "sporewarden_action_skill",
              name: "Barrage / Cyclone",
              tier: 0,
              col: 0,
              maxPoints: 1,
              type: "action",
              description: "Action Skills: summon an Ethereal Bow to fire ricocheting arrows, or conjure Frost Cyclones that seek out enemies.",
              ranks: [
                "Barrage: Summon an Ethereal Bow and fire 7 arrows that deal Ability Damage on impact; arrows ricochet up to twice between nearby enemies. Has multiple charges. Cyclone: Create 3 Frost Cyclones that seek out nearby enemies for a duration, dealing Frost Ability Damage over time to anything they touch. Your Class Feat, Mushroom Companion, grants a Mushroom Companion that targets nearby enemies and deals Poison Damage; pinging an enemy causes your Mushroom Companion to lunge at them."
              ]
            },
            {
              id: "sporewarden_kindred_heart",
              name: "Kindred Heart",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increases the damage and maximum Health of your companions.",
              ranks: [
                "Increase companion Damage and Max Health by 4%.",
                "Increase companion Damage and Max Health by 8%.",
                "Increase companion Damage and Max Health by 12%.",
                "Increase companion Damage and Max Health by 16%.",
                "Increase companion Damage and Max Health by 20%."
              ]
            },
            {
              id: "sporewarden_eagle_eye",
              name: "Eagle Eye",
              tier: 1,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increases Gun Damage and gun handling.",
              ranks: [
                "Increase Gun Damage and Gun Accuracy/Handling by 4%.",
                "Increase Gun Damage and Gun Accuracy/Handling by 8%.",
                "Increase Gun Damage and Gun Accuracy/Handling by 12%.",
                "Increase Gun Damage and Gun Accuracy/Handling by 16%.",
                "Increase Gun Damage and Gun Accuracy/Handling by 20%."
              ]
            },
            {
              id: "sporewarden_affinity",
              name: "Affinity",
              tier: 2,
              col: 0,
              maxPoints: 4,
              type: "passive",
              description: "Increases your Ability Damage.",
              ranks: [
                "Increase Ability Damage by 5%.",
                "Increase Ability Damage by 10%.",
                "Increase Ability Damage by 15%.",
                "Increase Ability Damage by 20%."
              ]
            },
            {
              id: "sporewarden_spore_cloud",
              name: "Spore Cloud",
              tier: 2,
              col: 1,
              maxPoints: 3,
              type: "passive",
              description: "Your Mushroom Companion occasionally taunts enemies and leaves behind a Poison Cloud that deals damage over time.",
              ranks: [
                "Mushroom Companion occasionally Taunts a nearby enemy and leaves a Poison Cloud dealing Poison Damage over time.",
                "Increased frequency of Taunt and a larger, longer-lasting Poison Cloud.",
                "Further increased frequency of Taunt and an even larger, longer-lasting Poison Cloud."
              ]
            },
            {
              id: "sporewarden_bullseye",
              name: "Bullseye",
              tier: 2,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Increases Critical Hit Chance for your guns and companions.",
              ranks: [
                "Increase Gun and Companion Critical Hit Chance by 4%.",
                "Increase Gun and Companion Critical Hit Chance by 8%.",
                "Increase Gun and Companion Critical Hit Chance by 12%.",
                "Increase Gun and Companion Critical Hit Chance by 16%.",
                "Increase Gun and Companion Critical Hit Chance by 20%."
              ]
            },
            {
              id: "sporewarden_quiver_of_holding",
              name: "Quiver of Holding",
              tier: 3,
              col: 0,
              maxPoints: 3,
              type: "passive",
              description: "Regenerate ammo for your equipped weapon and increase its magazine size.",
              ranks: [
                "Regenerate 2% of max ammo per second for your equipped weapon and increase its Magazine Size by 6%.",
                "Regenerate 4% of max ammo per second for your equipped weapon and increase its Magazine Size by 12%.",
                "Regenerate 6% of max ammo per second for your equipped weapon and increase its Magazine Size by 18%."
              ]
            },
            {
              id: "sporewarden_medicinal_mushroom",
              name: "Medicinal Mushroom",
              tier: 3,
              col: 1,
              maxPoints: 1,
              type: "passive",
              description: "While in Save Your Soul, your Mushroom Companion can revive you.",
              ranks: [
                "While in Save Your Soul, your Mushroom Companion will rush to your side and has a chance to fully revive you."
              ]
            },
            {
              id: "sporewarden_windrunner",
              name: "Windrunner",
              tier: 3,
              col: 2,
              maxPoints: 3,
              type: "passive",
              description: "Kill Skill: gain increased Movement Speed and Fire Rate on a kill; this effect can stack.",
              ranks: [
                "Kill Skill: Killing an enemy grants a stacking buff of 4% Movement Speed and 4% Fire Rate for a short duration.",
                "Kill Skill: Killing an enemy grants a stacking buff of 8% Movement Speed and 8% Fire Rate for a short duration.",
                "Kill Skill: Killing an enemy grants a stacking buff of 12% Movement Speed and 12% Fire Rate for a short duration."
              ]
            },
            {
              id: "sporewarden_thrill_of_the_hunt",
              name: "Thrill Of The Hunt",
              tier: 4,
              col: 0,
              maxPoints: 3,
              type: "passive",
              description: "Gun Critical Hits grant your companions a stacking Bonus Damage buff.",
              ranks: [
                "Landing a Gun Critical Hit grants companions a stack of 5% Bonus Damage for a short duration, stacking up to several times.",
                "Landing a Gun Critical Hit grants companions a stack of 10% Bonus Damage for a short duration, stacking up to several times.",
                "Landing a Gun Critical Hit grants companions a stack of 15% Bonus Damage for a short duration, stacking up to several times."
              ]
            },
            {
              id: "sporewarden_called_shot",
              name: "Called Shot",
              tier: 4,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Gain increasing Gun Damage and Damage Reduction the longer you are aiming down sights.",
              ranks: [
                "While aiming down sights, gain up to 4% Gun Damage and 4% Damage Reduction, increasing the longer you aim.",
                "While aiming down sights, gain up to 8% Gun Damage and 8% Damage Reduction, increasing the longer you aim.",
                "While aiming down sights, gain up to 12% Gun Damage and 12% Damage Reduction, increasing the longer you aim.",
                "While aiming down sights, gain up to 16% Gun Damage and 16% Damage Reduction, increasing the longer you aim.",
                "While aiming down sights, gain up to 20% Gun Damage and 20% Damage Reduction, increasing the longer you aim."
              ]
            },
            {
              id: "sporewarden_wrath_of_nature",
              name: "Wrath of Nature",
              tier: 5,
              col: 1,
              maxPoints: 1,
              type: "passive",
              description: "Enemies take increased damage from all sources for a short time after taking Ability Damage.",
              ranks: [
                "Whenever an enemy takes Ability Damage, they take increased damage from all sources for a short duration afterward."
              ]
            },
            {
              id: "sporewarden_play_the_angles",
              name: "Play The Angles",
              tier: 5,
              col: 2,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Critical Hits have a chance to ricochet to another enemy, dealing reduced Ability Damage; ricocheted shots can chain further.",
              ranks: [
                "Critical Hits have a chance to ricochet to a nearby enemy, dealing reduced Ability Damage. Ricocheted shots have a chance to ricochet again, chaining between multiple enemies."
              ]
            }
          ]
        }
      ]
    },

    /* ===================== STABBOMANCER ===================== */
    {
      id: "stabbomancer",
      name: "Stabbomancer",
      title: "",
      trees: [
        {
          id: "stabbomancer_tree",
          name: "Stabbomancer",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "stabbomancer_action_skill",
              name: "Ghost Blade / From the Shadows",
              tier: 0,
              col: 0,
              maxPoints: 1,
              type: "action",
              description: "Action Skills: summon a spinning Ghost Blade that periodically slashes nearby enemies, or vanish into Stealth where all damage you deal becomes a guaranteed (but weaker) Critical Hit.",
              ranks: [
                "Ghost Blade: Throw out a Ghost Blade that spins in place, periodically dealing Melee Damage to nearby enemies based on your equipped melee weapon. Pressing the Action Skill button again teleports the blade to your targeted location and reduces its remaining duration slightly. From the Shadows: Enter Stealth, turning invisible; while Stealthed, all damage you deal is automatically a Critical Hit, but Critical Hit Damage is reduced. Your Class Feat increases your base Critical Hit Chance by 30%."
              ]
            },
            {
              id: "stabbomancer_arsenal",
              name: "Arsenal",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increases Melee Damage, Spell Damage, and Gun Damage.",
              ranks: [
                "Increase Melee, Spell, and Gun Damage by 3%.",
                "Increase Melee, Spell, and Gun Damage by 6%.",
                "Increase Melee, Spell, and Gun Damage by 9%.",
                "Increase Melee, Spell, and Gun Damage by 12%.",
                "Increase Melee, Spell, and Gun Damage by 15%."
              ]
            },
            {
              id: "stabbomancer_haste",
              name: "Haste",
              tier: 1,
              col: 1,
              maxPoints: 3,
              type: "passive",
              description: "Increases Melee Attack Speed and Movement Speed; the bonus is doubled for a short time after casting a Spell.",
              ranks: [
                "Increase Melee Attack Speed and Movement Speed by 3%, doubled for a few seconds after casting a Spell.",
                "Increase Melee Attack Speed and Movement Speed by 6%, doubled for a few seconds after casting a Spell.",
                "Increase Melee Attack Speed and Movement Speed by 9%, doubled for a few seconds after casting a Spell."
              ]
            },
            {
              id: "stabbomancer_potent_poisons",
              name: "Potent Poisons",
              tier: 1,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Increases Status Effect Damage and Status Effect Duration.",
              ranks: [
                "Increase Status Effect Damage by 4% and Status Effect Duration by 8%.",
                "Increase Status Effect Damage by 8% and Status Effect Duration by 16%.",
                "Increase Status Effect Damage by 12% and Status Effect Duration by 24%.",
                "Increase Status Effect Damage by 16% and Status Effect Duration by 32%.",
                "Increase Status Effect Damage by 20% and Status Effect Duration by 40%."
              ]
            },
            {
              id: "stabbomancer_follow_up",
              name: "Follow Up",
              tier: 2,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increases follow-up melee attack damage after dealing Gun Damage.",
              ranks: [
                "Dealing Gun Damage increases your next Melee Damage by 8% for a short time.",
                "Dealing Gun Damage increases your next Melee Damage by 16% for a short time.",
                "Dealing Gun Damage increases your next Melee Damage by 24% for a short time.",
                "Dealing Gun Damage increases your next Melee Damage by 32% for a short time.",
                "Dealing Gun Damage increases your next Melee Damage by 40% for a short time."
              ]
            },
            {
              id: "stabbomancer_swift_death",
              name: "Swift Death",
              tier: 2,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "While moving, gain increased Damage; the faster you move, the greater the bonus.",
              ranks: [
                "While moving, gain up to 4% increased Damage, scaling with Movement Speed.",
                "While moving, gain up to 8% increased Damage, scaling with Movement Speed.",
                "While moving, gain up to 12% increased Damage, scaling with Movement Speed.",
                "While moving, gain up to 16% increased Damage, scaling with Movement Speed.",
                "While moving, gain up to 20% increased Damage, scaling with Movement Speed."
              ]
            },
            {
              id: "stabbomancer_exploit_their_weakness",
              name: "Exploit Their Weakness",
              tier: 2,
              col: 2,
              maxPoints: 3,
              type: "passive",
              description: "Enemies take bonus damage from all sources when you apply a Status Effect to them.",
              ranks: [
                "Applying a Status Effect causes the enemy to take 4% increased damage from all sources for a short time.",
                "Applying a Status Effect causes the enemy to take 8% increased damage from all sources for a short time.",
                "Applying a Status Effect causes the enemy to take 12% increased damage from all sources for a short time."
              ]
            },
            {
              id: "stabbomancer_nimble_fingers",
              name: "Nimble Fingers",
              tier: 3,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Dealing Melee Damage grants increased Fire Rate and Spell Damage for a short time.",
              ranks: [
                "Dealing Melee Damage grants 4% increased Fire Rate and Spell Damage for a short time.",
                "Dealing Melee Damage grants 8% increased Fire Rate and Spell Damage for a short time.",
                "Dealing Melee Damage grants 12% increased Fire Rate and Spell Damage for a short time.",
                "Dealing Melee Damage grants 16% increased Fire Rate and Spell Damage for a short time.",
                "Dealing Melee Damage grants 20% increased Fire Rate and Spell Damage for a short time."
              ]
            },
            {
              id: "stabbomancer_shadow_step",
              name: "Shadow Step",
              tier: 3,
              col: 1,
              maxPoints: 1,
              type: "passive",
              description: "After getting a kill, your next melee attack is guaranteed to be a Critical Hit.",
              ranks: [
                "Getting a kill guarantees that your next Melee Damage instance will be a Critical Hit."
              ]
            },
            {
              id: "stabbomancer_sneak_attack",
              name: "Sneak Attack",
              tier: 3,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Increases your Critical Hit Damage.",
              ranks: [
                "Increase Critical Hit Damage by 6%.",
                "Increase Critical Hit Damage by 12%.",
                "Increase Critical Hit Damage by 18%.",
                "Increase Critical Hit Damage by 24%.",
                "Increase Critical Hit Damage by 30%."
              ]
            },
            {
              id: "stabbomancer_contagion",
              name: "Contagion",
              tier: 4,
              col: 1,
              maxPoints: 3,
              type: "passive",
              description: "Status Effects can spread from an afflicted enemy to nearby enemies; if there are none to spread to, a random Status Effect is inflicted instead.",
              ranks: [
                "Status Effects have a chance to spread to a nearby enemy when triggered. If there are no other enemies nearby, inflict a random Status Effect on the original target instead.",
                "Increased chance for Status Effects to spread to nearby enemies.",
                "Further increased chance for Status Effects to spread to nearby enemies."
              ]
            },
            {
              id: "stabbomancer_executioners_blade",
              name: "Executioner's Blade",
              tier: 5,
              col: 1,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Gun and Spell Critical Hits have a chance to spawn an ethereal blade above the enemy that impales them for Melee Damage.",
              ranks: [
                "Critical Hits with guns and Spells have a chance to summon an ethereal blade that drops on the enemy and impales them, dealing Melee Damage based on your equipped melee weapon."
              ]
            }
          ]
        }
      ]
    }
  ]
};
