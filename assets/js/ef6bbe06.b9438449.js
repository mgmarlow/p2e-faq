"use strict";(self.webpackChunkp_2_e_redux=self.webpackChunkp_2_e_redux||[]).push([[585],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),m=n,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1234:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],l={sidebar_position:1,slug:"/"},s="Player FAQ",p={unversionedId:"player-faq",id:"player-faq",title:"Player FAQ",description:"How do I identify items?",source:"@site/docs/player-faq.md",sourceDirName:".",slug:"/",permalink:"/p2e-faq/",editUrl:"https://github.com/mgmarlow/p2e-faq/tree/main/docs/player-faq.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"GM Resources",permalink:"/p2e-faq/gm-tools/resources"}},c={},u=[{value:"How do I identify items?",id:"how-do-i-identify-items",level:2},{value:"How do I heal persistent damage?",id:"how-do-i-heal-persistent-damage",level:2},{value:"When am I dealt persistent damage?",id:"when-am-i-dealt-persistent-damage",level:2},{value:"What happens if I long rest in the dungeon?",id:"what-happens-if-i-long-rest-in-the-dungeon",level:2},{value:"How do I detect hazards?",id:"how-do-i-detect-hazards",level:2},{value:"How should I spend my other combat actions?",id:"how-should-i-spend-my-other-combat-actions",level:2},{value:"How do I get hero points?",id:"how-do-i-get-hero-points",level:2},{value:"How do I escape a grapple?",id:"how-do-i-escape-a-grapple",level:2},{value:"How does cover work?",id:"how-does-cover-work",level:2},{value:"How do I identify a creature?",id:"how-do-i-identify-a-creature",level:2},{value:"When do I use exploration activities?",id:"when-do-i-use-exploration-activities",level:2}],h={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"player-faq"},"Player FAQ"),(0,o.kt)("h2",{id:"how-do-i-identify-items"},"How do I identify items?"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://2e.aonprd.com/Skills.aspx?ID=3&General=true"},"Identify Magic")," action. Note that a success doesn't fully reveal the item, just it's general attributes. The failure cases are important:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Failure:")," You fail to identify the magic and can\u2019t try again for 1 day."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Critical Failure:")," You misidentify the magic as something else of the GM\u2019s choice.")),(0,o.kt)("h2",{id:"how-do-i-heal-persistent-damage"},"How do I heal persistent damage?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"After you take persistent damage, roll a DC 15 flat check to see if you recover from the persistent damage. If you succeed, the condition ends. ",(0,o.kt)("a",{parentName:"p",href:"https://2e.aonprd.com/Conditions.aspx?ID=29"},"Persistent Damage"))),(0,o.kt)("p",null,"Some additional notes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Persistent damage based on rolls are re-rolled every time damage is dealt."),(0,o.kt)("li",{parentName:"ul"},"Receiving healing from a spell or drinking a potion does not immediately end persistent damage."),(0,o.kt)("li",{parentName:"ul"},"Assisting with the recovery may affect how quickly the damage heals. e.g. a skill check assist with some roleplay may reduce the DC to 10."),(0,o.kt)("li",{parentName:"ul"},"Damage normally runs its course after 1 minute if left untreated.")),(0,o.kt)("h2",{id:"when-am-i-dealt-persistent-damage"},"When am I dealt persistent damage?"),(0,o.kt)("p",null,"Unless otherwise noted in the ability description, you do not receive persistent damage immediately when it is applied."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Take persistent damage at the end of your turn."),(0,o.kt)("li",{parentName:"ol"},"Roll a DC 15 flat check to see whether you still have the damage penalty."),(0,o.kt)("li",{parentName:"ol"},"Repeat on your following turns for as long as the persistent damage applies (see: ",(0,o.kt)("a",{href:"#heal-peristent-dmg"},"How do I heal persistent damage?"),").")),(0,o.kt)("h2",{id:"what-happens-if-i-long-rest-in-the-dungeon"},"What happens if I long rest in the dungeon?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://2e.aonprd.com/Rules.aspx?ID=535"},"Surprise encounters!")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sleeping in armor results in poor rest & causes players to wake up ",(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Conditions.aspx?ID=15"},"Fatigued"),".")),(0,o.kt)("p",null,"When an encounter happens,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Roll to randomly determine who's on watch."),(0,o.kt)("li",{parentName:"ul"},"All characters roll initiative, but that doesn't mean they wake up. Sleeping characters roll perception w/ -4 status penalty."),(0,o.kt)("li",{parentName:"ul"},"Characters who are asleep may attempt a perception check to wake at the start of turn (if they aren't awakened by some other force, see ",(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Conditions.aspx?ID=38"},"Unconscious"),").")),(0,o.kt)("h2",{id:"how-do-i-detect-hazards"},"How do I detect hazards?"),(0,o.kt)("p",null,"If there's a minimum proficiency listed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Roll secret perception check only if someone is actively ",(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Activities.aspx?ID=9"},"Searching")," and only if they have the required proficiency rank."),(0,o.kt)("li",{parentName:"ul"},"e.g. ",(0,o.kt)("strong",{parentName:"li"},"Stealth")," +16 (expert): player must be an expert in ",(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Rules.aspx?ID=326"},"Perception")," to enable rolling Perception against the Hazard's Stealth DC of 16.")),(0,o.kt)("p",null,"All other Hazards:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Roll a secret perception check against the Hazard's Stealth DC.")),(0,o.kt)("p",null,"Other notes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hazards with a minimum proficiency cannot be found with ",(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Spells.aspx?ID=66"},"Detect Magic"),".")),(0,o.kt)("h2",{id:"how-should-i-spend-my-other-combat-actions"},"How should I spend my other combat actions?"),(0,o.kt)("p",null,"It\u2019s almost never a good idea to attack three times in the same turn. Instead, spice things up with a few supporting ",(0,o.kt)("a",{parentName:"p",href:"https://2e.aonprd.com/Rules.aspx?ID=173"},"Skill Actions"),"."),(0,o.kt)("p",null,"Useful ",(0,o.kt)("a",{parentName:"p",href:"https://2e.aonprd.com/Rules.aspx?ID=173"},"Skill Actions")," for combat:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Actions.aspx?ID=35"},"Grapple")," (Athletics, Attack)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Actions.aspx?ID=38"},"Shove")," (Athletics, Attack)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Actions.aspx?ID=40"},"Trip")," (Athletics, Attack)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Actions.aspx?ID=41"},"Disarm")," (Trained Athletics, Attack)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Actions.aspx?ID=53"},"Demoralize")," (Intimidation)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Actions.aspx?ID=48"},"Feint")," (Trained Deception)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Actions.aspx?ID=29"},"Tumble Through")," (Acrobatics)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Actions.aspx?ID=62"},"Hide")," (Stealth, Secret)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Actions.aspx?ID=90"},"Take Cover")," (Basic) or ",(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Actions.aspx?ID=98"},"Raise Shield")," (Basic)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Actions.aspx?ID=75"},"Aid")," (Basic)")),(0,o.kt)("p",null,'Actions marked with "Trained" require you to have a proficiency rank of trained or better to use the associated skill. Note that this isn\'t visible on the action pages in archives, you must refer to the associated Skill page, e.g. ',(0,o.kt)("a",{parentName:"p",href:"https://2e.aonprd.com/Skills.aspx?ID=3"},"Athletics"),"."),(0,o.kt)("p",null,"Other notes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Actions with the ",(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Traits.aspx?ID=15"},"Attack")," trait count towards the characters ",(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Rules.aspx?ID=322"},"MAP")," (multiple attack penalty)."),(0,o.kt)("li",{parentName:"ul"},"Movement is also super crucial. Unlike PF1e, most enemies don\u2019t have attacks of opportunity. Combine that with the fact that you get three actions every round and you get loads of opportunity to reposition. Use it!"),(0,o.kt)("li",{parentName:"ul"},"Repositioning can make enemies waste an action on ",(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Actions.aspx?ID=88"},"Stride"),", preventing a ",(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Actions.aspx?ID=89"},"Strike")," or ",(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Rules.aspx?ID=173"},"Skill Action"),".")),(0,o.kt)("h2",{id:"how-do-i-get-hero-points"},"How do I get hero points?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://2e.aonprd.com/Rules.aspx?ID=573"},"Hero points")," are commonly distributed for in-character roleplay moments, smart strategy, or party-wide accomplishments."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Typically, you earn 1 Hero Point per hour.")),(0,o.kt)("h2",{id:"how-do-i-escape-a-grapple"},"How do I escape a grapple?"),(0,o.kt)("p",null,"With the ",(0,o.kt)("a",{parentName:"p",href:"https://2e.aonprd.com/Actions.aspx?ID=79"},"Escape")," action. Choose ONE of the following: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Attempt a check using your unarmed attack modifier against the DC of the effect. OR,"),(0,o.kt)("li",{parentName:"ul"},"Attempt an Acrobatics or Athletics check against the DC of the effect (note: the action still has the Attack trait).")),(0,o.kt)("p",null,"Other notes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Escape includes the ",(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Traits.aspx?ID=15"},"Attack")," trait, meaning it contributes to your ",(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Rules.aspx?ID=322"},"MAP"),"."),(0,o.kt)("li",{parentName:"ul"},"If you critically fail, you cannot attempt an Escape again until next turn.")),(0,o.kt)("h2",{id:"how-does-cover-work"},"How does cover work?"),(0,o.kt)("p",null,"When you're behind an obstacle or another character:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Rules.aspx?ID=459"},"Cover")," passively provides bonuses to AC based on whether the cover is lesser (+1), standard (+2), or greater (+4)."),(0,o.kt)("li",{parentName:"ul"},"Enables the ",(0,o.kt)("a",{parentName:"li",href:"https://2e.aonprd.com/Actions.aspx?ID=90"},"Take Cover")," action to increase Cover bonuses by one increment.")),(0,o.kt)("p",null,"Determine Cover by drawing a line from the center of your space to the center of the target's space:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lesser: line passes through a creature."),(0,o.kt)("li",{parentName:"ul"},"Standard: line passes through terrain or an object."),(0,o.kt)("li",{parentName:"ul"},"Greater: same as standard, but with Take Cover applied.")),(0,o.kt)("p",null,"Cover and ",(0,o.kt)("a",{parentName:"p",href:"https://2e.aonprd.com/Actions.aspx?ID=62"},"Hide")," are closely related:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You must be in standard or greater Cover to Hide."),(0,o.kt)("li",{parentName:"ul"},"If you are behind lesser cover, you must Take Cover before you can Hide."),(0,o.kt)("li",{parentName:"ul"},"Your Stealth check benefits from the Cover circumstance bonus when attempting to Hide. ")),(0,o.kt)("h2",{id:"how-do-i-identify-a-creature"},"How do I identify a creature?"),(0,o.kt)("p",null,"You can identify a creature by attempting a ",(0,o.kt)("a",{parentName:"p",href:"https://2e.aonprd.com/Rules.aspx?ID=563"},"Recall Knowledge")," check with a Skill that matches one of the Creature's ",(0,o.kt)("a",{parentName:"p",href:"https://2e.aonprd.com/Rules.aspx?ID=566"},"Identification Traits"),". Note that you don't learn ",(0,o.kt)("em",{parentName:"p"},"all")," of a creature's traits and abilities on a success."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Success: learn one of the creature's best-known attributes."),(0,o.kt)("li",{parentName:"ul"},"Critical success: same as success, with the addition of learning something subtler, like a weakness or a trigger to a reaction.")),(0,o.kt)("h2",{id:"when-do-i-use-exploration-activities"},"When do I use exploration activities?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://2e.aonprd.com/Rules.aspx?ID=471"},"Exploration Activities")," help inform your GM what actions your character generally performs while dungeon delving. Are you moving stealthily, ",(0,o.kt)("a",{parentName:"p",href:"https://2e.aonprd.com/Rules.aspx?ID=471"},"Avoiding Notice"),"? Or are you ",(0,o.kt)("a",{parentName:"p",href:"https://2e.aonprd.com/Actions.aspx?ID=519"},"Searching")," the halls for hidden doors, traps, and other points of interest?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The purpose of these activities within the game is to clarify what a PC focuses on as they explore rather than being able to unrealistically do all things simultaneously. (GMG, pg. 17)")),(0,o.kt)("p",null,"These actions come into play when you're exploring more generally, outside of any immediate encounter."))}m.isMDXComponent=!0}}]);