export default function Leadership() {
  const activities = [
    {
      date: "Spring 2023",
      description: "Outstanding Student at the level of my college in the scientific day of the college.",
    },
    {
      date: "Spring 2024",
      description: "Winner of fifth place in presenting my project in the competition",
    },
    {
      date: "Spring 2024",
      description: "Led chapter of 4 members to work towards goals that improve and promote community service",
    },
  ]

  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Leadership & Extracurricular</h2>
        <div className="max-w-4xl mx-auto">
          {activities.map((activity, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{activity.date}</h3>
              <p className="text-gray-700">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
