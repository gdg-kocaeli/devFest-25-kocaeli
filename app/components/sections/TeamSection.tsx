import ProfileCard from '../ui/ProfileCard';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "M. Halil",
      surname: "Akkaynak",
      title: "Organizer",
      linkedin: "https://www.linkedin.com/in/muhammed-halil-akkaynak/",
      twitter: "https://twitter.com/mhakkaynak",
      image: "/organizer-mha.png"
    },
    {
      name: "Ecem",
      surname: "Yalçın",
      title: "Organizer",
      linkedin: "https://www.linkedin.com/in/ecem-yalcin/",
      image: "/organizer-ey.jpeg"
    },
  ];

  return (
    <section id="team" className="py-2 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Ekibimiz
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <ProfileCard
              key={index}
              name={member.name}
              surname={member.surname}
              title={member.title}
              linkedin={member.linkedin}
              twitter={member.twitter}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}