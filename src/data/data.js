export const scenarios = {
    scenario1: {
      title: "Entering a New Market",
      description: "You are entering a new market. How do you proceed?",
      options: {
        minimal: {
          text: "Minimal content moderation",
          consequence: "Violence breaks out due to unchecked content.",
          nextOptions: {
            engage: {
              text: "Engage in dialogue with affected communities.",
              finalOutcome: "Your engagement builds trust, but violence continues.",
            },
            withdraw: {
              text: "Commit to internal reforms and ethical introspection.",
              finalOutcome: "Your company takes time to rebuild its reputation, losing significant market share.",
            },
            defend: {
              text: "Defend your platform.",
              finalOutcome: "Your stance sparks global protests, leading to significant user loss.",
            },
            educate: {
              text: "Launch a public education campaign about digital responsibility.",
              finalOutcome: "The campaign improves public understanding, but the violence persists.",
            },
            abstain: {
              text: "Abstain from operating in the market until governance improves.",
              finalOutcome: "You avoid immediate harm but lose the opportunity to shape digital ethics in the region.",
            },
          },
        },
        localized: {
          text: "Localized content moderation",
          consequence: "Peace is maintained, but accusations of bias arise.",
          nextOptions: {
            modify: {
              text: "Modify policies.",
              finalOutcome: "Policy changes reduce bias complaints but alienate certain user groups.",
            },
            explain: {
              text: "Explain decisions publicly.",
              finalOutcome: "Transparency earns user trust, but implementation challenges persist.",
            },
            defend: {
              text: "Defend your moderation team.",
              finalOutcome: "Support for the team improves morale but leads to greater scrutiny.",
            },
            educate: {
              text: "Educate users on the rationale behind content decisions.",
              finalOutcome: "User understanding increases, but overall satisfaction remains mixed.",
            },
            empower: {
              text: "Empower local moderators to make decisions.",
              finalOutcome: "Localized decisions improve relevance but increase operational costs.",
            },
          },
        },
        strict: {
          text: "Strict global guidelines",
          consequence: "Users complain about censorship.",
          nextOptions: {
            relax: {
              text: "Relax guidelines.",
              finalOutcome: "Relaxed guidelines boost engagement but lead to misinformation spread.",
            },
            explain: {
              text: "Explain and defend why guidelines are strict.",
              finalOutcome: "Users appreciate the transparency, but some still leave the platform.",
            },
            maintain: {
              text: "Maintain the current policy.",
              finalOutcome: "Engagement drops, but the platform remains ethically strong.",
            },
            board: {
              text: "Put together a community group to advise on guidelines.",
              finalOutcome: "The advisory group helps balance guidelines, earning global recognition.",
            },
          },
        },
      },
    },
    // SCENARIO 2
    scenario2: {
        title: "Balancing Free Speech vs. Hate Speech",
        description: "Reports show that hate speech on your platform is increasing, leading to tensions in multiple countries.",
        options: {
          freeSpeech: {
            text: "Prioritize free speech: Avoid censoring posts unless they explicitly incite violence.",
            consequence: "Unchecked hate speech leads to public outcry and negative press.",
            nextOptions: {
              engage: {
                text: "Engage with advocacy groups to address concerns.",
                finalOutcome: "Your efforts build partnerships but fail to satisfy critics calling for stricter controls.",
              },
              justify: {
                text: "Publicly explain the value of free speech.",
                finalOutcome: "You gain support from freedom advocates but lose trust in communities impacted by hate speech.",
              },
              revise: {
                text: "Revisit policies to balance free speech with safety.",
                finalOutcome: "Your revised policies reduce harm but draw accusations of abandoning core principles.",
              },
            },
          },
          moderateAggressively: {
            text: "Moderate aggressively: Implement AI-based algorithms to detect and remove hate speech automatically.",
            consequence: "Aggressive moderation sparks debates about over-censorship.",
            nextOptions: {
              improveAI: {
                text: "Invest in better AI to reduce false positives.",
                finalOutcome: "Your AI becomes more accurate but struggles with cultural nuances.",
              },
              explain: {
                text: "Explain the importance of curbing harmful content.",
                finalOutcome: "Transparency reduces criticism but does not appease free speech advocates.",
              },
              scaleBack: {
                text: "Scale back the moderation to avoid overreach.",
                finalOutcome: "Scaling back improves user engagement but increases harmful content.",
              },
            },
          },
          communityModeration: {
            text: "Create community-driven moderation: Let users flag problematic posts for review.",
            consequence: "Delays in response time empower users but create critical risks.",
            nextOptions: {
              train: {
                text: "Train moderators for quicker decisions.",
                finalOutcome: "Training improves efficiency but increases operational costs.",
              },
              scale: {
                text: "Expand resources to support community review processes.",
                finalOutcome: "More resources enhance moderation but slow down global implementation.",
              },
              hybrid: {
                text: "Adopt a hybrid approach combining AI and community input.",
                finalOutcome: "Combining AI and community moderation achieves balance but complicates oversight.",
              },
            },
          },
        },
      },
      //SCENARIO 3
      scenario3: {
        title: "Election Interference",
        description: "Your platform is being used to spread political misinformation during an election in a democratic country.",
        options: {
          stayNeutral: {
            text: "Stay neutral: Do not interfere, as your platform does not want to influence politics.",
            consequence: "Harm to democratic processes leads to backlash.",
            nextOptions: {
              justify: {
                text: "Publicly justify staying neutral as a core value.",
                finalOutcome: "You preserve neutrality but face criticism for enabling misinformation.",
              },
              engage: {
                text: "Engage with experts to reevaluate your stance.",
                finalOutcome: "Expert collaboration improves policies but comes too late to affect the election.",
              },
              adapt: {
                text: "Consider adapting policies for future elections.",
                finalOutcome: "Your delayed response harms short-term credibility but strengthens future safeguards.",
              },
            },
          },
          factCheck: {
            text: "Fact-check and flag: Add fact-checking labels to posts identified as misinformation.",
            consequence: "Fact-checking may help, but flagged posts still spread.",
            nextOptions: {
              improve: {
                text: "Improve fact-checking processes for accuracy.",
                finalOutcome: "Improved accuracy reduces harm but cannot completely stop misinformation.",
              },
              educate: {
                text: "Educate users about identifying misinformation.",
                finalOutcome: "User education enhances critical thinking but is slow to show results.",
              },
              incentivize: {
                text: "Reward users who responsibly flag misinformation.",
                finalOutcome: "Incentives improve engagement but introduce risks of misuse.",
              },
            },
          },
          removeMisinformation: {
            text: "Remove misinformation: Take down all posts deemed misleading.",
            consequence: "Strict removal triggers accusations of political bias.",
            nextOptions: {
              justify: {
                text: "Explain your actions as necessary for fair elections.",
                finalOutcome: "You preserve election integrity but alienate opposing factions.",
              },
              collaborate: {
                text: "Work with local authorities to ensure transparency.",
                finalOutcome: "Collaboration builds trust but exposes your platform to political manipulation.",
              },
              mitigate: {
                text: "Implement appeals for contested removals.",
                finalOutcome: "Appeals reduce backlash but slow down the moderation process.",
              },
            },
          },
        },
      },
      //SCENARIO 4
      scenario4: {
        title: "Violence Stemming from Social Media",
        description: "Reports surface that posts on your platform incited violence in a developing country.",
        options: {
          apologize: {
            text: "Apologize and improve: Issue a public apology and promise better moderation tools.",
            consequence: "Regains trust but may damage your reputation.",
            nextOptions: {
              rebuild: {
                text: "Rebuild trust with communities and governments.",
                finalOutcome: "Trust is restored, but your platform faces increased scrutiny.",
              },
              invest: {
                text: "Invest in advanced moderation tools.",
                finalOutcome: "Advanced tools reduce harm but highlight your earlier failures.",
              },
              partner: {
                text: "Partner with NGOs to prevent future incidents.",
                finalOutcome: "NGO collaboration strengthens your response but adds operational complexity.",
              },
            },
          },
          defend: {
            text: "Defend the platform: Highlight that your platform is a tool, not the instigator of violence.",
            consequence: "Defending risks appearing insensitive.",
            nextOptions: {
              shiftFocus: {
                text: "Shift focus to the broader societal issues.",
                finalOutcome: "Focusing on broader issues deflects blame but reduces user trust.",
              },
              doubleDown: {
                text: "Double down on defending your stance.",
                finalOutcome: "Your stance angers stakeholders and further damages your reputation.",
              },
              compromise: {
                text: "Acknowledge some responsibility while clarifying your role.",
                finalOutcome: "Acknowledging responsibility improves public perception but reduces confidence in your platform.",
              },
            },
          },
          withdraw: {
            text: "Withdraw from the country: Temporarily suspend operations to reevaluate policies.",
            consequence: "Prevents immediate harm but alienates users and governments.",
            nextOptions: {
              return: {
                text: "Return to the market with improved policies.",
                finalOutcome: "Your return rebuilds presence but raises questions about your initial withdrawal.",
              },
              consult: {
                text: "Consult local communities before re-entering.",
                finalOutcome: "Consultation improves relevance but slows re-entry.",
              },
              permanentExit: {
                text: "Permanently exit the market to avoid future risks.",
                finalOutcome: "Your exit avoids future harm but damages your global reputation.",
              },
            },
          },
        },
      },
      //SCENARIO 5
      scenario6: {
        title: "Content Moderation Policy by Region",
        description: "You consider tailoring moderation policies for each country based on cultural and political needs.",
        options: {
          globalUniformity: {
            text: "Global uniformity: Apply the same rules across all regions.",
            consequence: "Alienates users in culturally diverse regions.",
            nextOptions: {
              explain: {
                text: "Explain the rationale behind uniformity.",
                finalOutcome: "Transparency improves understanding but does not resolve cultural discontent.",
              },
              adapt: {
                text: "Explore limited adjustments while maintaining global principles.",
                finalOutcome: "Limited adjustments improve engagement but challenge enforcement consistency.",
              },
              defend: {
                text: "Defend the importance of equal rules worldwide.",
                finalOutcome: "Defending uniformity strengthens your principles but alienates diverse regions.",
              },
            },
          },
          regionalCustomization: {
            text: "Regional customization: Create country-specific policies with input from local experts.",
            consequence: "Ensures relevance but increases complexity.",
            nextOptions: {
              streamline: {
                text: "Streamline the customization process.",
                finalOutcome: "Streamlining reduces complexity but sacrifices some regional sensitivity.",
              },
              collaborate: {
                text: "Work with regional teams to address concerns.",
                finalOutcome: "Collaboration improves local alignment but slows execution.",
              },
              scale: {
                text: "Invest in scaling resources to manage complexities.",
                finalOutcome: "Scaling resources improves efficiency but strains operational costs.",
              },
            },
          },
          userDriven: {
            text: "User-driven input: Poll users to influence content moderation policies.",
            consequence: "Risks populist decisions that might ignore ethical considerations.",
            nextOptions: {
              educate: {
                text: "Educate users on the ethical implications of their choices.",
                finalOutcome: "Education improves decision-making but takes significant time to impact.",
              },
              mediate: {
                text: "Balance user input with expert advice.",
                finalOutcome: "Mediation achieves a balanced outcome but complicates the process.",
              },
              pivot: {
                text: "Pivot to a hybrid model of user and expert input.",
                finalOutcome: "A hybrid model balances engagement and expertise but increases complexity.",
              },
            },
          },
        },
      },
      //final consequences
      finalConsequences: {
        apologize: "Your company rebuilds trust but faces challenges.",
        withdraw: "Your platform's growth is stalled.",
        defend: "You lose user trust but maintain operations.",
        modify: "You strike a balance but face ongoing criticism.",
        explain: "Transparency boosts your reputation.",
        relax: "Relaxing guidelines increases user engagement but risks harm.",
        maintain: "Strict policies ensure safety but decrease engagement.",
      },    
  };
  