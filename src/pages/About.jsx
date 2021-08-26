import * as React from 'react';
import Typical from 'react-typical'

export const About = () => {
    return (
        <div className="about">
            <h3> About me</h3>
            <div className="typical">
                <p>I am {' '}

                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'creative',
                        1000,
                        'fast-learner',
                        1000,
                        'good at googling',
                        1000,
                        'meticulous',
                        1000,
                        'problem-solving',
                        1000,
                        'flexible',
                        1000,
                        'self-motivated',
                        1000,
                    ]}
                    />
                </p>
            </div>
            <div className="story-description">
                <p> I was ready for a new challenge, so I decided to make a career change and I found out that my old passion for technology was still there. Currently I am part of a feminine <b>Bootcamp</b> at <b>Factoria F5</b> preparing to be a <b>Full Stack Developer</b>. Being a creative, flexible and problem-solving person helps me adapt easily in constantly changing projects where I work perfectly with my team. In this bootcamp I learnt the <b>Agile</b> methodology which made me work more organized using <b>Kanban</b> or <b>Trello</b>. I am a self-motivated person, I learn quickly and I am willing to take training courses if necessary. I have junior level skills in: <b>HTML 5, CSS, Javascript, React</b> (using Node.js to easily build fast and scalable network applications) <b> Java </b> (using frameworks like Spring and tools like PostgreSQL and Gradle) and working with platforms like <b>Docker</b> and <b>Heroku</b>.</p>

            </div>
        </div>

    )
}