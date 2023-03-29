import React from 'react'
import './disclamer.scss'

const Disclamer = () => {
  return (
    <div className='disclamer-div'>
        <h1 className='disclamer1-title'>Disclamer</h1>
        <div className='disclamer1-div'>
            <h2 className='disclamer-title'>It's about protecting women, not judging men</h2>
            <p className='disclamer-text'>We're here for personal experiences and stories. Not judgement. 
                Don’t review on any guy unless you have personal experience with them or relevant information about them. 
                Don't make posts reviews based on a guy’s looks, attire, name, age, or occupation. 
                Don’t make posts or reviews to make fun of men, crack jokes about anyone posted, 
                or speculate on posts about men you don’t know. 
                Don't react at posts about men that aren’t specifically meant to be funny. 
                Violate any of these and you will be banned.</p>
        </div>

        <div className='disclamer1-div'>
            <h2 className='disclamer-title'>No Label or defamation of character</h2>
            <p className='disclamer-text'>No false information about anyone will be tolerated. 
                Please be prepared to show proof of anything you state about any individual. 
                You are posting at your own risk. If you don't have any proof of allegations you make against someone in this group,
                you are in danger of being sued for libel and/or defamation. 
                Do not post speculation or assumptions about anyone posted here, 
                especially is you don't personally know them. We do not accept any responsibility for anything 
                you post or comment here</p>
        </div>
        <div className='disclamer1-div'>
            <h2 className='disclamer-title'>Be civil, respectful, inclusive and patitent</h2>
            <p className='disclamer-text'>We understand that you may not agree with a person's opinion,
                life choices, preferences, etc. If you can’t word that disagreement in a civil and respectful way, 
                don’t say anything at all. Do not push your views on other members, even if you think they're wrong. 
                Other women have different preferences in men than you. Respect them. 
                In this group we consider unsolicited advice to be rude. 
                If someone is mean or breaks a rule, report it and disengage. 
                Arguing back risks removal for both of you.</p>
        </div>
        <div className='disclamer1-div'>
            <h2 className='disclamer-title'>Don't screenshot or share anything</h2>
                <ul className='disclamer-text'>You will be permanently blocked from this group and all affiliated groups if you: 
                    <li>Tell any men about them being posted in this group -Share anything posted in this group outside of this group</li> 
                    <li>Mention this group or the existence of groups like this on social media, on a podcast, on the radio, to the media, 
                    or anywhere else public. We do all we can, but there is always risk in speaking up.</li>
                    <li>Be mentally prepared for the possibility that things you say here may get back to who you wrote about. </li>
                </ul>
        </div>

        <div className='disclamer1-div'>
            <h2 className='disclamer-title'>No personal or contact information</h2>
            <p className='disclamer-text'>No posting or texting any last names, social media handles, 
                phone numbers, addresses, or any other personal information that would make it possible for anyone to 
                look up or contact someone posted about without having previously known them. Vague work titles are ok,
                but not exact employers. Including a first name helps others more easily search the group,
                but no personal information is allowed. Recklessly saying contact information 
                greatly increases the chances that the post will leak and you sued.</p>
       </div>
    </div>
  )
}

export default Disclamer