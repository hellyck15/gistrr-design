import React, { useState } from 'react';
import "./App.css";

export default function Card() {
    const [selectedButton, setSelectedButton] = useState(0);

    const cardContents = [
        {
            title: "Power of Circadian Rhythms",
            author: "Jack Davidson",
            description: "Gary sheds light on how aligning your lifestyle with your circadian rhythms can significantly impact your health, sleep quality, and metabolic health. Consistency in bedtime, exposure to natural light, and eating at regular times all play a crucial role in optimizing your well-being.",
            episode: "The Ultimate Human with Gary Brecka",
            steps: "Circadian Rhythm Reset | Steps to Improve Sleep, Metabolism, and Mental Health with Gary Brecka",
            videoImage: "./video2.png"
        },
        {
            title: "Morning Sunlight Benefits",
            author: "Author 2",
            description: "Andrew explains the benefits of morning sunlight viewing and how it affects our physiology. Sunlight is the most powerful stimulus for wakefulness throughout the day and has a positive impact on our ability to fall and stay asleep at night. Artificial lights can replace sunlight before the sun is out, bu",
            episode: "Huberman Lab",
            steps: "Sleep Toolkit: Tools for Optimizing Sleep & Sleep-Wake Timing | Huberman Lab Podcast #84",
            videoImage: "./video1.png"
        },
        {
            title: "The Impact of Circadian Rhythm",
            author: "Author 3",
            description: "Discover the profound effects of circadian rhythm on neurotransmitters, biochemical processes, hormones, and overall physiological function. Learn how optimizing this one lever can have a beneficial impact on brain health, mitochondria health, gut health, immune health, body composition, ",
            episode: "The Human Upgrade",
            steps: "How to Double Your Energy | Ari Whitten | 934 | Dave Asprey",
            videoImage: "./video3.png"
        }
    ];

    const handleButtonClick = (index) => {
        setSelectedButton(index);
    };

    return (
        <>
            <div className="cardd">
                <div className="info">
                    <h3>{cardContents[selectedButton].title}</h3>
                    <div className="author">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
                        {cardContents[selectedButton].author}
                    </div>
                    <br />
                    {cardContents[selectedButton].description}
                    <div className="div2">
                        <div className="image"></div>
                        <div className="heading">
                            {cardContents[selectedButton].episode}
                            <div className="con">{cardContents[selectedButton].steps}</div>
                        </div>
                    </div>
                    <hr />
                    <div className="topic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                        </svg>
                        Explore similar conversations
                    </div>
                    <br />
                    <div className="topic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                        </svg>
                        View full episode summary
                    </div>
                </div>

                <div className="video" style={{ backgroundImage: `url(${cardContents[selectedButton].videoImage})` }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="grey" class="bi bi-youtube" viewBox="0 0 16 16">
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                </div>
            </div>

            <div className="cardnumber">
                {['1', '2', '3'].map((number, index) => (
                    <div
                        key={index}
                        className="btnn"
                        style={{
                            backgroundColor: selectedButton === index ? 'rgb(162, 118, 228)' : 'rgb(242, 234, 254)',
                            color: selectedButton === index ? 'white' : 'black',
                        }}
                        onClick={() => handleButtonClick(index)}
                    >
                        {number}
                    </div>
                ))}
            </div>
            
        </>
    );

}
