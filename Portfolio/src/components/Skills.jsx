import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import tailwine from '../assets/tailwine.png'
import framer_motion from '../assets/framer_motion.png'

function Skills({ darkMode }) {
    const skills = [
        { name: 'HTML', icon: html, level: 80, color: 'from-orange-500 to-amber-500' },
        { name: 'CSS', icon: css, level: 70, color: 'from-orange-500 to-amber-500' },
        { name: 'JavaScript', icon: js, level: 70, color: 'from-orange-500 to-amber-500' },
        { name: 'React', icon: react, level: 70, color: 'from-orange-500 to-amber-500' },
        { name: 'Tailwind CSS', icon: tailwine, level: 50, color: 'from-orange-500 to-amber-500' },
        { name: 'Framer Motion', icon: framer_motion, level: 50, color: 'from-orange-500 to-amber-500' },
    ]

    return (
        <section
            id='skills'
            className={`py-20 relative transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
        >
            <div className='container px-6 mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-16' data-aos='fade-up'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 transition-colors duration-300'
                        style={{ color: darkMode ? 'white' : '#111827' }}>
                        My <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Skills</span>
                    </h1>
                    <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        A mix of frontend technologies I use to build modern and responsive web applications.
                    </p>
                </div>

                {/* Skills Grid */}
                {/* CHANGED: Adjusted grid for better responsiveness: 1 col on mobile, 2 on tablet, 3 on small laptop, 4 on desktop */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' data-aos='fade-up' data-aos-delay='200'>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            data-aos='fade-up'
                            data-aos-delay={`${100 + index * 50}`}
                            className="group"
                        >
                            <div
                                className={`h-full p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 
                                ${darkMode 
                                    ? 'bg-gray-800/50 border-gray-700 hover:border-orange-500/50 shadow-xl' 
                                    : 'bg-white border-gray-200 hover:border-orange-500/50 shadow-md'} 
                                hover:shadow-orange-500/10`}
                            >
                                <div className='flex items-center mb-6'>
                                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl p-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110
                                        ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className='w-full h-full object-contain'
                                        />
                                    </div>

                                    <h3 className={`text-xl sm:text-2xl font-bold ml-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                        {skill.name}
                                    </h3>
                                </div>

                                <div className='mb-2 flex justify-between items-center'>
                                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                        Proficiency
                                    </span>
                                    <span className='font-bold text-orange-500'>
                                        {skill.level}%
                                    </span>
                                </div>

                                {/* Progress Bar Container */}
                                <div className={`w-full rounded-full h-2.5 overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                    <div
                                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>

                                {/* Decorative Line */}
                                <div className={`mt-6 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                    <div className='h-1 rounded-full opacity-70 group-hover:w-full transition-all duration-500 w-1/4 bg-gradient-to-r from-orange-500 to-amber-500'></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills