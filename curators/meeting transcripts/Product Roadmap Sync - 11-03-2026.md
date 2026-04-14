# 📝 Notes

Mar 11, 2026

## Meeting Mar 11, 2026 at 16:23 CET

Meeting records [Transcript](?tab=t.72vytpw0xon) 

### Summary

First loss capital and curator withdrawal concerns debated emergency withdrawal multisig requirement agreed upon for the insurance fund.

**Loss Mechanism and Withdrawals**  
The first loss capital mechanism relies on a manual "release" button, as fully automating loss detection and distribution is deemed complicated and without precedent. Curator withdrawals take 30 days and serve as a public signal, but emergency withdrawal without loss socialization constitutes fraud.

**Insurance Fund Multisig Mandated**  
The emergency withdrawal feature, designed for quickly socializing losses, must be placed behind a 2-of-2 multisig requirement to prevent curators from avoiding losses. Compensating people after a loss will be a complicated manual process involving looking back in time to snapshot those who suffered the loss.

**High Priority AI Project**  
The AI project is extremely high priority, even above fixed rates and borrow orders, with the primary goal of adding multiple layers of testing to enforce code quality. Marius Ciubotariu and Alex Bonin will lead the project, which is expected to take a couple of days for architecture and a couple of weeks for implementation tasks.

### Details

* **First Loss Capital Mechanism and Loss Detection**: The mechanism for first loss capital involves the vault administrator depositing funds, which are then distributed to everyone else upon a loss through the click of a "release" button. It was noted that the automatic detection of loss is a missing piece of the current setup ([00:00:00](#00:00:00)). It was discussed that the process of identifying and estimating a loss takes time, and attempting to fully automate loss processing and distribution is complicated and has no precedent, even with other entities ([00:01:52](#00:01:52)) ([00:06:12](#00:06:12)).

* **Curator Withdrawal Concerns and Public Notification**: Concerns were raised that a curator could wait 30 days, withdraw their funds through the normal withdrawal function, and then click "release," thereby avoiding losses themself ([00:01:52](#00:01:52)). It was clarified that the normal withdrawal process for the curator to remove their insurance fund takes 30 days and is a public signal that they are leaving or removing the insurance, which people should be aware of ([00:03:11](#00:03:11)). If a curator uses an "emergency withdraw" without socializing losses, that would constitute fraud ([00:04:13](#00:04:13)).

* **Compensating People and Timeline**: Compensating people after a loss will involve a complicated, more manual process of looking back in time to identify who suffered the loss and taking a snapshot of those people. Funds from the insurance fund would then be taken and put into a new farm created for them ([00:03:11](#00:03:11)). The insurance fund is designed as an escrow account, not a traditional farm, and they can pull funds out right away to cover losses, though determining the loss amount might take a few days ([00:05:10](#00:05:10)).

* **Emergency Withdrawal and Multisig Requirement**: The "emergency withdraw" is intended for quickly socializing losses, as waiting 30 days would be impractical ([00:05:10](#00:05:10)). It was suggested that the emergency withdrawal feature should be placed behind a two-of-two multisig, consisting of the curator's administrative wallet and a wallet from their organization, to prevent the curator from instantly withdrawing money to avoid losses, which would otherwise make the entire setup pointless ([00:08:22](#00:08:22)). This multisig requirement was agreed upon and framed as being part of the insurance pool documentation ([00:10:08](#00:10:08)).

* **Priority and Scope of the AI Project**: The AI project is considered extremely high priority, even higher than fixed rates and borrow orders, but the initial architecture phase should only take a couple of days. The primary goal is to use AI agents to add multiple layers of testing to the repository, which currently has only 0.3% test coverage, to prevent bad implementations and enforce code quality ([00:11:16](#00:11:16)) ([00:18:04](#00:18:04)). Marius Ciubotariu and Alex Bonin will lead the project to put guardrails in place, which is intended to automate cleanup rather than spending weeks on manual cleanup ([00:12:28](#00:12:28)) ([00:16:17](#00:16:17)).

* **AI Project Leadership and Implementation**: Marius Ciubotariu and Alex Bonin will take the lead on the AI project to provide direction, as there was no clear path or dictator to override differing opinions among the development team ([00:15:23](#00:15:23)). The structure and architecture are expected to take a couple of days, with the resulting tasks taking a couple of weeks to push through ([00:18:04](#00:18:04)). The developers, including Mark, will not be full-time on the project but will be assigned tasks that they can let the AI agents run on their laptops, requiring them to review and approve pull requests ([00:16:57](#00:16:57)) ([00:19:16](#00:19:16)).

* **Borrow Orders Implementation and Testing**: There is an urgent need to release borrow orders soon, primarily because Pantera wants to place a borrow order in their off-chain collateral market against their Anchorage Custodian. They need to get the feature live so Pantera can place an order, and then the curators can allocate into that market ([00:21:29](#00:21:29)). It was agreed that it would be beneficial to have a UI list of outstanding borrow orders, which should be easy to implement ([00:22:39](#00:22:39)).

* **Notifications for Borrow Orders**: They should implement notifications for when a user's borrow order is filled or partially filled. It was noted that this notification feature would be simple to implement ([00:23:21](#00:23:21)).

* **Soft Launching and Feature Flags**: The white-listed reserves and other features can be soft-launched by putting the whole thing under a feature flag. This approach allows the code to be released, QA to be performed with the feature flag enabled, and coordinating the marketing announcement only after participants have allocated and everything looks good, avoiding coupling the code release and the announcement ([00:24:18](#00:24:18)). The same approach using a feature flag should be applied to the insurance fund ([00:24:18](#00:24:18)).

### Suggested next steps

- [ ] Marius Ciubotariu and Alex Bonin will lead the effort to add guardrails and cleanup features to the repo, splitting big tasks into smaller ones for review, with the goal of improving test coverage and allowing other developers (Mark) to assist by running AI agents and reviewing code.  
- [ ] Dawid Snyders will add a flow for notifications regarding borrow orders being filled or partially filled.  
- [ ] Dawid Snyders will make a UI to see the list of outstanding borrow orders.  
- [ ] The group will put emergency withdraw under a multisig.

*You should review Gemini's notes to make sure they're accurate. [Get tips and learn how Gemini takes notes](https://support.google.com/meet/answer/14754931)*

*Please provide feedback about using Gemini to take notes in a [short survey.](https://google.qualtrics.com/jfe/form/SV_9vK3UZEaIQKKE7A?confid=0TEu7jzUJso6iJah71U4DxIVOAIIigIgABgDCA&detailid=standard)*

# 📖 Transcript

Mar 11, 2026

## Meeting Mar 11, 2026 at 16:23 CET \- Transcript

### 00:00:00 {#00:00:00}

   
**Marius Ciubotariu:** um for first loss capital. Um I understand multiple people had multiple complaints about this. Um I think there's like one missing piece. everything else is fine. Um, which is the automatic detection of loss. Um, but basically first capital is meant to work like this. Um, the vault admin puts some funds. Um, the moment there is a loss, um, he clicks a button and the the loss gets distributed to everyone else. And um it can be done in several ways but um none of them is perfect. Um but but it's it should be fine basically. Um what do you want me to answer to you?  
**Dawid Snyders:** Um so when when there is bad in a vault, okay, so there there's a loss in the vault. Um the and the the the curator has deposited funds into this farm. Okay. What happens when a loss is incurred on the world?  
**Marius Ciubotariu:** When when a remote is incred on a vault, um the the the the manager should click release.  
   
 

### 00:01:52 {#00:01:52}

   
**Marius Ciubotariu:** And essentially he loses the the the money he deposited and it gets distributed to everyone else and it takes like  
**Dawid Snyders:** Okay. So, he can just wait.  
**Marius Ciubotariu:** Yeah.  
**Dawid Snyders:** So, so he can just wait. He can just click withdraw. Wait for 30 days. Don't click release.  
**Marius Ciubotariu:** Yeah.  
**Dawid Snyders:** Wait for his funds to uh be withdrawn and then click release so he doesn't suffer any losses.  
**Marius Ciubotariu:** Say again. Sorry. Honestly,  
**Dawid Snyders:** So,  
**Marius Ciubotariu:** man, I don't think do do I don't I think it's going to be complicated to do because the moment a loss happens between a moment the loss happens and the guy takes the money there can be like a week goes by to identify what really happened for example or like uh to to estimate how much and between that moment in time and the the amount the time you're ready to release the funds the guy could basically be like um like people could leave the vault you So I don't think even like for example when when this thing happened with a where like they discovered bad depth all sort all of these things they they take time to process it's not like you can't I don't think you can automate it even more for removed like automatic socialized losses from their smart contracts you will need to detect it you know it's not like you don't you shouldn't  
   
 

### 00:03:11 {#00:03:11}

   
**Marius Ciubotariu:** automate this s\*\*\* so the the most important thing is that there is money there set aside That's the most important thing. People see it. Um the the guy can only like take it out in normal ways with 30 days. So it's publicly he's publicly removing the insurance. That's fine. He should be allowed to remove the insurance fund publicly in 30 days. People should just be aware that of that. That's that's the whole point. Um and when it comes to when it comes to like uh actually compensating  
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** people, I think it's going to be a more complicated process where we will have to look back in time who were the people that actually suffered the loss at that point in time and uh take a snapshot of those create a farm and take those money from the insurance fund um and put it into that farm.  
**Dawid Snyders:** Well,  
**Marius Ciubotariu:** That's what's going to happen really. So I don't think this is  
**Dawid Snyders:** unless unless the guy just the curator just withdraws before we can do that.  
   
 

### 00:04:13 {#00:04:13}

   
**Marius Ciubotariu:** Huh?  
**Anya Poltoratskaya:** What's that?  
**Marius Ciubotariu:** What?  
**Dawid Snyders:** Well, the the curator can just withdraw, right?  
**Marius Ciubotariu:** If the creators withdraw, so there's like two ways to withdraw, right? The creators can withdraw using a normal withdraw function. That's that's like takes 30 days and that's fine. That is like they are allowed to um and that is like expected.  
**Dawid Snyders:** Yeah.  
**Marius Ciubotariu:** So that's kind of like something that we need to communicate. If the this the curator leaves because he doesn't want to insure the vault anymore, it it's a public thing. You see that it it will take 30 days. Anyone can see that. That's fine. If they click on emergency withdraw which should only be used in case of socializing losses. If they click on emergency withdraw without having to uh socialize without like with the reason to just leave fast you know that's a that is just fraud.  
**Dawid Snyders:** Yeah, but we why why would we allow an emergency withdrawal at  
**Marius Ciubotariu:** So like okay we can't we  
   
 

### 00:05:10 {#00:05:10}

   
**Dawid Snyders:** all?  
**Marius Ciubotariu:** because the emergency withdrawal well I mean you don't want to wait 30 days until you socialize the loss right like maybe you want maybe you want social  
**Dawid Snyders:** No, you want to socialize it. Yeah. Yeah.  
**Marius Ciubotariu:** tomorrow or like you want social in a week uh you can like you can wait for a  
**Dawid Snyders:** Yeah. But why why does he have to withdraw to socialize it?  
**Marius Ciubotariu:** week  
**Dawid Snyders:** Why can it not be socialized directly from the farm?  
**Marius Ciubotariu:** a Because the way the the but that's the that's the way do you do it the way you socialize it from the farm. This is a this is not a like it's designed as a farm but it's not really a farm. This is like a it's a it's an escrow account. You can think of it as an escrow account. Okay. The farm the the insurance loss insurance pool escrow farm.  
**Dawid Snyders:** Mhm.  
**Marius Ciubotariu:** It's kind of like an escrow account where you can get out in a public way using 30 days and that is like normal and you should be allowed to do that or you can like pull it out right  
   
 

### 00:06:12 {#00:06:12}

   
**Dawid Snyders:** Yeah.  
**Marius Ciubotariu:** away um to to to cover losses.  
**Dawid Snyders:** Yeah. Okay. Um so my question is why why does it have to be pulled out to socialize the losses? Why can it not go directly from the espro account towards socializing the losses? Why basically what I'm asking is why do we allow the curator  
**Marius Ciubotariu:** because because it's not easy to do that distribution.  
**Dawid Snyders:** to  
**Marius Ciubotariu:** You can't do like it's not so like it's going to take three let's say it's going to take three days to determine how much was lost. Okay.  
**Dawid Snyders:** Yeah, I think in those three days that escrow account should be locked.  
**Marius Ciubotariu:** Um,  
**Dawid Snyders:** The curator cannot  
**Marius Ciubotariu:** but you can't do that. That's the point. You can't do that.  
**Dawid Snyders:** withdraw.  
**Marius Ciubotariu:** I don't think you can do that properly. Like you can't you can't automate the whole thing. I mean, you could, but like you're not sure. This is this is no precedent. Even when a does like a re like reimbursement every two years or something, it's like a manual process.  
   
 

### 00:07:20

   
**Marius Ciubotariu:** Like you can't like you can't estimate what will happen because you can't like fully you can't fully  
**Dawid Snyders:** Audio.  
**Marius Ciubotariu:** automate the whole thing. Like um it's like you put money in a in a safe box in a bank and you say this money is for like in case uh in case someone uh you know hits hits like I don't know whatever. Um and you will do it whenever that happens. Whenever that s\*\*\* happens, you go and take money out of the six box and you put it. You don't want to like to connect all the triggers in one go.  
**Anya Poltoratskaya:** So in that case does it mean that like if is that pro process going to be manual anyway? Um do we need any UI and given how rare it is as well like  
**Marius Ciubotariu:** You need the UI for the curator. Yes.  
**Anya Poltoratskaya:** specifically  
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** Not for the  
**Dawid Snyders:** But my my question is can we can we put the emergency  
**Marius Ciubotariu:** user.  
**Dawid Snyders:** withdrawal then behind a multise of which we are a part.  
   
 

### 00:08:22 {#00:08:22}

   
**Dawid Snyders:** Just my point is if we allow the curator to f\*\*\* off instantly with the money whenever they want this this is pointless.  
**Marius Ciubotariu:** No, it's not pointless because it's it's  
**Dawid Snyders:** Yes, because they don't have to do the 30-day cool down then as well if we give them this  
**Marius Ciubotariu:** easy. No, that's okay.  
**Dawid Snyders:** ability.  
**Marius Ciubotariu:** So, we can do what you said. We can put emergency withdraw under a multisig. Um, sure. We can we can do that. We can put on  
**Dawid Snyders:** Okay. I think like two of two multisig of which the curator admin wallet and some some wallet  
**Marius Ciubotariu:** the  
**Dawid Snyders:** from us is on the same thing and they can instant withdraw whenever they want but we also have to confirm okay this is a valid instant withdrawal because if they just want to instant withdraw to avoid losing their own money then that's that's then then this is a pointless spend this  
**Marius Ciubotariu:** but fraud. That's like there's stronger incentives to not do that.  
   
 

### 00:09:18

   
**Dawid Snyders:** How is that  
**Marius Ciubotariu:** Do you think they're going to avoid losing because they are sign they're signing that this is insurance they will  
**Dawid Snyders:** food?  
**Marius Ciubotariu:** only pull out emergency is only meant for you can prove it it's fraud. It's like it's like us ragging the money, right? Like us like overriding the smart contracts. Yeah. Okay. You can take out you can take out 250k.  
**Anya Poltoratskaya:** But  
**Marius Ciubotariu:** Let's say you put 150k. Are you going to risk your reputation for 250k? You're going to get sued. You don't want that.  
**Anya Poltoratskaya:** are they going to like sign anything? Is there going to be like a legal procedure for this?  
**Marius Ciubotariu:** No, no, no. But like there you don't need to because lot of like your statements and the smart content they're already kind of like binding like everyone is reasonably understands what's happening here.  
**Dawid Snyders:** Okay, I understand what you mean.  
**Marius Ciubotariu:** There's no Yeah,  
**Dawid Snyders:** Yeah.  
**Marius Ciubotariu:** we can enforce it but we don't have to enforce it.  
   
 

### 00:10:08 {#00:10:08}

   
**Dawid Snyders:** Yeah. Well, I mean, I I think a two of two multisig for emergency withdrawals is is is probably worth doing,  
**Marius Ciubotariu:** Yeah,  
**Dawid Snyders:** right?  
**Marius Ciubotariu:** sure.  
**Dawid Snyders:** Okay. Well, then that's clear. Well, this is how I I framed it in the doc as well.  
**Marius Ciubotariu:** Sure.  
**Dawid Snyders:** I framed it as a as a as a as a insurance pool rather than a first loss capital thing because it's not really first loss. Um, yeah. So, this is how it's framed. I I think that's pretty clear then. And then the the the only thing we need to add is we we need to add the ability to initiate an emergency withdrawal. Okay,  
**Marius Ciubotariu:** Okay.  
**Dawid Snyders:** let's uh let's move on. Um what what is the yeah like what is the priority of this AI the AI project you want to do with the devs and how many devs have to be on it and like do do the devs just need to drop everything that they're doing right now and just work on this for like Yeah.  
   
 

### 00:11:16 {#00:11:16}

   
**Marius Ciubotariu:** Yeah, I mean it's high priority.  
**Anya Poltoratskaya:** higher than fixed rates borrow orders  
**Marius Ciubotariu:** Extremely high priority.  
**Anya Poltoratskaya:** first loss.  
**Dawid Snyders:** Manage vault.  
**Anya Poltoratskaya:** Yeah,  
**Dawid Snyders:** New  
**Marius Ciubotariu:** Uh, but this is like a it's like a it's like this should be a two-day thing basically  
**Dawid Snyders:** UI.  
**Anya Poltoratskaya:** it's going to be weeks and weeks thing according to the desk.  
**Marius Ciubotariu:** like No, no, no, no, no, no, no, no. The way it's going to work is um we put the the repo on like on auto autopilot like uh we spend like we just basically the the the whole point is the repo is u\*\*\*\*\*\*\*\* tested. Okay. So the if no matter if you put an AI agent to do anything, it can just like go in all directions and it it can like change things that it or like implement it in a bad way. Okay. Uh the because the repo is completely untested. The like the test coverage of the repository is 0.3%. So you want to be at 90\. So the whole point of this like AI thing that we're doing is I want to add basically like three three four more layers of testing from automatic testing to like AI testing to agents enforcing rules.  
   
 

### 00:12:28 {#00:12:28}

   
**Marius Ciubotariu:** So like any any code that enters this the the the the front the the any pull request that wants to happen is going to be like tested in like sever several several ways so that you can't f\*\*\* it up basically. So in that case then we can just like you Anna can create a pull request because it like it will block it from going in any f\*\*\*\*\*\* direction wrong direction. Um, so the the repo just has to be reinforced and there's like two-phase approach to it. The first phase is um we spend like four f\*\*\*\*\*\* weeks doing cleanup, which is what they do. They want that's what they want to do. They want to do like spend weeks doing cleanup which is fair but like or we put the guardrails at the beginning and the cleanup automatically happens because whenever new code enters it's already passing the guardrails and it can automatically you can like like push through various cleanup things and you can just set it on autopilot. So, um I was hoping this takes me like two days.  
   
 

### 00:13:34

   
**Marius Ciubotariu:** Me and Alex Bonin can basically um add all of our add like there's like six agents and like six features that I want to add to the repo. create one gigantic plan which I already have and then we just like send them in batches and like the code gets auto approved and pushed and um it's it's massively it's like hugely important because of course everything else is important but like it's like we have a car and we are which is the AI agents and instead of like starting the car we are pushing it from behind  
**Dawid Snyders:** Yeah. Yeah. No, I mean that the like I I I I'm happy to spend weeks on even if it if you're saying  
**Marius Ciubotariu:** Yeah.  
**Dawid Snyders:** it's two days, great. The point is that we have no idea what the scope is and we have no idea which devs need to be involved and we So it's not that like I  
**Marius Ciubotariu:** So this let me tell you what happened.  
**Dawid Snyders:** I  
**Marius Ciubotariu:** So basically I thought that everything was going to happen because I I told them f\*\*\*\*\*\* do it and I and I thought yep we're good to go.  
   
 

### 00:14:33

   
**Marius Ciubotariu:** And then after I talked to them, I I was asking for updates. After I talked to that, I realized that like not it wasn't happening the way I wanted it to happen.  
**Dawid Snyders:** Yeah.  
**Marius Ciubotariu:** Basically, they they were they want to do basically like a pay tech depth and like do cleanup. And this is an indefinite thing. You can keep you can pay tech depth for like weeks. You have you don't have an endgame. You don't know where you're going to end up.  
**Dawid Snyders:** Yeah.  
**Marius Ciubotariu:** And um I was really hope what I didn't know what I wanted to ask for like something show me what you and I didn't see a grand plan of anything because I I kept asking them and I just don't get it. So for me it seems like whatever was decided was like okay let's just all push the car from behind basically. So like uh power in his own time  
**Dawid Snyders:** Why? Why is this going so wrong?  
**Marius Ciubotariu:** doesn't  
**Dawid Snyders:** Why aren't they Why are they not able to take initiative?  
   
 

### 00:15:23 {#00:15:23}

   
**Dawid Snyders:** run with it. Build something that works and then it works. I don't  
**Marius Ciubotariu:** because I think because it's like there's no there's no throtten path of doing this yet.  
**Dawid Snyders:** understand.  
**Marius Ciubotariu:** Like I don't think there's very few people that still have figured this thing out and I don't know how many people are like obsessed with like AI uh things on Twitter and like see everything that happens all the time. I don't think Yeah. So I think it's still like a new thing and there's no path and I and also nobody has t taken the initiative or has been given the authority to the decide the direction. So like I think they all like pointing fingers at each other. Everyone's doing their own little thing. Nobody has been given you tell us how we f\*\*\*\*\*\* do it. Nobody has been given that. So alo all of them are like kind of like have are right but  
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** someone's like oh let's maybe let's talk a bit about it a bit more.  
   
 

### 00:16:17 {#00:16:17}

   
**Marius Ciubotariu:** Oh no I think we should do that and like nobody overrides anyone essentially.  
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** So there's like no dictator.  
**Dawid Snyders:** But you need you need to decide then who leads  
**Marius Ciubotariu:** Yeah. So that's what I did.  
**Dawid Snyders:** this.  
**Marius Ciubotariu:** I realize I know I will do it and me and Alex Boren will do it and then everyone else will have to follow and I hope the repers like a great shape in like two weeks but it will not require a lot of effort.  
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** I just wanted buy in from everyone and it will just it should just go on autopilot and I need to spend like a just like a few days on it and I spent yesterday on it. I really thought this was going to happen but like there's no plan. It's like five f\*\*\*\*\*\*  
**Dawid Snyders:** Yes, that is the issue.  
**Marius Ciubotariu:** or linear. That's not a plan.  
**Dawid Snyders:** Yeah.  
**Marius Ciubotariu:** there's like some like I like it's like like a hand wavy. So, um basically, yeah, that's why I I this is like a thing should happen and it's not so f\*\*\*\*\*\*  
   
 

### 00:16:57 {#00:16:57}

   
**Dawid Snyders:** Yeah.  
**Marius Ciubotariu:** hard, but someone has to decide and there's no correct way. Therefore, whatever way you choose has tradeoffs and everyone will say, "Oh, let's do it slower. Let's do MVP or let's do that." There's no right way, unfortunately. And the longer you wait, the more you wait until you f\*\*\*\*\*\* everyone has like unanimously agrees on a way, you will just like spend weeks and weeks yet again doing all sort like stepping on on on in the same direction.  
**Dawid Snyders:** Yeah.  
**Marius Ciubotariu:** So like not moving forward.  
**Dawid Snyders:** Okay. So,  
**Marius Ciubotariu:** So So I Yeah,  
**Dawid Snyders:** you and Alex Bon are going to do this.  
**Marius Ciubotariu:** me and do it.  
**Anya Poltoratskaya:** Okay. So the rest can continue on their  
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** No, but they will be given tasks.  
**Anya Poltoratskaya:** existing  
**Marius Ciubotariu:** They will be assigned tasks. Okay. So they will be assigned tasks from this grand plan and once a day or two times a day they will pick tasks from their assigned tasks let the AI agents on their laptops run it and push it and they will have to review other people's pull requests and approve them.  
   
 

### 00:18:04 {#00:18:04}

   
**Anya Poltoratskaya:** All right.  
**Marius Ciubotariu:** Okay, because basically uh the idea is that there's like there's like 3,000 files of code. There's 3,000 files and like so much spaghetti and uh bad patterns in the code. So there's like five six things that are big big things that are wrong and uh we have to like go fix them. But you don't want to fix something in one go because it's too much. So we will take one big thing split it in 20 small things review it one by one easily human reviewable approve approve approve merge and uh we've finished that one then we move on to the libraries like folder structure then we move on to like imports then we move on to like automatic test then we documentation so like there's like five six things that need to happen and each of them will have to like run but they will just have to let the AI do  
**Anya Poltoratskaya:** But you you're saying it should happen in a couple of days like  
**Marius Ciubotariu:** the the structure the whole like architecture of the thing should happen show up happen in a couple of days and then like pushing through the num the 100 tasks that will get created out of it should take like couple of  
   
 

### 00:19:16 {#00:19:16}

   
**Anya Poltoratskaya:** Yeah. Okay. Exactly.  
**Marius Ciubotariu:** weeks  
**Anya Poltoratskaya:** So, how many people and who specifically? So, just that we plan around  
**Marius Ciubotariu:** me it's going to be me Alex and Mark but they will not be full time on it.  
**Anya Poltoratskaya:** it.  
**Marius Ciubotariu:** They will just let the AI do it and they will have to review code.  
**Anya Poltoratskaya:** But that's what they now have to do on any project anyway.  
**Marius Ciubotariu:** Yeah.  
**Anya Poltoratskaya:** Yeah. So it's like it's it's their job now that that's how it looks right now.  
**Marius Ciubotariu:** But it's the it's their job.  
**Anya Poltoratskaya:** So  
**Marius Ciubotariu:** But the the problem is like things have changed like like doing two things before or doing doing before you could only do two things  
**Anya Poltoratskaya:** hey  
**Marius Ciubotariu:** like now you can do 10 things and like let the AI do it in parallel and like batch review multiple things. So like uh it's the same but not the same like yeah  
**Anya Poltoratskaya:** Okay. No, I didn't mean the same as before.  
**Marius Ciubotariu:** um  
   
 

### 00:20:16

   
**Anya Poltoratskaya:** I meant like now they don't write code anyway. Like they they ask AI and then they review it and  
**Marius Ciubotariu:** yeah but like you have to think of it like this like if you do not make an AI agent working while you're doing something else you are essentially wasting time because you can paralyze yourself in Like you can really work have 10 agents working for you in parallel.  
**Anya Poltoratskaya:** Yep.  
**Marius Ciubotariu:** If you have five, you are actually like unproductive. You can have 10\. So they will have to yeah they will have to like take on some some like organizational responsibilities. I'll I'll talk to Alex and Paul and they don't have to make many decisions. I just want their buy in.  
**Anya Poltoratskaya:** Okay. Um, sounds good. So, from stuff that we need to release ASAP and that actually concerns Paul, which is borrow orders, right? So, we are waiting for for a link to test that in fraud. By when? Like do you want this released like tomorrow or and is there someone waiting for this specifically or we just need to release it and that's the  
   
 

### 00:21:29 {#00:21:29}

   
**Marius Ciubotariu:** Yeah, I think we won this. Uh I want we want this soon.  
**Anya Poltoratskaya:** whole  
**Marius Ciubotariu:** Um like really soon basically. Um, tomorrow is not a I can't  
**Dawid Snyders:** Who who who exactly wants to open up the B  
**Marius Ciubotariu:** really  
**Dawid Snyders:** order?  
**Marius Ciubotariu:** um I think the Panta can do it example or  
**Anya Poltoratskaya:** But do they want to like is it something they're waiting  
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** ask  
**Dawid Snyders:** Yeah.  
**Anya Poltoratskaya:** for?  
**Dawid Snyders:** Well, Pant Pantio wants to do it because Pant off borrow. So they they don't want to wait until we finally say, "Okay, the curators are ready to allocate now and then Pur." So they just want to  
**Marius Ciubotariu:** Yeah.  
**Dawid Snyders:** they just want to Yeah.  
**Marius Ciubotariu:** Yeah.  
**Dawid Snyders:** Exactly. Yeah. So, so we we we basically want to um launch like  
**Marius Ciubotariu:** Yeah.  
**Dawid Snyders:** get it live so that Pantera can go and place a borrow order in their offchain collateral market against their Anchorage Custo and the curators can then allocate into market and then that order will  
   
 

### 00:22:39 {#00:22:39}

   
**Marius Ciubotariu:** allocators will see the list.  
**Dawid Snyders:** fill.  
**Marius Ciubotariu:** Do we have like a list of borrow orders? Outstanding borrow orders.  
**Dawid Snyders:** No, I haven't I haven't made the UI. Do you want Do do we want that?  
**Marius Ciubotariu:** Would be nice to have that.  
**Dawid Snyders:** Okay.  
**Marius Ciubotariu:** Yeah. I don't know how hard it is,  
**Dawid Snyders:** Okay. Uh,  
**Marius Ciubotariu:** but it would be nice to have to show.  
**Dawid Snyders:** it should be very easy. It should be easy.  
**Marius Ciubotariu:** Yeah.  
**Dawid Snyders:** Okay. I'll uh  
**Marius Ciubotariu:** Let them place the order. let them place order and then we will tell the creators,  
**Dawid Snyders:** I'll  
**Marius Ciubotariu:** hey, this guy has placed an order.  
**Anya Poltoratskaya:** Um,  
**Marius Ciubotariu:** Um, can you deposit and we'll see how it gets filled. We don't need them, but uh yeah. Do you see do you see your own borrow orders?  
**Dawid Snyders:** Yes.  
**Marius Ciubotariu:** Okay. So then we will just take a screenshot of that and send them and see how much is available now.  
   
 

### 00:23:21 {#00:23:21}

   
**Marius Ciubotariu:** Now see now you allocate them get filled. Now you allocate them gets filled.  
**Dawid Snyders:** Yeah. Okay. So, we we don't need to um we don't need to create UI for it for  
**Marius Ciubotariu:** No.  
**Dawid Snyders:** now.  
**Anya Poltoratskaya:** what about notifications?  
**Marius Ciubotariu:** Yeah,  
**Anya Poltoratskaya:** Like notifying when your work order was filled or partially filled.  
**Dawid Snyders:** Uh I haven't been added to the UI captions.  
**Marius Ciubotariu:** we should do that. Yeah.  
**Dawid Snyders:** Okay, we want that. Okay, I'll add a flow for that.  
**Marius Ciubotariu:** Yeah,  
**Dawid Snyders:** That's that's a simple one. Okay,  
**Anya Poltoratskaya:** Cool.  
**Dawid Snyders:** cool.  
**Marius Ciubotariu:** I can do it. It's very easy to print.  
**Anya Poltoratskaya:** Cool.  
**Dawid Snyders:** Say again.  
**Marius Ciubotariu:** It's easy to implement  
**Dawid Snyders:** Yeah,  
**Marius Ciubotariu:** notification.  
**Dawid Snyders:** I just need to make the the UI work.  
**Anya Poltoratskaya:** Right. Okay. So, just quickly running through this first US capital.  
**Marius Ciubotariu:** Yeah.  
**Anya Poltoratskaya:** We discussed uh white listed reserves from what I understood is ready.  
   
 

### 00:24:18 {#00:24:18}

   
**Marius Ciubotariu:** Or at least it is. Yeah.  
**Anya Poltoratskaya:** Do we uh do we want to launch  
**Dawid Snyders:** Well,  
**Marius Ciubotariu:** Uh do we want to launch this?  
**Dawid Snyders:** this is this this comes back to what I've seen to  
**Anya Poltoratskaya:** this?  
**Marius Ciubotariu:** These all of these things can be like soft launched.  
**Dawid Snyders:** you.  
**Marius Ciubotariu:** You can just soft launch these and because they all require  
**Dawid Snyders:** Yeah, but man, yeah, that that is the thing.  
**Marius Ciubotariu:** the  
**Dawid Snyders:** But I mean it's one thing to to get it to launch it soft launch quote unquote but there is the marketing angle as well where we want to announce we have this new security  
**Marius Ciubotariu:** Yes.  
**Dawid Snyders:** feature and  
**Marius Ciubotariu:** Yeah. Yeah. So what you do Yeah. So what you do is you basically like um you  
**Dawid Snyders:** XYZ  
**Marius Ciubotariu:** basically put it under release the whole thing put under feature flag. Okay. And then once the feature flag is enabled once has allocated the back and see what it looks like on then we just switch off on this is like a multi release right like you have to the curator has to do with it has to be there. Just put put the feature flag make them do it once we have three people on then  
**Dawid Snyders:** We can  
**Marius Ciubotariu:** um just turn the feature  
**Dawid Snyders:** announce. Yeah. Okay.  
**Marius Ciubotariu:** yeah essentially what I'm saying  
**Dawid Snyders:** Okay. So, we we need  
**Marius Ciubotariu:** is the code and the release don't they're not they're not they're not they shouldn't be  
**Dawid Snyders:** to  
**Marius Ciubotariu:** coupled you can release the code and put it all under a feature flag QA it with the feature  
**Anya Poltoratskaya:** Okay.  
**Marius Ciubotariu:** flag on when you have and then that's it the devs are done and then you and then you coordinate the market with the with the participants. They allocate, they all set on everything looks good and you should happy. Then you queue it and then you say you see the future flag off and then you announce on Twitter. Exactly. Yeah.  
   
 

### Transcription ended after 00:26:45

*This editable transcript was computer generated and might contain errors. People can also change the text after it was created.*