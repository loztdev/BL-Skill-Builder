/* Borderlands 4 (2025) skill data.
 * Compiled from web research (WebSearch result snippets pulled from Lootlemon,
 * Borderlands Fandom Wiki, Game8, Mobalytics, Maxroll, PCGamer, IcyVeins, Deltia's
 * Gaming, KeenGamer, GamesRadar, Sportskeeda and the official 2K Vault Hunter pages)
 * because direct WebFetch access to all of those domains returned HTTP 403 in this
 * environment. Tree names, action skills, and many passive/augment/capstone names
 * are corroborated across multiple independent sources. Exact per-rank numeric
 * scaling was only publicly available (via search snippets) for a handful of
 * skills (e.g. Bloodletter, Leeching Attunement, Prismatic Ichor, Keep Ice On
 * That). For the rest, ranks describe the documented effect and note that it
 * scales/improves with each rank, without inventing precise numbers that were
 * not found in sourced material. See the final task report for a full list of
 * skills with solid vs. uncertain data.
 */
window.BL_DATA = window.BL_DATA || {};
window.BL_DATA.bl4 = {
  gameId: "bl4",
  gameName: "Borderlands 4",
  characters: [
    /* ===================== VEX — THE SIREN ===================== */
    {
      id: "vex",
      name: "Vex",
      title: "The Siren",
      trees: [
        {
          id: "vex_phase_phamiliar",
          name: "Here Comes Trouble (Phase Phamiliar)",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "vex_phase_phamiliar_action",
              name: "Phase Phamiliar",
              tier: 0,
              col: 1,
              maxPoints: 1,
              type: "action",
              description: "Action Skill: Vex is joined by her Minion, Trouble.",
              ranks: [
                "Vex is joined by her Minion, Trouble, which fights alongside her. If Trouble is defeated it automatically respawns after a short cooldown. Press the Action Skill button to teleport Trouble to a target location, dealing area damage on arrival; after teleporting, Trouble transforms into a Badass, fully restoring its Health and gaining increased Damage for a short Duration."
              ]
            },
            {
              id: "vex_infusion",
              name: "Infusion",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Bonus damage on repkit use, elemental type based on Attunement.",
              ranks: [
                "Rank 1: You and Trouble gain a small bonus to Gun and Melee Damage whenever you use a Repkit. The elemental type of this bonus damage is based on your current Attunement.",
                "Rank 2: The bonus Gun and Melee Damage from using a Repkit is increased.",
                "Rank 3: The bonus Gun and Melee Damage from using a Repkit is increased further.",
                "Rank 4: The bonus Gun and Melee Damage from using a Repkit is increased further still.",
                "Rank 5: The bonus Gun and Melee Damage from using a Repkit reaches its maximum value, and the bonus duration is extended."
              ]
            },
            {
              id: "vex_blink_strike",
              name: "Blink Strike",
              tier: 2,
              col: 0,
              maxPoints: 1,
              type: "augment",
              description: "Command Skill: Trouble blinks to and strikes a target.",
              ranks: [
                "Command Skill: Press and hold Action Skill to command Trouble to teleport to and Critically Strike your target enemy. This attack automatically Critically Hits against enemies under 50% Health."
              ]
            },
            {
              id: "vex_violent_outburst",
              name: "Violent Outburst",
              tier: 2,
              col: 2,
              maxPoints: 1,
              type: "augment",
              description: "Command Skill: Trouble explodes for area damage.",
              ranks: [
                "Command Skill: Press and hold Action Skill to command Trouble to detonate in a violent explosion, dealing damage to all enemies in the surrounding area."
              ]
            },
            {
              id: "vex_beast_mode",
              name: "Beast Mode",
              tier: 3,
              col: 0,
              maxPoints: 1,
              type: "augment",
              description: "Command Skill: Trouble becomes immune and faster.",
              ranks: [
                "Command Skill: Press and hold Action Skill to command Trouble to enter Beast Mode, becoming immune to Damage and gaining increased Minion Attack Speed and Movement Speed for a Duration."
              ]
            },
            {
              id: "vex_hexus_nexus",
              name: "Hexus Nexus",
              tier: 4,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Trouble taunts and can charge targets.",
              ranks: [
                "Rank 1: Trouble gains a chance to Taunt enemies it damages, and can charge toward distant targets to engage them.",
                "Rank 2: Increased chance to Taunt; charge range increased.",
                "Rank 3: Increased chance to Taunt; charge range increased further.",
                "Rank 4: Increased chance to Taunt; charge speed increased.",
                "Rank 5: Trouble's Taunt chance and charge effectiveness reach their maximum."
              ]
            },
            {
              id: "vex_vorpal_fang",
              name: "Vorpal Fang",
              tier: 4,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Trouble gains a chance to Critically Hit with all attacks.",
              ranks: [
                "Rank 1: Trouble gains a small chance to Critically Hit with all of its attacks.",
                "Rank 2: Trouble's Critical Hit chance is increased.",
                "Rank 3: Trouble's Critical Hit chance is increased further.",
                "Rank 4: Trouble's Critical Hit chance is increased further still.",
                "Rank 5: Trouble's Critical Hit chance reaches its maximum value."
              ]
            },
            {
              id: "vex_ghast_blaster",
              name: "Ghast Blaster",
              tier: 5,
              col: 1,
              maxPoints: 1,
              type: "augment",
              description: "Trouble gains a ranged spectral attack.",
              ranks: [
                "Augment: Trouble gains a ranged spectral blast attack it periodically unleashes on enemies, dealing additional damage at range in addition to its normal attacks."
              ]
            },
            {
              id: "vex_double_trouble",
              name: "Double Trouble",
              tier: 6,
              col: 0,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Trouble creates illusions of itself.",
              ranks: [
                "Capstone: Trouble gains a chance to create an illusion of itself near an enemy, helping to overwhelm foes; Critical Hits double this chance. While Phase Phamiliar is active, illusions become Badasses, fully restoring their Health and gaining increased Damage."
              ]
            },
            {
              id: "vex_unsealed",
              name: "Unsealed",
              tier: 6,
              col: 1,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Trouble marks targets for bonus gun damage.",
              ranks: [
                "Capstone: Trouble marks its current target, causing it to take increased Gun Damage from Vex. When a marked enemy is killed, Trouble gains a stack of Unsealed for a Duration, granting Health Regeneration and increased Damage. While Phase Phamiliar is active, Unsealed effects are doubled and can stack."
              ]
            },
            {
              id: "vex_trouble_bubble",
              name: "Trouble Bubble",
              tier: 6,
              col: 2,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Trouble gains an Overshield and damaging Aura.",
              ranks: [
                "Capstone: Trouble gains an Overshield whenever it deals damage, plus an elemental Aura that deals damage to nearby enemies. This Aura gains bonus damage from Ordnance Damage buffs."
              ]
            }
          ]
        },
        {
          id: "vex_dead_ringer",
          name: "The Fourth Seal (Dead Ringer)",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "vex_dead_ringer_action",
              name: "Dead Ringer",
              tier: 0,
              col: 1,
              maxPoints: 1,
              type: "action",
              description: "Action Skill (3 charges): Spawn a Phase Clone Minion.",
              ranks: [
                "Charge Skill with 3 charges. Spawn a Phase Clone Minion, choosing Specter or Reaper. Phase Clones lose an ever-increasing amount of Health per second, and their Damage Type matches Vex's current Attunement when spawned. Reaper Taunts enemies and deals Melee Attack Damage; Specter deals Gun Damage and cannot move."
              ]
            },
            {
              id: "vex_sanguine_fiends",
              name: "Sanguine Fiends",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Heals Vex and her minions after kills.",
              ranks: [
                "Rank 1: Killing an enemy heals Vex and her active Phase Clones for a small amount.",
                "Rank 2: Healing on kill is increased.",
                "Rank 3: Healing on kill is increased further.",
                "Rank 4: Healing on kill is increased further still.",
                "Rank 5: Healing on kill reaches its maximum value."
              ]
            },
            {
              id: "vex_blood_sacrifice",
              name: "Blood Sacrifice",
              tier: 1,
              col: 1,
              maxPoints: 1,
              type: "passive",
              description: "Minion deaths trigger Vex's Kill Skills.",
              ranks: [
                "Whenever one of Vex's Minions dies, it triggers Vex's Kill Skills as though she had scored the kill herself."
              ]
            },
            {
              id: "vex_grave_quickening",
              name: "Grave Quickening",
              tier: 2,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Kills grant increased Action Skill Cooldown Rate.",
              ranks: [
                "Rank 1: Killing an enemy grants a small increase to Action Skill Cooldown Rate for a Duration.",
                "Rank 2: Cooldown Rate bonus increased.",
                "Rank 3: Cooldown Rate bonus increased further.",
                "Rank 4: Cooldown Rate bonus increased further still.",
                "Rank 5: Cooldown Rate bonus reaches its maximum value."
              ]
            },
            {
              id: "vex_diener",
              name: "Diener",
              tier: 2,
              col: 2,
              maxPoints: 1,
              type: "passive",
              description: "Grants Dead Ringer an additional charge.",
              ranks: [
                "Dead Ringer gains an additional Charge, for a total of 4, improving repositioning and uptime of Phase Clones."
              ]
            },
            {
              id: "vex_coven",
              name: "Coven",
              tier: 3,
              col: 0,
              maxPoints: 1,
              type: "augment",
              description: "Augment: Crit chance and regen when spawning Minions.",
              ranks: [
                "Augment: Whenever Vex spawns a Reaper, she and her summons gain Health Regeneration; whenever she spawns a Specter, she and her summons gain increased Critical Hit Chance."
              ]
            },
            {
              id: "vex_wither",
              name: "Wither",
              tier: 3,
              col: 2,
              maxPoints: 1,
              type: "augment",
              description: "Augment: Phase Clones apply a damage-taken debuff.",
              ranks: [
                "Augment: Enemies damaged by Phase Clones take increased damage from Vex and her Minions for a Duration."
              ]
            },
            {
              id: "vex_grave_fiends",
              name: "Grave Fiends",
              tier: 4,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increases damage for Vex and her Minions.",
              ranks: [
                "Rank 1: Vex and her Minions deal slightly increased Damage.",
                "Rank 2: Damage bonus increased.",
                "Rank 3: Damage bonus increased further.",
                "Rank 4: Damage bonus increased further still.",
                "Rank 5: Damage bonus reaches its maximum value."
              ]
            },
            {
              id: "vex_prismatic_weaponry",
              name: "Prismatic Weaponry",
              tier: 4,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Bonus damage with gun crits, multiplied per active Attunement.",
              ranks: [
                "Rank 1: Gun Critical Hits deal bonus damage, multiplied for each Attunement currently active.",
                "Rank 2: Bonus Critical Hit damage increased.",
                "Rank 3: Bonus Critical Hit damage increased further.",
                "Rank 4: Bonus Critical Hit damage increased further still.",
                "Rank 5: Bonus Critical Hit damage reaches its maximum value (roughly a 50% extra damage multiplier at full investment)."
              ]
            },
            {
              id: "vex_guns_and_needles",
              name: "Guns and Needles",
              tier: 5,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Gun Damage and Fire Rate passive boosting Vex and clones.",
              ranks: [
                "Rank 1: Vex and her Phase Clones gain a small boost to Gun Damage and Fire Rate.",
                "Rank 2: Bonus increased.",
                "Rank 3: Bonus increased further.",
                "Rank 4: Bonus increased further still.",
                "Rank 5: Bonus reaches its maximum value."
              ]
            },
            {
              id: "vex_grave_power",
              name: "Grave Power",
              tier: 5,
              col: 2,
              maxPoints: 3,
              type: "passive",
              description: "Increases max stacks of Vex's Kill Skills.",
              ranks: [
                "Rank 1: Increases the maximum stacks of all of Vex's Kill Skills.",
                "Rank 2: Max stacks increased further.",
                "Rank 3: Max stacks reach their maximum increase."
              ]
            },
            {
              id: "vex_dark_pact",
              name: "Dark Pact",
              tier: 6,
              col: 1,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Two augment slots; fully heal active clones.",
              ranks: [
                "Capstone: Vex can now equip two Augments on Dead Ringer. Press and hold the Action Skill while a Minion is active to activate Dark Pact, fully restoring the Health of all active Phase Clones and granting increased Movement Speed and Minion Attack Speed for a Duration. Phase Clones do not lose Health over time while Dark Pact is active; lost health resumes when it ends."
              ]
            }
          ]
        },
        {
          id: "vex_vexcalation",
          name: "Vexcalation (Incarnate)",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "vex_incarnate_action",
              name: "Incarnate",
              tier: 0,
              col: 1,
              maxPoints: 1,
              type: "action",
              description: "Action Skill: Phase Explosion that heals Vex and empowers her.",
              ranks: [
                "Vex creates a Phase Explosion, dealing damage to nearby enemies and fully restoring her own Health. While Incarnate is active, Vex can fire Eldritch Blast from her offhand and gains increased Movement Speed. Eldritch Blast launches an explosive Phase projectile that deals damage on impact; dealing Gun Damage reduces its Cooldown."
              ]
            },
            {
              id: "vex_bloodletter",
              name: "Bloodletter",
              tier: 1,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Gun and Skill Critical Hits have a chance to apply Bleed.",
              ranks: [
                "Rank 1: Gun and Skill Critical Hits have a chance to apply Bleed, a Kinetic Status Effect that deals Damage over time for a Duration (base values around 50% chance, 4s duration, up to 20 max stacks at full investment).",
                "Rank 2: Bleed application chance increased.",
                "Rank 3: Bleed application chance increased further; Bleed damage increased.",
                "Rank 4: Bleed application chance increased further still; Bleed damage increased further.",
                "Rank 5: Bleed application chance and damage reach their maximum values, with the highest chance to proc Bleed and largest stack cap."
              ]
            },
            {
              id: "vex_leeching_attunement",
              name: "Leeching Attunement",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Lifesteal and Reload Speed while Attuned to Kinetic.",
              ranks: [
                "Rank 1: While Attuned to Kinetic, Vex gains +2% Lifesteal and +6% Reload Speed; effects persist for roughly 6 seconds after switching Attunement.",
                "Rank 2: Lifesteal and Reload Speed bonuses increased; persistence Duration slightly extended.",
                "Rank 3: Lifesteal and Reload Speed bonuses increased further.",
                "Rank 4: Lifesteal and Reload Speed bonuses increased further still.",
                "Rank 5: Lifesteal and Reload Speed bonuses reach their maximum values."
              ]
            },
            {
              id: "vex_cursed_blade",
              name: "Cursed Blade",
              tier: 2,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Melee Attacks apply Curse, dealing Kinetic damage on Gun hits.",
              ranks: [
                "Rank 1: Vex's Melee Attacks apply Curse to hit enemies, causing them to take Kinetic Status Effect Damage any time they take Gun Damage.",
                "Rank 2: Curse damage increased.",
                "Rank 3: Curse damage increased further.",
                "Rank 4: Curse damage increased further still.",
                "Rank 5: Curse damage reaches its maximum value."
              ]
            },
            {
              id: "vex_extra_cursed",
              name: "Extra Cursed",
              tier: 2,
              col: 2,
              maxPoints: 1,
              type: "passive",
              description: "Curse also triggers on Minion melee and crits harder.",
              ranks: [
                "Requires at least 1 point in Cursed Blade. Curse Damage now also triggers on Minion Melee Damage, and deals roughly +200% increased Damage when triggered by a Critical Hit."
              ]
            },
            {
              id: "vex_material_components",
              name: "Material Components",
              tier: 3,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increased Kinetic Damage and Kinetic Status Effect Damage.",
              ranks: [
                "Rank 1: Vex gains a small increase to Kinetic Damage and Kinetic Status Effect Damage.",
                "Rank 2: Bonus increased.",
                "Rank 3: Bonus increased further.",
                "Rank 4: Bonus increased further still.",
                "Rank 5: Bonus reaches its maximum value."
              ]
            },
            {
              id: "vex_haruspex",
              name: "Haruspex",
              tier: 4,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Melee Override: throw a Phase Dagger instead of meleeing.",
              ranks: [
                "Rank 1: Melee Override. Vex throws a Phase Dagger from her offhand that deals Melee Damage to enemies hit and can Critically Hit. Kill Skill: killing an enemy with the dagger resets its Cooldown.",
                "Rank 2: Phase Dagger damage increased.",
                "Rank 3: Phase Dagger damage increased further.",
                "Rank 4: Phase Dagger damage increased further still; Cooldown reduced.",
                "Rank 5: Phase Dagger damage and Cooldown reach their best values."
              ]
            },
            {
              id: "vex_burning_attunement",
              name: "Burning Attunement",
              tier: 4,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Crit Damage and Status Chance while Attuned to Incendiary.",
              ranks: [
                "Rank 1: While Attuned to Incendiary, Vex and her Minions gain increased Critical Hit Damage and Status Effect Application Chance; effects persist briefly after switching Attunement.",
                "Rank 2: Bonuses increased.",
                "Rank 3: Bonuses increased further.",
                "Rank 4: Bonuses increased further still.",
                "Rank 5: Bonuses reach their maximum values."
              ]
            },
            {
              id: "vex_prismatic_ichor",
              name: "Prismatic Ichor",
              tier: 5,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Applying a Status Effect has a chance to apply another random one.",
              ranks: [
                "Rank 1: When Vex or her Minions apply a Status Effect, they have a chance to apply another random Elemental Status Effect, dealing roughly 30% of the initial Status Effect's Damage, on a short cooldown (~5s).",
                "Rank 2: Chance to trigger the bonus Status Effect increased.",
                "Rank 3: Chance increased further; bonus damage percentage increased.",
                "Rank 4: Chance increased further still; bonus damage percentage increased further.",
                "Rank 5: Chance and bonus damage reach their maximum values."
              ]
            },
            {
              id: "vex_heirloom",
              name: "Heirloom",
              tier: 5,
              col: 0,
              maxPoints: 1,
              type: "augment",
              description: "Augment modifying Eldritch Blast or Incarnate behavior.",
              ranks: [
                "Augment: Modifies Eldritch Blast, granting it additional effects while Incarnate is active (exact numeric values not confirmed in available sources)."
              ]
            },
            {
              id: "vex_vibe_check",
              name: "Vibe Check",
              tier: 5,
              col: 2,
              maxPoints: 1,
              type: "augment",
              description: "Augment altering Incarnate's explosion or buff behavior.",
              ranks: [
                "Augment: Alters the behavior of Incarnate's Phase Explosion or its granted buffs (exact numeric values not confirmed in available sources)."
              ]
            },
            {
              id: "vex_recurrence",
              name: "Recurrence",
              tier: 6,
              col: 0,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone improving Incarnate's reactivation or healing.",
              ranks: [
                "Capstone: Improves Incarnate's core loop, increasing the frequency or potency of its self-heal and explosion (exact numeric values not confirmed in available sources)."
              ]
            },
            {
              id: "vex_grim_reaper",
              name: "Grim Reaper",
              tier: 6,
              col: 1,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Incarnate empowered by kills.",
              ranks: [
                "Capstone: Incarnate's effects are extended and amplified by landing kills while it is active (exact numeric values not confirmed in available sources)."
              ]
            },
            {
              id: "vex_iron_maiden",
              name: "Iron Maiden",
              tier: 6,
              col: 2,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone offering a defensive Incarnate variant.",
              ranks: [
                "Capstone: Grants Vex additional defensive properties (Overshield or damage reduction) while Incarnate is active (exact numeric values not confirmed in available sources)."
              ]
            }
          ]
        }
      ]
    },

    /* ===================== AMON — THE FORGEKNIGHT ===================== */
    {
      id: "amon",
      name: "Amon",
      title: "The Forgeknight",
      trees: [
        {
          id: "amon_cybernetics",
          name: "Cybernetics (Crucible)",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "amon_crucible_action",
              name: "Crucible",
              tier: 0,
              col: 1,
              maxPoints: 1,
              type: "action",
              description: "Action Skill: Throw elemental Forgeaxes that prime enemies.",
              ranks: [
                "Amon readies Forgeaxes that can be thrown and picked up off the ground to refund Cooldown. The Flame Axe deals Incendiary Melee Damage; the Frost Axe deals Cryo Melee Damage. Enemies damaged by Forgeaxes are Primed for a short Duration and detonate when killed or damaged by a Forgeskill, dealing damage to nearby enemies."
              ]
            },
            {
              id: "amon_double_edge",
              name: "Double-Edge",
              tier: 0,
              col: 2,
              maxPoints: 1,
              type: "action",
              description: "Forgeskill: Throw a twinned forgeaxe that returns.",
              ranks: [
                "Forgeskill: Throw a twinned Forgeaxe, dealing Cryo Melee Damage to enemies it passes through on the way out and Incendiary Melee Damage on its way back to Amon."
              ]
            },
            {
              id: "amon_blast_furnace",
              name: "Blast Furnace",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Damage increases on Crit or Detonation triggers.",
              ranks: [
                "Rank 1: Amon's damage is increased for a short time whenever he or his Forgedrones score a Critical Hit or trigger a Detonation.",
                "Rank 2: Damage bonus increased.",
                "Rank 3: Damage bonus increased further.",
                "Rank 4: Damage bonus increased further still.",
                "Rank 5: Damage bonus reaches its maximum value."
              ]
            },
            {
              id: "amon_cast_iron",
              name: "Cast Iron",
              tier: 1,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Forgeskill Cooldown Rate and Gun Handling.",
              ranks: [
                "Rank 1: Amon gains increased Forgeskill Cooldown Rate and Gun Handling.",
                "Rank 2: Bonuses increased.",
                "Rank 3: Bonuses increased further.",
                "Rank 4: Bonuses increased further still.",
                "Rank 5: Bonuses reach their maximum values."
              ]
            },
            {
              id: "amon_axe_and_stone",
              name: "Axe and Stone",
              tier: 2,
              col: 0,
              maxPoints: 1,
              type: "augment",
              description: "Augment: Move faster after hitting with axes; melee detonates.",
              ranks: [
                "Augment: Amon gains faster Movement Speed after damaging an enemy with a Forgeaxe, and can detonate Primed enemies with a Melee Attack. Detonating a Flame Axe restores Action Skill Cooldown; detonating a Cryo Axe restores Ordnance Cooldown."
              ]
            },
            {
              id: "amon_endless_war",
              name: "Endless War",
              tier: 2,
              col: 2,
              maxPoints: 1,
              type: "augment",
              description: "Augment: Primed enemies take more gun damage; detonation spawns a seeking axe.",
              ranks: [
                "Augment: Primed enemies take increased Gun Damage for every stack of Prime they have. If Amon detonates a Primed enemy, a new Forgeaxe is created that seeks out a nearby enemy."
              ]
            },
            {
              id: "amon_tempered_pyre",
              name: "Tempered Pyre",
              tier: 3,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Spawns a Forgedrone that chases enemies with melee attacks.",
              ranks: [
                "Rank 1: Activating a Forgeskill spawns an Axe Forgedrone that chases down nearby enemies, dealing Incendiary Melee Damage. Activating a Forgeskill again resets the Duration of all active Forgedrones.",
                "Rank 2: Forgedrone damage and/or Duration increased.",
                "Rank 3: Forgedrone damage and/or Duration increased further.",
                "Rank 4: Forgedrone damage and/or Duration increased further still.",
                "Rank 5: Forgedrone damage and Duration reach their maximum values."
              ]
            },
            {
              id: "amon_twin_tempers",
              name: "Twin Tempers",
              tier: 3,
              col: 2,
              maxPoints: 1,
              type: "passive",
              description: "Tempered Pyre spawns a second, Cryo Forgedrone.",
              ranks: [
                "Requires investment in Tempered Pyre. Tempered Pyre now spawns an additional Axe Forgedrone that deals Cryo Melee Damage; total Forgedrone Duration is reduced as a tradeoff."
              ]
            },
            {
              id: "amon_endless_bombardment",
              name: "Endless Bombardment",
              tier: 4,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Grenades and heavy Ordnance have a chance to refund.",
              ranks: [
                "Rank 1: Grenades have a chance to be refunded on use, and Heavy Ordnance has a chance to refund 1 ammo upon damaging an enemy.",
                "Rank 2: Refund chance increased.",
                "Rank 3: Refund chance increased further.",
                "Rank 4: Refund chance increased further still.",
                "Rank 5: Refund chance reaches its maximum value."
              ]
            },
            {
              id: "amon_bellows",
              name: "Bellows",
              tier: 4,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Improves Forgedrone effectiveness and/or Ordnance damage.",
              ranks: [
                "Rank 1: Increases the effectiveness of Amon's Forgedrones and/or his Ordnance damage output.",
                "Rank 2: Bonus increased.",
                "Rank 3: Bonus increased further.",
                "Rank 4: Bonus increased further still.",
                "Rank 5: Bonus reaches its maximum value (exact numeric values not fully confirmed in available sources)."
              ]
            },
            {
              id: "amon_snowmaul",
              name: "Snowmaul",
              tier: 6,
              col: 0,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Double-Edge becomes a ricocheting Cryo hammer.",
              ranks: [
                "Capstone: Changes the Double-Edge Forgeskill into a twinned Forge-Hammer, dealing Cryo Melee Damage to enemies hit and ricocheting up to 3 times between enemies."
              ]
            },
            {
              id: "amon_storm_surge",
              name: "Storm Surge",
              tier: 6,
              col: 2,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Double-Edge becomes a Shock blade with a storm field.",
              ranks: [
                "Capstone: Changes the Double-Edge Forgeskill into a twinned Forge-Blade that deals Shock Melee Damage and spawns a Forge-Storm on impact, dealing Shock Damage over time to enemies caught inside."
              ]
            }
          ]
        },
        {
          id: "amon_calamity",
          name: "Calamity (Onslaughter)",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "amon_onslaughter_action",
              name: "Onslaughter",
              tier: 0,
              col: 1,
              maxPoints: 1,
              type: "action",
              description: "Action Skill: Forgefist melee stance with constant shield regen.",
              ranks: [
                "Amon readies his Forgefist and gains constant Shield Regeneration, bonus Incendiary Damage on guns, and increased Movement Speed for the Duration."
              ]
            },
            {
              id: "amon_molten_slam",
              name: "Molten Slam",
              tier: 0,
              col: 2,
              maxPoints: 1,
              type: "action",
              description: "Forgeskill: Slam attack tied to Onslaughter.",
              ranks: [
                "Forgeskill: Amon slams the ground with his Forgefist, dealing Incendiary Melee Damage to nearby enemies."
              ]
            },
            {
              id: "amon_impetus",
              name: "Impetus",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Improves shield regeneration or movement while melee-focused.",
              ranks: [
                "Rank 1: Amon gains a bonus to Shield Regeneration and/or Movement Speed while in melee range of enemies.",
                "Rank 2: Bonus increased.",
                "Rank 3: Bonus increased further.",
                "Rank 4: Bonus increased further still.",
                "Rank 5: Bonus reaches its maximum value."
              ]
            },
            {
              id: "amon_gut_punch",
              name: "Gut Punch",
              tier: 1,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Increased Melee Damage.",
              ranks: [
                "Rank 1: Amon's Melee Damage is increased.",
                "Rank 2: Melee Damage increased further.",
                "Rank 3: Melee Damage increased further still.",
                "Rank 4: Melee Damage increased further still.",
                "Rank 5: Melee Damage reaches its maximum bonus."
              ]
            },
            {
              id: "amon_heavy_plate",
              name: "Heavy Plate",
              tier: 2,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increases Max Health and/or Shield Capacity.",
              ranks: [
                "Rank 1: Amon gains increased Max Health and/or Shield Capacity.",
                "Rank 2: Bonus increased.",
                "Rank 3: Bonus increased further.",
                "Rank 4: Bonus increased further still.",
                "Rank 5: Bonus reaches its maximum value."
              ]
            },
            {
              id: "amon_metal_urge",
              name: "Metal Urge",
              tier: 3,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increases Action Skill Duration uptime for Onslaughter.",
              ranks: [
                "Rank 1: Killing enemies or scoring melee hits partially restores Onslaughter's Duration.",
                "Rank 2: Duration restored increased.",
                "Rank 3: Duration restored increased further.",
                "Rank 4: Duration restored increased further still.",
                "Rank 5: Duration restored reaches its maximum value, enabling near-permanent Onslaughter uptime."
              ]
            },
            {
              id: "amon_berserk",
              name: "Berserk",
              tier: 3,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Slow immunity and bonus Cryo Damage after Forgeskill use.",
              ranks: [
                "Rank 1: After activating Molten Slam, Amon gains immunity to Slow effects and a bonus to Cryo Damage on guns and melee for a Duration.",
                "Rank 2: Cryo Damage bonus increased.",
                "Rank 3: Cryo Damage bonus increased further.",
                "Rank 4: Cryo Damage bonus increased further still.",
                "Rank 5: Cryo Damage bonus reaches its maximum value."
              ]
            },
            {
              id: "amon_there_is_only_red",
              name: "There Is Only Red",
              tier: 4,
              col: 2,
              maxPoints: 1,
              type: "passive",
              description: "Kill Skill: extends Berserk and boosts its Cryo bonus.",
              ranks: [
                "Requires at least 1 point in Berserk. Kill Skill: each kill partially restores the Duration of Berserk and significantly increases its bonus Cryo Damage for a short time."
              ]
            },
            {
              id: "amon_rimebreak",
              name: "Rimebreak",
              tier: 4,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Shield break triggers a freezing Cryo nova.",
              ranks: [
                "Rank 1: When Amon's Shield fully depletes, it partially restores and detonates in a Cryo explosion, dealing Cryo Damage and Freezing nearby enemies.",
                "Rank 2: Explosion damage increased.",
                "Rank 3: Explosion damage increased further.",
                "Rank 4: Explosion damage increased further still.",
                "Rank 5: Explosion damage and Freeze chance reach their maximum values."
              ]
            },
            {
              id: "amon_pyroclast",
              name: "Pyroclast",
              tier: 5,
              col: 1,
              maxPoints: 1,
              type: "augment",
              description: "Augment: Full heal and Forgestorm on activating Onslaughter.",
              ranks: [
                "Augment: Activating Onslaughter grants Amon immediate full Health and Shield Regeneration and surrounds him in a Forgestorm that deals Incendiary Status Effect Damage to nearby enemies. Each kill partially restores Onslaughter's Duration and increases the Forgestorm's damage."
              ]
            },
            {
              id: "amon_stormcutter",
              name: "Stormcutter",
              tier: 6,
              col: 1,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Forgewave Shock attack restoring cooldowns on hit.",
              ranks: [
                "Capstone: Instead of slamming a flaming hammer, Amon throws out a Forgewave that deals Shock Melee Damage to every enemy it hits. For each enemy hit, Amon recovers a portion of Action Skill Cooldown, Action Skill Duration, and Ordnance Cooldown."
              ]
            }
          ]
        },
        {
          id: "amon_vengeance",
          name: "Vengeance (Scourge)",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "amon_scourge_action",
              name: "Scourge",
              tier: 0,
              col: 1,
              maxPoints: 1,
              type: "action",
              description: "Action Skill: Frontal shield that stores damage as Vengeance.",
              ranks: [
                "Amon raises a front-facing shield that absorbs all frontal damage and stores it as Vengeance. Pressing the Action Skill again launches a Forgewave that scales with stored Vengeance, dealing Cryo Ordnance Damage to enemies hit in a large area."
              ]
            },
            {
              id: "amon_firewall",
              name: "Firewall",
              tier: 0,
              col: 2,
              maxPoints: 1,
              type: "action",
              description: "Forgeskill tied to Scourge.",
              ranks: [
                "Forgeskill: Amon creates a wall of fire in front of himself, dealing Incendiary Damage over time to enemies that pass through it."
              ]
            },
            {
              id: "amon_age_of_ice",
              name: "Age of Ice",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Sustains ammo or Ordnance through Cryo effects.",
              ranks: [
                "Rank 1: Dealing Cryo Damage has a chance to refund Ammo or Ordnance Cooldown.",
                "Rank 2: Chance increased.",
                "Rank 3: Chance increased further.",
                "Rank 4: Chance increased further still.",
                "Rank 5: Chance reaches its maximum value."
              ]
            },
            {
              id: "amon_tail_of_the_comet",
              name: "Tail of the Comet",
              tier: 1,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Cryo Ordnance Damage bonus.",
              ranks: [
                "Rank 1: Amon's Cryo Ordnance Damage is increased.",
                "Rank 2: Bonus increased.",
                "Rank 3: Bonus increased further.",
                "Rank 4: Bonus increased further still.",
                "Rank 5: Bonus reaches its maximum value."
              ]
            },
            {
              id: "amon_machinist",
              name: "Machinist",
              tier: 2,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Improves Ordnance Cooldown Rate or capacity.",
              ranks: [
                "Rank 1: Amon's Ordnance Cooldown Rate is increased.",
                "Rank 2: Cooldown Rate increased further.",
                "Rank 3: Cooldown Rate increased further still.",
                "Rank 4: Cooldown Rate increased further still.",
                "Rank 5: Cooldown Rate reaches its maximum value."
              ]
            },
            {
              id: "amon_icy_rage",
              name: "Icy Rage",
              tier: 3,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Cryo kills stack Cryo Affinity for bonus gun damage.",
              ranks: [
                "Rank 1: Killing enemies with Cryo Damage grants a stack of Cryo Affinity; for every stack, Amon gains increased Gun Damage.",
                "Rank 2: Gun Damage per stack increased.",
                "Rank 3: Gun Damage per stack increased further; max stacks increased.",
                "Rank 4: Gun Damage per stack increased further still.",
                "Rank 5: Gun Damage per stack and max stacks reach their maximum values."
              ]
            },
            {
              id: "amon_eternal_winter",
              name: "Eternal Winter",
              tier: 4,
              col: 1,
              maxPoints: 1,
              type: "augment",
              description: "Augment: Forgewaves restore Scourge Duration and can triple-hit.",
              ranks: [
                "Augment: Forgewaves partially restore Scourge's Duration every time they damage an enemy, and can be activated up to 3 times in a row; the 3rd swing deals increased Damage and does not consume stored Vengeance."
              ]
            },
            {
              id: "amon_battleborn",
              name: "Battleborn",
              tier: 4,
              col: 2,
              maxPoints: 1,
              type: "passive",
              description: "Gun Damage scales with current Health, doubled at full Health.",
              ranks: [
                "Amon gains increased Gun Damage the more full his Health is; this effect is doubled while he is at full Health."
              ]
            },
            {
              id: "amon_bullet_hail",
              name: "Bullet Hail",
              tier: 5,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Gunshots have a chance to ricochet as a Cryo shard.",
              ranks: [
                "Rank 1: Amon's gunshots have a small chance to ricochet off enemies as an elemental shard, dealing Cryo Damage.",
                "Rank 2: Ricochet chance increased.",
                "Rank 3: Ricochet chance increased further.",
                "Rank 4: Ricochet chance increased further still.",
                "Rank 5: Ricochet chance reaches its maximum value."
              ]
            },
            {
              id: "amon_glacial_rapture",
              name: "Glacial Rapture",
              tier: 6,
              col: 1,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Forgewhip slam creates a lingering Cryo fissure.",
              ranks: [
                "Capstone: Amon swings and slams his Forgewhips, dealing Cryo Ordnance Damage to nearby enemies, then creates a Cryo Fissure that deals Cryo Ordnance Damage and leaves behind a lingering Cryo hazard for a Duration."
              ]
            }
          ]
        }
      ]
    },

    /* ===================== HARLOWE — THE GRAVITAR ===================== */
    {
      id: "harlowe",
      name: "Harlowe",
      title: "The Gravitar",
      trees: [
        {
          id: "harlowe_creative_bursts",
          name: "Creative Bursts (Chroma Accelerator)",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "harlowe_chroma_accelerator_action",
              name: "Chroma Accelerator",
              tier: 0,
              col: 1,
              maxPoints: 1,
              type: "action",
              description: "Action Skill: Fire an Unstable Energy Pocket.",
              ranks: [
                "Fire an Unstable Energy Pocket from the CHROMA Accelerator. The Pocket passes through enemies, dealing Cryo Damage to all enemies it passes near. Pressing the Action Skill again detonates the Pocket, dealing heavy Radiation Damage in a large area."
              ]
            },
            {
              id: "harlowe_test_subject",
              name: "Test Subject",
              tier: 3,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Status Effects grant Action Skill Cooldown Rate.",
              ranks: [
                "Rank 1: Inflicting a Status Effect on an enemy grants Harlowe a small increase to Action Skill Cooldown Rate for a Duration.",
                "Rank 2: Cooldown Rate bonus increased.",
                "Rank 3: Cooldown Rate bonus increased further.",
                "Rank 4: Cooldown Rate bonus increased further still.",
                "Rank 5: Cooldown Rate bonus reaches its maximum value."
              ]
            },
            {
              id: "harlowe_eureka",
              name: "Eureka!",
              tier: 5,
              col: 2,
              maxPoints: 1,
              type: "passive",
              description: "Throws a free Energy Pocket when entering Fight For Your Life.",
              ranks: [
                "Whenever Harlowe enters Fight For Your Life, she automatically throws a free Unstable Energy Pocket at a nearby enemy (if one is available), helping set up an easy Second Wind kill."
              ]
            },
            {
              id: "harlowe_coronal_mass_ejection_cb",
              name: "Status Amplifier",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increases elemental status effect chance and damage output.",
              ranks: [
                "Rank 1: Harlowe's Status Effect Chance and Status Effect Damage are slightly increased.",
                "Rank 2: Bonus increased.",
                "Rank 3: Bonus increased further.",
                "Rank 4: Bonus increased further still.",
                "Rank 5: Bonus reaches its maximum value."
              ]
            },
            {
              id: "harlowe_action_skill_spam",
              name: "Rapid Discharge",
              tier: 2,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Reduces Chroma Accelerator's Cooldown for repeated casting.",
              ranks: [
                "Rank 1: Chroma Accelerator's Cooldown Rate is increased, allowing more frequent casts.",
                "Rank 2: Cooldown Rate increased further.",
                "Rank 3: Cooldown Rate increased further still.",
                "Rank 4: Cooldown Rate increased further still.",
                "Rank 5: Cooldown Rate reaches its maximum value."
              ]
            },
            {
              id: "harlowe_dps_passive",
              name: "Overcharge",
              tier: 4,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increased weapon damage scaling with Action Skill usage.",
              ranks: [
                "Rank 1: Using Chroma Accelerator grants Harlowe a temporary boost to weapon damage.",
                "Rank 2: Bonus damage increased.",
                "Rank 3: Bonus damage increased further.",
                "Rank 4: Bonus damage increased further still.",
                "Rank 5: Bonus damage reaches its maximum value."
              ]
            },
            {
              id: "harlowe_radiation_focus",
              name: "Fallout",
              tier: 4,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Increased Radiation Damage and Radiation Status Effect Damage.",
              ranks: [
                "Rank 1: Harlowe gains increased Radiation Damage and Radiation Status Effect Damage.",
                "Rank 2: Bonus increased.",
                "Rank 3: Bonus increased further.",
                "Rank 4: Bonus increased further still.",
                "Rank 5: Bonus reaches its maximum value."
              ]
            },
            {
              id: "harlowe_capstone_cb",
              name: "Chain Reaction",
              tier: 6,
              col: 1,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Energy Pocket detonations chain to additional enemies.",
              ranks: [
                "Capstone: Chroma Accelerator's detonation now chains to additional nearby enemies, each chained detonation dealing increased Radiation Damage and applying Status Effects (exact numeric values not fully confirmed in available sources)."
              ]
            }
          ]
        },
        {
          id: "harlowe_seize_the_day",
          name: "Seize the Day (Zero-Point)",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "harlowe_zero_point_action",
              name: "Zero-Point",
              tier: 0,
              col: 1,
              maxPoints: 1,
              type: "action",
              description: "Action Skill: Lock a target in Stasis.",
              ranks: [
                "Zero-Point locks a target enemy in Stasis for 10 seconds; if the enemy is immune to Stasis, it takes direct damage instead. Reactivate the Action Skill to slam the frozen target, triggering a small explosion. Base Cooldown is 35 seconds, with a 1.5 second retrigger window on the slam."
              ]
            },
            {
              id: "harlowe_keep_ice_on_that",
              name: "Keep Ice On That",
              tier: 5,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Cryo Damage gains Lifesteal, or Overshield if at full Health.",
              ranks: [
                "Rank 1: All Cryo Damage Harlowe deals gains Lifesteal (+3%); if her Health is full, she instead gains Overshield (+4% Overshield Steal).",
                "Rank 2: Lifesteal and Overshield Steal percentages increased.",
                "Rank 3: Lifesteal and Overshield Steal percentages increased further.",
                "Rank 4: Lifesteal and Overshield Steal percentages increased further still.",
                "Rank 5: Lifesteal and Overshield Steal percentages reach their maximum values."
              ]
            },
            {
              id: "harlowe_stasis_share",
              name: "Entangled Fates",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Improves the Entanglement trait's shared damage radius/potency.",
              ranks: [
                "Rank 1: Increases the radius and/or potency of Harlowe's Entanglement Trait, which causes enemies hit by Action Skills to share Gun and Skill Damage with other Entangled foes.",
                "Rank 2: Bonus increased.",
                "Rank 3: Bonus increased further.",
                "Rank 4: Bonus increased further still.",
                "Rank 5: Bonus reaches its maximum value."
              ]
            },
            {
              id: "harlowe_stasis_cooldown",
              name: "Frozen Momentum",
              tier: 2,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Reduces Zero-Point's Cooldown.",
              ranks: [
                "Rank 1: Zero-Point's Cooldown Rate is increased.",
                "Rank 2: Cooldown Rate increased further.",
                "Rank 3: Cooldown Rate increased further still.",
                "Rank 4: Cooldown Rate increased further still.",
                "Rank 5: Cooldown Rate reaches its maximum value."
              ]
            },
            {
              id: "harlowe_cryo_damage_passive",
              name: "Deep Freeze",
              tier: 3,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increased Cryo Damage and Cryo Status Effect Damage.",
              ranks: [
                "Rank 1: Harlowe gains increased Cryo Damage and Cryo Status Effect Damage.",
                "Rank 2: Bonus increased.",
                "Rank 3: Bonus increased further.",
                "Rank 4: Bonus increased further still.",
                "Rank 5: Bonus reaches its maximum value."
              ]
            },
            {
              id: "harlowe_aoe_passive",
              name: "Singularity Theory",
              tier: 4,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increases the AoE radius of Zero-Point's slam explosion.",
              ranks: [
                "Rank 1: Zero-Point's slam explosion radius is increased.",
                "Rank 2: Radius increased further.",
                "Rank 3: Radius increased further still; damage increased.",
                "Rank 4: Radius and damage increased further.",
                "Rank 5: Radius and damage reach their maximum values."
              ]
            },
            {
              id: "harlowe_cold_slam",
              name: "Cold Slam",
              tier: 6,
              col: 0,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Slamming an enemy creates a Singularity that explodes into Cryo.",
              ranks: [
                "Capstone: Slamming a Stasis-locked enemy creates a Singularity that pulls in nearby enemies before detonating in a Cryo Explosion, dealing heavy Cryo Damage in the area."
              ]
            }
          ]
        },
        {
          id: "harlowe_cosmic_brilliance",
          name: "Cosmic Brilliance (Flux Generator)",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "harlowe_flux_generator_action",
              name: "Flux Generator",
              tier: 0,
              col: 1,
              maxPoints: 1,
              type: "action",
              description: "Action Skill: Deployable field granting Overshield and Cryo DoT.",
              ranks: [
                "Flux Generator throws a field that deals Cryo Damage over time and Entangles enemies inside, while granting Overshield to allies who stand in it. The field's Duration is 22 seconds with a 55 second Cooldown; it can be picked up and re-thrown to reposition mid-fight."
              ]
            },
            {
              id: "harlowe_coronal_mass_ejection",
              name: "Coronal Mass Ejection",
              tier: 2,
              col: 1,
              maxPoints: 1,
              type: "augment",
              description: "Augment: Strips elemental resistance inside the Flux field.",
              ranks: [
                "Augment: Enemies inside Harlowe's Flux Generator lose all Elemental Resistances, and Harlowe and her allies inside the field gain increased Status Effect Chance."
              ]
            },
            {
              id: "harlowe_unified_theory",
              name: "Unified Theory",
              tier: 2,
              col: 2,
              maxPoints: 1,
              type: "augment",
              description: "Augment: Action Skill Damage scales with occupants in the field.",
              ranks: [
                "Augment: Flux Generator's Action Skill Damage scales upward based on the number of allies and enemies currently standing inside the field."
              ]
            },
            {
              id: "harlowe_ally_shield",
              name: "Mutual Aid",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Buffs allies' Shield Capacity and Reload Speed near Harlowe.",
              ranks: [
                "Rank 1: Allies near Harlowe gain a small boost to Shield Capacity and Reload Speed.",
                "Rank 2: Bonus increased.",
                "Rank 3: Bonus increased further.",
                "Rank 4: Bonus increased further still.",
                "Rank 5: Bonus reaches its maximum value."
              ]
            },
            {
              id: "harlowe_team_cooldown",
              name: "Shared Charge",
              tier: 2,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Buffs ally Action Skill Cooldown Rate near Harlowe.",
              ranks: [
                "Rank 1: Allies near Harlowe gain increased Action Skill Cooldown Rate.",
                "Rank 2: Bonus increased.",
                "Rank 3: Bonus increased further.",
                "Rank 4: Bonus increased further still.",
                "Rank 5: Bonus reaches its maximum value."
              ]
            },
            {
              id: "harlowe_team_lifesteal",
              name: "Vampiric Field",
              tier: 3,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Grants Lifesteal to allies standing in the Flux field.",
              ranks: [
                "Rank 1: Allies standing in Harlowe's Flux Generator gain a small amount of Lifesteal.",
                "Rank 2: Lifesteal increased.",
                "Rank 3: Lifesteal increased further.",
                "Rank 4: Lifesteal increased further still.",
                "Rank 5: Lifesteal reaches its maximum value."
              ]
            },
            {
              id: "harlowe_ricochet",
              name: "Crossfire",
              tier: 4,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Adds ricochet chance to allies' gunfire near Harlowe.",
              ranks: [
                "Rank 1: Allies near Harlowe gain a small chance for their gunshots to ricochet to a nearby enemy.",
                "Rank 2: Ricochet chance increased.",
                "Rank 3: Ricochet chance increased further.",
                "Rank 4: Ricochet chance increased further still.",
                "Rank 5: Ricochet chance reaches its maximum value."
              ]
            },
            {
              id: "harlowe_radiation_team",
              name: "Fallout Zone",
              tier: 5,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increases team Radiation/Cryo Damage near the Flux field.",
              ranks: [
                "Rank 1: Harlowe and allies near the Flux Generator deal increased Radiation and Cryo Damage.",
                "Rank 2: Bonus increased.",
                "Rank 3: Bonus increased further.",
                "Rank 4: Bonus increased further still.",
                "Rank 5: Bonus reaches its maximum value."
              ]
            },
            {
              id: "harlowe_potential_transference",
              name: "Potential Transference",
              tier: 6,
              col: 1,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Teleporting the Flux Generator heals and revives allies.",
              ranks: [
                "Capstone: Lets Harlowe teleport the Flux Generator, dealing Shock Damage and reviving allies. Moving the field unleashes a Shock Burst, grants nearby allies a free Second Wind, and heals anyone within its range."
              ]
            }
          ]
        }
      ]
    },

    /* ===================== RAFA — THE EXO-SOLDIER ===================== */
    {
      id: "rafa",
      name: "Rafa",
      title: "The Exo-Soldier",
      trees: [
        {
          id: "rafa_remote_agent",
          name: "Remote Agent (Peacebreaker Cannons)",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "rafa_peacebreaker_action",
              name: "Peacebreaker Cannons",
              tier: 0,
              col: 1,
              maxPoints: 1,
              type: "action",
              description: "Action Skill: Shoulder-mounted automatic cannons.",
              ranks: [
                "Rafa equips his Peacebreaker Cannons, which automatically fire at enemies in his crosshairs, dealing Kinetic Gun Damage. If the target dies, or the player presses the directional input, the Cannons retarget. Rafa and his Cannons gain increased Fire Rate while active; allies near him regenerate Ammo into their magazines. Cannons deal bonus Incendiary Damage based on how full Rafa's gun magazine is, and fire Exploding Bullets while his magazine is full."
              ]
            },
            {
              id: "rafa_el_valiente",
              name: "El Valiente",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increased damage from all sources, scaling with Shield fullness.",
              ranks: [
                "Rank 1: Rafa deals increased Damage from all sources, scaling with how full his Shield currently is.",
                "Rank 2: Damage bonus increased.",
                "Rank 3: Damage bonus increased further.",
                "Rank 4: Damage bonus increased further still.",
                "Rank 5: Damage bonus reaches its maximum value at full Shield."
              ]
            },
            {
              id: "rafa_cya",
              name: "CYA",
              tier: 1,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Improves Shield Regeneration.",
              ranks: [
                "Rank 1: Rafa's Shield Regeneration Rate is increased.",
                "Rank 2: Regeneration Rate increased further.",
                "Rank 3: Regeneration Rate increased further still.",
                "Rank 4: Regeneration Rate increased further still.",
                "Rank 5: Regeneration Rate reaches its maximum value."
              ]
            },
            {
              id: "rafa_juerga",
              name: "Juerga",
              tier: 2,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increased Action Skill Duration.",
              ranks: [
                "Rank 1: Peacebreaker Cannons' Duration is increased.",
                "Rank 2: Duration increased further.",
                "Rank 3: Duration increased further still.",
                "Rank 4: Duration increased further still.",
                "Rank 5: Duration reaches its maximum value."
              ]
            },
            {
              id: "rafa_asymmetric_warfare",
              name: "Asymmetric Warfare",
              tier: 2,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Bonus damage for Indirect Projectiles (Action Skill, thrown weapons).",
              ranks: [
                "Rank 1: Rafa deals increased Damage with Indirect Projectiles — his Action Skill, Thrown Guns, and any projectiles not fired directly from his gun.",
                "Rank 2: Bonus increased.",
                "Rank 3: Bonus increased further.",
                "Rank 4: Bonus increased further still.",
                "Rank 5: Bonus reaches its maximum value."
              ]
            },
            {
              id: "rafa_ardid",
              name: "Ardid",
              tier: 3,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Lifesteal from Indirect Projectiles.",
              ranks: [
                "Rank 1: Rafa gains roughly 10% Lifesteal from Indirect Projectile Damage at full investment; lower ranks grant a partial amount.",
                "Rank 2: Lifesteal percentage increased.",
                "Rank 3: Lifesteal percentage increased further.",
                "Rank 4: Lifesteal percentage increased further still.",
                "Rank 5: Lifesteal reaches its full ~10% value."
              ]
            },
            {
              id: "rafa_errant_spark",
              name: "Errant Spark",
              tier: 3,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Additional Fire (Incendiary) Damage to Indirect Projectiles.",
              ranks: [
                "Rank 1: Rafa's Indirect Projectiles deal additional Incendiary Damage.",
                "Rank 2: Bonus increased.",
                "Rank 3: Bonus increased further.",
                "Rank 4: Bonus increased further still.",
                "Rank 5: Bonus reaches its maximum value."
              ]
            },
            {
              id: "rafa_bullet_buddy_deluxe",
              name: "Bullet-Buddy Deluxe",
              tier: 4,
              col: 0,
              maxPoints: 1,
              type: "augment",
              description: "Augment improving Peacebreaker Cannons' targeting/behavior.",
              ranks: [
                "Augment: Improves the Peacebreaker Cannons' targeting behavior and adds bonus effects on retarget (exact numeric values not fully confirmed in available sources)."
              ]
            },
            {
              id: "rafa_insta_fort",
              name: "Insta-Fort Battle System",
              tier: 4,
              col: 2,
              maxPoints: 1,
              type: "augment",
              description: "Augment: Cannons detach as a stationary turret dealing Ordnance Damage.",
              ranks: [
                "Augment: Peacebreaker Cannons deal Ordnance Damage and can disconnect from Rafa, deploying as a stationary turret that continues firing independently."
              ]
            },
            {
              id: "rafa_double_ought_autoshot",
              name: "Double-Ought Autoshot",
              tier: 6,
              col: 0,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Cannons become high-damage, high-pellet shotguns.",
              ranks: [
                "Capstone: Turns the Peacebreaker Cannons into shotguns with higher damage and increased pellet count per shot."
              ]
            },
            {
              id: "rafa_volatile_hollowpoints",
              name: "Volatile Hollowpoints",
              tier: 6,
              col: 2,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Cannons fire explosive rockets with splash damage.",
              ranks: [
                "Capstone: Turns the Peacebreaker Cannons into rocket launchers, adding splash damage that provides stronger area-of-effect and crowd-control potential."
              ]
            }
          ]
        },
        {
          id: "rafa_the_thrill",
          name: "The Thrill (APOPHIS Lance)",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "rafa_apophis_lance_action",
              name: "APOPHIS Lance",
              tier: 0,
              col: 1,
              maxPoints: 1,
              type: "action",
              description: "Action Skill: Offhand arm cannon firing Shock Ordnance blasts.",
              ranks: [
                "The APOPHIS Lance is an offhand arm cannon that fires piercing Shock Ordnance blasts, decreasing Rafa's Gun Handling while equipped. Pressing and holding the Action Skill causes the Laser to deal increased Damage and chain to more enemies as it consumes Charges."
              ]
            },
            {
              id: "rafa_the_thrill_passive",
              name: "The Thrill",
              tier: 1,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increased Fire Rate.",
              ranks: [
                "Rank 1: Rafa gains a bonus to Fire Rate.",
                "Rank 2: Fire Rate bonus increased.",
                "Rank 3: Fire Rate bonus increased further.",
                "Rank 4: Fire Rate bonus increased further still.",
                "Rank 5: Fire Rate bonus reaches its maximum value (roughly +65% at full investment)."
              ]
            },
            {
              id: "rafa_drone_defense",
              name: "Drone Defense",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Reduces incoming damage, absorbing some enemy attacks.",
              ranks: [
                "Rank 1: Rafa gains a small chance to absorb incoming damage, reducing damage taken.",
                "Rank 2: Damage reduction increased.",
                "Rank 3: Damage reduction increased further.",
                "Rank 4: Damage reduction increased further still.",
                "Rank 5: Damage reduction reaches its maximum value."
              ]
            },
            {
              id: "rafa_extra_charge",
              name: "Overcharged Capacitor",
              tier: 2,
              col: 0,
              maxPoints: 1,
              type: "passive",
              description: "APOPHIS Lance gains an additional Charge.",
              ranks: [
                "APOPHIS Lance gains an additional Charge; whenever Rafa consumes a set minimum number of Charges in a single blast, he gains increased Action Skill Potency."
              ]
            },
            {
              id: "rafa_crit_chain",
              name: "Precision Feed",
              tier: 2,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "APOPHIS Lance gains Critical Hit Chance, stacking on hit.",
              ranks: [
                "Rank 1: APOPHIS Lance gains increased Critical Hit Chance; whenever Rafa damages an enemy with it, he gains a further temporary increase to Critical Hit Chance.",
                "Rank 2: Critical Hit Chance bonus increased.",
                "Rank 3: Critical Hit Chance bonus increased further.",
                "Rank 4: Critical Hit Chance bonus increased further still.",
                "Rank 5: Critical Hit Chance bonus reaches its maximum value."
              ]
            },
            {
              id: "rafa_battery_subscription",
              name: "Battery Subscription Service",
              tier: 3,
              col: 0,
              maxPoints: 1,
              type: "augment",
              description: "Augment: Extra Charge; bonus Skill Damage on heavy blasts.",
              ranks: [
                "Augment: APOPHIS Lance gains an additional Charge. Whenever Rafa's APOPHIS Lance consumes four or more Charges in a single blast, he gains increased Skill Damage for a Duration."
              ]
            },
            {
              id: "rafa_engorged_bore",
              name: "Engorged Bore",
              tier: 3,
              col: 2,
              maxPoints: 1,
              type: "augment",
              description: "Augment: Larger, faster projectiles; bonus chains for Gorgon.",
              ranks: [
                "Augment: APOPHIS Lance gains increased projectile radius and projectile speed; the Project: Gorgon capstone variant gains an increased number of chain targets."
              ]
            },
            {
              id: "rafa_charge_economy",
              name: "Reserve Cells",
              tier: 4,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Improves Charge regeneration rate for APOPHIS Lance.",
              ranks: [
                "Rank 1: APOPHIS Lance regenerates Charges faster.",
                "Rank 2: Regeneration increased.",
                "Rank 3: Regeneration increased further.",
                "Rank 4: Regeneration increased further still.",
                "Rank 5: Regeneration reaches its maximum value."
              ]
            },
            {
              id: "rafa_shock_damage",
              name: "Live Wire",
              tier: 5,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increased Shock Damage and Shock Status Effect Damage.",
              ranks: [
                "Rank 1: Rafa gains increased Shock Damage and Shock Status Effect Damage.",
                "Rank 2: Bonus increased.",
                "Rank 3: Bonus increased further.",
                "Rank 4: Bonus increased further still.",
                "Rank 5: Bonus reaches its maximum value."
              ]
            },
            {
              id: "rafa_project_raiju",
              name: "Project Raiju",
              tier: 6,
              col: 0,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: APOPHIS Lance becomes a close-range charging Taser.",
              ranks: [
                "Capstone: APOPHIS Lance morphs into a close-range Shocking Taser whose damage ramps up the longer the Action Skill button is held."
              ]
            },
            {
              id: "rafa_project_basilisk",
              name: "Project Basilisk",
              tier: 6,
              col: 1,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: APOPHIS Lance fires a splitting Corrosive blob.",
              ranks: [
                "Capstone: APOPHIS Lance fires a Corrosive blob that splits into several smaller blobs when it detonates, spreading Corrosive Damage across multiple enemies."
              ]
            },
            {
              id: "rafa_project_gorgon",
              name: "Project Gorgon",
              tier: 6,
              col: 2,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: APOPHIS Lance becomes a chaining Incendiary laser beam.",
              ranks: [
                "Capstone: APOPHIS Lance becomes a beam laser that passes through enemies, dealing Incendiary Damage and chaining to more enemies the longer the Action Skill button is held."
              ]
            }
          ]
        },
        {
          id: "rafa_expedite",
          name: "Expedite (Arc-Knives)",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "rafa_arc_knives_action",
              name: "Arc-Knives",
              tier: 0,
              col: 1,
              maxPoints: 1,
              type: "action",
              description: "Action Skill: Twin energy blades for close-range marking and mobility.",
              ranks: [
                "Rafa summons twin energy blades, increasing his mobility. Melee attacks with the blades apply Marks to enemies; marked enemies take bonus Damage from all sources. Dash forward for a Shock-infused strike that hits multiple enemies. Activating Blade Fury unleashes a powerful Shock whirlwind that hits all marked enemies and ends the skill, dealing a massive finishing blow."
              ]
            },
            {
              id: "rafa_altered_cabron",
              name: "Altered Cabron",
              tier: 1,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Kills heal Rafa; healing grants stacking Corrosive bonus damage and Move Speed.",
              ranks: [
                "Rank 1: Whenever Rafa kills an enemy while Arc-Knives are active, he restores a portion of his Health. Whenever Rafa gains Health, he deals bonus Corrosive Damage with all attacks and gains increased Movement Speed; this effect can stack.",
                "Rank 2: Healing on kill increased; bonus Corrosive Damage increased.",
                "Rank 3: Healing and Corrosive Damage bonus increased further.",
                "Rank 4: Healing and Corrosive Damage bonus increased further still.",
                "Rank 5: Healing, Corrosive Damage bonus, and stack cap reach their maximum values."
              ]
            },
            {
              id: "rafa_mark_damage",
              name: "Marked Man",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increases the bonus damage dealt to Marked enemies.",
              ranks: [
                "Rank 1: Marked enemies take additional increased damage from Rafa's attacks.",
                "Rank 2: Bonus damage increased.",
                "Rank 3: Bonus damage increased further.",
                "Rank 4: Bonus damage increased further still.",
                "Rank 5: Bonus damage reaches its maximum value."
              ]
            },
            {
              id: "rafa_melee_speed",
              name: "Quickdraw Blades",
              tier: 2,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increased Melee Attack Speed while Arc-Knives are active.",
              ranks: [
                "Rank 1: Rafa's Melee Attack Speed is increased while Arc-Knives are active.",
                "Rank 2: Attack Speed increased further.",
                "Rank 3: Attack Speed increased further still.",
                "Rank 4: Attack Speed increased further still.",
                "Rank 5: Attack Speed reaches its maximum value."
              ]
            },
            {
              id: "rafa_dead_man_walking",
              name: "Dead Man Walking",
              tier: 3,
              col: 0,
              maxPoints: 1,
              type: "augment",
              description: "Augment: Arc-Knives persist past their Duration at a Health cost.",
              ranks: [
                "Augment: Arc-Knives no longer end when their Duration runs out; instead, they only end when Rafa enters Fight For Your Life or activates Blade Fury. While the skill's Duration is depleted, Rafa loses Health over time instead."
              ]
            },
            {
              id: "rafa_mark_spread",
              name: "Contagion Mark",
              tier: 3,
              col: 2,
              maxPoints: 1,
              type: "augment",
              description: "Augment: Marks spread from killed enemies to nearby targets.",
              ranks: [
                "Augment: When a Marked enemy dies, the Mark spreads to a nearby unmarked enemy, helping maintain Mark uptime across multiple targets."
              ]
            },
            {
              id: "rafa_corrosive_focus",
              name: "Acid Wash",
              tier: 4,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increased Corrosive Damage and Corrosive Status Effect Damage.",
              ranks: [
                "Rank 1: Rafa gains increased Corrosive Damage and Corrosive Status Effect Damage.",
                "Rank 2: Bonus increased.",
                "Rank 3: Bonus increased further.",
                "Rank 4: Bonus increased further still.",
                "Rank 5: Bonus reaches its maximum value."
              ]
            },
            {
              id: "rafa_blade_fury_power",
              name: "Final Cut",
              tier: 5,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increases Blade Fury's finishing damage.",
              ranks: [
                "Rank 1: Blade Fury's finishing Damage is increased.",
                "Rank 2: Damage increased further.",
                "Rank 3: Damage increased further still.",
                "Rank 4: Damage increased further still.",
                "Rank 5: Damage reaches its maximum value."
              ]
            },
            {
              id: "rafa_galvanic_panic",
              name: "Galvanic Panic",
              tier: 6,
              col: 1,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Melee hits fire Acid gliders; killing restores Duration.",
              ranks: [
                "Capstone: Fires an Acid STRM Glider at an enemy in Rafa's view whenever he performs a melee attack while Arc-Knives are active. The glider deals Corrosive splash damage scaling with how many enemies are currently marked. Killing an enemy while Arc-Knives are active restores Action Skill Duration. Activating Blade Fury fires a volley of gliders in front of Rafa, ending Arc-Knives."
              ]
            }
          ]
        }
      ]
    },

    /* ===================== C4SH — THE HUSTLER ===================== */
    {
      id: "c4sh",
      name: "C4SH",
      title: "The Hustler",
      trees: [
        {
          id: "c4sh_high_roller",
          name: "High Roller (Jackpot)",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "c4sh_jackpot_action",
              name: "Jackpot",
              tier: 0,
              col: 1,
              maxPoints: 1,
              type: "action",
              description: "Action Skill: Deploy a luck-amplifying holographic casino machine.",
              ranks: [
                "C4SH deploys a holographic Jackpot machine that pulses fortune energy outward, causing nearby enemies to drop bonus loot on death and granting C4SH a Lucky streak. During the Lucky streak, C4SH's attacks have a chance to trigger bonus hits that deal Kinetic Damage. Kills refresh the Lucky streak duration."
              ]
            },
            {
              id: "c4sh_ante_up",
              name: "Ante Up",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Gun Damage increases with consecutive hits on the same enemy.",
              ranks: [
                "Rank 1: Each consecutive hit on the same enemy slightly increases C4SH's Gun Damage to that target, stacking up to 3 times.",
                "Rank 2: Stack cap and per-stack bonus increased.",
                "Rank 3: Stack cap and per-stack bonus increased further.",
                "Rank 4: Stack cap and per-stack bonus increased further still.",
                "Rank 5: Stack cap and per-stack bonus reach their maximum values."
              ]
            },
            {
              id: "c4sh_loaded_dice",
              name: "Loaded Dice",
              tier: 1,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increases critical hit chance at the cost of some max health.",
              ranks: [
                "Rank 1: C4SH gains a small increase to Critical Hit Chance but has slightly reduced Maximum Health.",
                "Rank 2: Critical Hit Chance further increased; health penalty unchanged.",
                "Rank 3: Critical Hit Chance increased further.",
                "Rank 4: Critical Hit Chance increased further still.",
                "Rank 5: Critical Hit Chance reaches its maximum bonus."
              ]
            },
            {
              id: "c4sh_all_in",
              name: "All In",
              tier: 1,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Kill Skill: bonus damage after a kill scales with current Lucky streak.",
              ranks: [
                "Rank 1: Kill Skill. After killing an enemy, C4SH gains a brief damage bonus that scales with the number of stacks in the current Lucky streak.",
                "Rank 2: Damage bonus increased.",
                "Rank 3: Damage bonus increased further.",
                "Rank 4: Damage bonus increased further still.",
                "Rank 5: Damage bonus reaches its maximum value."
              ]
            },
            {
              id: "c4sh_double_down",
              name: "Double Down",
              tier: 2,
              col: 0,
              maxPoints: 1,
              type: "augment",
              description: "Augment: Jackpot fires twin fortune bolts instead of pulsing.",
              ranks: [
                "Augment: Jackpot fires twin fortune bolts that seek nearby enemies, dealing Kinetic Damage and applying a brief slow. Enemies hit by both bolts take bonus Damage."
              ]
            },
            {
              id: "c4sh_house_cut",
              name: "House Cut",
              tier: 2,
              col: 2,
              maxPoints: 1,
              type: "augment",
              description: "Augment: Lucky streak grants a portion of damage as healing.",
              ranks: [
                "Augment: While C4SH has an active Lucky streak, a portion of all Gun Damage dealt is returned as Health (Lifesteal). The lifesteal percentage scales with Lucky streak stacks."
              ]
            },
            {
              id: "c4sh_sure_bet",
              name: "Sure Bet",
              tier: 3,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increases Jackpot duration and Lucky streak stack cap.",
              ranks: [
                "Rank 1: Jackpot's active duration is extended and C4SH's Lucky streak can stack one additional time.",
                "Rank 2: Duration and stack cap increased further.",
                "Rank 3: Duration and stack cap increased further still.",
                "Rank 4: Duration and stack cap increased further still.",
                "Rank 5: Duration and stack cap reach their maximum values."
              ]
            },
            {
              id: "c4sh_hot_streak",
              name: "Hot Streak",
              tier: 4,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Each Lucky streak stack also boosts fire rate.",
              ranks: [
                "Rank 1: Each stack of Lucky streak grants a small bonus to Fire Rate.",
                "Rank 2: Fire Rate bonus per stack increased.",
                "Rank 3: Fire Rate bonus per stack increased further.",
                "Rank 4: Fire Rate bonus per stack increased further still.",
                "Rank 5: Fire Rate bonus per stack reaches its maximum value."
              ]
            },
            {
              id: "c4sh_wildcards",
              name: "Wildcards",
              tier: 4,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Bonus hits from Lucky streak can chain to nearby enemies.",
              ranks: [
                "Rank 1: Lucky streak bonus hits have a small chance to chain to a nearby enemy, dealing reduced Damage.",
                "Rank 2: Chain chance and chain damage increased.",
                "Rank 3: Chain chance and chain damage increased further.",
                "Rank 4: Chain chance and chain damage increased further still.",
                "Rank 5: Chain chance and chain damage reach their maximum values."
              ]
            },
            {
              id: "c4sh_press_your_luck",
              name: "Press Your Luck",
              tier: 5,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Lucky streak stacks persist on kill, refreshing their duration.",
              ranks: [
                "Rank 1: Killing an enemy resets the decay timer on all current Lucky streak stacks instead of consuming them.",
                "Rank 2: Kill also grants a brief burst of bonus Damage.",
                "Rank 3: Bonus Damage burst increased.",
                "Rank 4: Bonus Damage burst increased further.",
                "Rank 5: Bonus Damage burst reaches its maximum value."
              ]
            },
            {
              id: "c4sh_jackpot_capstone",
              name: "Grand Prize",
              tier: 6,
              col: 1,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Maximum Lucky streak stacks cause Jackpot to fire automatically.",
              ranks: [
                "Capstone: When C4SH reaches maximum Lucky streak stacks, Jackpot activates automatically with no cooldown cost. While at maximum stacks, all bonus hits deal double Damage and Jackpot's pulse radius is doubled."
              ]
            }
          ]
        },
        {
          id: "c4sh_fast_talk",
          name: "Fast Talk (Con Artist)",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "c4sh_con_artist_action",
              name: "Con Artist",
              tier: 0,
              col: 1,
              maxPoints: 1,
              type: "action",
              description: "Action Skill: Disguise as an enemy faction for a duration.",
              ranks: [
                "C4SH disguises herself as a member of the nearest enemy faction, causing enemies to ignore her for a Duration or until she deals damage. While disguised, C4SH deals increased Damage with the first shot after breaking disguise. Melee attacks can be used during disguise without breaking it."
              ]
            },
            {
              id: "c4sh_silver_tongue",
              name: "Silver Tongue",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increases Action Skill Duration and Cooldown Rate.",
              ranks: [
                "Rank 1: Con Artist's disguise duration is extended and its Cooldown Rate is slightly increased.",
                "Rank 2: Duration and Cooldown Rate bonuses increased.",
                "Rank 3: Duration and Cooldown Rate bonuses increased further.",
                "Rank 4: Duration and Cooldown Rate bonuses increased further still.",
                "Rank 5: Duration and Cooldown Rate bonuses reach their maximum values."
              ]
            },
            {
              id: "c4sh_sleight_of_hand",
              name: "Sleight of Hand",
              tier: 1,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increases Swap Speed and grants bonus damage after a weapon swap.",
              ranks: [
                "Rank 1: C4SH swaps weapons faster and gains a brief damage bonus after swapping.",
                "Rank 2: Swap Speed and damage bonus increased.",
                "Rank 3: Swap Speed and damage bonus increased further.",
                "Rank 4: Swap Speed and damage bonus increased further still.",
                "Rank 5: Swap Speed and damage bonus reach their maximum values."
              ]
            },
            {
              id: "c4sh_escape_artist",
              name: "Escape Artist",
              tier: 1,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Taking damage has a chance to briefly grant invisibility.",
              ranks: [
                "Rank 1: When C4SH takes damage, she has a small chance to briefly turn invisible, making enemies lose track of her.",
                "Rank 2: Invisibility chance and duration increased.",
                "Rank 3: Invisibility chance and duration increased further.",
                "Rank 4: Invisibility chance and duration increased further still.",
                "Rank 5: Invisibility chance and duration reach their maximum values."
              ]
            },
            {
              id: "c4sh_switcheroo",
              name: "Switcheroo",
              tier: 2,
              col: 0,
              maxPoints: 1,
              type: "augment",
              description: "Augment: Breaking disguise creates a decoy that draws fire.",
              ranks: [
                "Augment: When Con Artist's disguise breaks (by taking damage or by attacking), C4SH leaves behind a holographic decoy that briefly taunts nearby enemies, drawing their fire for a short Duration."
              ]
            },
            {
              id: "c4sh_inside_job",
              name: "Inside Job",
              tier: 2,
              col: 2,
              maxPoints: 1,
              type: "augment",
              description: "Augment: While disguised, Melee attacks deal bonus damage and refresh disguise.",
              ranks: [
                "Augment: C4SH's Melee attacks deal significantly increased Damage while Con Artist is active. A successful Melee kill during disguise refreshes the disguise Duration without triggering a cooldown."
              ]
            },
            {
              id: "c4sh_grifter",
              name: "Grifter",
              tier: 3,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Kills grant a stacking bonus to movement speed and damage.",
              ranks: [
                "Rank 1: Killing an enemy grants a small stack of Grift, increasing Movement Speed and Gun Damage. Stacks decay after a short duration without a kill.",
                "Rank 2: Per-stack bonus and maximum stacks increased.",
                "Rank 3: Per-stack bonus and maximum stacks increased further.",
                "Rank 4: Per-stack bonus and maximum stacks increased further still.",
                "Rank 5: Per-stack bonus and maximum stacks reach their maximum values."
              ]
            },
            {
              id: "c4sh_marked_cards",
              name: "Marked Cards",
              tier: 4,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "First shot after a reload deals bonus Kinetic damage.",
              ranks: [
                "Rank 1: The first bullet fired after a reload deals bonus Kinetic Damage.",
                "Rank 2: Bonus damage increased.",
                "Rank 3: Bonus damage increased further.",
                "Rank 4: Bonus damage increased further still.",
                "Rank 5: Bonus damage reaches its maximum value."
              ]
            },
            {
              id: "c4sh_smoke_and_mirrors",
              name: "Smoke and Mirrors",
              tier: 4,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Reduces damage taken while moving at full speed.",
              ranks: [
                "Rank 1: C4SH takes slightly reduced damage while moving at or near full movement speed.",
                "Rank 2: Damage reduction increased.",
                "Rank 3: Damage reduction increased further.",
                "Rank 4: Damage reduction increased further still.",
                "Rank 5: Damage reduction reaches its maximum value."
              ]
            },
            {
              id: "c4sh_ace_up_the_sleeve",
              name: "Ace Up the Sleeve",
              tier: 5,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Final shot in a magazine has a chance to not consume ammo.",
              ranks: [
                "Rank 1: The last shot in C4SH's magazine has a chance to not consume ammo and deal bonus Damage.",
                "Rank 2: Chance and bonus damage increased.",
                "Rank 3: Chance and bonus damage increased further.",
                "Rank 4: Chance and bonus damage increased further still.",
                "Rank 5: Chance and bonus damage reach their maximum values."
              ]
            },
            {
              id: "c4sh_mastermind",
              name: "Mastermind",
              tier: 6,
              col: 1,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Con Artist automatically re-activates after breaking disguise.",
              ranks: [
                "Capstone: After Con Artist's disguise breaks, C4SH automatically re-activates it after a brief 3-second delay with no Cooldown cost. This free re-activation can only occur once per original activation of Con Artist. While re-activating, C4SH deals increased Damage."
              ]
            }
          ]
        },
        {
          id: "c4sh_black_market",
          name: "Black Market (Contraband)",
          tierThresholds: [0, 5, 10, 15, 20, 25],
          skills: [
            {
              id: "c4sh_contraband_action",
              name: "Contraband",
              tier: 0,
              col: 1,
              maxPoints: 1,
              type: "action",
              description: "Action Skill: Throw an illegal device that creates a hazard zone.",
              ranks: [
                "C4SH throws a Contraband device that detonates on impact, creating a persistent hazard zone. Enemies entering the zone are slowed and take Corrosive Damage over time. Allies in the zone gain increased Loot Drop chance from enemies they kill. The device can be detonated early by pressing Action Skill again."
              ]
            },
            {
              id: "c4sh_corrosive_contacts",
              name: "Corrosive Contacts",
              tier: 1,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Increases Corrosive Damage and Status Effect Damage.",
              ranks: [
                "Rank 1: C4SH gains a small increase to Corrosive Damage and Corrosive Status Effect Damage.",
                "Rank 2: Bonuses increased.",
                "Rank 3: Bonuses increased further.",
                "Rank 4: Bonuses increased further still.",
                "Rank 5: Bonuses reach their maximum values."
              ]
            },
            {
              id: "c4sh_fence",
              name: "Fence",
              tier: 1,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Increases money and item rarity dropped by enemies.",
              ranks: [
                "Rank 1: Enemies drop slightly more money and have a small increased chance to drop higher-rarity items.",
                "Rank 2: Money and rarity bonuses increased.",
                "Rank 3: Money and rarity bonuses increased further.",
                "Rank 4: Money and rarity bonuses increased further still.",
                "Rank 5: Money and rarity bonuses reach their maximum values."
              ]
            },
            {
              id: "c4sh_kickback",
              name: "Kickback",
              tier: 1,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Picking up money grants a brief gun damage bonus.",
              ranks: [
                "Rank 1: Picking up a money drop grants a small Gun Damage bonus for a short Duration.",
                "Rank 2: Gun Damage bonus increased.",
                "Rank 3: Gun Damage bonus increased further.",
                "Rank 4: Gun Damage bonus increased further still.",
                "Rank 5: Gun Damage bonus reaches its maximum value."
              ]
            },
            {
              id: "c4sh_proximity_mine",
              name: "Proximity Mine",
              tier: 2,
              col: 0,
              maxPoints: 1,
              type: "augment",
              description: "Augment: Contraband device becomes a proximity mine that explodes on enemies.",
              ranks: [
                "Augment: The Contraband device is replaced with a proximity mine that arms after 1 second and detonates when an enemy steps near it, dealing high Explosive Damage. Up to 3 mines can be active at once."
              ]
            },
            {
              id: "c4sh_black_market_deal",
              name: "Black Market Deal",
              tier: 2,
              col: 2,
              maxPoints: 1,
              type: "augment",
              description: "Augment: Contraband zone also debuffs enemies with reduced damage output.",
              ranks: [
                "Augment: Enemies inside the Contraband hazard zone deal reduced Damage to C4SH and her allies for as long as they remain in the zone."
              ]
            },
            {
              id: "c4sh_under_the_table",
              name: "Under the Table",
              tier: 3,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Corrosive Status Effects applied by C4SH reduce enemy armor.",
              ranks: [
                "Rank 1: Enemies affected by C4SH's Corrosive Status Effects have slightly reduced Armor, causing them to take more damage.",
                "Rank 2: Armor reduction increased.",
                "Rank 3: Armor reduction increased further.",
                "Rank 4: Armor reduction increased further still.",
                "Rank 5: Armor reduction reaches its maximum value."
              ]
            },
            {
              id: "c4sh_laundering",
              name: "Laundering",
              tier: 4,
              col: 0,
              maxPoints: 5,
              type: "passive",
              description: "Money collected converts to a temporary max health bonus.",
              ranks: [
                "Rank 1: A portion of money collected is converted into a temporary Maximum Health bonus that decays slowly over time.",
                "Rank 2: Conversion rate and health bonus increased.",
                "Rank 3: Conversion rate and health bonus increased further.",
                "Rank 4: Conversion rate and health bonus increased further still.",
                "Rank 5: Conversion rate and health bonus reach their maximum values."
              ]
            },
            {
              id: "c4sh_dirty_money",
              name: "Dirty Money",
              tier: 4,
              col: 2,
              maxPoints: 5,
              type: "passive",
              description: "Spending money at vending machines grants a stacking damage buff.",
              ranks: [
                "Rank 1: Spending money at vending machines grants a small stack of Dirty Money, increasing Gun Damage. Stacks persist until the next area transition.",
                "Rank 2: Per-stack bonus and maximum stacks increased.",
                "Rank 3: Per-stack bonus and maximum stacks increased further.",
                "Rank 4: Per-stack bonus and maximum stacks increased further still.",
                "Rank 5: Per-stack bonus and maximum stacks reach their maximum values."
              ]
            },
            {
              id: "c4sh_contraband_cache",
              name: "Contraband Cache",
              tier: 5,
              col: 1,
              maxPoints: 5,
              type: "passive",
              description: "Reduces Contraband cooldown; killing enemies inside the zone drops bonus ammo.",
              ranks: [
                "Rank 1: Contraband's Cooldown is slightly reduced and enemies killed inside the hazard zone drop one bonus ammo pack.",
                "Rank 2: Cooldown reduction increased; ammo drop value increased.",
                "Rank 3: Cooldown reduction increased further.",
                "Rank 4: Cooldown reduction increased further still.",
                "Rank 5: Cooldown reduction and ammo drop value reach their maximum."
              ]
            },
            {
              id: "c4sh_crime_pays",
              name: "Crime Pays",
              tier: 6,
              col: 1,
              maxPoints: 1,
              type: "capstone",
              description: "Capstone: Killing enemies grants stacking bonus damage that converts to money on death.",
              ranks: [
                "Capstone: Each enemy C4SH kills grants a stack of Crime Pays, increasing Gun Damage and Corrosive Damage. Stacks are lost when C4SH goes into Fight for Your Life — but each stack is converted into a money drop, giving her a better chance of getting a Second Wind from a lucky enemy."
              ]
            }
          ]
        }
      ]
    }
  ]
};
