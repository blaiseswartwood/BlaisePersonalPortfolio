import { motion } from 'framer-motion';

import { profileFacts } from '../constants/about';

const ProfileFacts = () => (
  <section className="profile-facts mt-14" aria-label="Personal background">
    {profileFacts.map((fact, index) => (
      <motion.article
        key={fact.title}
        className="profile-fact"
        style={{ '--profile-accent': fact.accent }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="profile-fact__index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <p className="profile-fact__eyebrow">{fact.eyebrow}</p>
        <h3>{fact.title}</h3>
        <p className="profile-fact__description">{fact.description}</p>
      </motion.article>
    ))}
  </section>
);

export default ProfileFacts;