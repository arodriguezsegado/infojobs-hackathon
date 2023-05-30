const placeholder = 
`Por favor, copia y pega el contenido de tu currículum aquí. Puedes obtener el texto de tu currículum desde un archivo PDF u otro archivo de texto. Por ejemplo:

alejandrors13091993@gmail.com · (34) 653 02 38 80 · /in/arodriguezsegado/
ALEJANDRO VICENTE RODRÍGUEZ SEGADO
JUNIOR SOFTWARE DEVELOPER
Enthusiastic about learning and continuous training. Proactive, curious and committed. Currently
training and developing projects in React but open to learn any technology.
WORK EXPERIENCE
Sharepoint Analyst at Minsait
January 2023 - Present
Achievements
● Optimizing automatic processes developed with Azure Functions.
● Applying good practices to developed code to improve its readability.
● Improving my communication skills with clients and with my team.
Full Stack Developer at GBeasts
November 2022 - January 2023
Achievements
● Was developing a platform to see your league of legends stats.
Computer technician at Tesis Sistemas de Gestión, S. L.
December 2021 - November 2022
Achievements
● Upgraded my team and communication skills working as a help-desk technician to resolve
customer issues.
COURSES
React: From zero to expert (Hooks and MERN) at Udemy
August 2022 - Present
Achievements
● Developed an application which gets gifs from GIPHY API using React Functional
Components, hooks, custom hooks, prop-types, clean code tips, unit test with jest and others.
The app has been deployed in Github Pages and Netifly.
https://arodriguezsegado.github.io/react-gif-expert/
● Developed a SPA which lists heroes from Marvel and DC using Route Protection and React
Route v6. Tested with jest focused on route navigation.
● Developing a journal app using everything learned during the course and MUI, Redux and
others.
Building Web APIs RESTful with ASP.NET Core 6 at Udemy
September 2022 - Present
Achievements
● Learning the fundamentals of ASP.NET Core and Web API.
EDUCATION
Computer Engineering at University of Alicante
September 2017 - July 2022
Achievements
● Learned about OOP programming, data structures and algorithms.
● Learned how to extract requirements from practical assumptions to design entity-relationship
diagrams.
● Learned how to test with white box and black box techniques. The importance of testing.
Testing web applications with Selenium and JMeter.
● Developed an application to buy and sell cars with a five people team using Microsoft Visual
Studio, C#, .Net, Model-view-controller pattern and git.
● Developed an application as Udemy with a five people team using Laravel.
● Resolved programming challenges applying algorithmic strategies which guaranteed the best
performance.
SKILLS
● Team player
● JavaScript
● HTML
● CSS
● Object-Oriented
Programming (OOP)
● React Functional
Components
● Hooks
● React Route v6
● Jest
● Adaptability
LANGUAGES
Spanish and English (B1)`

export const CopyAndPaste = ({ setResume }: { setResume: any }) => {
    return (
        <div className="w-full md:w-4/5 mx-auto">
            <textarea
                maxLength={2579}
                rows={20} 
                className="w-full p-4 text-sm text-gray-900 bg-white border-0 focus:ring-0" 
                placeholder={placeholder}
                required
                onChange={ e => setResume(e.target.value) }
                spellCheck="false"
            >
            </textarea>
        </div>
    )
}