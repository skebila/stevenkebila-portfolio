
import { motion } from 'framer-motion';

const AboutSection = () => {
  const skills = [
    '.NET Core', 'React', 'TypeScript', 'Node.js',
    'PostgreSQL', 'MongoDB', 'Docker', 'AWS',
    'Firebase', 'Git', 'VS Code', 'Postman',
    'Redux', 'GraphQL', 'Microservices', 'CI/CD'
  ];

  return (
    <section className="py-20 bg-dark-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Bio Section */}
          <div>
            <h2 className="text-4xl font-space font-bold mb-8 text-text-primary">
              About
            </h2>
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                Senior Full Stack Developer with 4+ years of experience building scalable 
                web applications and robust backend systems. Specialized in creating clean, 
                maintainable code that bridges the gap between complex business requirements 
                and elegant user experiences.
              </p>
              <p>
                Led development teams in architecting microservices, implementing CI/CD pipelines, 
                and optimizing application performance. Passionate about code quality, system 
                design, and staying current with emerging technologies.
              </p>
              <p>
                When not coding, I contribute to open-source projects and mentor junior developers 
                in modern web development practices.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-space font-semibold mb-8 text-text-primary">
              Skills & Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="skill-tile bg-dark-bg p-4 text-center"
                >
                  <span className="text-text-primary font-medium text-sm">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
