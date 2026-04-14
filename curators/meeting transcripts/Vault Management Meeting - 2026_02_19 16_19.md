# 📝 Notes

Feb 19, 2026

## Meeting Feb 19, 2026 at 16:19 SAST

Meeting records [Transcript](?tab=t.eijzcgpbziu5) 

### Summary

Abdirahim Arrale, Dawid Snyders, and Marius Ciubotariu discussed numerous design and feature updates, including concerns about the vault's title and number presentation, postponing the design of a markets table-affecting page, and adding the ability to remove all reserves within allocation settings following a curator request. Key areas of focus for the participants were the manage vault page's terminology and structure, prioritizing the "Curator Docs" link and the landing page's design as marketing tools, and adding a two-link tutorial tool tip and settings modifiability tags to the vault creation flow, while also addressing spam vault filtering and transaction handling. Dawid Snyders agreed to send the completed design to Marius Ciubotariu for review before developer submission, and the participants outlined a new four-slide onboarding modal flow, committing to making significant progress on the design and feature enhancements.

### Details

* **Title and Number Presentation**: Abdirahim Arrale noted that the title and the large number below it were "a bit offputting" and referenced a previous change in the vault. Dawid Snyders suggested that the number should be bigger, and Abdirahim Arrale proposed using the same type as another existing number, specifically "24" ([00:00:00](#00:00:00)).

* **Page Design Timeline**: Abdirahim Arrale mentioned postponing the design of a specific page because it affects the markets table and all other tables ([00:00:00](#00:00:00)). Dawid Snyders agreed that they could address this page at the very end of the process ([00:01:34](#00:01:34)).

* **Allocation Settings Updates**: Abdirahim Arrale confirmed that they added the ability to remove a reserve on the manage allocation section. Dawid Snyders reported a curator request for the ability to set all allocations to zero within the allocation settings ([00:01:34](#00:01:34)).

* **Curator Request Documentation**: Abdirahim Arrale committed to adding a comment to their exploration document to "add remove all reserves" based on the curator request. Dawid Snyders and Abdirahim Arrale briefly discussed the project's size, with Abdirahim Arrale stating it would be a "heavy heavy project" ([00:02:43](#00:02:43)).

* **Design Tool Feature Discovery**: Abdirahim Arrale shared their recent discovery of a "snapping layout" feature that automatically resizes by clicking a "resize to fit" button on the section layout ([00:02:43](#00:02:43)). Dawid Snyders acknowledged the feature, confirming it is a new one ([00:04:16](#00:04:16)).

* **Manage Page Terminology**: The speakers discussed the name of a specific page, with Abdirahim Arrale struggling to pronounce the term "Curator" correctly, which Dawid Snyders repeatedly corrected. Marius Ciubotariu joined the call and exchanged greetings with the participants ([00:04:16](#00:04:16)).

* **Manage Vault Page Overview**: Dawid Snyders summarized the work done by Abdirahim Arrale on the manage vault page, noting that while it looks like a small amount of content, it involved substantial effort. Dawid Snyders stated that they would focus on the flow for creating a vault, which is essentially "what you see is what you get" with many default settings hidden under the 'fees' and 'advance' sections ([00:05:25](#00:05:25)).

* **Design Review and Status**: Marius Ciubotariu asked for the current status, and Dawid Snyders confirmed that the design is complete and ready for Marius Ciubotariu's review before being sent to the developers. They acknowledged that the manage community page still needs an update to remove low-quality or "dog s\*\*\*" markets and vaults, and Dawid Snyders noted that a ticket for this work would need to be created ([00:06:25](#00:06:25)).

* **Spam Vault Filtering**: Marius Ciubotariu specified that dev wallets should be hidden unless explicitly enabled, and they should use a filter to hide vaults below a $100 threshold that do not belong to the connected wallet ([00:09:58](#00:09:58)). Abdirahim Arrale suggested that a simple checkbox labeled "hide spam" would be a good solution ([00:11:41](#00:11:41)).

* **Landing Page Naming and Structure**: Marius Ciubotariu advocated for changing the name of the "manage vault" page, suggesting alternatives like "curator vaults" or "curator market" ([00:14:24](#00:14:24)). They argued that the current name is too generic and ugly, suggesting that the page should act as a marketing tool for Bitwise and other groups interested in creating vaults ([00:28:42](#00:28:42)).

* **Curator Documentation Link**: Marius Ciubotariu emphasized the need for a "Curator Docs" link on the page, expressing frustration that this request, which they had previously made on Slack, had not been documented or saved ([00:24:31](#00:24:31)). Dawid Snyders explained that they had prioritized the manage flow over the landing page, which is why it was not yet addressed ([00:25:41](#00:25:41)).

* **Landing Page Priority and Visuals**: Marius Ciubotariu contended that the landing page is a higher priority than the vault management flow, as it serves as marketing and must look immaculate to avoid the "broken window syndrome" ([00:30:12](#00:30:12)). Abdirahim Arrale clarified that the team's plan was to first complete the settings page for the developers and then return to fix the landing pages for both markets and lending vaults so they would match ([00:30:56](#00:30:56)).

* **Vault Creation Tutorial Links**: During the review of the creation flow, Marius Ciubotariu requested two tool tips with links: one for a "watch tutorial" video and one for an "SDK/API reference". Abdirahim Arrale and Dawid Snyders confirmed they would add these links ([00:32:45](#00:32:45)).

* **Receipt Token Information**: Marius Ciubotariu requested that the "C token" name be changed to "LP token name" and that a visual example of how the token looks in a wallet, such as a screenshot from the Phantom UI, be included ([00:34:00](#00:34:00)). Dawid Snyders agreed to provide the necessary screenshot ([00:36:18](#00:36:18)).

* **Settings Modifiability Tags**: Marius Ciubotariu requested that text be added to key sections, such as the advanced and fee settings, indicating that users can change these options later ([00:36:18](#00:36:18)). Abdirahim Arrale suggested the text could be "Optional because you can change later" for clarity ([00:37:16](#00:37:16)).

* **Default Vault View**: Marius Ciubotariu suggested changing the default tab view for a new vault from the detailed settings/analytics to a "Vault Overview," which would show what regular users see ([00:37:16](#00:37:16)). They argued this would be less overwhelming and allow the curator to see the user experience ([00:39:48](#00:39:48)).

* **Vault Permalinks and Deposit Forms**: Marius Ciubotariu requested that the vault overview include a deposit form and a "permalink" or link to the vault's main page on the UI ([00:41:48](#00:41:48)). Abdirahim Arrale proposed placing this permalink at the top of the page ([00:42:58](#00:42:58)).

* **Farm Management Complexity**: Marius Ciubotariu raised concerns about the current rewards section, stating that the farm management for the vaults should be handled directly in the UI, despite Dawid Snyders stating it is a separate, complex product. Marius Ciubotariu simplified the task, describing it as a simple modal with only a few commands to manage two types of farms ([00:45:30](#00:45:30)) ([00:48:44](#00:48:44)).

* **Rewards Management and Terminology**: Abdirahim Arrale confessed they did not know what a "farm" was, clarifying the difficulty they would have designing the interface. Marius Ciubotariu suggested calling it "rewards" instead of "farm" to clarify the purpose, which Abdirahim Arrale confirmed was a better term ([00:50:59](#00:50:59)). Dawid Snyders decided they would not implement this during the call and committed to explaining the requirements to Abdirahim Arrale later, noting that forms management should be its own separate tab ([00:51:47](#00:51:47)).

* **Transaction Handling for Settings**: Marius Ciubotariu criticized the current method of accumulating settings and sending them all at once, suggesting a change-and-apply approach to avoid large, difficult-to-handle transactions ([00:51:47](#00:51:47)). Abdirahim Arrale countered that this approach would require numerous manual multi-signature transaction approval steps ([00:53:25](#00:53:25)).

* **Squad X Integration and Tutorials**: The discussion shifted to using Squad X for transactions, and Abdirahim Arrale suggested integrating it into the front end so users could easily click "open with Squad X" ([00:54:19](#00:54:19)). Marius Ciubotariu emphasized the need for their own tutorial on using Squad X, as most vault managers do not know about it ([00:55:03](#00:55:03)). The speakers agreed that a permanent Squad X tutorial link or a quick-and-catchy carousel with helpful links should be implemented near the beginning of the manage flow ([00:56:22](#00:56:22)).

* **Watch Tutorial Button and Promotional Content**: Marius Ciubotariu proposed adding a "watch tutorial" button that links to a short video, ideally one minute in length, which should highlight everything related to "squads x". This video is intended to be a promotional piece for curators, showing an all-in-one infrastructure for creating vaults, setting them up using Squads X, checking analytics, managing fees, and utilizing the API ([00:59:06](#00:59:06)). Dawid Snyders suggested this could be an onboarding flow ([01:00:04](#01:00:04)).

* **Onboarding Flow Implementation**: The proposed onboarding flow should not cover the entire page, but instead appear as a modal in the middle of the page when a user lands on the site. Abdirahim Arrale mentioned seeing a good explanation modal on OpenSea, and the group discussed using a model with four slides that users can flick through, with the potential for each slide to be a short video or GIF that auto-plays. The team acknowledged that this feature requires a significant development effort because it is considered a massive bet ([01:00:04](#01:00:04)) ([01:02:02](#01:02:02)).

* **Draft Content for Onboarding Slides**: Dawid Snyders outlined the content for the four slides of the onboarding modal. The proposed slides will cover managing vaults, secure management using Squads, viewing in-depth vault analytics, and managing user rewards. Abdirahim Arrale committed to making the design "banging" ([01:03:08](#01:03:08)).

* **Enhancing the Creator/Manager Box**: Dawid Snyders suggested that a much nicer box is needed to communicate to the manager or creator exactly what they are seeing ([01:03:08](#01:03:08)). Abdirahim Arrale mentioned that a flow similar to Stripe's, which shows a preview of how the item looks in production, would be helpful for the creator. The participants quickly moved on from this topic, with Dawid Snyders emphasizing the desire to move through all of Marius Ciubotariu's feedback ([01:04:52](#01:04:52)).

* **Discussion on Stacking Changes**: The group discussed the arrangement of changes, with Marius Ciubotariu expressing concern that having all changes stacked up might be an anti-pattern and a bit nasty. Abdirahim Arrale agreed that many places use a plus button for settings, but they initially stacked the changes because they thought people would have to go into Squads and paste transactions repeatedly ([01:06:47](#01:06:47)). They agreed to look into optimizing this flow, perhaps by giving users the option to either apply current changes immediately or do more changes ([01:07:37](#01:07:37)).

* **Conclusion of the Call**: The discussion briefly touched on allocation settings before Marius Ciubotariu had to leave the call for another engagement ([01:07:37](#01:07:37)). Dawid Snyders agreed to send the transcript, and Abdirahim Arrale committed to running it through Claude for cleanup and continuing the design work. The participants concluded the call, committing to making significant progress ([01:07:37](#01:07:37)).

### Suggested next steps

- [ ] Dawid Snyders will create a ticket to remove the dev wallets from the Manage Markets and Tokens and Vaults page.  
- [ ] Abdirahim Arrale will start working on making the curator landing page pretty and nice with interactions right after the current meeting.  
- [ ] Abdirahim Arrale will create a banging design for the onboarding modal, which will be a carousel of GIFs similar to an old OpenC example, to explain the process for curators, and make it appear when someone lands on the page.  
- [ ] Dawid Snyders will think about the content for the onboarding flow with four slides: manage vaults, secure with squads, view vault analytics, and manage user rewards.  
- [ ] Abdirahim Arrale will optimize the change flow so that after a user makes a change, they can either apply the changes straight away or do more changes, rather than stacking all changes.  
- [ ] Abdirahim Arrale will immediately put the transcript into Claude and let it clean it up.  
- [ ] Dawid Snyders will send the transcript to Abdirahim Arrale.

*You should review Gemini's notes to make sure they're accurate. [Get tips and learn how Gemini takes notes](https://support.google.com/meet/answer/14754931)*

*Please provide feedback about using Gemini to take notes in a [short survey.](https://google.qualtrics.com/jfe/form/SV_9vK3UZEaIQKKE7A?confid=AlvzMHYVYjYhvl1Ab5-XDxITOAIIigIgABgDCA&detailid=standard)*

# 📖 Transcript

Feb 19, 2026

## Meeting Feb 19, 2026 at 16:19 SAST \- Transcript

### 00:00:00 {#00:00:00}

   
**Abdirahim Arrale:** Um I uh there is um the only thing that is a bit offputting might be the title and the the big number below here. You know remember that we sh changed it in the vault. This one here. Uh but uh I think it's not it's not too bad but it's  
**Dawid Snyders:** Yeah, but the number should be  
**Abdirahim Arrale:** uh yeah we can do the same number but okay  
**Dawid Snyders:** bigger.  
**Abdirahim Arrale:** she maybe the same type as this one here.  
**Dawid Snyders:** Yeah,  
**Abdirahim Arrale:** 24\.  
**Dawid Snyders:** this 24\. Okay.  
**Abdirahim Arrale:** Yeah.  
**Dawid Snyders:** Yeah, that's better.  
**Abdirahim Arrale:** Uh, what do you think overall?  
**Dawid Snyders:** I think it's good.  
**Abdirahim Arrale:** Nice.  
**Dawid Snyders:** Yeah. The big thing was um that that uh Sylvia is happy with it. Um,  
**Abdirahim Arrale:** Yeah,  
**Dawid Snyders:** yeah. So,  
**Abdirahim Arrale:** also you fix some of the comments.  
**Dawid Snyders:** you know, this this page probably needs love.  
**Abdirahim Arrale:** Appreciate that.  
**Dawid Snyders:** Um,  
**Abdirahim Arrale:** Yeah, for sure. Um,  
**Dawid Snyders:** yeah.  
**Abdirahim Arrale:** I was thinking of doing this page together when uh because it's this one will affect the markets table and like all the other uh the other tables as well.  
   
 

### 00:01:34 {#00:01:34}

   
**Dawid Snyders:** Yeah.  
**Abdirahim Arrale:** So uh I was  
**Dawid Snyders:** Okay. So, let's let's let's we can do that at the very end then.  
**Abdirahim Arrale:** think exactly  
**Dawid Snyders:** That's fine. Okay.  
**Abdirahim Arrale:** um uh yeah so added remove uh what do you call it uh reserve on this uh on manage allocation on the right side here. Uh maybe do this instead.  
**Dawid Snyders:** Yeah. Yeah,  
**Abdirahim Arrale:** Uh nice.  
**Dawid Snyders:** that's good.  
**Abdirahim Arrale:** Um yes. Uh and then I also added the uh I fixed up the the empty state on the detailed uh  
**Dawid Snyders:** Oh, there was there was another thing that um that  
**Abdirahim Arrale:** view.  
**Dawid Snyders:** um um that the uh that one of the curators requested is they want the ability to on the allocation settings to set allocations s to zero. So you can you can um you can do it in the same way that you had this red  
**Abdirahim Arrale:** Okay.  
**Dawid Snyders:** remove reserve. Um you can do also just at the bottom of this page set all allocations to  
   
 

### 00:02:43 {#00:02:43}

   
**Abdirahim Arrale:** Mhm.  
**Dawid Snyders:** zero. Um  
**Abdirahim Arrale:** Okay.  
**Dawid Snyders:** Yeah.  
**Abdirahim Arrale:** Uh can I let me write that in the explor uh exploration too? I will put that as a comment. Um uh add remove uh remove all reserves.  
**Dawid Snyders:** Yeah.  
**Abdirahim Arrale:** That's nice. Good stuff. It's going to be a heavy heavy project.  
**Dawid Snyders:** Yeah.  
**Abdirahim Arrale:** G.  
**Dawid Snyders:** Yeah. I think it's good. Put V and not at the end there.  
**Abdirahim Arrale:** Oh, yeah. Below. Nice.  
**Dawid Snyders:** Look at that.  
**Abdirahim Arrale:** Nice.  
**Dawid Snyders:** All right.  
**Abdirahim Arrale:** I recently found about the uh snapping layout.  
**Dawid Snyders:** Open. Yeah.  
**Abdirahim Arrale:** It resizes automatically. You just click. I didn't know about that.  
**Dawid Snyders:** What is it?  
**Abdirahim Arrale:** There is a if you click on the section uh on the layout, there is like this uh resize to fit button that resizes uh the layout.  
**Dawid Snyders:** Wait, I resize to fit. Oh,  
**Abdirahim Arrale:** Yeah.  
**Dawid Snyders:** I see.  
   
 

### 00:04:16 {#00:04:16}

   
**Abdirahim Arrale:** So, yeah. So, if we do that, if you click on it.  
**Dawid Snyders:** It's cool.  
**Abdirahim Arrale:** Yeah, that's really nice.  
**Dawid Snyders:** Yeah, it's a new one.  
**Abdirahim Arrale:** Um,  
**Dawid Snyders:** Okay,  
**Abdirahim Arrale:** oh sir,  
**Dawid Snyders:** there we go.  
**Abdirahim Arrale:** there was another page for this by the way. Do we have is there another slide chat now about the manage page? It's called creator  
**Dawid Snyders:** Curator.  
**Abdirahim Arrale:** creator creator creator  
**Dawid Snyders:** Curator. Curator.  
**Abdirahim Arrale:** creator Shakira  
**Dawid Snyders:** Curator. Curator.  
**Abdirahim Arrale:** Shakira  
**Dawid Snyders:** That's probably how you say you. You because you speak with an American accent, but curator.  
**Abdirahim Arrale:** feel like I'm switching creator.  
**Dawid Snyders:** Yeah. Yep.  
**Abdirahim Arrale:** Hello Murice.  
**Marius Ciubotariu:** Hey guys,  
**Dawid Snyders:** Yeah, man.  
**Abdirahim Arrale:** Greater doing good.  
**Marius Ciubotariu:** how are you?  
**Dawid Snyders:** Good. Good. All right. Okay. Let's uh let's jump in,  
**Abdirahim Arrale:** Good.  
**Dawid Snyders:** man.  
**Marius Ciubotariu:** Great.  
**Dawid Snyders:** Um it's actually it's actually quite crazy to see this on a single screen.  
   
 

### 00:05:25 {#00:05:25}

   
**Dawid Snyders:** Uh it looks like so like such a small amount of of things, but it's really a s\*\*\* ton of stuff that Obby did. Um so the manage vault page, you're you're in the Figma, right?  
**Marius Ciubotariu:** Yeah.  
**Abdirahim Arrale:** Yeah,  
**Dawid Snyders:** Okay.  
**Abdirahim Arrale:** can just follow David on Figma  
**Dawid Snyders:** Yeah.  
**Abdirahim Arrale:** maybe.  
**Dawid Snyders:** All right. This page still looks dog s\*\*\*.  
**Marius Ciubotariu:** Okay.  
**Dawid Snyders:** Don't worry about it. We're we're going to we're going to update this as well. Um and do markets the same, but we can just focus on the Ling B flow. So, um to be honest, the the what you see is what you get really to be honest. You just you create a vault. There's a f\*\*\* ton of settings here. Um, a lot of the stuff is is under or there's a lot of settings hidden under fees and advance that's just uh just has defaults that Sylvia sets that we that they can go and change if they want, but they don't have to.  
   
 

### 00:06:25 {#00:06:25}

   
**Dawid Snyders:** Right.  
**Marius Ciubotariu:** You're walking too fast for me. I need to go slow on  
**Dawid Snyders:** Okay. Let's let's go slow. Well, to be honest,  
**Marius Ciubotariu:** everything.  
**Dawid Snyders:** this is this is probably the type of thing where you can you can look through it yourself and then we can talk through it as you as you look over it,  
**Marius Ciubotariu:** Yeah.  
**Dawid Snyders:** right?  
**Marius Ciubotariu:** So uh but what but but um a few things to do housekeeping and everything because first of all um what is the status like just tell you what the status is out  
**Dawid Snyders:** The status is it's done.  
**Marius Ciubotariu:** of oh the  
**Dawid Snyders:** You need to review it so we can give it to the devs to build it.  
**Marius Ciubotariu:** design is done okay do what did you  
**Dawid Snyders:** Yeah.  
**Marius Ciubotariu:** did we do the thing about Um, did we do the thing about um removing the dog s\*\*\* markets and token and  
**Dawid Snyders:** Uh,  
**Marius Ciubotariu:** vaults?  
**Dawid Snyders:** I haven't been on manage commun. Let me see. No, we still have not done that.  
   
 

### 00:07:41

   
**Marius Ciubotariu:** Is there a ticket for that?  
**Dawid Snyders:** Uh, let me check. I'll just create it. Doesn't seem like there is.  
**Marius Ciubotariu:** Okay.  
**Dawid Snyders:** Okay. And you want to call it curators, right?  
**Marius Ciubotariu:** What?  
**Dawid Snyders:** You want to call it curators. Okay.  
**Marius Ciubotariu:** Yeah.  
**Dawid Snyders:** Community finance. Yeah. Great. Um, what do we want to make the threshold or do we  
**Marius Ciubotariu:** What  
**Dawid Snyders:** only do you want to have a threshold for it or how do you want to show  
**Marius Ciubotariu:** I mean I mean all the dev wallets have to be hidden unless explicitly enabled. somehow like most of the do stuff is from like Yeah, there has to be several  
**Dawid Snyders:** Yep. Okay.  
**Marius Ciubotariu:** filters.  
**Dawid Snyders:** Um Yeah. But should we just hide the should we just hide um everything that's from dev wallet?  
**Marius Ciubotariu:** No. Yeah. Plus more things. But I mean, Andre can test things. You have to find a way to filter them.  
   
 

### 00:09:58 {#00:09:58}

   
**Marius Ciubotariu:** uh like um you can show everything from your wallet and other people's wallets and you can have like a temporary filter on the top that is always enabled and you can X on it to remove it.  
**Dawid Snyders:** Okay. Okay. So we just add a automatic filter that's um that's there by default and you can close it and then you see all the bolts. Why can we not just why can we not just hide the all the dev wallet vaults unless you're connected with that wallet by default I mean  
**Abdirahim Arrale:** Sort that out. Looks crazy.  
**Marius Ciubotariu:** That's the question  
**Dawid Snyders:** Um,  
**Marius Ciubotariu:** David.  
**Dawid Snyders:** should we not just like make a minimum deposit amount threshold?  
**Marius Ciubotariu:** That is one thing. Yes, we can just Yeah, we can just sort that. Anything uh anything that is above $100 and is not your wallet. Anything below $100 and is not your wallet or is not a public. No, no. All the volume ones have 100\. So, anything that's below 100 and is not yours is hidden.  
   
 

### 00:11:41 {#00:11:41}

   
**Marius Ciubotariu:** $100  
**Dawid Snyders:** Yeah. Yeah.  
**Marius Ciubotariu:** threshold.  
**Dawid Snyders:** Uh hidden by default and you can you can close that.  
**Abdirahim Arrale:** Just like a filter,  
**Dawid Snyders:** You can you you can you can remove the filter.  
**Abdirahim Arrale:** like a check box.  
**Dawid Snyders:** Um so yeah,  
**Marius Ciubotariu:** You know how to know how you  
**Dawid Snyders:** you can you you can just add a hide spam  
**Marius Ciubotariu:** have  
**Dawid Snyders:** checkbox.  
**Abdirahim Arrale:** Yeah, just a checkbox would be  
**Marius Ciubotariu:** Yeah. And should be named by  
**Abdirahim Arrale:** nice.  
**Dawid Snyders:** Yeah. Can you can you just add them very quickly  
**Marius Ciubotariu:** default.  
**Dawid Snyders:** here?  
**Abdirahim Arrale:** Oh, I should add it. Okay. Uh, we can just  
**Dawid Snyders:** Yeah, we have a component for this one. I'm adding Yep.  
**Abdirahim Arrale:** Oh, you're adding it. Nice. Yeah.  
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** Thanks.  
**Dawid Snyders:** Right. Okay. Let's make it a thousand  
**Marius Ciubotariu:** 100\.  
**Dawid Snyders:** 100\. Okay.  
**Marius Ciubotariu:** Yeah.  
**Dawid Snyders:** With less than 100 connected wallet.  
   
 

### 00:14:24 {#00:14:24}

   
**Dawid Snyders:** Okay, done. Cool. Right, let's uh let's move on.  
**Marius Ciubotariu:** One sec. f\*\*\*\*\* sake.  
**Dawid Snyders:** Do we have a limited order GitHub repo? No.  
**Marius Ciubotariu:** Yeah. So, I just need two minutes. Okay. I uh I see. Okay, I'm done.  
**Dawid Snyders:** All  
**Marius Ciubotariu:** Okay, so  
**Dawid Snyders:** right.  
**Marius Ciubotariu:** where are we looking again? First of all,  
**Dawid Snyders:** Look, man. If we're going to spend 10 minutes looking at the ugliest f\*\*\* list page, then we're not using our time efficiently here. This will be updated. What we what you need to look through is  
**Marius Ciubotariu:** I don't want to call it. Yeah. Okay.  
**Dawid Snyders:** the  
**Marius Ciubotariu:** I don't call it since we're here and we don't speak. I just try to take advantage. I don't think we should call it manage vault.  
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** Manage is just the old artifact. I think we should curator uh arrow vaults  
   
 

### 00:24:31 {#00:24:31}

   
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** creator market or something. It's a really bad name. Looks just generally looks ugly as f\*\*\*. Just calling it manage.  
**Dawid Snyders:** Mhm.  
**Marius Ciubotariu:** I think we need like a different thing that it's curators or call it here like commino curators and then have vaults commino curators. I don't know. It just it's just ugly as f\*\*\* to call it vault. manage vault  
**Dawid Snyders:** Okay. Um  
**Marius Ciubotariu:** and I I wanted a thing called uh curators docs creator docs here but man I've said all of these things before I don't know why they haven't been documented or but  
**Dawid Snyders:** Because we did not spend time on this. We spent time on the actual manage  
**Marius Ciubotariu:** I wrote it on What's the point of me writing stuff on Slack?  
**Dawid Snyders:** flow.  
**Marius Ciubotariu:** It doesn't get saved anywhere if I spend time getting interrupted by 100 things and  
**Dawid Snyders:** That is this is not what Abdi has spent the past  
**Marius Ciubotariu:** I finally get to take a look at some but it should  
   
 

### 00:25:41 {#00:25:41}

   
**Dawid Snyders:** week working on.  
**Marius Ciubotariu:** be part of that should be part of the spec. All the things I requested where is the the you don't have it.  
**Dawid Snyders:** I'm I I I don't even know what to tell you.  
**Marius Ciubotariu:** I'm sure you don't have it anywhere.  
**Dawid Snyders:** Of course,  
**Marius Ciubotariu:** save anywhere that I want to have a creator documentation link.  
**Dawid Snyders:** it's going to be there. I'm working on the actual  
**Marius Ciubotariu:** But where is it? Do you have a save?  
**Dawid Snyders:** documentation.  
**Marius Ciubotariu:** Where is No, I said I want to have a link here to do here's the documentation. Did you save that anywhere?  
**Dawid Snyders:** Yeah,  
**Marius Ciubotariu:** It's lost in the slack.  
**Dawid Snyders:** I did not say to Abdino because I told Abdi  
**Marius Ciubotariu:** And where is it? Where is it saved?  
**Dawid Snyders:** that we do not have to touch this page. Now in my  
**Marius Ciubotariu:** But where is it saved? The thing I asked you, where is it saved?  
**Dawid Snyders:** brain,  
**Marius Ciubotariu:** It's not.  
   
 

### 00:26:24

   
**Marius Ciubotariu:** It's lost. Completely gone,  
**Dawid Snyders:** how can you please tell me how something can be completely gone if I'm actively working on  
**Marius Ciubotariu:** man.  
**Dawid Snyders:** it? I know it needs to be there. I'm working on it as like at this point in time. So I know it needs to be there.  
**Marius Ciubotariu:** I don't believe you.  
**Dawid Snyders:** But but okay whether you believe me or not we can go back and forth  
**Marius Ciubotariu:** That's the thing.  
**Dawid Snyders:** for 10 years but we can let me just add  
**Marius Ciubotariu:** No, but it's the same thing that the spam thing wasn't saved. It's just another one. I'm like, why am I wasting time?  
**Dawid Snyders:** it  
**Marius Ciubotariu:** If I I should just never open Slack. If I am bothering myself to write something on Slack and nobody saves the notes about it, why why am I responding on Slack?  
**Dawid Snyders:** Then can we move  
**Marius Ciubotariu:** Yeah. Okay.  
**Dawid Snyders:** on?  
**Marius Ciubotariu:** Um Okay. So, um I think this should be something else.  
   
 

### 00:27:46

   
**Marius Ciubotariu:** Create vault. Um create manage vaults. Create create and manage creator vaults here. Something like that. Create and manage creator vaults. Yeah. Okay, we should have the curator here. A color called curator.  
**Dawid Snyders:** Ma'am, we did not spend any time on this page. If you are going to spend 30 minutes  
**Marius Ciubotariu:** I'm sorry. Let's do it while I'm here, man. I don't have time to go on a call with you for another week.  
**Dawid Snyders:** going,  
**Marius Ciubotariu:** So, while I'm here, let's just do all the things I want. Can we add a column called curator here with the logo name?  
**Dawid Snyders:** man, this is the worst use of your time. I know what needs to be on this page.  
**Marius Ciubotariu:** man. Just just entertain just just just type. It's fine. I'll just I'll just type  
**Dawid Snyders:** It's not a good use of your time, man.  
**Marius Ciubotariu:** it.  
**Dawid Snyders:** I we I we we we can add it.  
   
 

### 00:28:42 {#00:28:42}

   
**Abdirahim Arrale:** Maybe you could just leave comments everywhere.  
**Dawid Snyders:** Yeah. Leave a  
**Abdirahim Arrale:** Just add comments. Yeah, that's nice.  
**Marius Ciubotariu:** No,  
**Abdirahim Arrale:** And then we can move  
**Marius Ciubotariu:** man. It's I don't agree with you,  
**Dawid Snyders:** C,  
**Marius Ciubotariu:** David. The landing page is what sells it to Bitwise and all these people that want to create f\*\*\*\*\*\* vaults. If we give them a dog s\*\*\* landing page for curator, it's going to look f\*\*\*\*\*\* unmaintained.  
**Dawid Snyders:** but we are not plann we are not planning to give them a do landing  
**Marius Ciubotariu:** I do not think they're not going. We will absolutely will.  
**Dawid Snyders:** page.  
**Marius Ciubotariu:** Absolutely we will.  
**Dawid Snyders:** update.  
**Marius Ciubotariu:** The new design is four months.  
**Dawid Snyders:** Did I did did did we did we say that we are going to update this  
**Marius Ciubotariu:** Okay. by that time  
**Dawid Snyders:** page once we have finished the manage markets UI as well.  
**Marius Ciubotariu:** I don't care man look this thing acts as as marketing as well when we go to all these people and say we're doing creators check creators doc creator.com you know they come  
   
 

### 00:29:30

   
**Dawid Snyders:** Man, I am aware that it needs to be better,  
**Marius Ciubotariu:** and that's what I'm saying  
**Dawid Snyders:** but we have not done it yet. That's not what we're reviewing now.  
**Marius Ciubotariu:** that's why I'm here that's why I'm here so we f\*\*\*\*\*\* do it  
**Dawid Snyders:** But you're not here for that.  
**Abdirahim Arrale:** Okay, let's uh let's leave some  
**Dawid Snyders:** I I can do that without you.  
**Marius Ciubotariu:** Okay,  
**Abdirahim Arrale:** comments.  
**Marius Ciubotariu:** then do you notice me then?  
**Dawid Snyders:** I will.  
**Marius Ciubotariu:** But  
**Dawid Snyders:** But that's we I we're not on this call for you to tell us  
**Marius Ciubotariu:** it's  
**Dawid Snyders:** that.  
**Marius Ciubotariu:** what? Okay.  
**Dawid Snyders:** I agree it needs to be better,  
**Marius Ciubotariu:** What? What do you I asked you what is the status?  
**Dawid Snyders:** but we have not done it yet.  
**Marius Ciubotariu:** I asked you what is the status of the documentation. You said the status is we need to review it. That's why I'm here.  
**Dawid Snyders:** Okay,  
**Abdirahim Arrale:** I  
**Marius Ciubotariu:** You said the statistic.  
   
 

### 00:30:12 {#00:30:12}

   
**Marius Ciubotariu:** I asked you a general start.  
**Dawid Snyders:** we need to we need to re review the manage vault  
**Abdirahim Arrale:** think.  
**Marius Ciubotariu:** What the start of the whole thing? No,  
**Dawid Snyders:** flow.  
**Marius Ciubotariu:** that is not that is like the least that's like on the fifth p fifth is the fifth priority when it comes to curators.  
**Dawid Snyders:** The manage flow is the fifth lowest priority.  
**Marius Ciubotariu:** The landing page first and foremost.  
**Abdirahim Arrale:** Let  
**Marius Ciubotariu:** Yes, it's on the fifth level. Yeah, this is actually the most easy to do.  
**Abdirahim Arrale:** me  
**Dawid Snyders:** I agree.  
**Marius Ciubotariu:** the creator  
**Dawid Snyders:** That's why we haven't done it.  
**Marius Ciubotariu:** creation.  
**Dawid Snyders:** This is the easy part. It's very easy to make this look nice.  
**Marius Ciubotariu:** No, no, it's not.  
**Dawid Snyders:** I agree.  
**Marius Ciubotariu:** You don't you don't  
**Abdirahim Arrale:** can I can I just say something real quick?  
**Marius Ciubotariu:** even  
**Abdirahim Arrale:** The reason we haven't done this properly is because we have to think of markets. They have to match the vibe both the markets and the lending balls.  
   
 

### 00:30:56 {#00:30:56}

   
**Abdirahim Arrale:** So I told uh David that we let's let's finish this so the dev can start working on the settings page and then we'll go back and fix the the landing page for both markets and Lennall so they don't look too  
**Marius Ciubotariu:** Okay, this page, whatever it is, when we give,  
**Abdirahim Arrale:** off.  
**Marius Ciubotariu:** we're going to we're going to give we're going to give people this thing. We're going to give to Bitwise to Rockaway to we're going to say creator.com. When they lo here, they will say, "Oh, oh, I can do all of these things. This is amazing. I love it. It's like everything works for me. It's going to act as marketing.  
**Abdirahim Arrale:** M I agree.  
**Marius Ciubotariu:** The landing page for curators will act in  
**Abdirahim Arrale:** We're definitely going to make it pretty and really nice with interactions and stuff like that.  
**Marius Ciubotariu:** marketing." Yeah.  
**Abdirahim Arrale:** Uh  
**Marius Ciubotariu:** Okay. So that's why remember David when I asked you three weeks ago I said interrupt do stop everything you do and remove the spam vaults from I asked you three weeks ago said okay I'm doing it for that reason because if it looks like unmaintained it it has the broken window syndrome and say this is dog s\*\*\* why they f\*\*\*\*\*\* use this piece of s\*\*\* product this has to look immaculate  
   
 

### 00:31:58

   
**Dawid Snyders:** I fully agree with  
**Abdirahim Arrale:** H I can start working on that uh right after  
**Dawid Snyders:** you.  
**Marius Ciubotariu:** Okay.  
**Abdirahim Arrale:** this.  
**Marius Ciubotariu:** Okay. So then now you understand my uh my intention. So you you tell me when you need my feedback again. Do you want me to review something else  
**Dawid Snyders:** Well,  
**Marius Ciubotariu:** now?  
**Dawid Snyders:** it would be nice to review the actual thing which we got on this call for you to review. Yes. Which is the create and manage vault flow.  
**Marius Ciubotariu:** Okay.  
**Dawid Snyders:** But if you but let me I I can I can preface I can preface it by  
**Marius Ciubotariu:** Yes.  
**Dawid Snyders:** saying if you are happy to say that if Sylvio is happy with this then you are happy with it then we don't have to take up your time and we can leave it.  
**Marius Ciubotariu:** And I I have to be happy too.  
**Dawid Snyders:** Okay. But then let's go through it. So just go through it and we can talk through  
**Marius Ciubotariu:** Okay.  
   
 

### 00:32:45 {#00:32:45}

   
**Marius Ciubotariu:** Um can you add like here I want here a tool tip two tool tips here.  
**Dawid Snyders:** it.  
**Marius Ciubotariu:** One is watch video and one is um uh SDK API reference. I want two two two tool tips here.  
**Abdirahim Arrale:** It's tool tips for what watch video links  
**Dawid Snyders:** Not to tips like links like this. Like like this.  
**Abdirahim Arrale:** right so okay video plus  
**Marius Ciubotariu:** Whatever.  
**Dawid Snyders:** Just this.  
**Abdirahim Arrale:** I'm just leaving a comment now so we don't have to uh watch video plus  
**Dawid Snyders:** Yeah.  
**Abdirahim Arrale:** Oh.  
**Marius Ciubotariu:** Uh watch watch video tutorial. No, watch tutorial and with a watch tutorial with a video link with video log video icon and uh and then one is going to be  
**Abdirahim Arrale:** Yes.  
**Dawid Snyders:** SDK and API  
**Marius Ciubotariu:** um yeah SDK SDK/  
**Dawid Snyders:** reference.  
**Marius Ciubotariu:** API tutorials tutorials.  
**Abdirahim Arrale:** Okay. Good stuff.  
**Marius Ciubotariu:** Okay. Um I think each of them should have like um like a tool tip like I know like underline here when you when you go on it it's it will explain what this mean what this is for.  
   
 

### 00:34:00 {#00:34:00}

   
**Marius Ciubotariu:** So for example for this one it's going to say this is how your vault will look like uh on the page. This is the token that people are are are lending. So each of them should have um this this description will display into the mandate of your be careful about what you say because this represents your vault mandate and what people are reading about you for the description.  
**Abdirahim Arrale:** Uh, is it mandatory by the way? The description.  
**Marius Ciubotariu:** Um, no, it's on the vault  
**Dawid Snyders:** Yes.  
**Abdirahim Arrale:** So, it's okay.  
**Marius Ciubotariu:** page.  
**Abdirahim Arrale:** Okay.  
**Dawid Snyders:** Are we waiting for  
**Marius Ciubotariu:** Oh,  
**Abdirahim Arrale:** Oh,  
**Marius Ciubotariu:** I thought you were taking notes.  
**Abdirahim Arrale:** no.  
**Dawid Snyders:** something?  
**Abdirahim Arrale:** I wrote it down  
**Marius Ciubotariu:** Okay. Um, this should not be called the C token.  
**Abdirahim Arrale:** already.  
**Marius Ciubotariu:** This is going to be called LP token name. Um, actually, yeah, sure. I think here, uh, you want to show a screenshot of Phantom, how it looks in Phantom. So, here, um, you should show like, um, an icon or something.  
   
 

### 00:35:34

   
**Marius Ciubotariu:** what's or like like put something like a what's this logo here and when you click on it it opens a picture of how uh of a wallet holding 10 shares of something and a link to this is the receipt token name and then go get the receipt toker it's  
**Dawid Snyders:** Yeah.  
**Marius Ciubotariu:** going to so I want a screenshot of both how it looks in phantom or when you receive it or something for these  
**Dawid Snyders:** Yeah.  
**Marius Ciubotariu:** two  
**Dawid Snyders:** You know,  
**Marius Ciubotariu:** things.  
**Dawid Snyders:** like a nice nice little like tool dialogue thing.  
**Marius Ciubotariu:** Yeah.  
**Abdirahim Arrale:** are a preview.  
**Marius Ciubotariu:** Yeah. So it should be  
**Abdirahim Arrale:** Is that what you guys are saying?  
**Dawid Snyders:** No,  
**Abdirahim Arrale:** So you can see how it  
**Dawid Snyders:** no, no, no, no, not not live preview.  
**Marius Ciubotariu:** here.  
**Abdirahim Arrale:** look.  
**Dawid Snyders:** Literally just a screenshot from the Phantom UI of another of a different one. Doesn't matter which one.  
**Abdirahim Arrale:** Oh, okay. It's just an example basically.  
**Dawid Snyders:** Just showing. Yeah, exactly.  
**Abdirahim Arrale:** Okay.  
   
 

### 00:36:18 {#00:36:18}

   
**Dawid Snyders:** I'll I'll I'll get you the screenshot.  
**Abdirahim Arrale:** Example.  
**Dawid Snyders:** You just need a nice way of of displaying  
**Abdirahim Arrale:** Okay.  
**Dawid Snyders:** it.  
**Abdirahim Arrale:** Okay.  
**Dawid Snyders:** Okay. Uh Abdi, can you can you have the um actually the the settings is probably less relevant to Morris. Um okay, Morris,  
**Abdirahim Arrale:** H.  
**Dawid Snyders:** are you here?  
**Marius Ciubotariu:** Yeah.  
**Dawid Snyders:** All right, cool.  
**Marius Ciubotariu:** Yeah.  
**Dawid Snyders:** Let's move on.  
**Abdirahim Arrale:** Okay. to  
**Marius Ciubotariu:** Okay.  
**Abdirahim Arrale:** voltage.  
**Marius Ciubotariu:** Um uh here should be uh another tool tip here which says you can change this later like a little gray tag icon parenthesis says you can change this later  
**Abdirahim Arrale:** The idea is that for the mandatory fields,  
**Marius Ciubotariu:** here.  
**Abdirahim Arrale:** we have this uh blue thingy and yeah.  
**Marius Ciubotariu:** Yeah, it's good to say. It's good to say.  
**Abdirahim Arrale:** Oh, okay.  
**Marius Ciubotariu:** Just say just put something says you can change this data on both of these like a little tag or  
**Abdirahim Arrale:** Okay. Cool. Cool.  
   
 

### 00:37:16 {#00:37:16}

   
**Abdirahim Arrale:** Um and call optional for now or we should just say you can change it  
**Marius Ciubotariu:** something optional and colon.  
**Abdirahim Arrale:** later.  
**Marius Ciubotariu:** You can change this later for both of  
**Abdirahim Arrale:** Optional because you can change later  
**Marius Ciubotariu:** these.  
**Abdirahim Arrale:** for both of the advanced and the fee setting. Okay, cool. Nice.  
**Marius Ciubotariu:** Yeah. All right. Good. So this is um creation Um  
**Dawid Snyders:** This is management.  
**Marius Ciubotariu:** yeah, this is what happens when you open it any of  
**Dawid Snyders:** When you when you um well the  
**Marius Ciubotariu:** them.  
**Dawid Snyders:** so what we had initially is a like a like a very like a nice clean landing page for the vault. Um but we removed that and just put all info in  
**Abdirahim Arrale:** some detail.  
**Marius Ciubotariu:** Yeah,  
**Dawid Snyders:** analytics.  
**Marius Ciubotariu:** I think we should have a V overview which is the what we what you see now in the real app and all of these things should go should be separate tabs. I don't think you should default to this.  
   
 

### 00:38:29

   
**Dawid Snyders:** So,  
**Marius Ciubotariu:** This is  
**Dawid Snyders:** so what what would you like for default? What would you like for  
**Marius Ciubotariu:** What the default color should be called vault overview  
**Dawid Snyders:** default?  
**Marius Ciubotariu:** which is what exactly what you what what users see the same pages as user see the first tab should be vault overview.  
**Dawid Snyders:** Okay, quickly scroll down to  
**Marius Ciubotariu:** Yeah.  
**Dawid Snyders:** analytics.  
**Abdirahim Arrale:** One more.  
**Marius Ciubotariu:** Uh uh. This is very cool. But uh but but I still say I still think I still think um I still think there should be a vault overview thing and under it it says this is what users see like a tab. This is what user see. Go to the other tabs to to inspect or change your or like a tool tip or something. Um  
**Abdirahim Arrale:** Uh see what you mean.  
**Marius Ciubotariu:** yeah.  
**Abdirahim Arrale:** So they have like a preview of what the what the customers are facing.  
**Marius Ciubotariu:** Yeah,  
**Abdirahim Arrale:** Makes sense.  
**Marius Ciubotariu:** I think we should definitely default on that.  
   
 

### 00:39:48 {#00:39:48}

   
**Marius Ciubotariu:** This is really  
**Abdirahim Arrale:** The idea was that after you create vault,  
**Marius Ciubotariu:** overwhelming.  
**Abdirahim Arrale:** the first thing you will see is actually uh manage allocation page allocation settings and uh basically this one here. Uh but it's going to be uh in the empty state which is uh in the detailed view page. So that and then you can start adding reserves straight away because there in the initially there is no nothing uh there's no stats or anything.  
**Marius Ciubotariu:** uh I I I I mean I don't think people will go right at I want to create a vault and allocate now $100 million. I don't think that's how um I don't think that's the work. I think they they're going to click create. Interesting. Scroll around. Um browse. I don't think you want to be overwhelming.  
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** I think it's I don't think you want straight CP  
**Dawid Snyders:** Um,  
**Marius Ciubotariu:** allocation.  
**Abdirahim Arrale:** I am not so sure to be honest because the thing is if you open the overview you won't be overwhelmed but there's nothing to do there.  
   
 

### 00:40:55

   
**Abdirahim Arrale:** Um,  
**Marius Ciubotariu:** Yeah.  
**Abdirahim Arrale:** what is a natural thing to do?  
**Marius Ciubotariu:** But but then you give it a tool tip. It says um you give it a tool tip.  
**Abdirahim Arrale:** That's  
**Marius Ciubotariu:** You just say land you land here.  
**Abdirahim Arrale:** says  
**Marius Ciubotariu:** It lands on vault overview page.  
**Dawid Snyders:** Mhm.  
**Marius Ciubotariu:** It lands a world overview page and it's a big tool tip here under the tab which says this is what your users see. Navigate to the other tabs to change allocations, update man update settings or or see advanced analytics.  
**Dawid Snyders:** Mhm. Okay. But but that will all be empty.  
**Abdirahim Arrale:** Interesting.  
**Marius Ciubotariu:** Yes. And that's completely fine. No, it's not going to be empty.  
**Dawid Snyders:** Of course it is.  
**Marius Ciubotariu:** It's not empty.  
**Dawid Snyders:** It's going to be zero zero supply, zero borrowed,  
**Marius Ciubotariu:** It's going to show Oh,  
**Dawid Snyders:** zero utilization, zero.  
**Marius Ciubotariu:** but it's going to show No, no, no, no. It's going to say curator blah blah. This is steakhouse blah blah description.  
   
 

### 00:41:48 {#00:41:48}

   
**Marius Ciubotariu:** This vault allocates these things. Uh token share, token supply. It's going to show it's going to show things. What do you mean? It's gonna they and they're going to and they're going to go bum edit. Check here. Come back here. Oh, how this look like? Oh, that's cool. They want to see how the users will see  
**Dawid Snyders:** Yeah, I understand.  
**Marius Ciubotariu:** also.  
**Dawid Snyders:** Okay. Okay. So, you can um you can make it the user view. Um but instead of the form there, the like the the form you can you can just have like a skeleton there uh instead of having the actual form there. Um, or I guess you could have the form there even if you if you want to enable them to deposit  
**Abdirahim Arrale:** Okay.  
**Marius Ciubotariu:** Yeah,  
**Dawid Snyders:** it.  
**Marius Ciubotariu:** you should have you should have the deposit form.  
**Dawid Snyders:** Yeah. Okay. That's quite an easy one. We can uh we can actually do do it literally now.  
   
 

### 00:42:58 {#00:42:58}

   
**Abdirahim Arrale:** Okay.  
**Marius Ciubotariu:** You should have a deposit button there. They should have to and there should be a button to see uh go to like main page, go to like a uh get perma link or something and it clicks and it takes us to the real P because how do you go? There's no link to it.  
**Abdirahim Arrale:** Okay,  
**Marius Ciubotariu:** There needs to be a link to the fold as  
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** well.  
**Abdirahim Arrale:** maybe we can have it here actually at the top  
**Marius Ciubotariu:** Yeah, some  
**Abdirahim Arrale:** here and link to the Camino page, right? Uh the  
**Dawid Snyders:** You want to this the link to this vault on the UI basically.  
**Abdirahim Arrale:** Okay.  
**Marius Ciubotariu:** You let me know when you want more feedback.  
**Dawid Snyders:** Huh?  
**Marius Ciubotariu:** Are when when are we doing next? Do you want more feedback? I think it should be enough, right? So,  
**Dawid Snyders:** What do you mean enough?  
**Marius Ciubotariu:** huh  
**Dawid Snyders:** What do you mean enough? Well,  
**Marius Ciubotariu:** feedback.  
**Dawid Snyders:** okay.  
   
 

### 00:45:30 {#00:45:30}

   
**Dawid Snyders:** Are you happy with the entire UI?  
**Marius Ciubotariu:** No, not not in that way. But I give a lot. But  
**Dawid Snyders:** This is you gave up 30 minutes of work now. So, let's let's go through everything.  
**Marius Ciubotariu:** um  
**Dawid Snyders:** I don't want to it's it's it's impossible to get you on call. So, let's go through everything and then he can go through it and then we can do everything and then we can get on call again. Okay. So, great. You want you want the OS landing page.  
**Marius Ciubotariu:** Okay.  
**Dawid Snyders:** They can they can then go and and  
**Marius Ciubotariu:** Um here here at farm this is just bad and this is not how it should be  
**Dawid Snyders:** where what this is if there's no form set up  
**Marius Ciubotariu:** here. Um this is not important.  
**Dawid Snyders:** yet.  
**Marius Ciubotariu:** Um this is legacy. Um um this is legacy. So what we need to have um there's two types of farms. There's the farm which is same token farm.  
   
 

### 00:46:57

   
**Marius Ciubotariu:** So I I give them USDC and C auto compounds or there is the the different token farmer I give them like Camino. So there's two types of farts and they both have to have their own settings. You should just paste this. What does this even do if you just paste the  
**Dawid Snyders:** That is the these are just this is just the form addresses.  
**Marius Ciubotariu:** address?  
**Abdirahim Arrale:** You can't change  
**Dawid Snyders:** This is not form management. This is just the form addresses.  
**Marius Ciubotariu:** Yeah,  
**Abdirahim Arrale:** them.  
**Marius Ciubotariu:** but I Who gives a f\*\*\* about the the farm address? Nobody cares about the farm  
**Dawid Snyders:** Well,  
**Marius Ciubotariu:** address.  
**Dawid Snyders:** they need to be able to set it up.  
**Marius Ciubotariu:** Yeah,  
**Dawid Snyders:** Yeah.  
**Marius Ciubotariu:** they should be able to do it from  
**Dawid Snyders:** Yeah. So,  
**Marius Ciubotariu:** here.  
**Dawid Snyders:** that's why this that that's why this button is  
**Abdirahim Arrale:** This is after setup.  
**Dawid Snyders:** there.  
**Marius Ciubotariu:** What are the settings? What is the How is the farm compounding?  
   
 

### 00:47:45

   
**Dawid Snyders:** This is the this is not form management yet.  
**Marius Ciubotariu:** How much rewards per  
**Dawid Snyders:** This is just the form setup.  
**Marius Ciubotariu:** okay then then click settings or setup and setting if it's if it's creates already uh click settings and it should be say uh I don't understand I mean this is not the final form of this basically so if you want to set it  
**Dawid Snyders:** Uh this is yeah you set it up and then it just becomes a address that is there at the moment. Yeah.  
**Marius Ciubotariu:** There are two farms. Yeah, there's two farms. Okay.  
**Dawid Snyders:** Yeah.  
**Marius Ciubotariu:** There is a farm which is everything but but the original token and that is legacy that should be used with care. I mean doesn't she doesn't have to be used with care. It can just be any file and there's the auto component.  
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** Both should have the same setup model,  
**Dawid Snyders:** Well,  
**Abdirahim Arrale:** There  
**Dawid Snyders:** both look bo both are ideally automatically set up when  
**Marius Ciubotariu:** right?  
**Abdirahim Arrale:** it  
   
 

### 00:48:44 {#00:48:44}

   
**Dawid Snyders:** you create a new when you create a new um uh vault. The only reason that this is here is in case that fails, then you need to be able as a curator to go and click the button to set up the form. Okay. But this is not yet forms management because forms management is another completely different product.  
**Marius Ciubotariu:** I don't think so. The farm management for this thing should happen here man.  
**Dawid Snyders:** It can.  
**Marius Ciubotariu:** It's very simple to do.  
**Dawid Snyders:** It's most  
**Marius Ciubotariu:** The farming for this is usually a popup. I don't think we should not do farms management which has to do with liquidity vaults and lending markets all that s\*\*\* and combine that with this. This is very easy to do. There's like three commands to do here. It's very easy. It's a model. It says rewards per second. It says how many rewards per day. You put a number. It says how many remaining. And it says top up or withdraw.  
   
 

### 00:49:50

   
**Marius Ciubotariu:** That's it. You can have pause, click, continue. That's it. This that's it here for this one. For this other one, you also have to choose the token and that's it.  
**Dawid Snyders:** Yeah.  
**Marius Ciubotariu:** That's not complicated with farm management because farm management is like another f\*\*\*\*\*\* gigantic s\*\*\*  
**Dawid Snyders:** Yeah,  
**Marius Ciubotariu:** storm.  
**Dawid Snyders:** it  
**Marius Ciubotariu:** We don't need to.  
**Dawid Snyders:** is.  
**Marius Ciubotariu:** Very easy. This vault is perfect. It's like it's self-sufficient.  
**Dawid Snyders:** Okay. So, you only want the auto compounding for management here.  
**Marius Ciubotariu:** No, we can do both. We can easily do both here. It's very easy. Very easy.  
**Dawid Snyders:** It's it's it's definitely less easy than you you are saying it, but it it's it it's but it's doable  
**Marius Ciubotariu:** Very easy. Very easy.  
**Dawid Snyders:** here.  
**Marius Ciubotariu:** It's it's it's two popups.  
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** Let's just do it while we're  
**Dawid Snyders:** No,  
**Marius Ciubotariu:** here.  
**Dawid Snyders:** we're definitely not going to do it while he's here because it's not as easy as you think.  
   
 

### 00:50:59 {#00:50:59}

   
**Dawid Snyders:** Abby does not understand what it is. So, I will need to explain to him what it is so that he can do it.  
**Marius Ciubotariu:** I'm sure  
**Dawid Snyders:** Abi,  
**Marius Ciubotariu:** it  
**Dawid Snyders:** do you understand what the word ops means?  
**Marius Ciubotariu:** comes per  
**Abdirahim Arrale:** I haven't I know what RPS RPC is,  
**Marius Ciubotariu:** second.  
**Abdirahim Arrale:** but but it say RPS, but the thing is I don't I don't know what the farm is in general.  
**Marius Ciubotariu:** RPS per second.  
**Abdirahim Arrale:** I haven't looked into it, so I don't even know what farm is.  
**Marius Ciubotariu:** Okay.  
**Dawid Snyders:** Okay.  
**Abdirahim Arrale:** That is the problem.  
**Marius Ciubotariu:** We should not call it even far. Should call it rewards. If you call it rewards,  
**Dawid Snyders:** Okay.  
**Abdirahim Arrale:** Oh,  
**Marius Ciubotariu:** then uh yeah,  
**Abdirahim Arrale:** it's rewards. I didn't even know it was rewards.  
**Marius Ciubotariu:** there you go. Yeah, it's rewards. That's what it is.  
**Abdirahim Arrale:** Damn.  
**Dawid Snyders:** Okay. Anyway,  
**Marius Ciubotariu:** So you're seeing  
**Dawid Snyders:** we we're not going to do it now.  
   
 

### 00:51:47 {#00:51:47}

   
**Dawid Snyders:** I'll I'll explain to up what it is.  
**Marius Ciubotariu:** more.  
**Dawid Snyders:** Um and then we can do it here. Uh I'll just add a note here. Uh we can add forms management into this UI as well.  
**Abdirahim Arrale:** Yeah. And I have to look at the models as well.  
**Dawid Snyders:** Yeah, I'll uh I'll I'll I'll point you to the right place.  
**Abdirahim Arrale:** Appreciate  
**Dawid Snyders:** Uh it's it's it's definitely doable here. But um I think that um forms management should be its own tab and it should not be within  
**Abdirahim Arrale:** it.  
**Dawid Snyders:** B settings. Okay,  
**Abdirahim Arrale:** Okay, got  
**Dawid Snyders:** cool. Let's move on.  
**Abdirahim Arrale:** it.  
**Marius Ciubotariu:** Okay. I don't know what this means, but okay.  
**Abdirahim Arrale:** Yeah,  
**Marius Ciubotariu:** Okay.  
**Abdirahim Arrale:** we'll have proper explanation from  
**Marius Ciubotariu:** I have no idea what this means, but uh Okay.  
**Abdirahim Arrale:** Sylvia.  
**Marius Ciubotariu:** Okay. Fine. Okay. Um, honestly, I don't think we should uh I I think the way um I think the way Powell in initially coded this manage page is actually quite broken because he's like accumulating he's accumulating uh settings and he sends them all at once and like I think this is dog s\*\*\*, man.  
   
 

### 00:53:25 {#00:53:25}

   
**Marius Ciubotariu:** I don't think we should do this because transactions don't fit.  
**Dawid Snyders:** Okay, but look here. Come and look here.  
**Marius Ciubotariu:** I think the moment you  
**Dawid Snyders:** Come and look here. Hold on.  
**Marius Ciubotariu:** click  
**Dawid Snyders:** Keep looking.  
**Marius Ciubotariu:** Yeah, but I that's what I'm saying. It just makes the It just makes the the world difficult. Coding this s\*\*\* is difficult. But okay. And that's why Yeah. Okay, fine. I think it's a I think it's a bad idea.  
**Dawid Snyders:** what what would you do?  
**Marius Ciubotariu:** I would make them You change something clear, click apply. change something. Click apply.  
**Dawid Snyders:** So then it immediately um it immediately gen generates a  
**Marius Ciubotariu:** Yeah, I  
**Abdirahim Arrale:** The problem with that is uh you have to if let's say there's a multi you have to go to squad x every single time and paste in the  
**Dawid Snyders:** thing  
**Marius Ciubotariu:** guess  
**Abdirahim Arrale:** uh encoded transaction and  
**Marius Ciubotariu:** not really.  
**Abdirahim Arrale:** then  
**Marius Ciubotariu:** Um, uh, not squads, but squads X, right?  
   
 

### 00:54:19 {#00:54:19}

   
**Marius Ciubotariu:** Out of the box.  
**Abdirahim Arrale:** xs  
**Marius Ciubotariu:** Do we actually, that's a good point. Um um you need to have a tutorial how to use how to do set up how to do this with  
**Abdirahim Arrale:** yeah if you see here um if If you follow me, uh the idea is that you can uh we'll check if it's possible to actually integrate Squadx to uh the front end.  
**Marius Ciubotariu:** squad.  
**Abdirahim Arrale:** So they can easily just click open with Squad X and then uh it will either navigate them to the proper page or they can do it direct from uh from our front end. That'll be really cool. Um we'll seeh Oh,  
**Dawid Snyders:** Yeah,  
**Marius Ciubotariu:** Sorry. Do you know what squads X squad  
**Dawid Snyders:** Squad X is something else.  
**Marius Ciubotariu:** X?  
**Dawid Snyders:** Squad X is a wallet that  
**Abdirahim Arrale:** squat. Oh, squat X. Okay, good.  
**Marius Ciubotariu:** Yeah,  
**Abdirahim Arrale:** I was thinking of squads.  
**Dawid Snyders:** automatically  
**Marius Ciubotariu:** they should always use squads X.  
**Abdirahim Arrale:** Uh the Okay.  
**Marius Ciubotariu:** They should not open with squats which they should never do any of that.  
   
 

### 00:55:03 {#00:55:03}

   
**Abdirahim Arrale:** Okay. Okay.  
**Marius Ciubotariu:** So that's why I need to have um uh on the on the here we should have a link.  
**Abdirahim Arrale:** Um  
**Marius Ciubotariu:** So um recommended to use this with squads XC tutorial like a tab here and you need to look at how to use squads except and you'll see how awesome it  
**Abdirahim Arrale:** I Yeah. Okay. Cuz I've seen the initial the the current flow we have right now. We use quads uh for  
**Marius Ciubotariu:** is.  
**Dawid Snyders:** Do most of the B managers use um use squads  
**Abdirahim Arrale:** multi.  
**Dawid Snyders:** X? Do most of the vault managers use squads  
**Marius Ciubotariu:** What they should?  
**Dawid Snyders:** X?  
**Marius Ciubotariu:** I don't think they do. They don't know about it.  
**Abdirahim Arrale:** Yeah.  
**Marius Ciubotariu:** If Abby doesn't  
**Abdirahim Arrale:** Yeah. I just heard about it one time.  
**Marius Ciubotariu:** know  
**Dawid Snyders:** Okay. Okay. Okay. Okay. Should we um should we create a tutorial or does um does squads have their own tutorial?  
**Marius Ciubotariu:** We should to make our own tutorials, man, for everything.  
   
 

### 00:56:22 {#00:56:22}

   
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** Everything should be a tutorial. We we create and we control all this. I don't use someone  
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** else's  
**Dawid Snyders:** Assets. Okay. I will look into this. Okay. Um,  
**Abdirahim Arrale:** We should probably  
**Dawid Snyders:** do you think we should do that at the very beginning of the manage flow?  
**Abdirahim Arrale:** Yeah.  
**Dawid Snyders:** Like even even on the f\*\*\*\*\*\* landing page, we can say recommended to use squadex on commino manage or on the to manage the market and just have like an everpresent squadex um tutorial link more.  
**Marius Ciubotariu:** Say  
**Dawid Snyders:** Um, do you think we should just at the very beginning of this page uh like even  
**Marius Ciubotariu:** again.  
**Dawid Snyders:** before the manage flow just like in the header of the thing even say like have a Squad X tutorial or at what  
**Marius Ciubotariu:** Yeah,  
**Dawid Snyders:** point?  
**Marius Ciubotariu:** but they don't know what that's for.  
**Dawid Snyders:** Uh, okay. So, you think after they've created the vault we should we should we should do it?  
   
 

### 00:57:38

   
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** Um,  
**Dawid Snyders:** I'm not the  
**Marius Ciubotariu:** no. Maybe.  
**Dawid Snyders:** I'm not  
**Marius Ciubotariu:** Um,  
**Abdirahim Arrale:** We'll find a nice place to put  
**Dawid Snyders:** the  
**Marius Ciubotariu:** hold on. Maybe we maybe we do like a like a carousel,  
**Abdirahim Arrale:** it.  
**Marius Ciubotariu:** you know, like a carousel thing where like um um like um um like something here that says um watch um watch watch short intro or something and it's Carson says One, what are landing votes? What particular two important to use? Three, manage fees. I don't know what what you can do here. I don't know.  
**Abdirahim Arrale:** M true like helpful links  
**Marius Ciubotariu:** Something like that.  
**Abdirahim Arrale:** in general  
**Marius Ciubotariu:** No, helpful links is uninteresting. It has to be something like quick and catchy like  
**Abdirahim Arrale:** um yes I'm talking about yeah just that  
**Marius Ciubotariu:** check  
**Abdirahim Arrale:** including how to set up the the vault properly and you know the receipt token images like have all those things in one place as well but also the uh a place where you can highlight stuff like Squad X so people can uh set up and that it is integrated with Commamino or that it's easier to use with Commamino.  
   
 

### 00:59:06 {#00:59:06}

   
**Marius Ciubotariu:** I think we should have watch tutorial here.  
**Abdirahim Arrale:** Yeah.  
**Marius Ciubotariu:** the button watch tutorial should be here and that should the same at link that you'd have here  
**Abdirahim Arrale:** Okay.  
**Marius Ciubotariu:** and that should um two one minute tutorial or something and that  
**Abdirahim Arrale:** Okay.  
**Marius Ciubotariu:** should highlight everything squads x.  
**Abdirahim Arrale:** For everything. Okay.  
**Marius Ciubotariu:** No, this like the link should be here right should be as like here literally  
**Abdirahim Arrale:** Yeah. Yes.  
**Marius Ciubotariu:** here.  
**Abdirahim Arrale:** But is it for for for like the flow how to create vault with including squadex connection  
**Marius Ciubotariu:** No, no, no, no.  
**Abdirahim Arrale:** or just Okay.  
**Marius Ciubotariu:** It's it's more like a it's more like a promotional video for like curators  
**Abdirahim Arrale:** Okay. Okay.  
**Marius Ciubotariu:** like um  
**Abdirahim Arrale:** Okay.  
**Marius Ciubotariu:** allin-one infrastructure to create is the the place the the all-in-one infrastructure to create vaults um set it up using squads x uh check analytics see how users are using you collect the bench fees get rev share use API to get to become as back end something like that like Ah,  
   
 

### 01:00:04 {#01:00:04}

   
**Dawid Snyders:** Okay. You want an onboarding flow type of thing?  
**Marius Ciubotariu:** yeah,  
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** I know that.  
**Abdirahim Arrale:** Yeah. Okay.  
**Dawid Snyders:** You remember that very nice onboarding flow that I shared?  
**Marius Ciubotariu:** Yeah.  
**Abdirahim Arrale:** Yeah. Yeah.  
**Dawid Snyders:** We can create something like that,  
**Abdirahim Arrale:** Remember that  
**Dawid Snyders:** but not that it shouldn't cover the entire page.  
**Abdirahim Arrale:** one  
**Dawid Snyders:** It should it should be a um should be a modal that covers like the middle of the page when you land on this  
**Abdirahim Arrale:** movie? Yeah.  
**Dawid Snyders:** page.  
**Abdirahim Arrale:** Sounds good. Let's do that.  
**Dawid Snyders:** And then you can you can reopen it as well.  
**Abdirahim Arrale:** Yeah, I think I saw OpenC had a really nice explanation model somewhere. So maybe  
**Dawid Snyders:** Yeah. So, it basically has it basically has like four slides that you can flick through.  
**Abdirahim Arrale:** something.  
**Dawid Snyders:** Um, and then we just need to uh think about the content for that.  
**Abdirahim Arrale:** Okay,  
**Dawid Snyders:** Okay. And you want that when when someone lands on this page,  
   
 

### 01:00:55

   
**Abdirahim Arrale:** let me just  
**Dawid Snyders:** Morris  
**Marius Ciubotariu:** M yes when we land on this page.  
**Dawid Snyders:** Yeah.  
**Marius Ciubotariu:** Yes.  
**Dawid Snyders:** Yeah. Yeah.  
**Marius Ciubotariu:** Here watch watch video check uh on boarding video  
**Dawid Snyders:** Yeah.  
**Abdirahim Arrale:** Yeah, I'm recording.  
**Marius Ciubotariu:** something and it just opens a model with like  
**Abdirahim Arrale:** Nice.  
**Marius Ciubotariu:** a 50 seconds  
**Abdirahim Arrale:** Cool.  
**Marius Ciubotariu:** video.  
**Dawid Snyders:** A V wire video instead of a like a a nice model that you can flip through.  
**Marius Ciubotariu:** I think it's easy to click  
**Abdirahim Arrale:** Okay,  
**Marius Ciubotariu:** play.  
**Abdirahim Arrale:** we can maybe have both and then we can have section divided into sections as well so people can quickly click on the stuff that they want  
**Marius Ciubotariu:** Oh,  
**Abdirahim Arrale:** to.  
**Marius Ciubotariu:** actually you can make it like a carousel of gifts and then you just go to the next one.  
**Abdirahim Arrale:** Okay.  
**Marius Ciubotariu:** Yeah.  
**Abdirahim Arrale:** I've seen something like this actually from OpenC long time  
**Marius Ciubotariu:** Yeah.  
**Abdirahim Arrale:** ago. I don't know if this is and everything is video by the way.  
   
 

### 01:02:02 {#01:02:02}

   
**Marius Ciubotariu:** Yeah. Yeah.  
**Abdirahim Arrale:** So there's like this is a video and then the next one  
**Marius Ciubotariu:** Yeah. Great. Yeah. Yeah. This is great.  
**Abdirahim Arrale:** is Okay,  
**Marius Ciubotariu:** It's perfect. I love  
**Abdirahim Arrale:** cool. Yeah, let's let's do something like this then.  
**Marius Ciubotariu:** it.  
**Abdirahim Arrale:** Um this is a video that explains stuff and then you click next and there there's another video I give. Yeah, it's it's more of a gift. Auto plays for us straight away.  
**Dawid Snyders:** Jeez, man. We're putting a lot of effort into this thing, man. Morris, we're putting a lot lot of effort into  
**Marius Ciubotariu:** What?  
**Dawid Snyders:** this.  
**Marius Ciubotariu:** Yeah, but it it has it's a it's a massive bet.  
**Dawid Snyders:** Yeah, that that's one that's why I'm saying it.  
**Marius Ciubotariu:** What you want to put effort on? Yeah, it has to be good. It has with a big shot. this and this will contain also the meta volta after that it's going to be reusable the components  
   
 

### 01:03:08 {#01:03:08}

   
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** whatever  
**Dawid Snyders:** Okay.  
**Abdirahim Arrale:** Got it.  
**Dawid Snyders:** Okay. So and then for contents um slide one is just um the fact that you can manage vaults from here. Slide two is that you can do it securely with squadz. Slide three can be um view vault analytics u in depth vault analytics for example. Uh slide four can be manage manage um manage uh user rewards and then we have four slides.  
**Abdirahim Arrale:** Are you running this time by the way?  
**Dawid Snyders:** It's it's being recorded.  
**Abdirahim Arrale:** Okay, cool.  
**Dawid Snyders:** Yep.  
**Abdirahim Arrale:** Nice.  
**Dawid Snyders:** Okay. All right, I'll do I'll I will get the recordings for you.  
**Abdirahim Arrale:** Thank you.  
**Dawid Snyders:** You just make the this you just make the design  
**Abdirahim Arrale:** Thanks.  
**Dawid Snyders:** banging.  
**Abdirahim Arrale:** Say no more.  
**Dawid Snyders:** Okay. Um we need a a much nicer um um uh here.  
**Abdirahim Arrale:** Squadx. Okay.  
**Dawid Snyders:** We need a much nicer We need a much nicer box here that that says to the to the um the manager that this is what you Yeah.  
   
 

### 01:04:52 {#01:04:52}

   
**Abdirahim Arrale:** creator.  
**Dawid Snyders:** That this is what you  
**Abdirahim Arrale:** Okay. Yeah,  
**Dawid Snyders:** see.  
**Abdirahim Arrale:** nice. We can um let's do that. I think Stripe has like a really cool preview how it is in production type of a flow as well. So,  
**Dawid Snyders:** Yeah.  
**Abdirahim Arrale:** they can see that.  
**Dawid Snyders:** So that that that that's exactly um what we want here.  
**Abdirahim Arrale:** Okay.  
**Dawid Snyders:** Yeah. Okay.  
**Marius Ciubotariu:** Kenya want answer. What do you think?  
**Dawid Snyders:** Doing what?  
**Marius Ciubotariu:** I don't f\*\*\*\*\*\* know what he what he is good at.  
**Dawid Snyders:** And what is that? He's been involved in exactly one product launch that I know of and the product failed miserably. Although he is a very nice guy, but yeah, I I don't think he's a sheriff. Right.  
**Marius Ciubotariu:** Nobody share.  
**Dawid Snyders:** Say again. Yeah. Yeah. Yeah.  
**Marius Ciubotariu:** Nobody's sh  
**Dawid Snyders:** Yeah. Okay. Uh Morris, let's keep let's keep going. There's a there there's a lot of you're giving me a lot of good feedback, so I would rather go through the entire thing.  
   
 

### 01:06:47 {#01:06:47}

   
**Dawid Snyders:** Um, okay. You were you were busy commenting on the fact that you don't think we should have all of the changes stacked up.  
**Marius Ciubotariu:** you you Yeah, I I think if you can pull it off. Okay. But I think it's Yeah. Okay. Let's leave it. I think it's antiattern and um  
**Dawid Snyders:** It will it will look very nice on the UI the way that RB has made it.  
**Marius Ciubotariu:** fine.  
**Dawid Snyders:** So  
**Marius Ciubotariu:** Well, let's see. Let's work it. I think it's it's a bit nasty, but  
**Abdirahim Arrale:** I see what you mean by anti panel.  
**Marius Ciubotariu:** okay.  
**Dawid Snyders:** okay.  
**Abdirahim Arrale:** So most places they have a plus right away like all these settings in general. So I agree with that.  
**Marius Ciubotariu:** And is just difficult  
**Abdirahim Arrale:** Yeah. The only reason that we did this right now is I was really thinking that people had to go into squads and then you  
**Marius Ciubotariu:** like  
**Abdirahim Arrale:** know paste in the uh transaction and do that every time.  
   
 

### 01:07:37 {#01:07:37}

   
**Abdirahim Arrale:** So batching them together I thought would be the best case here. Um could definitely optimize for  
**Marius Ciubotariu:** Yeah.  
**Abdirahim Arrale:** this. Or maybe we can have um way for people to they click and then they can uh they have the option to either uh do more changes or they can just click apply current changes in here or like straight in  
**Dawid Snyders:** Yeah. So if I did a change, I can I can click um Yeah.  
**Abdirahim Arrale:** the  
**Dawid Snyders:** Yeah. Yeah. Yeah.  
**Abdirahim Arrale:** right.  
**Dawid Snyders:** We can do that as well. Okay. Yeah, that's a good  
**Abdirahim Arrale:** Um so right after change something um either just apply changes straight away  
**Dawid Snyders:** idea.  
**Abdirahim Arrale:** or Okay. Just take it from the  
**Dawid Snyders:** Yeah. Yeah. Okay. Cool. Let's keep going.  
**Abdirahim Arrale:** nose.  
**Dawid Snyders:** Uh okay. Now, now you come to the actual another BV port Morris which is the allocation stuff. Are you still with us?  
**Marius Ciubotariu:** Yeah,  
**Dawid Snyders:** Okay,  
**Marius Ciubotariu:** I'm with you.  
**Dawid Snyders:** let's go. Let's uh you can come down here to allocation settings.  
**Marius Ciubotariu:** But man, I have to go because I have call.  
**Dawid Snyders:** Okay,  
**Marius Ciubotariu:** Let's just do these. I can jump in another call in. Well, whenever.  
**Dawid Snyders:** it's fine. This will this will probably take a few  
**Marius Ciubotariu:** Whenever.  
**Dawid Snyders:** days.  
**Marius Ciubotariu:** Okay, we need to finish here. So, we never go back here.  
**Dawid Snyders:** Yeah, I agree. Right.  
**Abdirahim Arrale:** Bye.  
**Dawid Snyders:** All right, then. Um, I'll send you I'll send you the uh the transcript. Uh, just immediately put it into Claude um and let it clean it up.  
**Abdirahim Arrale:** Okay, I'll do that.  
**Dawid Snyders:** Yep.  
**Abdirahim Arrale:** Sounds good. Okay,  
**Dawid Snyders:** All right.  
**Abdirahim Arrale:** I'll uh Okay, let's increase this and let's get the cooking done.  
   
 

### Transcription ended after 01:10:17

*This editable transcript was computer generated and might contain errors. People can also change the text after it was created.*