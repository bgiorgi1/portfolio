import classes from './Skills.css'
import "./Skills.css"

const ListTitleStyle = { fontweight:900, color: '#9B1FE8', marginBottom: '4px'}

const backendSkills = 
<ul>
<li style={ListTitleStyle}>BACKEND</li>
<li>SQL</li>
<li>Node.js - Express - MongoDB</li>
</ul>

const frontendSkills = 
<ul>
<li>FRONTEND</li>
<li>React</li>
<li>Node.js - Express - MongoDB</li>
</ul>

const otherSkills = 
<ul>
<li>OTHER</li>
<li>React</li>
<li>GIT - XML - Json</li>
</ul>

const totalSkills = [backendSkills, frontendSkills, otherSkills ]

const Skills = () => {
    return (
        <div>
            <h1>SKILLS</h1>
            <p>THis is text about my skills</p>
            <div className={classes.Container}>
            {totalSkills.map(skills => {
                return (
        <div className={classes.List}>
        {skills}
        </div>
                )
    })}
            </div>
        </div>
        );
        }
       
export default Skills